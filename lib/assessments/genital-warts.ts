import type { AssessmentConfig } from "./types";

export const genitalWarts: AssessmentConfig = {
  slug: "genital-warts",
  condition: "Genital Warts",
  shortName: "Genital Warts",
  headline: "Do I Have Genital Warts?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer a few simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have Genital Warts? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous genital warts risk assessment. Answer questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/genital-warts",
  questions: [
    {
      id: 1,
      category: "context",
      question:
        "Have you been vaccinated against HPV (Gardasil)? (The vaccine protects against HPV 6 and 11, which cause about 90% of genital warts.)",
      type: "single",
      options: [
        { label: "Yes, fully vaccinated (all doses)", points: 0 },
        { label: "Yes, but only some doses", points: 1 },
        { label: "No", points: 3 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "Have you had genital warts before?",
      type: "single",
      options: [
        { label: "Yes, and they were treated but came back", points: 4 },
        { label: "Yes, but they were treated and haven't returned", points: 2 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 3,
      category: "context",
      question:
        "Do you have a weakened immune system? (HIV, organ transplant medication, chemotherapy, or autoimmune treatment.)",
      type: "single",
      options: [
        { label: "Yes", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 4,
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
      id: 5,
      category: "exposure",
      question:
        "What types of intimate skin-to-skin contact have you had recently? Select all that apply.",
      type: "multi",
      options: [
        { label: "Vaginal intercourse", points: 2 },
        { label: "Anal intercourse", points: 3 },
        { label: "Genital-to-genital rubbing or grinding without penetration", points: 2 },
        { label: "Oral sex", points: 1 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question:
        "Has a sexual partner had visible genital warts, or told you they have HPV?",
      type: "single",
      options: [
        { label: "Yes, they had visible warts", points: 5 },
        { label: "Yes, they told me they have HPV", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 7,
      category: "exposure",
      question:
        "How consistently do you use condoms? (Condoms reduce but do not fully prevent HPV — the virus spreads via any skin-to-skin contact in the genital area.)",
      type: "single",
      options: [
        { label: "Always", points: 1 },
        { label: "Most of the time", points: 1 },
        { label: "Sometimes", points: 2 },
        { label: "Rarely or never", points: 3 },
        { label: "Not applicable", points: 0 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you noticed any unusual bumps, growths, or skin changes on or around your genitals or anus?",
      type: "single",
      options: [
        { label: "Yes, one or more bumps or growths", points: 5 },
        { label: "Yes, but I'm not sure if they're warts", points: 3 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question: "How would you describe the appearance of the bumps or growths?",
      type: "single",
      options: [
        { label: "Flesh-colored, soft, and raised with a rough or bumpy surface", points: 5 },
        { label: "Clustered together in a cauliflower-like shape", points: 5 },
        { label: "Small, flat, and smooth", points: 3 },
        { label: "Hard, round, and painless (not rough or cauliflower-like)", points: 1 },
        { label: "I haven't noticed any growths", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "Where are the bumps or growths located? Select all that apply.",
      type: "multi",
      options: [
        { label: "On the penis, scrotum, or groin", points: 3 },
        { label: "On the vulva, vaginal opening, or cervix", points: 3 },
        { label: "Around or inside the anus", points: 3 },
        { label: "On the upper thighs or pubic area", points: 2 },
        { label: "Not applicable — I haven't noticed growths", points: 0 },
      ],
    },
    {
      id: 11,
      category: "symptoms",
      question:
        "Have you experienced any of these symptoms around the affected area? Select all that apply.",
      type: "multi",
      options: [
        { label: "Itching or irritation", points: 2 },
        { label: "Bleeding during sex or when irritated", points: 2 },
        { label: "The growths have been increasing in size or number", points: 3 },
        { label: "Discomfort or tenderness", points: 1 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 12,
      category: "symptoms",
      question:
        "When did you first notice these bumps or growths? (Genital warts typically appear 1–6 months after HPV exposure, but can take longer.)",
      type: "single",
      options: [
        { label: "Within the past few weeks", points: 3 },
        { label: "1–3 months ago", points: 3 },
        { label: "3–6 months ago", points: 2 },
        { label: "More than 6 months ago", points: 1 },
        { label: "I haven't noticed any growths", points: 0 },
      ],
    },
  ],
};
