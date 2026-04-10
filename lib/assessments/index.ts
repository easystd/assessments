import type { AssessmentConfig } from "./types";
import { syphilis } from "./syphilis";
import { chlamydia } from "./chlamydia";
import { gonorrhea } from "./gonorrhea";
import { hiv } from "./hiv";
import { herpes } from "./herpes";
import { hpv } from "./hpv";
import { bacterialVaginosis } from "./bacterial-vaginosis";
import { uti } from "./uti";
import { pid } from "./pid";
import { yeastInfection } from "./yeast-infection";

export const assessments: AssessmentConfig[] = [
  syphilis,
  chlamydia,
  gonorrhea,
  hiv,
  herpes,
  hpv,
  bacterialVaginosis,
  uti,
  pid,
  yeastInfection,
];

export const assessmentsBySlug: Record<string, AssessmentConfig> = {};
for (const a of assessments) {
  assessmentsBySlug[a.slug] = a;
}

export type { AssessmentConfig, Question, QuestionOption, QuestionType } from "./types";
