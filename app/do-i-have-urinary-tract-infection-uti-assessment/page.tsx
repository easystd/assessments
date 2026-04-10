import type { Metadata } from "next";
import { uti } from "@/lib/assessments/uti";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: uti.metaTitle,
  description: uti.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={uti} />;
}
