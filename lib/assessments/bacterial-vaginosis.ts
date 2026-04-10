import type { AssessmentConfig } from "./types";

export const bacterialVaginosis: AssessmentConfig = {
  slug: "bacterial-vaginosis",
  condition: "Bacterial Vaginosis (BV)",
  shortName: "BV",
  headline: "Do I Have Bacterial Vaginosis?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer 10 simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have Bacterial Vaginosis? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous bacterial vaginosis risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/bacterial-vaginosis",
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
      question: "Have you had bacterial vaginosis before?",
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
        "Do any of these apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "New sexual partner recently", points: 2 },
        { label: "Use douches or vaginal washes", points: 3 },
        { label: "Use scented soaps or products near the vaginal area", points: 2 },
        { label: "Use an intrauterine device (IUD)", points: 1 },
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
      question: "Are you currently pregnant or have you been pregnant recently?",
      type: "single",
      options: [
        { label: "Yes, currently pregnant", points: 2 },
        { label: "Yes, recently pregnant", points: 1 },
        { label: "No", points: 0 },
        { label: "Prefer not to say", points: 0 },
      ],
    },
    {
      id: 7,
      category: "symptoms",
      question:
        "Have you noticed any unusual vaginal discharge?",
      type: "single",
      options: [
        { label: "Yes, thin grayish-white discharge", points: 5 },
        { label: "Yes, unusual discharge (other color or consistency)", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you noticed a strong, unpleasant odor, especially after intercourse?",
      type: "single",
      options: [
        { label: "Yes, a fishy or foul odor", points: 5 },
        { label: "Yes, a mild unusual odor", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you experienced any of the following? Select all that apply.",
      type: "multi",
      options: [
        { label: "Vaginal itching or irritation", points: 2 },
        { label: "Burning during urination", points: 2 },
        { label: "Discomfort during intercourse", points: 2 },
        { label: "Increased discharge volume", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "When did these symptoms start?",
      type: "single",
      options: [
        { label: "Within the past few days", points: 3 },
        { label: "Within the past few weeks", points: 2 },
        { label: "They come and go over time", points: 3 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
