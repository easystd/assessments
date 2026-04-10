import type { AssessmentConfig } from "./types";

export const uti: AssessmentConfig = {
  slug: "urinary-tract-infection-uti",
  condition: "Urinary Tract Infection (UTI)",
  shortName: "UTI",
  headline: "Do I Have a UTI?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer 10 simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have a UTI? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous UTI risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/urinary-tract-infection-uti",
  questions: [
    {
      id: 1,
      category: "context",
      question: "What is your biological sex?",
      type: "single",
      options: [
        { label: "Female", points: 2 },
        { label: "Male", points: 1 },
        { label: "Prefer not to say", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "Have you had a UTI before?",
      type: "single",
      options: [
        { label: "Yes, within the past year", points: 3 },
        { label: "Yes, more than a year ago", points: 2 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 3,
      category: "exposure",
      question:
        "Do any of these risk factors apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "Sexually active", points: 2 },
        { label: "New sexual partner recently", points: 2 },
        { label: "Use a diaphragm or spermicide", points: 2 },
        { label: "Post-menopausal (if applicable)", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question: "How much water do you typically drink daily?",
      type: "single",
      options: [
        { label: "8 or more glasses", points: 0 },
        { label: "4–7 glasses", points: 1 },
        { label: "Less than 4 glasses", points: 2 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Do any of these apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "Frequently delay going to the bathroom", points: 2 },
        { label: "Currently using a urinary catheter", points: 3 },
        { label: "Have diabetes", points: 2 },
        { label: "Weakened immune system", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question: "Are you currently pregnant?",
      type: "single",
      options: [
        { label: "Yes", points: 2 },
        { label: "No", points: 0 },
        { label: "Not applicable", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 7,
      category: "symptoms",
      question:
        "Are you experiencing a strong, persistent urge to urinate?",
      type: "single",
      options: [
        { label: "Yes, frequently and urgently", points: 5 },
        { label: "Yes, somewhat more than usual", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you experienced any of the following? Select all that apply.",
      type: "multi",
      options: [
        { label: "Burning or pain during urination", points: 5 },
        { label: "Passing small, frequent amounts of urine", points: 3 },
        { label: "Cloudy or strong-smelling urine", points: 3 },
        { label: "Blood in urine (pink or red tint)", points: 4 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you noticed any of these additional symptoms? Select all that apply.",
      type: "multi",
      options: [
        { label: "Pelvic pressure or lower abdominal discomfort", points: 3 },
        { label: "Lower back or side pain", points: 3 },
        { label: "Fever or chills", points: 4 },
        { label: "Nausea or vomiting", points: 3 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question: "When did these symptoms begin?",
      type: "single",
      options: [
        { label: "Within the past 1–2 days", points: 3 },
        { label: "Within the past week", points: 2 },
        { label: "They have been ongoing for a while", points: 2 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
