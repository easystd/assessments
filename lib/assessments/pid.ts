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
        { label: "Under 18", points: 0 },
        { label: "18–24", points: 3 },
        { label: "25–34", points: 2 },
        { label: "35–44", points: 1 },
        { label: "45 or older", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question:
        "Have you ever been diagnosed with an STI such as chlamydia or gonorrhea?",
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
      question: "How many sexual partners have you had in the past 12 months?",
      type: "single",
      options: [
        { label: "None", points: 0 },
        { label: "1", points: 1 },
        { label: "2–4", points: 2 },
        { label: "5 or more", points: 3 },
        { label: "Prefer not to say", points: 2 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question: "How often do you use barrier protection (condoms)?",
      type: "single",
      options: [
        { label: "Always", points: 0 },
        { label: "Most of the time", points: 1 },
        { label: "Sometimes", points: 2 },
        { label: "Rarely or never", points: 3 },
        { label: "Not applicable", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Do any of these apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "Use an intrauterine device (IUD) inserted recently", points: 2 },
        { label: "History of PID", points: 3 },
        { label: "Regular douching", points: 2 },
        { label: "Had a recent gynecological procedure", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question: "When were you last tested for STIs?",
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
      question:
        "Are you experiencing lower abdominal or pelvic pain?",
      type: "single",
      options: [
        { label: "Yes, moderate to severe pain", points: 5 },
        { label: "Yes, mild discomfort", points: 3 },
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
        { label: "Unusual or heavy vaginal discharge", points: 4 },
        { label: "Foul-smelling discharge", points: 3 },
        { label: "Fever or chills", points: 4 },
        { label: "Pain during sexual intercourse", points: 3 },
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
        { label: "Irregular menstrual bleeding", points: 3 },
        { label: "Bleeding between periods or after sex", points: 3 },
        { label: "Painful or difficult urination", points: 2 },
        { label: "Nausea or vomiting", points: 2 },
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
        { label: "Within the past few weeks", points: 2 },
        { label: "They have been ongoing for a while", points: 1 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
