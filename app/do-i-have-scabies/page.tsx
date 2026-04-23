import type { Metadata } from "next";
import { scabies } from "@/lib/assessments/scabies";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: scabies.metaTitle,
  description: scabies.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={scabies} />;
}
