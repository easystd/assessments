import type { AssessmentConfig } from "./types";

export const hpv: AssessmentConfig = {
  slug: "human-papillomavirus-hpv",
  condition: "Human Papillomavirus (HPV)",
  shortName: "HPV",
  headline: "Do I Have HPV?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer 10 simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle: "Do I Have HPV? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous HPV risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/human-papillomavirus-hpv",
  questions: [
    {
      id: 1,
      category: "context",
      question: "What is your age range?",
      type: "single",
      options: [
        { label: "Under 18", points: 0 },
        { label: "18–24", points: 2 },
        { label: "25–34", points: 2 },
        { label: "35–44", points: 1 },
        { label: "45 or older", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "Have you been vaccinated against HPV?",
      type: "single",
      options: [
        { label: "Yes, fully vaccinated", points: 0 },
        { label: "Yes, partially vaccinated", points: 1 },
        { label: "No", points: 3 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 3,
      category: "exposure",
      question: "How many sexual partners have you had in your lifetime?",
      type: "single",
      options: [
        { label: "None", points: 0 },
        { label: "1–2", points: 1 },
        { label: "3–5", points: 2 },
        { label: "6 or more", points: 3 },
        { label: "Prefer not to say", points: 2 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question: "What types of sexual contact have you had? Select all that apply.",
      type: "multi",
      options: [
        { label: "Vaginal intercourse", points: 2 },
        { label: "Anal intercourse", points: 2 },
        { label: "Oral sex", points: 1 },
        { label: "Skin-to-skin genital contact (without penetration)", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question: "How often do you use barrier protection (condoms, dental dams)?",
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
      id: 6,
      category: "exposure",
      question: "Has a sexual partner told you they have HPV or genital warts?",
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
      question:
        "Have you noticed any warts or unusual growths on or around your genitals, anus, or mouth?",
      type: "single",
      options: [
        { label: "Yes, small flesh-colored or gray bumps", points: 5 },
        { label: "Yes, clustered growths (cauliflower-like)", points: 5 },
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
        { label: "Itching or discomfort in the genital area", points: 2 },
        { label: "Bleeding during or after intercourse", points: 2 },
        { label: "Abnormal Pap smear results (if applicable)", points: 4 },
        { label: "Persistent warts that don't go away", points: 3 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question: "Do you have any of these risk factors? Select all that apply.",
      type: "multi",
      options: [
        { label: "Weakened immune system", points: 3 },
        { label: "Currently a smoker", points: 2 },
        { label: "History of other STIs", points: 2 },
        { label: "Started sexual activity at an early age", points: 1 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question: "When did you first notice these symptoms or changes?",
      type: "single",
      options: [
        { label: "Within the past few weeks", points: 3 },
        { label: "Within the past few months", points: 2 },
        { label: "More than 6 months ago", points: 1 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
