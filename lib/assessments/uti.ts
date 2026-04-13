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
        { label: "Female", points: 3 },
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
        { label: "Yes, 3 or more times in the past year (recurrent UTIs)", points: 4 },
        { label: "Yes, 1–2 times in the past year", points: 3 },
        { label: "Yes, but more than a year ago", points: 1 },
        { label: "No or unsure", points: 0 },
      ],
    },
    {
      id: 3,
      category: "exposure",
      question:
        "Do any of these sexual activity risk factors apply? Select all that apply.",
      type: "multi",
      options: [
        { label: "Sexually active (intercourse within the past 2 weeks)", points: 2 },
        { label: "New sexual partner recently", points: 2 },
        { label: "Use spermicide or a diaphragm", points: 2 },
        { label: "None of these or not applicable", points: 0 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "Do any of these medical conditions apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "Diabetes", points: 2 },
        { label: "Currently pregnant", points: 2 },
        { label: "Post-menopausal", points: 2 },
        { label: "Currently using a urinary catheter", points: 4 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Do any of these habits or factors apply? Select all that apply.",
      type: "multi",
      options: [
        { label: "I frequently hold my urine for long periods", points: 2 },
        { label: "I drink less than 4 glasses of water a day", points: 2 },
        { label: "I wipe back-to-front after using the toilet", points: 2 },
        { label: "I don't urinate after sexual intercourse", points: 1 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question: "Have you recently taken antibiotics for any reason?",
      type: "single",
      options: [
        { label: "Yes, I recently finished a course of antibiotics", points: 1 },
        { label: "Yes, I am currently on antibiotics for something else", points: 1 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 0 },
      ],
    },
    {
      id: 7,
      category: "symptoms",
      question: "Are you experiencing a strong, persistent urge to urinate?",
      type: "single",
      options: [
        { label: "Yes, constantly — even right after using the bathroom", points: 5 },
        { label: "Yes, noticeably more often than usual", points: 3 },
        { label: "No change in urgency or frequency", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you experienced any of these lower urinary tract symptoms? Select all that apply.",
      type: "multi",
      options: [
        { label: "Burning or stinging pain during urination", points: 5 },
        { label: "Passing only small amounts of urine despite strong urge", points: 3 },
        { label: "Cloudy, dark, or strong-smelling urine", points: 3 },
        { label: "Blood in urine (pink, red, or cola-colored)", points: 4 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you noticed any of these signs that may suggest the infection has spread to your kidneys? Select all that apply.",
      type: "multi",
      options: [
        { label: "Pain in your lower back, side, or flank (below the ribs)", points: 4 },
        { label: "Fever (100.4°F / 38°C or higher) or chills", points: 4 },
        { label: "Nausea or vomiting", points: 3 },
        { label: "Feeling generally unwell or shaky beyond just urinary discomfort", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question: "When did these urinary symptoms begin?",
      type: "single",
      options: [
        { label: "Within the past 1–2 days (sudden onset)", points: 3 },
        { label: "Within the past week", points: 2 },
        { label: "They have been ongoing or worsening for more than a week", points: 2 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
