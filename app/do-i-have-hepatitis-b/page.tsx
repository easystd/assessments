import type { Metadata } from "next";
import { hepatitisB } from "@/lib/assessments/hepatitis-b";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: hepatitisB.metaTitle,
  description: hepatitisB.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={hepatitisB} />;
}
