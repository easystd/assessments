import type { AssessmentConfig } from "./types";

export const herpes: AssessmentConfig = {
  slug: "genital-herpes",
  condition: "Genital Herpes (HSV-1 & HSV-2)",
  shortName: "Herpes",
  headline: "Do I Have Genital Herpes?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer a few simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have Genital Herpes? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous genital herpes risk assessment. Answer questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/herpes-test.php",
  learnMoreUrl: "https://easystd.com/genital-herpes",
  questions: [
    {
      id: 1,
      category: "context",
      question: "Have you ever been specifically tested for herpes (HSV blood test or swab)?",
      type: "single",
      options: [
        { label: "Yes, and it was positive", points: 2 },
        { label: "Yes, and it was negative", points: 0 },
        { label: "No — herpes is often not included in standard STI panels", points: 2 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "Do you have a history of cold sores (oral herpes/HSV-1)?",
      type: "single",
      options: [
        { label: "Yes, I get cold sores", points: 2 },
        { label: "A partner gets cold sores and has given me oral sex", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 3,
      category: "context",
      question: "Are you currently pregnant or planning to become pregnant?",
      type: "single",
      options: [
        { label: "Yes, and I have or suspect herpes", points: 3 },
        { label: "Yes, but I have no herpes concerns", points: 1 },
        { label: "No", points: 0 },
        { label: "Not applicable", points: 0 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "How many lifetime sexual partners have you had? (Herpes risk is cumulative — the virus can transmit even without visible symptoms.)",
      type: "single",
      options: [
        { label: "10 or more", points: 3 },
        { label: "4–9", points: 2 },
        { label: "1–3", points: 1 },
        { label: "None", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "What types of skin-to-skin intimate contact have you had recently? Select all that apply.",
      type: "multi",
      options: [
        { label: "Vaginal intercourse", points: 2 },
        { label: "Anal intercourse", points: 2 },
        { label: "Receiving oral sex from someone with cold sores or unknown oral herpes status", points: 3 },
        { label: "Genital-to-genital skin contact without penetration", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question:
        "How consistently do you use condoms? (Note: condoms reduce but do not fully prevent herpes, which spreads via skin-to-skin contact.)",
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
      id: 7,
      category: "exposure",
      question: "Has a sexual partner told you they have genital herpes (HSV-1 or HSV-2)?",
      type: "single",
      options: [
        { label: "Yes", points: 5 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you noticed any painful blisters, sores, or ulcers on or around your genitals, buttocks, thighs, or anus?",
      type: "single",
      options: [
        { label: "Yes, I currently have them", points: 5 },
        { label: "Yes, they healed but have come back at least once", points: 5 },
        { label: "Yes, but they healed and have not returned", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you experienced any of these prodromal or outbreak-associated symptoms? Select all that apply.",
      type: "multi",
      options: [
        { label: "Tingling, itching, or burning in the genital area BEFORE sores appeared", points: 4 },
        { label: "Pain or burning during urination when sores are present", points: 2 },
        { label: "Swollen or tender lymph nodes in the groin", points: 2 },
        { label: "Fever, body aches, or headache with the first outbreak", points: 3 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "exposure",
      question:
        "Do any of these factors that increase herpes susceptibility apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "I have a weakened immune system (HIV, immunosuppressive medication)", points: 3 },
        { label: "I have had sexual contact during a partner's visible outbreak or prodromal symptoms", points: 4 },
        { label: "I have had another STI diagnosed in the past year", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 11,
      category: "symptoms",
      question: "How would you describe the pattern of your symptoms?",
      type: "single",
      options: [
        { label: "They come and go — I have had more than one episode", points: 5 },
        { label: "This is the first time I have experienced these symptoms", points: 3 },
        { label: "They appeared once, healed, and have not returned", points: 2 },
        { label: "I have not had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
