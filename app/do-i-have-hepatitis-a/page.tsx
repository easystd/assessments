import type { Metadata } from "next";
import { hepatitisA } from "@/lib/assessments/hepatitis-a";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: hepatitisA.metaTitle,
  description: hepatitisA.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={hepatitisA} />;
}
