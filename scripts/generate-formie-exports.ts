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

/** Convert label text to Formie-style camelCase handle, truncated to ~70 chars */
function labelToHandle(label: string): string {
  // Remove parenthetical text, special chars
  const cleaned = label
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .trim();
  const words = cleaned.split(/\s+/).filter(Boolean);
  const handle =
    words[0].toLowerCase() +
    words
      .slice(1)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join("");
  return handle.slice(0, 70);
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
  const formHandle = `assessments${conditionName.replace(/[^a-zA-Z0-9]/g, "")}`;
  const formTitle = `Assessments - ${config.condition}`;

  // Track handles for sex/gender question (needed for pregnancy conditionals)
  const fieldHandles: Record<number, string> = {};

  const rows = config.questions.map((q) => {
    const handle = labelToHandle(q.question);
    fieldHandles[q.id] = handle;

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
      const sexGenderHandle = fieldHandles[pc.sexGenderQId];
      if (sexGenderHandle) {
        const sexGenderQ = config.questions.find((qq) => qq.id === pc.sexGenderQId);
        conditions = {
          showRule: "show",
          conditionRule: "any",
          conditions: pc.showForOptionIndices.map((idx) => ({
            id: randomConditionId(),
            field: `{field:${sexGenderHandle}}`,
            condition: "=",
            value: `${LETTERS[idx]}_${sexGenderQ!.options[idx].points}`,
          })),
        };
      }
    }

    const fieldOpts: FieldOptions = {
      label: q.question,
      handle,
      required: q.type === "single" ? true : true,
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
  const formHandle = "assessmentsStdSymptomChecker";
  const formTitle = "Assessments - STD Symptom Checker";

  const fieldHandles: Record<number, string> = {};

  const rows = config.questions.map((q) => {
    const handle = labelToHandle(q.question);
    fieldHandles[q.id] = handle;

    // For the symptom checker, encode condition scores in the value.
    // Format: {letter}_{score_string} where score_string encodes condition:points pairs.
    // Example: a_ch3-gn3-hv2  (for an option scoring ch:3, gn:3, hv:2)
    // If no scores (empty object), use: a_0
    const options = q.options.map((opt, i) => {
      const entries = Object.entries(opt.scores).filter(([, v]) => v > 0);
      const valueStr =
        entries.length > 0
          ? entries.map(([slug, pts]) => `${slug}${pts}`).join("-")
          : "0";
      return {
        label: opt.label,
        value: `${LETTERS[i]}_${valueStr}`,
        isDefault: false,
      };
    });

    // Pregnancy conditional for symptom checker Q3 (id: 3)
    // Show when Q1 sex/gender = "Woman" (a) or "Prefer not to say" (e)
    let conditions: FieldOptions["conditions"] = undefined;
    if (q.id === 3) {
      const sexGenderHandle = fieldHandles[1];
      if (sexGenderHandle) {
        conditions = {
          showRule: "show",
          conditionRule: "any",
          conditions: [
            {
              id: randomConditionId(),
              field: `{field:${sexGenderHandle}}`,
              condition: "=",
              value: `a_bv2-yi2-ut3-pd2-ch2-tr2`, // Woman option value
            },
            {
              id: randomConditionId(),
              field: `{field:${sexGenderHandle}}`,
              condition: "=",
              value: `e_ch1-gn1-sy1-hv1-hs1`, // Prefer not to say option value
            },
          ],
        };
      }
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
