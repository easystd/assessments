import type { AssessmentConfig } from "./types";

export const syphilis: AssessmentConfig = {
  slug: "syphilis",
  condition: "Syphilis",
  shortName: "Syphilis",
  headline: "Do I Have Syphilis?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer 10 simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle: "Do I Have Syphilis? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous syphilis risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/syphilis-test.php",
  learnMoreUrl: "https://easystd.com/syphilis",
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
        { label: "35–44", points: 1 },
        { label: "45 or older", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "When were you last tested for sexually transmitted infections (STIs)?",
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
        { label: "Vaginal intercourse", points: 1 },
        { label: "Anal intercourse", points: 2 },
        { label: "Oral sex", points: 1 },
        { label: "Skin-to-skin genital contact", points: 1 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question: "How often do you use barrier protection (condoms, dental dams)?",
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
      question: "Has a recent sexual partner told you they tested positive for an STI?",
      type: "single",
      options: [
        { label: "Yes", points: 5 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 7,
      category: "symptoms",
      question:
        "Have you noticed any sores, ulcers, or painless bumps on or around your genitals, anus, or mouth?",
      type: "single",
      options: [
        { label: "Yes, I currently have them", points: 5 },
        { label: "Yes, but they have since healed", points: 4 },
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
        { label: "Unexplained rash, especially on palms or soles of feet", points: 3 },
        { label: "Swollen lymph nodes", points: 2 },
        { label: "Patchy hair loss", points: 2 },
        { label: "Muscle aches or joint pain", points: 1 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you had any of these general symptoms recently? Select all that apply.",
      type: "multi",
      options: [
        { label: "Fever or night sweats", points: 2 },
        { label: "Persistent fatigue", points: 1 },
        { label: "Sore throat", points: 2 },
        { label: "Unexplained weight loss", points: 1 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "Did these symptoms appear within the past few weeks to months, rather than being a long-term condition?",
      type: "single",
      options: [
        { label: "Yes, they are recent", points: 3 },
        { label: "No, they are long-standing", points: 0 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
