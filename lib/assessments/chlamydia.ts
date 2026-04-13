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
      id: 2,
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
      id: 3,
      category: "exposure",
      question: "Have you had a new sexual partner in the past 90 days?",
      type: "single",
      options: [
        { label: "Yes", points: 3 },
        { label: "No, same partner(s) as before", points: 1 },
        { label: "I have not been sexually active", points: 0 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "What types of sexual contact have you had recently without a condom? Select all that apply.",
      type: "multi",
      options: [
        { label: "Vaginal intercourse", points: 2 },
        { label: "Anal intercourse", points: 2 },
        { label: "Oral sex (giving or receiving)", points: 1 },
        { label: "All contact was protected with condoms", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question: "How consistently do you use condoms during sexual contact?",
      type: "single",
      options: [
        { label: "Always", points: 0 },
        { label: "Most of the time", points: 1 },
        { label: "Sometimes", points: 2 },
        { label: "Rarely or never", points: 3 },
        { label: "Not applicable", points: 0 },
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
      category: "symptoms",
      question:
        "Which best describes your current situation?",
      type: "single",
      options: [
        { label: "I have symptoms and recent unprotected sexual contact", points: 3 },
        { label: "I have no symptoms, but I had recent unprotected sex with a new or multiple partners", points: 2 },
        { label: "I have symptoms but no recent sexual contact", points: 1 },
        { label: "I have no symptoms and no recent risk factors", points: 0 },
      ],
    },
  ],
};
