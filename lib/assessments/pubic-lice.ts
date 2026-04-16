import type { AssessmentConfig } from "./types";

export const pubicLice: AssessmentConfig = {
  slug: "pubic-lice-crabs",
  condition: "Pubic Lice (Crabs)",
  shortName: "Pubic Lice",
  headline: "Do I Have Pubic Lice (Crabs)?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer a few simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have Pubic Lice (Crabs)? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous pubic lice (crabs) risk assessment. Answer questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/pubic-lice",
  questions: [
    {
      id: 1,
      category: "context",
      question: "Have you had pubic lice (crabs) before?",
      type: "single",
      options: [
        { label: "Yes, and treatment resolved it", points: 2 },
        { label: "Yes, and it was difficult to get rid of", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question:
        "Do you currently have body hair in the pubic area? (Pubic lice need coarse hair to survive — they cannot infest fine head hair.)",
      type: "single",
      options: [
        { label: "Yes, full pubic hair", points: 2 },
        { label: "Yes, trimmed but present", points: 1 },
        { label: "No, fully shaved or waxed", points: 0 },
      ],
    },
    {
      id: 3,
      category: "exposure",
      question:
        "Have you had sexual contact (genital-to-genital, body-to-body) with someone in the past month? (Pubic lice spread primarily through close body contact.)",
      type: "single",
      options: [
        { label: "Yes, with a new or casual partner", points: 3 },
        { label: "Yes, with a regular partner", points: 1 },
        { label: "No sexual contact recently", points: 0 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "Has a sexual partner told you they have pubic lice, or have you noticed them scratching their pubic area?",
      type: "single",
      options: [
        { label: "Yes, they were diagnosed with pubic lice", points: 5 },
        { label: "Yes, they've been scratching a lot", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Have you shared bedding, towels, or clothing with someone who may have pubic lice? (Lice can survive off the body for 1–2 days.)",
      type: "single",
      options: [
        { label: "Yes", points: 2 },
        { label: "Possibly", points: 1 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question: "How many sexual partners have you had in the past 3 months?",
      type: "single",
      options: [
        { label: "4 or more", points: 3 },
        { label: "2–3", points: 2 },
        { label: "1", points: 1 },
        { label: "None", points: 0 },
      ],
    },
    {
      id: 7,
      category: "symptoms",
      question:
        "Are you experiencing itching in the pubic or groin area?",
      type: "single",
      options: [
        { label: "Yes, intense itching that is worse at night", points: 5 },
        { label: "Yes, moderate itching", points: 3 },
        { label: "Yes, mild itching", points: 2 },
        { label: "No itching", points: 0 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you noticed any of the following in your pubic hair? Select all that apply.",
      type: "multi",
      options: [
        { label: "Tiny, tan or grayish-white insects (about the size of a pinhead)", points: 5 },
        { label: "Small white or yellowish oval eggs (nits) attached to hair shafts", points: 5 },
        { label: "Dark or rust-colored specks on underwear (lice droppings or blood)", points: 4 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you noticed bluish-gray spots (maculae ceruleae) on your skin where the itching is? (These are a classic sign of lice bites.)",
      type: "single",
      options: [
        { label: "Yes", points: 4 },
        { label: "I'm not sure", points: 2 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "Where are your symptoms? Select all that apply. (Pubic lice prefer coarse body hair.)",
      type: "multi",
      options: [
        { label: "Pubic hair / groin", points: 3 },
        { label: "Thighs or lower abdomen", points: 2 },
        { label: "Chest or armpit hair", points: 2 },
        { label: "Beard or mustache", points: 1 },
        { label: "Eyebrows or eyelashes", points: 2 },
        { label: "No symptoms in any area", points: 0 },
      ],
    },
    {
      id: 11,
      category: "symptoms",
      question:
        "Have you noticed skin irritation or small red bite marks in the affected area?",
      type: "single",
      options: [
        { label: "Yes, visible bite marks or sores from scratching", points: 3 },
        { label: "Yes, mild redness or irritation", points: 2 },
        { label: "No visible skin changes", points: 0 },
      ],
    },
    {
      id: 12,
      category: "symptoms",
      question:
        "When did the itching start? (Pubic lice symptoms typically appear within 1–3 weeks of infestation.)",
      type: "single",
      options: [
        { label: "Within the past 1–3 weeks", points: 4 },
        { label: "Within the past month", points: 3 },
        { label: "More than a month ago", points: 2 },
        { label: "No itching", points: 0 },
      ],
    },
  ],
};
