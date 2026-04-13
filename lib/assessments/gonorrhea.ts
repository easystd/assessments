import type { AssessmentConfig } from "./types";

export const gonorrhea: AssessmentConfig = {
  slug: "gonorrhea",
  condition: "Gonorrhea",
  shortName: "Gonorrhea",
  headline: "Do I Have Gonorrhea?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer 10 simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle: "Do I Have Gonorrhea? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous gonorrhea risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/gonorrhea-test.php",
  learnMoreUrl: "https://easystd.com/gonorrhea",
  questions: [
    {
      id: 1,
      category: "context",
      question: "What is your age and gender?",
      type: "single",
      options: [
        { label: "Man aged 20–29", points: 3 },
        { label: "Man of another age", points: 2 },
        { label: "Woman aged 15–24", points: 3 },
        { label: "Woman of another age", points: 1 },
        { label: "Under 15", points: 0 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "Have you been diagnosed with gonorrhea or another STI before?",
      type: "single",
      options: [
        { label: "Yes, gonorrhea specifically", points: 3 },
        { label: "Yes, a different STI (chlamydia, syphilis, etc.)", points: 2 },
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
        "Which types of sexual contact have you had recently? Select all that apply.",
      type: "multi",
      options: [
        { label: "Vaginal intercourse without a condom", points: 2 },
        { label: "Anal intercourse without a condom", points: 3 },
        { label: "Giving oral sex without protection", points: 2 },
        { label: "Receiving oral sex", points: 1 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Which of the following apply to your recent sexual activity? Select all that apply.",
      type: "multi",
      options: [
        { label: "I have had sex with men (MSM)", points: 3 },
        { label: "I have had a new sexual partner recently", points: 2 },
        { label: "I have had sex while under the influence of drugs or alcohol", points: 1 },
        { label: "None of these apply", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question:
        "Has a sexual partner been diagnosed with gonorrhea, or have you been notified of a gonorrhea exposure?",
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
      question: "Have you noticed any unusual genital discharge?",
      type: "single",
      options: [
        { label: "Yes, thick yellowish or greenish discharge", points: 5 },
        { label: "Yes, white or cloudy discharge", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you experienced any of the following urogenital symptoms? Select all that apply.",
      type: "multi",
      options: [
        { label: "Burning or pain during urination", points: 4 },
        { label: "Increased frequency of urination", points: 2 },
        { label: "Testicular pain or swelling", points: 3 },
        { label: "Lower abdominal or pelvic pain", points: 3 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you noticed symptoms at any of these other body sites? Select all that apply.",
      type: "multi",
      options: [
        { label: "Persistent sore throat after oral sexual contact", points: 3 },
        { label: "Rectal pain, itching, discharge, or bleeding", points: 3 },
        { label: "Eye redness, pain, or pus-like discharge", points: 3 },
        { label: "Bleeding between periods or after sex (if applicable)", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "When did your symptoms first appear after your most recent sexual contact?",
      type: "single",
      options: [
        { label: "Within 1–14 days", points: 4 },
        { label: "More than 2 weeks later", points: 1 },
        { label: "I'm not sure of the timing", points: 1 },
        { label: "I have not had any symptoms", points: 0 },
      ],
    },
  ],
};
