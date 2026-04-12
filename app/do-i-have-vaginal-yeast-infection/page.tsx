import type { Metadata } from "next";
import { yeastInfection } from "@/lib/assessments/yeast-infection";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: yeastInfection.metaTitle,
  description: yeastInfection.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={yeastInfection} />;
}
