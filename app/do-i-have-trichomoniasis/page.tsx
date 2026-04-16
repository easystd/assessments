import type { Metadata } from "next";
import { trichomoniasis } from "@/lib/assessments/trichomoniasis";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: trichomoniasis.metaTitle,
  description: trichomoniasis.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={trichomoniasis} />;
}
