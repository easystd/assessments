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
        { label: "Under 18", points: 0 },
        { label: "18–24", points: 3 },
        { label: "25–34", points: 2 },
        { label: "35–44", points: 1 },
        { label: "45 or older", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "When were you last tested for sexually transmitted infections (STIs)?",
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
      question: "What types of sexual contact have you had recently? Select all that apply.",
      type: "multi",
      options: [
        { label: "Vaginal intercourse", points: 2 },
        { label: "Anal intercourse", points: 2 },
        { label: "Oral sex", points: 1 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question: "How often do you use barrier protection (condoms, dental dams)?",
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
      question: "Has a recent sexual partner told you they tested positive for an STI?",
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
        { label: "Yes, watery or milky discharge", points: 4 },
        { label: "Yes, thick or discolored discharge", points: 3 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you experienced any of the following? Select all that apply.",
      type: "multi",
      options: [
        { label: "Pain or burning during urination", points: 4 },
        { label: "Pain during sexual intercourse", points: 3 },
        { label: "Lower abdominal or pelvic pain", points: 3 },
        { label: "Bleeding between periods (if applicable)", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you noticed any of these additional symptoms? Select all that apply.",
      type: "multi",
      options: [
        { label: "Testicular pain or swelling (if applicable)", points: 3 },
        { label: "Rectal pain or discharge", points: 3 },
        { label: "Sore throat (after oral contact)", points: 1 },
        { label: "Eye redness or discharge", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "Did these symptoms appear within the past few weeks, rather than being a long-term condition?",
      type: "single",
      options: [
        { label: "Yes, they are recent", points: 3 },
        { label: "No, they are long-standing", points: 0 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
