import type { AssessmentConfig } from "./types";

export const scabies: AssessmentConfig = {
  slug: "scabies",
  condition: "Scabies",
  shortName: "Scabies",
  headline: "Do I Have Scabies?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer a few simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have Scabies? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous scabies risk assessment. Answer questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/scabies",
  questions: [
    {
      id: 1,
      category: "context",
      question:
        "Do you have a weakened immune system or a skin condition? Select all that apply.",
      type: "multi",
      options: [
        { label: "HIV, organ transplant, or immunosuppressive therapy", points: 3 },
        { label: "Eczema or psoriasis", points: 2 },
        { label: "Elderly or living in a nursing home or care facility", points: 3 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "Have you had scabies before?",
      type: "single",
      options: [
        { label: "Yes — symptoms appeared quickly this time (1–2 days)", points: 4 },
        { label: "Yes — but it was years ago", points: 2 },
        { label: "No or unsure", points: 0 },
      ],
    },
    {
      id: 3,
      category: "exposure",
      question:
        "Have you had prolonged skin-to-skin contact with someone who has an itchy rash? (Scabies requires close contact — a quick handshake is usually not enough.)",
      type: "single",
      options: [
        { label: "Yes, a sexual partner or bed partner", points: 5 },
        { label: "Yes, a household or family member", points: 4 },
        { label: "Yes, in a care facility, dormitory, or similar setting", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "Has someone you live with or are in close contact with been diagnosed with scabies?",
      type: "single",
      options: [
        { label: "Yes", points: 5 },
        { label: "No, but they have a persistent itchy rash", points: 3 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Have you shared bedding, towels, or clothing with someone who may have scabies? (Scabies mites can survive off the body for 2–3 days on fabric.)",
      type: "single",
      options: [
        { label: "Yes", points: 3 },
        { label: "Possibly", points: 2 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question:
        "Are you in a setting where scabies outbreaks are more common? Select all that apply.",
      type: "multi",
      options: [
        { label: "Nursing home or long-term care facility", points: 3 },
        { label: "Dormitory, shelter, or barracks", points: 2 },
        { label: "Prison or detention facility", points: 2 },
        { label: "Childcare center", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 7,
      category: "symptoms",
      question:
        "Are you experiencing intense itching that is significantly worse at night?",
      type: "single",
      options: [
        { label: "Yes, severe itching that disrupts sleep", points: 5 },
        { label: "Yes, itching that worsens at night but is manageable", points: 4 },
        { label: "Yes, general itching but not specifically worse at night", points: 2 },
        { label: "No itching", points: 0 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you noticed a rash with any of the following features? Select all that apply.",
      type: "multi",
      options: [
        { label: "Tiny, raised bumps or blisters in a line or track pattern", points: 4 },
        { label: "Small burrow lines (thin, grayish-white, thread-like marks)", points: 5 },
        { label: "Widespread red, bumpy rash", points: 3 },
        { label: "Thick, crusted patches of skin (crusted/Norwegian scabies)", points: 5 },
        { label: "No rash", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Where are your symptoms located? Select all that apply. (Scabies mites prefer warm skin folds.)",
      type: "multi",
      options: [
        { label: "Between fingers or on wrists", points: 4 },
        { label: "Elbows, armpits, or waistline", points: 3 },
        { label: "Genitals, buttocks, or groin", points: 3 },
        { label: "Breasts (around the nipples)", points: 3 },
        { label: "Widespread across the body", points: 2 },
        { label: "None of these / no rash", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "Are other people in your household or close contacts also experiencing similar itching or rash?",
      type: "single",
      options: [
        { label: "Yes, multiple people", points: 5 },
        { label: "Yes, one other person", points: 4 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 11,
      category: "symptoms",
      question:
        "How long have you had the itching or rash? (First-time scabies symptoms typically take 4–8 weeks to appear after infestation.)",
      type: "single",
      options: [
        { label: "1–2 days (and I've had scabies before)", points: 4 },
        { label: "1–3 weeks", points: 3 },
        { label: "4–8 weeks", points: 4 },
        { label: "More than 2 months", points: 3 },
        { label: "No symptoms", points: 0 },
      ],
    },
    {
      id: 12,
      category: "symptoms",
      question:
        "Have you tried over-the-counter anti-itch creams or antihistamines? Did they help?",
      type: "single",
      options: [
        { label: "Yes, but the itching keeps coming back or barely improves", points: 3 },
        { label: "Yes, and they helped significantly", points: 0 },
        { label: "No, I haven't tried anything yet", points: 1 },
      ],
    },
  ],
};
