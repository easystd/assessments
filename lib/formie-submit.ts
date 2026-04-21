import type { AssessmentConfig } from "@/lib/assessments/types";
import type { SymptomCheckerQuestion } from "@/lib/symptom-checker";

const LETTERS = "abcdefghijklmnopqrstuvwxyz";

const ENDPOINT = "https://easystd.com/api";

const FORM: Record<string, { handle: string; prefix: string }> = {
  BV:               { handle: "assessmentsBV",           prefix: "bv" },
  Chlamydia:        { handle: "assessmentsChlamydia",     prefix: "chlamydia" },
  Herpes:           { handle: "assessmentsHerpes",        prefix: "herpes" },
  "Genital Warts":  { handle: "assessmentsGenitalWarts",  prefix: "genitalWarts" },
  Gonorrhea:        { handle: "assessmentsGonorrhea",     prefix: "gonorrhea" },
  "Hep A":          { handle: "assessmentsHepA",          prefix: "hepA" },
  "Hep B":          { handle: "assessmentsHepB",          prefix: "hepB" },
  HIV:              { handle: "assessmentsHIV",           prefix: "hiv" },
  HPV:              { handle: "assessmentsHPV",           prefix: "hpv" },
  Molluscum:        { handle: "assessmentsMolluscum",     prefix: "molluscum" },
  PID:              { handle: "assessmentsPID",           prefix: "pid" },
  "Pubic Lice":     { handle: "assessmentsPubicLice",     prefix: "pubicLice" },
  Scabies:          { handle: "assessmentsScabies",       prefix: "scabies" },
  Syphilis:         { handle: "assessmentsSyphilis",      prefix: "syphilis" },
  Trich:            { handle: "assessmentsTrich",         prefix: "trich" },
  UTI:              { handle: "assessmentsUTI",           prefix: "uti" },
  "Yeast Infection":{ handle: "assessmentsYeastInfection",prefix: "yeast" },
};

export async function submitAssessment(
  config: AssessmentConfig,
  answers: Record<number, string | string[]>
): Promise<void> {
  const form = FORM[config.shortName];
  if (!form) return;

  const fields: Record<string, string | string[]> = {};
  for (const q of config.questions) {
    const answer = answers[q.id];
    if (!answer) continue;
    const key = `${form.prefix}_${q.id}`;
    if (Array.isArray(answer)) {
      const vals = answer
        .map((label) => {
          const idx = q.options.findIndex((o) => o.label === label);
          return idx >= 0 ? `${LETTERS[idx]}_${q.options[idx].points}` : null;
        })
        .filter((v): v is string => v !== null);
      if (vals.length) fields[key] = vals;
    } else {
      const idx = q.options.findIndex((o) => o.label === answer);
      if (idx >= 0) fields[key] = `${LETTERS[idx]}_${q.options[idx].points}`;
    }
  }

  await gqlPost(form.handle, fields);
}

export async function submitSymptomChecker(
  questions: SymptomCheckerQuestion[],
  answers: Record<number, string | string[]>
): Promise<void> {
  const fields: Record<string, string | string[]> = {};
  for (const q of questions) {
    const answer = answers[q.id];
    if (!answer) continue;
    const key = `stdChecker_${q.id}`;
    if (Array.isArray(answer)) {
      const vals = answer
        .map((label) => {
          const idx = q.options.findIndex((o) => o.label === label);
          return idx >= 0 ? `${LETTERS[idx]}_${idx}` : null;
        })
        .filter((v): v is string => v !== null);
      if (vals.length) fields[key] = vals;
    } else {
      const idx = q.options.findIndex((o) => o.label === answer);
      if (idx >= 0) fields[key] = `${LETTERS[idx]}_${idx}`;
    }
  }

  await gqlPost("assessmentsStdSymptomChecker", fields);
}

async function gqlPost(
  handle: string,
  fields: Record<string, string | string[]>
): Promise<void> {
  const args = Object.entries(fields)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join(", ");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CRAFT_GQL_TOKEN}`,
  };

  try {
    await fetch(ENDPOINT, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: `mutation { save_${handle}_Submission(${args}) { id } }`,
      }),
    });
  } catch {
    // fire-and-forget
  }
}
