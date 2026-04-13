import type { AssessmentConfig } from "./types";

export const yeastInfection: AssessmentConfig = {
  slug: "vaginal-yeast-infection",
  condition: "Vaginal Yeast Infection",
  shortName: "Yeast Infection",
  headline: "Do I Have a Yeast Infection?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer a few simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have a Yeast Infection? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous yeast infection risk assessment. Answer questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/vaginal-yeast-infection",
  questions: [
    {
      id: 1,
      category: "context",
      question: "Have you had a yeast infection before?",
      type: "single",
      options: [
        { label: "Yes, 4 or more times in the past year (recurrent)", points: 3 },
        { label: "Yes, 1–3 times in the past year", points: 2 },
        { label: "Yes, but more than a year ago", points: 1 },
        { label: "No or unsure", points: 0 },
      ],
    },
    {
      id: 2,
      category: "context",
      question:
        "Do any of these medical conditions apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "Diabetes (especially if blood sugar is poorly controlled)", points: 3 },
        { label: "Weakened immune system (HIV, chemotherapy, transplant meds)", points: 3 },
        { label: "Currently pregnant", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 3,
      category: "exposure",
      question:
        "Have you recently taken antibiotics?",
      type: "single",
      options: [
        { label: "Yes, within the past 2 weeks", points: 4 },
        { label: "Yes, within the past month", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "Are you taking any of the following medications? Select all that apply.",
      type: "multi",
      options: [
        { label: "Hormonal birth control (pill, patch, ring)", points: 2 },
        { label: "Corticosteroids (prednisone, etc.)", points: 2 },
        { label: "Hormone replacement therapy", points: 1 },
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
        { label: "Frequently wear tight, non-breathable underwear or clothing", points: 2 },
        { label: "Stay in wet swimwear or workout clothes for extended periods", points: 2 },
        { label: "Use scented soaps, sprays, or douches in the vaginal area", points: 2 },
        { label: "Eat a diet high in sugar or refined carbohydrates", points: 1 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question: "Have you been under significant stress or sleep deprived recently?",
      type: "single",
      options: [
        { label: "Yes, high stress and/or very poor sleep", points: 2 },
        { label: "Somewhat — moderate stress or inconsistent sleep", points: 1 },
        { label: "No, my stress and sleep have been manageable", points: 0 },
      ],
    },
    {
      id: 7,
      category: "symptoms",
      question: "Are you experiencing vaginal itching or irritation?",
      type: "single",
      options: [
        { label: "Yes, intense itching that is hard to ignore", points: 5 },
        { label: "Yes, mild itching or irritation", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question: "Have you noticed any unusual vaginal discharge?",
      type: "single",
      options: [
        { label: "Yes, thick, white, cottage cheese\u2013like discharge with no strong odor", points: 5 },
        { label: "Yes, white or clumpy discharge", points: 3 },
        { label: "Yes, thin or watery discharge with a fishy smell (more like BV)", points: 0 },
        { label: "No unusual discharge", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you noticed any of these vulvar or external symptoms? Select all that apply.",
      type: "multi",
      options: [
        { label: "Redness or swelling of the vulva or labia", points: 3 },
        { label: "A burning sensation when urinating", points: 2 },
        { label: "Pain or discomfort during sexual intercourse", points: 2 },
        { label: "Small cracks or raw areas on the vulvar skin", points: 3 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question: "When did these symptoms begin, and have you had them before?",
      type: "single",
      options: [
        { label: "Within the past few days — first time experiencing this", points: 2 },
        { label: "Within the past few days — but I've had yeast infections before and this feels the same", points: 4 },
        { label: "They keep coming back every few months (recurrent pattern)", points: 4 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 11,
      category: "symptoms",
      question:
        "Have you tried over-the-counter antifungal treatment (Monistat, clotrimazole)? If so, did it help?",
      type: "single",
      options: [
        { label: "Yes, and it resolved my symptoms", points: 2 },
        { label: "Yes, but my symptoms did not improve or came back quickly", points: 4 },
        { label: "No, I have not tried OTC treatment", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
