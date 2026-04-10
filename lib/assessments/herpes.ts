import type { AssessmentConfig } from "./types";

export const herpes: AssessmentConfig = {
  slug: "genital-herpes",
  condition: "Genital Herpes (HSV-2)",
  shortName: "Herpes",
  headline: "Do I Have Genital Herpes?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer 10 simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have Genital Herpes? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous genital herpes risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/herpes-test.php",
  learnMoreUrl: "https://easystd.com/genital-herpes",
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
      question:
        "Have you had skin-to-skin genital or oral contact with a partner? Select all that apply.",
      type: "multi",
      options: [
        { label: "Vaginal intercourse", points: 2 },
        { label: "Anal intercourse", points: 2 },
        { label: "Oral sex", points: 2 },
        { label: "Kissing or skin-to-skin genital contact", points: 1 },
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
      question:
        "Has a sexual partner told you they have herpes (HSV-1 or HSV-2)?",
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
        "Have you noticed any blisters, sores, or painful bumps on or around your genitals, buttocks, or thighs?",
      type: "single",
      options: [
        { label: "Yes, I currently have them", points: 5 },
        { label: "Yes, but they healed and came back", points: 5 },
        { label: "Yes, but they healed and haven't returned", points: 3 },
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
        { label: "Tingling, itching, or burning before sores appeared", points: 4 },
        { label: "Pain or burning during urination", points: 2 },
        { label: "Swollen lymph nodes in the groin", points: 2 },
        { label: "Flu-like symptoms with the first outbreak", points: 3 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you noticed any of these additional signs? Select all that apply.",
      type: "multi",
      options: [
        { label: "Small red spots that turn into blisters", points: 4 },
        { label: "Sores that scab over and heal", points: 3 },
        { label: "Pain in the legs, buttocks, or genital area", points: 2 },
        { label: "Headache or body aches during outbreaks", points: 1 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question: "How would you describe the pattern of your symptoms?",
      type: "single",
      options: [
        { label: "They come and go in recurring episodes", points: 4 },
        { label: "This is the first time I've experienced them", points: 3 },
        { label: "They have been constant", points: 1 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
