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
import { genitalWarts } from "./genital-warts";
import { trichomoniasis } from "./trichomoniasis";
import { hepatitisA } from "./hepatitis-a";
import { hepatitisB } from "./hepatitis-b";
import { molluscumContagiosum } from "./molluscum-contagiosum";
import { scabies } from "./scabies";
import { pubicLice } from "./pubic-lice";

export const assessments: AssessmentConfig[] = [
  syphilis,
  chlamydia,
  gonorrhea,
  hiv,
  herpes,
  hpv,
  genitalWarts,
  bacterialVaginosis,
  uti,
  pid,
  yeastInfection,
  trichomoniasis,
  hepatitisA,
  hepatitisB,
  molluscumContagiosum,
  scabies,
  pubicLice,
];

export const assessmentsBySlug: Record<string, AssessmentConfig> = {};
for (const a of assessments) {
  assessmentsBySlug[a.slug] = a;
}

export type { AssessmentConfig, Question, QuestionOption, QuestionType } from "./types";
