import type { AssessmentConfig } from "./types";

export const pid: AssessmentConfig = {
  slug: "pelvic-inflammatory-disease-pid",
  condition: "Pelvic Inflammatory Disease (PID)",
  shortName: "PID",
  headline: "Do I Have Pelvic Inflammatory Disease?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer 10 simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have PID? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous pelvic inflammatory disease risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/pelvic-inflammatory-disease-pid",
  questions: [
    {
      id: 1,
      category: "context",
      question: "What is your age range?",
      type: "single",
      options: [
        { label: "Under 25", points: 3 },
        { label: "25–34", points: 2 },
        { label: "35–44", points: 1 },
        { label: "45 or older", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question:
        "Have you been diagnosed with chlamydia, gonorrhea, or another STI?",
      type: "single",
      options: [
        { label: "Yes, within the past year", points: 4 },
        { label: "Yes, more than a year ago", points: 2 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 3,
      category: "exposure",
      question:
        "Do any of these PID risk factors apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "IUD inserted within the past 3 weeks", points: 3 },
        { label: "Prior episode of PID", points: 4 },
        { label: "Regular vaginal douching", points: 2 },
        { label: "Recent gynecological procedure (biopsy, D&C, abortion)", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "Which of the following describe your recent sexual activity? Select all that apply.",
      type: "multi",
      options: [
        { label: "Condomless sex with a new or casual partner", points: 3 },
        { label: "Multiple sexual partners in the past 12 months", points: 2 },
        { label: "A partner who may have other sexual partners", points: 2 },
        { label: "None of these or not sexually active", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Have you recently had symptoms that might suggest an untreated cervical or vaginal infection (unusual discharge, odor, or irritation)?",
      type: "single",
      options: [
        { label: "Yes, and I have not been treated", points: 3 },
        { label: "Yes, but I received treatment", points: 1 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question: "When were you last tested for STIs (chlamydia, gonorrhea)?",
      type: "single",
      options: [
        { label: "Within the past 6 months", points: 0 },
        { label: "6–12 months ago", points: 1 },
        { label: "More than 1 year ago", points: 2 },
        { label: "I have never been tested", points: 3 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 7,
      category: "symptoms",
      question: "Are you experiencing lower abdominal or pelvic pain?",
      type: "single",
      options: [
        { label: "Yes, moderate to severe pain", points: 5 },
        { label: "Yes, mild or dull discomfort", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you experienced any of these discharge or fever symptoms? Select all that apply.",
      type: "multi",
      options: [
        { label: "Unusual or heavier-than-normal vaginal discharge", points: 3 },
        { label: "Foul-smelling vaginal discharge", points: 4 },
        { label: "Fever (100.4°F / 38°C or higher) or chills", points: 4 },
        { label: "Pain during sexual intercourse (deep pelvic pain)", points: 3 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you noticed any of these menstrual or urinary changes? Select all that apply.",
      type: "multi",
      options: [
        { label: "Bleeding between periods", points: 3 },
        { label: "Bleeding after sex", points: 3 },
        { label: "Heavier or more painful periods than usual", points: 2 },
        { label: "Pain or burning during urination", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question: "When did these symptoms begin?",
      type: "single",
      options: [
        { label: "Within the past few days", points: 3 },
        { label: "Within the past 1–2 weeks", points: 3 },
        { label: "They have been building gradually over weeks", points: 2 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
