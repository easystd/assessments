import type { AssessmentConfig } from "@/lib/assessments/types";
import type { SymptomCheckerQuestion } from "@/lib/symptom-checker";

const LETTERS = "abcdefghijklmnopqrstuvwxyz";

const FIELD_PREFIX: Record<string, string> = {
  Chlamydia: "chlamydia",
  Gonorrhea: "gonorrhea",
  Syphilis: "syphilis",
  HIV: "hiv",
  Herpes: "herpes",
  HPV: "hpv",
  PID: "pid",
  BV: "bv",
  UTI: "uti",
  "Yeast Infection": "yeast",
};

export async function submitAssessment(
  config: AssessmentConfig,
  answers: Record<number, string | string[]>
): Promise<void> {
  const prefix =
    FIELD_PREFIX[config.shortName] ??
    config.shortName.toLowerCase().replace(/[^a-z0-9]/g, "");
  const handle = `assessments${config.shortName.replace(/[^a-zA-Z0-9]/g, "")}`;

  const fields: Record<string, string | string[]> = {};
  for (const q of config.questions) {
    const answer = answers[q.id];
    if (!answer) continue;
    const key = `${prefix}_${q.id}`;
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

  await gqlPost(handle, fields);
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
  const endpoint = process.env.NEXT_PUBLIC_CRAFT_GQL_URL;
  if (!endpoint) return;

  const args = Object.entries(fields)
    .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
    .join(", ");

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  const token = process.env.NEXT_PUBLIC_CRAFT_GQL_TOKEN;
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: `mutation { save_${handle}_Submission(${args}) { id } }`,
      }),
    });
  } catch {
    // fire-and-forget — never block results
  }
}
