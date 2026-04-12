import type { Metadata } from "next";
import { bacterialVaginosis } from "@/lib/assessments/bacterial-vaginosis";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: bacterialVaginosis.metaTitle,
  description: bacterialVaginosis.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={bacterialVaginosis} />;
}
