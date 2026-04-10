import type { Metadata } from "next";
import { chlamydia } from "@/lib/assessments/chlamydia";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: chlamydia.metaTitle,
  description: chlamydia.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={chlamydia} />;
}
