import type { Metadata } from "next";
import { gonorrhea } from "@/lib/assessments/gonorrhea";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: gonorrhea.metaTitle,
  description: gonorrhea.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={gonorrhea} />;
}
