import type { Metadata } from "next";
import { genitalWarts } from "@/lib/assessments/genital-warts";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: genitalWarts.metaTitle,
  description: genitalWarts.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={genitalWarts} />;
}
