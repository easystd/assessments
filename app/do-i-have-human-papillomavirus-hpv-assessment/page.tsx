import type { Metadata } from "next";
import { hpv } from "@/lib/assessments/hpv";
import { AssessmentPageClient } from "@/components/assessment/assessment-page";

export const metadata: Metadata = {
  title: hpv.metaTitle,
  description: hpv.metaDescription,
};

export default function Page() {
  return <AssessmentPageClient config={hpv} />;
}
