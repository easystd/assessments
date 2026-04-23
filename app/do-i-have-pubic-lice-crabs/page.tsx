import type { Metadata } from "next";
import { pubicLice } from "@/lib/assessments/pubic-lice";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: pubicLice.metaTitle,
  description: pubicLice.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={pubicLice} />;
}
