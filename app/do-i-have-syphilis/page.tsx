import type { Metadata } from "next";
import { syphilis } from "@/lib/assessments/syphilis";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: syphilis.metaTitle,
  description: syphilis.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={syphilis} />;
}
