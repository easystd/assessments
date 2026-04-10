import type { Metadata } from "next";
import { herpes } from "@/lib/assessments/herpes";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: herpes.metaTitle,
  description: herpes.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={herpes} />;
}
