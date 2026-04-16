/**
 * Generate Formie v3 JSON exports for all assessments + symptom checker.
 *
 * Usage:  npx tsx scripts/generate-formie-exports.ts
 * Output: formie-exports/*.json
 */

import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

// ── Import assessment configs ───────────────────────────────────────
import { chlamydia } from "../lib/assessments/chlamydia";
import { gonorrhea } from "../lib/assessments/gonorrhea";
import { syphilis } from "../lib/assessments/syphilis";
import { hiv } from "../lib/assessments/hiv";
import { herpes } from "../lib/assessments/herpes";
import { hpv } from "../lib/assessments/hpv";
import { pid } from "../lib/assessments/pid";
import { bacterialVaginosis } from "../lib/assessments/bacterial-vaginosis";
import { uti } from "../lib/assessments/uti";
import { yeastInfection } from "../lib/assessments/yeast-infection";
import { symptomChecker } from "../lib/symptom-checker";

import type { AssessmentConfig } from "../lib/assessments/types";
import type { SymptomCheckerConfig } from "../lib/symptom-checker/types";

// ── Constants from the Chlamydia template ───────────────────────────

const FORM_SETTINGS = '{"displayFormTitle":false,"displayCurrentPageTitle":false,"displayPageTabs":false,"displayPageProgress":false,"scrollToTop":false,"progressPosition":"end","progressValuePosition":"inside-center","defaultLabelPosition":"verbb\\\\formie\\\\positions\\\\AboveInput","defaultInstructionsPosition":"verbb\\\\formie\\\\positions\\\\AboveInput","requiredIndicator":"asterisk","submitMethod":"ajax","submitAction":"message","submitActionTab":null,"submitActionUrl":null,"submitActionFormHide":false,"submitActionMessage":"[{\\"type\\":\\"paragraph\\",\\"attrs\\":{\\"textAlign\\":\\"start\\"},\\"content\\":[{\\"type\\":\\"text\\",\\"text\\":\\"Submission saved.\\"}]}]","submitActionMessageTimeout":null,"submitActionMessagePosition":"top-form","loadingIndicator":null,"loadingIndicatorText":null,"validationOnSubmit":true,"validationOnFocus":false,"errorMessage":"[{\\"type\\":\\"paragraph\\",\\"attrs\\":{\\"textAlign\\":\\"start\\"},\\"content\\":[{\\"type\\":\\"text\\",\\"text\\":\\"Couldn\\u2019t save submission due to errors.\\"}]}]","errorMessagePosition":"top-form","requireUser":false,"requireUserMessage":"[{\\"type\\":\\"paragraph\\",\\"attrs\\":{\\"textAlign\\":\\"start\\"}}]","scheduleForm":false,"scheduleFormStart":null,"scheduleFormEnd":null,"scheduleFormPendingMessage":"[{\\"type\\":\\"paragraph\\",\\"attrs\\":{\\"textAlign\\":\\"start\\"}}]","scheduleFormExpiredMessage":"[{\\"type\\":\\"paragraph\\",\\"attrs\\":{\\"textAlign\\":\\"start\\"}}]","limitSubmissions":null,"limitSubmissionsNumber":null,"limitSubmissionsType":"total","limitSubmissionsMessage":"[{\\"type\\":\\"paragraph\\",\\"attrs\\":{\\"textAlign\\":\\"start\\"}}]","limitSubmissionsIpAddressNumber":null,"limitSubmissionsIpAddressType":"total","limitSubmissionsIpAddressMessage":"[{\\"type\\":\\"paragraph\\",\\"attrs\\":{\\"textAlign\\":\\"start\\"}}]","integrations":[],"submissionTitleFormat":"{timestamp}","collectIp":false,"collectUser":false,"dataRetention":null,"dataRetentionValue":null,"fileUploadsAction":null,"redirectUrl":null,"pageRedirectUrl":null,"defaultEmailTemplateId":null,"disableCaptchas":false}';

const PAGE_SETTINGS = {
  submitButtonLabel: "Submit",
  backButtonLabel: "Back",
  showBackButton: false,
  saveButtonLabel: "Save",
  showSaveButton: false,
  saveButtonStyle: "link",
  buttonsPosition: "left",
  cssClasses: null,
  containerAttributes: null,
  inputAttributes: null,
  enableNextButtonConditions: false,
  nextButtonConditions: [],
  enablePageConditions: false,
  pageConditions: [],
  enableJsEvents: false,
  jsGtmEventOptions: [],
};

// ── Helpers ─────────────────────────────────────────────────────────

const LETTERS = "abcdefghijklmnopqrstuvwxyz";

/** Short slug prefix per condition for unique field handles */
const CONDITION_PREFIX: Record<string, string> = {
  "Chlamydia": "chlamydia",
  "Gonorrhea": "gonorrhea",
  "Syphilis": "syphilis",
  "HIV": "hiv",
  "Herpes": "herpes",
  "HPV": "hpv",
  "PID": "pid",
  "BV": "bv",
  "UTI": "uti",
  "Yeast Infection": "yeast",
};

/** Generate unique field handle: {condition}_{number} */
function fieldHandle(prefix: string, questionId: number): string {
  return `${prefix}_${questionId}`;
}

/** Generate a random Formie condition ID like "new1234-5678" */
function randomConditionId(): string {
  const a = Math.floor(1000 + Math.random() * 9000);
  const b = Math.floor(1000 + Math.random() * 9000);
  return `new${a}-${b}`;
}

// ── Field generators ────────────────────────────────────────────────

interface FieldOptions {
  label: string;
  handle: string;
  required: boolean;
  options: { label: string; value: string; isDefault: boolean }[];
  type: "radio" | "checkboxes";
  conditions?: {
    showRule: string;
    conditionRule: string;
    conditions: { id: string; field: string; condition: string; value: string }[];
  };
}

function makeRadioField(opts: FieldOptions) {
  return {
    type: "verbb\\formie\\fields\\Radio",
    settings: {
      label: opts.label,
      handle: opts.handle,
      instructions: null,
      required: opts.required,
      layout: "vertical",
      enabled: true,
      matchField: null,
      placeholder: null,
      defaultValue: null,
      prePopulate: null,
      errorMessage: null,
      labelPosition: null,
      instructionsPosition: null,
      cssClasses: null,
      containerAttributes: [],
      inputAttributes: [],
      includeInEmail: false,
      emailValue: "label",
      enableConditions: !!opts.conditions,
      conditions: opts.conditions ?? null,
      enableContentEncryption: false,
      visibility: null,
      options: opts.options,
      multi: false,
    },
  };
}

function makeCheckboxesField(opts: FieldOptions) {
  return {
    type: "verbb\\formie\\fields\\Checkboxes",
    settings: {
      label: opts.label,
      handle: opts.handle,
      instructions: null,
      required: opts.required,
      multi: true,
      layout: "vertical",
      toggleCheckbox: null,
      toggleCheckboxLabel: null,
      limitOptions: false,
      min: null,
      max: null,
      enabled: true,
      matchField: null,
      placeholder: null,
      defaultValue: null,
      prePopulate: null,
      errorMessage: null,
      labelPosition: null,
      instructionsPosition: null,
      cssClasses: null,
      containerAttributes: [],
      inputAttributes: [],
      includeInEmail: false,
      emailValue: "label",
      enableConditions: !!opts.conditions,
      conditions: opts.conditions ?? null,
      enableContentEncryption: false,
      visibility: null,
      options: opts.options,
    },
  };
}

// ── Assessment form generation ──────────────────────────────────────

/**
 * Maps describing which assessments have pregnancy questions conditional
 * on sex/gender. Format: { assessmentSlug: { pregnancyQuestionId, sexGenderQuestionId, womanOptionIndex, preferNotToSayOptionIndex } }
 */
interface PregnancyConditional {
  pregnancyQId: number;
  sexGenderQId: number;
  /** Indices of the "woman"/"female" and "prefer not to say" options in the sex/gender question */
  showForOptionIndices: number[];
}

const PREGNANCY_CONDITIONALS: Record<string, PregnancyConditional> = {
  chlamydia: { pregnancyQId: 4, sexGenderQId: 1, showForOptionIndices: [0, 3] }, // Woman=a, Prefer=d
  syphilis: { pregnancyQId: 4, sexGenderQId: 1, showForOptionIndices: [2, 3] }, // Woman=c, Prefer=d
  hiv: { pregnancyQId: 2, sexGenderQId: 1, showForOptionIndices: [3, 4] }, // Woman=d, Prefer=e
};
// Herpes Q3 pregnancy has no sex/gender to condition on (no sex/gender question)
// BV Q2 pregnancy has no sex/gender question (BV is women-focused)
// UTI/Yeast embed pregnancy in medical conditions multi-select — no standalone conditional

function generateAssessmentForm(config: AssessmentConfig): object {
  const conditionName = config.shortName;
  const prefix = CONDITION_PREFIX[conditionName] ?? conditionName.toLowerCase().replace(/[^a-z0-9]/g, "");
  const formHandle = `assessments${conditionName.replace(/[^a-zA-Z0-9]/g, "")}`;
  const formTitle = `Assessments - ${config.condition}`;

  const rows = config.questions.map((q) => {
    const handle = fieldHandle(prefix, q.id);

    const options = q.options.map((opt, i) => ({
      label: opt.label,
      value: `${LETTERS[i]}_${opt.points}`,
      isDefault: false,
    }));

    // Check if this question needs a pregnancy conditional
    const slugKey = Object.keys(PREGNANCY_CONDITIONALS).find(
      (k) => PREGNANCY_CONDITIONALS[k].pregnancyQId === q.id && config.slug.includes(k),
    );
    let conditions: FieldOptions["conditions"] = undefined;

    if (slugKey) {
      const pc = PREGNANCY_CONDITIONALS[slugKey];
      const sexGenderHandle = fieldHandle(prefix, pc.sexGenderQId);
      const sexGenderQ = config.questions.find((qq) => qq.id === pc.sexGenderQId);
      if (sexGenderQ) {
        conditions = {
          showRule: "show",
          conditionRule: "any",
          conditions: pc.showForOptionIndices.map((idx) => ({
            id: randomConditionId(),
            field: `{field:${sexGenderHandle}}`,
            condition: "=",
            value: `${LETTERS[idx]}_${sexGenderQ.options[idx].points}`,
          })),
        };
      }
    }

    const fieldOpts: FieldOptions = {
      label: q.question,
      handle,
      required: true,
      options,
      type: q.type === "single" ? "radio" : "checkboxes",
      conditions,
    };

    const field =
      q.type === "single" ? makeRadioField(fieldOpts) : makeCheckboxesField(fieldOpts);

    return { fields: [field] };
  });

  return {
    handle: formHandle,
    settings: FORM_SETTINGS,
    submitActionEntryId: null,
    submitActionEntrySiteId: null,
    defaultStatusId: 1,
    dataRetention: "forever",
    dataRetentionValue: null,
    userDeletedAction: "retain",
    fileUploadsAction: "retain",
    title: formTitle,
    notifications: [],
    pages: [
      {
        label: "Page 1",
        settings: PAGE_SETTINGS,
        rows,
      },
    ],
    exportVersion: "v3",
  };
}

// ── Symptom checker form generation ─────────────────────────────────

function generateSymptomCheckerForm(config: SymptomCheckerConfig): object {
  const prefix = "stdChecker";
  const formHandle = "assessmentsStdSymptomChecker";
  const formTitle = "Assessments - STD Symptom Checker";

  const rows = config.questions.map((q) => {
    const handle = fieldHandle(prefix, q.id);

    // Symptom checker uses client-side scoring via calculateSymptomCheckerResults().
    // Option values just need to be unique identifiers — use simple {letter}_{index}.
    const options = q.options.map((opt, i) => ({
      label: opt.label,
      value: `${LETTERS[i]}_${i}`,
      isDefault: false,
    }));

    // Pregnancy conditional for symptom checker Q3 (id: 3)
    // Show when Q1 sex/gender = "Woman" (a) or "Prefer not to say" (e)
    let conditions: FieldOptions["conditions"] = undefined;
    if (q.id === 3) {
      const sexGenderHandle = fieldHandle(prefix, 1);
      conditions = {
        showRule: "show",
        conditionRule: "any",
        conditions: [
          {
            id: randomConditionId(),
            field: `{field:${sexGenderHandle}}`,
            condition: "=",
            value: "a_0", // Woman (index 0)
          },
          {
            id: randomConditionId(),
            field: `{field:${sexGenderHandle}}`,
            condition: "=",
            value: "e_4", // Prefer not to say (index 4)
          },
        ],
      };
    }

    const fieldOpts: FieldOptions = {
      label: q.question,
      handle,
      required: q.type === "single",
      options,
      type: q.type === "single" ? "radio" : "checkboxes",
      conditions,
    };

    const field =
      q.type === "single" ? makeRadioField(fieldOpts) : makeCheckboxesField(fieldOpts);

    return { fields: [field] };
  });

  return {
    handle: formHandle,
    settings: FORM_SETTINGS,
    submitActionEntryId: null,
    submitActionEntrySiteId: null,
    defaultStatusId: 1,
    dataRetention: "forever",
    dataRetentionValue: null,
    userDeletedAction: "retain",
    fileUploadsAction: "retain",
    title: formTitle,
    notifications: [],
    pages: [
      {
        label: "Page 1",
        settings: PAGE_SETTINGS,
        rows,
      },
    ],
    exportVersion: "v3",
  };
}

// ── Main ────────────────────────────────────────────────────────────

const outDir = join(process.cwd(), "formie-exports");
mkdirSync(outDir, { recursive: true });

const assessments: AssessmentConfig[] = [
  // Skip chlamydia — user already created it manually in Formie
  gonorrhea,
  syphilis,
  hiv,
  herpes,
  hpv,
  pid,
  bacterialVaginosis,
  uti,
  yeastInfection,
];

for (const config of assessments) {
  const json = generateAssessmentForm(config);
  const filename = `formie-${(json as any).handle}.json`;
  writeFileSync(join(outDir, filename), JSON.stringify(json, null, 4));
  console.log(`✓ ${filename} (${config.questions.length} questions)`);
}

// Symptom checker
const scJson = generateSymptomCheckerForm(symptomChecker);
const scFilename = `formie-${(scJson as any).handle}.json`;
writeFileSync(join(outDir, scFilename), JSON.stringify(scJson, null, 4));
console.log(`✓ ${scFilename} (${symptomChecker.questions.length} questions)`);

console.log(`\nDone. ${assessments.length + 1} files written to formie-exports/`);
