import type { AssessmentConfig } from "./types";

export const hiv: AssessmentConfig = {
  slug: "hiv-aids",
  condition: "HIV",
  shortName: "HIV",
  headline: "Do I Have HIV?",
  subtitle: "Free, Private Risk & Symptom Assessment",
  description:
    "Answer 10 simple questions about your risk factors and symptoms. Get personalized guidance in under 3 minutes.",
  metaTitle: "Do I Have HIV? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous HIV risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/hiv-test.php",
  learnMoreUrl: "https://easystd.com/hiv-aids",
  questions: [
    {
      id: 1,
      category: "context",
      question: "What is your age range?",
      type: "single",
      options: [
        { label: "Under 18", points: 0 },
        { label: "18–24", points: 2 },
        { label: "25–34", points: 2 },
        { label: "35–44", points: 2 },
        { label: "45 or older", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "When were you last tested for HIV?",
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
      question: "What types of sexual contact have you had recently? Select all that apply.",
      type: "multi",
      options: [
        { label: "Vaginal intercourse", points: 2 },
        { label: "Anal intercourse (receptive)", points: 3 },
        { label: "Anal intercourse (insertive)", points: 2 },
        { label: "Oral sex", points: 1 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 5,
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
      id: 6,
      category: "exposure",
      question:
        "Do any of these additional risk factors apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "A sexual partner has been diagnosed with HIV", points: 5 },
        { label: "Shared needles or injection equipment", points: 5 },
        { label: "Diagnosed with another STI recently", points: 3 },
        { label: "Received a blood transfusion (before 1992)", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 7,
      category: "symptoms",
      question:
        "Have you experienced a flu-like illness 2–4 weeks after potential exposure?",
      type: "single",
      options: [
        { label: "Yes, with fever, sore throat, and body aches", points: 5 },
        { label: "Yes, mild flu-like symptoms", points: 3 },
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
        { label: "Persistent swollen lymph nodes", points: 3 },
        { label: "Unexplained weight loss", points: 3 },
        { label: "Night sweats", points: 2 },
        { label: "Chronic diarrhea", points: 2 },
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
        { label: "Persistent fatigue", points: 2 },
        { label: "Recurring mouth ulcers or sores", points: 2 },
        { label: "Skin rashes or unusual skin changes", points: 2 },
        { label: "Frequent or unusual infections", points: 3 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "Did these symptoms appear within the past few weeks to months following a possible exposure?",
      type: "single",
      options: [
        { label: "Yes, they are recent", points: 3 },
        { label: "No, they are long-standing", points: 1 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
