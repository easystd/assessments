export interface ConditionScores {
  [conditionSlug: string]: number;
}

export interface SymptomCheckerOption {
  label: string;
  scores: ConditionScores;
}

export interface SymptomCheckerQuestion {
  id: number;
  category: "context" | "exposure" | "symptoms";
  question: string;
  type: "single" | "multi";
  options: SymptomCheckerOption[];
}

export interface ConditionInfo {
  slug: string;
  name: string;
  shortName: string;
  testUrl: string;
  learnMoreUrl: string;
}

export interface SymptomCheckerConfig {
  slug: string;
  headline: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  conditions: ConditionInfo[];
  questions: SymptomCheckerQuestion[];
}

export interface ConditionResult {
  slug: string;
  name: string;
  shortName: string;
  testUrl: string;
  learnMoreUrl: string;
  level: "low" | "moderate" | "high" | "very-high";
  label: string;
  score: number;
  maxScore: number;
  percentage: number;
}
