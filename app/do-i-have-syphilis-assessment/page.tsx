import type { Metadata } from "next";
import { AssessmentWizard } from "@/components/assessment/assessment-wizard";

export const metadata: Metadata = {
  title: "Syphilis Risk Assessment — Anonymous Symptom Checker | EasySTD",
  description:
    "Professional syphilis risk assessment tool. Answer questions about symptoms and risk factors. Get instant, private results with testing recommendations.",
};

export default function AssessmentPage() {
  return <AssessmentWizard />;
}
