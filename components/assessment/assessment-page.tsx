"use client";

import type { AssessmentConfig } from "@/lib/assessments/types";
import { AssessmentWizard } from "./assessment-wizard";

interface AssessmentPageClientProps {
  config: AssessmentConfig;
}

export function AssessmentPageClient({ config }: AssessmentPageClientProps) {
  return <AssessmentWizard config={config} />;
}
