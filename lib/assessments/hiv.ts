import type { AssessmentConfig } from "./types";

export const hiv: AssessmentConfig = {
  slug: "hiv-aids",
  condition: "HIV",
  shortName: "HIV",
  headline: "Do I Have HIV?",
  subtitle: "Free, Private Risk & Symptom Assessment",
  description:
    "Answer 10 simple questions about your risk factors and symptoms. Get personalized guidance in under 3 minutes.",
  metaTitle: "Do I Have HIV? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous HIV risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/hiv-test.php",
  learnMoreUrl: "https://easystd.com/hiv-aids",
  questions: [
    {
      id: 1,
      category: "context",
      question: "When were you last tested for HIV?",
      type: "single",
      options: [
        { label: "Within the past 6 months", points: 0 },
        { label: "6–12 months ago", points: 1 },
        { label: "More than 1 year ago", points: 2 },
        { label: "I have never been tested", points: 3 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "Are you currently taking PrEP (pre-exposure prophylaxis) or PEP (post-exposure prophylaxis)?",
      type: "single",
      options: [
        { label: "Yes, I take PrEP consistently", points: 0 },
        { label: "Yes, but I sometimes miss doses", points: 1 },
        { label: "I recently started PEP after an exposure", points: 2 },
        { label: "No", points: 2 },
        { label: "I'm not sure what PrEP/PEP is", points: 2 },
      ],
    },
    {
      id: 3,
      category: "exposure",
      question:
        "Which of these high-risk exposures apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "Shared needles, syringes, or injection equipment", points: 5 },
        { label: "Sexual contact with someone living with HIV (not virally suppressed)", points: 5 },
        { label: "Occupational exposure (needlestick, blood splash)", points: 3 },
        { label: "Blood transfusion or medical procedure in a country with limited screening", points: 3 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "What types of sexual contact have you had recently without a condom? Select all that apply.",
      type: "multi",
      options: [
        { label: "Receptive anal intercourse", points: 4 },
        { label: "Insertive anal intercourse", points: 2 },
        { label: "Vaginal intercourse", points: 2 },
        { label: "Oral sex", points: 1 },
        { label: "All contact was protected or none applies", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Have you been diagnosed with another STI (syphilis, gonorrhea, chlamydia, herpes) in the past 12 months?",
      type: "single",
      options: [
        { label: "Yes", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question:
        "Do any of these additional risk contexts apply? Select all that apply.",
      type: "multi",
      options: [
        { label: "Sex with multiple or anonymous partners", points: 3 },
        { label: "Sex work (exchanging sex for money, drugs, or housing)", points: 3 },
        { label: "Sex while under the influence of drugs (especially methamphetamine or poppers)", points: 2 },
        { label: "Living in or traveling to a region with high HIV prevalence", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 7,
      category: "symptoms",
      question:
        "Within 2–4 weeks after a potential exposure, did you experience a flu-like illness?",
      type: "single",
      options: [
        { label: "Yes — fever, sore throat, rash, and swollen lymph nodes together", points: 5 },
        { label: "Yes — some flu-like symptoms (fever, body aches)", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you experienced any of these persistent symptoms lasting weeks or longer? Select all that apply.",
      type: "multi",
      options: [
        { label: "Unexplained weight loss (more than 10 lbs)", points: 4 },
        { label: "Chronic diarrhea lasting more than a month", points: 3 },
        { label: "Drenching night sweats", points: 3 },
        { label: "Persistent fatigue not explained by other causes", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you noticed any of these signs that may suggest immune suppression? Select all that apply.",
      type: "multi",
      options: [
        { label: "Recurrent or unusual infections (thrush, pneumonia, shingles at a young age)", points: 4 },
        { label: "White patches or sores in the mouth that won't heal", points: 3 },
        { label: "Persistent swollen lymph nodes in multiple areas", points: 2 },
        { label: "Skin rashes or lesions that are new or unusual", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question: "When did your symptoms first appear relative to a potential exposure?",
      type: "single",
      options: [
        { label: "2–4 weeks after exposure (acute phase)", points: 4 },
        { label: "Months after exposure (symptoms developed gradually)", points: 3 },
        { label: "I have had these symptoms for a long time", points: 1 },
        { label: "I have not had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
