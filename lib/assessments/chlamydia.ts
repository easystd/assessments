import type { AssessmentConfig } from "./types";

export const chlamydia: AssessmentConfig = {
  slug: "chlamydia",
  condition: "Chlamydia",
  shortName: "Chlamydia",
  headline: "Do I Have Chlamydia?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer a few simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle: "Do I Have Chlamydia? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous chlamydia risk assessment. Answer questions in under 3 minutes. Get personalized guidance and testing recommendations.",
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
      question: "Have you been diagnosed with chlamydia or gonorrhea before?",
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
      category: "context",
      question: "Are you currently pregnant or planning a pregnancy?",
      type: "single",
      options: [
        { label: "Yes, currently pregnant", points: 3 },
        { label: "Yes, planning a pregnancy", points: 2 },
        { label: "No", points: 0 },
        { label: "Not applicable", points: 0 },
      ],
    },
    {
      id: 5,
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
      id: 6,
      category: "exposure",
      question: "How many sexual partners have you had in the past 6 months?",
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
      id: 8,
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
      id: 9,
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
      id: 10,
      category: "symptoms",
      question:
        "Have you experienced any of the following urogenital symptoms? Select all that apply.",
      type: "multi",
      options: [
        { label: "Pain or burning during urination", points: 3 },
        { label: "Pain during sexual intercourse", points: 3 },
        { label: "Lower abdominal or pelvic pain", points: 3 },
        { label: "Bleeding between periods or after sex (if applicable)", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 11,
      category: "symptoms",
      question:
        "Have you noticed symptoms in any of these other areas? Select all that apply.",
      type: "multi",
      options: [
        { label: "Testicular pain or swelling", points: 3 },
        { label: "Rectal pain, discharge, or bleeding", points: 3 },
        { label: "Eye redness, pain, or discharge", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 12,
      category: "symptoms",
      question:
        "When did your symptoms begin relative to a possible exposure? (Chlamydia symptoms typically appear 7–21 days after contact, if they appear at all.)",
      type: "single",
      options: [
        { label: "Within 1–3 weeks of a new sexual contact", points: 4 },
        { label: "More than 3 weeks after contact", points: 2 },
        { label: "I'm not sure of the timing", points: 1 },
        { label: "I have not had any symptoms", points: 0 },
      ],
    },
  ],
};
