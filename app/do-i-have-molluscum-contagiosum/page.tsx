import type { Metadata } from "next";
import { molluscumContagiosum } from "@/lib/assessments/molluscum-contagiosum";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: molluscumContagiosum.metaTitle,
  description: molluscumContagiosum.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={molluscumContagiosum} />;
}
