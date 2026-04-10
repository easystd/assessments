import type { Metadata } from "next";
import { pid } from "@/lib/assessments/pid";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: pid.metaTitle,
  description: pid.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={pid} />;
}
