import type { Metadata } from "next";
import { hiv } from "@/lib/assessments/hiv";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: hiv.metaTitle,
  description: hiv.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={hiv} />;
}
