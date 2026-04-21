import type { Metadata } from "next";
import { symptomChecker } from "@/lib/symptom-checker";
import { SymptomCheckerWizard } from "@/components/assessment/symptom-checker/wizard";

export const metadata: Metadata = {
  title: symptomChecker.metaTitle,
  description: symptomChecker.metaDescription,
};

export default function Page() {
  return <SymptomCheckerWizard config={symptomChecker} />;
}
