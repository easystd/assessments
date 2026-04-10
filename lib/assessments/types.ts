export type QuestionType = "single" | "multi";

export interface QuestionOption {
  label: string;
  points: number;
}

export interface Question {
  id: number;
  category: "context" | "exposure" | "symptoms";
  question: string;
  type: QuestionType;
  options: QuestionOption[];
}

export interface AssessmentConfig {
  slug: string;
  condition: string;
  shortName: string;
  headline: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  questions: Question[];
  affiliateUrl: string;
  learnMoreUrl: string;
}
