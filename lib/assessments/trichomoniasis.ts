import type { AssessmentConfig } from "./types";

export const trichomoniasis: AssessmentConfig = {
  slug: "trichomoniasis",
  condition: "Trichomoniasis",
  shortName: "Trich",
  headline: "Do I Have Trichomoniasis?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer a few simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have Trichomoniasis? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous trichomoniasis risk assessment. Answer questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/trichomoniasis",
  questions: [
    {
      id: 1,
      category: "context",
      question: "What is your sex or gender?",
      type: "single",
      options: [
        { label: "Woman", points: 3 },
        { label: "Man who has sex with women", points: 1 },
        { label: "Man who has sex with men (MSM)", points: 0 },
        { label: "Prefer not to say", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "What is your age range?",
      type: "single",
      options: [
        { label: "Under 25", points: 2 },
        { label: "25–34", points: 2 },
        { label: "35–44", points: 2 },
        { label: "45 or older", points: 1 },
      ],
    },
    {
      id: 3,
      category: "context",
      question:
        "Have you been diagnosed with trichomoniasis or another STI before?",
      type: "single",
      options: [
        { label: "Yes, trichomoniasis specifically", points: 4 },
        { label: "Yes, a different STI", points: 2 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 4,
      category: "context",
      question:
        "Do you have any conditions that may increase susceptibility? Select all that apply.",
      type: "multi",
      options: [
        { label: "HIV or weakened immune system", points: 3 },
        { label: "Bacterial vaginosis (BV) — current or recurring", points: 2 },
        { label: "Currently pregnant", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question: "How many sexual partners have you had in the past 12 months?",
      type: "single",
      options: [
        { label: "4 or more", points: 3 },
        { label: "2–3", points: 2 },
        { label: "1", points: 1 },
        { label: "None", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question:
        "What types of sexual contact have you had recently? Select all that apply. (Trichomoniasis spreads primarily through vaginal intercourse.)",
      type: "multi",
      options: [
        { label: "Vaginal intercourse without a condom", points: 3 },
        { label: "Vaginal intercourse with a condom", points: 1 },
        { label: "Vulva-to-vulva contact", points: 2 },
        { label: "Only oral or anal sex", points: 0 },
        { label: "No sexual contact recently", points: 0 },
      ],
    },
    {
      id: 7,
      category: "exposure",
      question:
        "Has a sexual partner been diagnosed with trichomoniasis, or told you they have symptoms?",
      type: "single",
      options: [
        { label: "Yes, a partner was diagnosed with trich", points: 5 },
        { label: "Yes, a partner has unexplained genital symptoms", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 8,
      category: "exposure",
      question:
        "If you were previously treated for trichomoniasis, was your partner also treated at the same time? (Reinfection is common if both partners aren't treated.)",
      type: "single",
      options: [
        { label: "No, my partner was not treated", points: 4 },
        { label: "I'm not sure if my partner was treated", points: 3 },
        { label: "Yes, we were both treated", points: 1 },
        { label: "I have never been treated for trich", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you noticed any unusual vaginal or penile discharge?",
      type: "single",
      options: [
        { label: "Yes, frothy yellowish-green discharge with a strong odor", points: 5 },
        { label: "Yes, thin grayish or yellowish discharge", points: 3 },
        { label: "Yes, discharge of another color or consistency", points: 2 },
        { label: "No unusual discharge", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "Have you noticed a strong, unpleasant genital odor? (Trichomoniasis often causes a fishy or musty smell, especially after sex.)",
      type: "single",
      options: [
        { label: "Yes, a strong fishy or foul smell", points: 4 },
        { label: "Yes, a mild or occasional odor", points: 2 },
        { label: "No unusual odor", points: 0 },
      ],
    },
    {
      id: 11,
      category: "symptoms",
      question:
        "Have you experienced any of the following symptoms? Select all that apply.",
      type: "multi",
      options: [
        { label: "Intense itching or irritation in the genital area", points: 3 },
        { label: "Burning or pain during urination", points: 2 },
        { label: "Pain or discomfort during sex", points: 3 },
        { label: "Redness, soreness, or swelling of the vulva or penis tip", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 12,
      category: "symptoms",
      question:
        "When did your symptoms start, and have you noticed any pattern? (Trich symptoms in women often appear or worsen during or just after menstruation.)",
      type: "single",
      options: [
        { label: "Symptoms appeared or worsened around my period", points: 4 },
        { label: "Symptoms started within the past 1–4 weeks", points: 3 },
        { label: "Symptoms have been present for more than a month", points: 2 },
        { label: "I have not had any symptoms", points: 0 },
      ],
    },
  ],
};
