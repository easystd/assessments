import type { AssessmentConfig } from "./types";

export const molluscumContagiosum: AssessmentConfig = {
  slug: "molluscum-contagiosum",
  condition: "Molluscum Contagiosum",
  shortName: "Molluscum",
  headline: "Do I Have Molluscum Contagiosum?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer a few simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have Molluscum Contagiosum? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous molluscum contagiosum risk assessment. Answer questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/molluscum-contagiosum",
  questions: [
    {
      id: 1,
      category: "context",
      question: "What is your age range?",
      type: "single",
      options: [
        { label: "Under 18", points: 2 },
        { label: "18–29", points: 2 },
        { label: "30–44", points: 1 },
        { label: "45 or older", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question:
        "Do you have any conditions that affect your immune system? (HIV, organ transplant medications, chemotherapy, or other immunosuppressive therapy.)",
      type: "single",
      options: [
        { label: "Yes", points: 4 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 3,
      category: "context",
      question:
        "Do you have a history of eczema or atopic dermatitis? (Broken or inflamed skin makes it easier for the virus to enter.)",
      type: "single",
      options: [
        { label: "Yes, active eczema", points: 3 },
        { label: "Yes, but it's well controlled", points: 1 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "Have you had skin-to-skin sexual contact with a new or casual partner in the past 2–3 months?",
      type: "single",
      options: [
        { label: "Yes, multiple partners", points: 3 },
        { label: "Yes, one partner", points: 2 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Has a sexual partner or close contact had molluscum contagiosum or unexplained bumps?",
      type: "single",
      options: [
        { label: "Yes, diagnosed with molluscum", points: 5 },
        { label: "Yes, they have unexplained bumps", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question:
        "Have you shared any of the following with others recently? Select all that apply.",
      type: "multi",
      options: [
        { label: "Towels or washcloths", points: 2 },
        { label: "Clothing or athletic gear", points: 2 },
        { label: "Razors", points: 3 },
        { label: "Sports equipment or wrestling/contact sports mats", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 7,
      category: "exposure",
      question:
        "Have you shaved or waxed the genital area, thighs, or lower abdomen recently? (Micro-abrasions from shaving can facilitate spread.)",
      type: "single",
      options: [
        { label: "Yes, regularly", points: 2 },
        { label: "Occasionally", points: 1 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you noticed small, round, firm bumps on your skin?",
      type: "single",
      options: [
        { label: "Yes, with a visible dimple or pit in the center", points: 5 },
        { label: "Yes, smooth and dome-shaped but no dimple", points: 3 },
        { label: "Yes, but they look different from that description", points: 2 },
        { label: "No bumps", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "How would you describe the bumps? Select all that apply.",
      type: "multi",
      options: [
        { label: "Flesh-colored, pearly, or slightly pink", points: 3 },
        { label: "Small (2–5 mm), like a pinhead to a pencil eraser", points: 3 },
        { label: "Painless", points: 2 },
        { label: "Release a waxy or cheesy white substance when squeezed", points: 4 },
        { label: "None of these match", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "Where are the bumps located? Select all that apply.",
      type: "multi",
      options: [
        { label: "Genitals or pubic area", points: 3 },
        { label: "Inner thighs or groin", points: 3 },
        { label: "Lower abdomen or buttocks", points: 2 },
        { label: "Face, neck, arms, or trunk", points: 1 },
        { label: "Not applicable — I haven't noticed bumps", points: 0 },
      ],
    },
    {
      id: 11,
      category: "symptoms",
      question:
        "How many bumps have you noticed, and have they been spreading?",
      type: "single",
      options: [
        { label: "Many bumps (10+) and they've been spreading", points: 4 },
        { label: "A cluster of several bumps (3–10)", points: 3 },
        { label: "Just one or two", points: 2 },
        { label: "No bumps", points: 0 },
      ],
    },
    {
      id: 12,
      category: "symptoms",
      question:
        "How long have the bumps been present? (Molluscum bumps typically appear 2–6 weeks after contact and can persist for months.)",
      type: "single",
      options: [
        { label: "Less than 2 weeks", points: 2 },
        { label: "2–6 weeks", points: 3 },
        { label: "1–3 months", points: 3 },
        { label: "More than 3 months", points: 2 },
        { label: "I haven't noticed any bumps", points: 0 },
      ],
    },
  ],
};
