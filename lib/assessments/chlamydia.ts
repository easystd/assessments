import type { AssessmentConfig } from "./types";

export const chlamydia: AssessmentConfig = {
  slug: "chlamydia",
  condition: "Chlamydia",
  shortName: "Chlamydia",
  headline: "Do I Have Chlamydia?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer 10 simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle: "Do I Have Chlamydia? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous chlamydia risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/chlamydia-test.php",
  learnMoreUrl: "https://easystd.com/chlamydia",
  questions: [
    {
      id: 1,
      category: "context",
      question: "What is your sex or gender?",
      type: "single",
      options: [
        { label: "Woman", points: 2 },
        { label: "Man who has sex with men (MSM)", points: 3 },
        { label: "Man who has sex with women only", points: 1 },
        { label: "Prefer not to say", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "What is your age range?",
      type: "single",
      options: [
        { label: "Under 25", points: 3 },
        { label: "25–29", points: 2 },
        { label: "30–39", points: 1 },
        { label: "40 or older", points: 1 },
      ],
    },
    {
      id: 3,
      category: "context",
      question: "Have you been diagnosed with chlamydia before?",
      type: "single",
      options: [
        { label: "Yes, within the past 12 months", points: 4 },
        { label: "Yes, more than a year ago", points: 2 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "Have you had unprotected sex with a new partner since your last chlamydia test? (Most chlamydia carriers have no symptoms and don't know they're infected.)",
      type: "single",
      options: [
        { label: "Yes, and I have not been tested since", points: 3 },
        { label: "Yes, but I was tested afterward", points: 1 },
        { label: "No new partners since my last test", points: 0 },
        { label: "I have never been tested for chlamydia", points: 2 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "What types of sexual contact have you had recently without a condom? Select all that apply.",
      type: "multi",
      options: [
        { label: "Vaginal intercourse", points: 2 },
        { label: "Anal intercourse", points: 2 },
        { label: "Oral sex (giving or receiving)", points: 1 },
        { label: "All contact was protected or I have not been sexually active", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question:
        "Has a sexual partner been diagnosed with chlamydia or another STI, or have you been notified of an exposure?",
      type: "single",
      options: [
        { label: "Yes, a partner was diagnosed with chlamydia", points: 5 },
        { label: "Yes, a partner was diagnosed with a different STI", points: 3 },
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
        { label: "Yes, clear, watery, or milky discharge", points: 4 },
        { label: "Yes, discharge of a different color or consistency", points: 3 },
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
        { label: "Pain or burning during urination", points: 4 },
        { label: "Pain during sexual intercourse", points: 3 },
        { label: "Lower abdominal or pelvic pain", points: 3 },
        { label: "Bleeding between periods or after sex (if applicable)", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you noticed symptoms in any of these other areas? Select all that apply.",
      type: "multi",
      options: [
        { label: "Testicular pain or swelling", points: 3 },
        { label: "Rectal pain, discharge, or bleeding", points: 3 },
        { label: "Sore throat that developed after oral sexual contact", points: 1 },
        { label: "Eye redness, pain, or discharge", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "context",
      question:
        "When were you last screened for chlamydia? (Annual screening is recommended for sexually active women under 25 and for MSM.)",
      type: "single",
      options: [
        { label: "I have never been screened", points: 3 },
        { label: "More than 1 year ago", points: 2 },
        { label: "Within the past 6–12 months", points: 1 },
        { label: "Within the past 6 months", points: 0 },
      ],
    },
  ],
};
