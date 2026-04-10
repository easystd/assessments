import type { AssessmentConfig } from "./types";

export const yeastInfection: AssessmentConfig = {
  slug: "vaginal-yeast-infection",
  condition: "Vaginal Yeast Infection",
  shortName: "Yeast Infection",
  headline: "Do I Have a Yeast Infection?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer 10 simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have a Yeast Infection? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous yeast infection risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/vaginal-yeast-infection",
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
      question: "Have you had a yeast infection before?",
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
        "Are you currently taking any of the following? Select all that apply.",
      type: "multi",
      options: [
        { label: "Antibiotics", points: 3 },
        { label: "Birth control pills or hormonal contraceptives", points: 2 },
        { label: "Corticosteroids or immunosuppressants", points: 3 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "Do any of these health conditions apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "Diabetes (especially if poorly controlled)", points: 3 },
        { label: "Weakened immune system", points: 3 },
        { label: "Currently pregnant", points: 2 },
        { label: "Hormonal changes (menopause, etc.)", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Do any of these lifestyle factors apply? Select all that apply.",
      type: "multi",
      options: [
        { label: "Frequently wear tight or non-breathable underwear", points: 2 },
        { label: "Stay in wet clothing (swimsuits, workout clothes) for extended periods", points: 2 },
        { label: "Use scented feminine products", points: 2 },
        { label: "Douche regularly", points: 3 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question: "How would you describe your recent stress or sleep levels?",
      type: "single",
      options: [
        { label: "High stress and/or poor sleep", points: 2 },
        { label: "Moderate stress, average sleep", points: 1 },
        { label: "Low stress, good sleep", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 7,
      category: "symptoms",
      question: "Are you experiencing vaginal itching or irritation?",
      type: "single",
      options: [
        { label: "Yes, intense itching", points: 5 },
        { label: "Yes, mild itching", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you noticed any unusual vaginal discharge?",
      type: "single",
      options: [
        { label: "Yes, thick, white, cottage cheese–like discharge", points: 5 },
        { label: "Yes, watery or unusual discharge", points: 3 },
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
        { label: "Burning sensation, especially during urination", points: 3 },
        { label: "Redness or swelling of the vulva", points: 3 },
        { label: "Soreness or pain in the vaginal area", points: 2 },
        { label: "Pain during sexual intercourse", points: 2 },
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
        { label: "They come and go (recurring)", points: 3 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
