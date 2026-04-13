import type { AssessmentConfig } from "./types";

export const syphilis: AssessmentConfig = {
  slug: "syphilis",
  condition: "Syphilis",
  shortName: "Syphilis",
  headline: "Do I Have Syphilis?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer 10 simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle: "Do I Have Syphilis? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous syphilis risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/syphilis-test.php",
  learnMoreUrl: "https://easystd.com/syphilis",
  questions: [
    {
      id: 1,
      category: "context",
      question: "What is your sex or gender?",
      type: "single",
      options: [
        { label: "Man who has sex with men (MSM)", points: 3 },
        { label: "Man who has sex with women only", points: 2 },
        { label: "Woman", points: 1 },
        { label: "Prefer not to say", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "What is your age range?",
      type: "single",
      options: [
        { label: "25–34", points: 3 },
        { label: "18–24 or 35–44", points: 2 },
        { label: "45 or older", points: 1 },
        { label: "Under 18", points: 0 },
      ],
    },
    {
      id: 3,
      category: "context",
      question: "Have you ever been tested or treated for syphilis?",
      type: "single",
      options: [
        { label: "Yes, I was previously diagnosed and treated", points: 3 },
        { label: "I was tested but it came back negative", points: 0 },
        { label: "I have never been tested for syphilis", points: 2 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "Which types of intimate contact have you had recently? Select all that apply.",
      type: "multi",
      options: [
        { label: "Oral sex (giving or receiving) with a new or casual partner", points: 3 },
        { label: "Condomless vaginal or anal sex", points: 3 },
        { label: "Direct contact with a sore, rash, or lesion on a partner's genitals, anus, or mouth", points: 4 },
        { label: "Sex with multiple partners in the past 6 months", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Which of the following apply to your recent sexual activity? Select all that apply.",
      type: "multi",
      options: [
        { label: "I have met partners through apps or anonymous encounters", points: 2 },
        { label: "I have exchanged sex for money, drugs, or housing", points: 3 },
        { label: "I rarely or never use condoms during sex", points: 3 },
        { label: "I have had sex while under the influence of drugs or alcohol", points: 1 },
        { label: "None of these apply", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question:
        "Has a sexual partner been diagnosed with syphilis, or have you been notified of a syphilis exposure by a partner or health department?",
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
        "Have you noticed a firm, round, usually painless sore or ulcer on or around your genitals, anus, or mouth?",
      type: "single",
      options: [
        { label: "Yes, I currently have one", points: 5 },
        { label: "Yes, but it healed on its own without treatment", points: 4 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you noticed any of these skin or body changes? Select all that apply.",
      type: "multi",
      options: [
        { label: "A rash on my palms, soles of feet, or torso", points: 4 },
        { label: "Patchy hair loss on my scalp or eyebrows", points: 3 },
        { label: "Grayish-white sores or patches inside my mouth", points: 3 },
        { label: "Wartlike, moist growths in my genital or anal area", points: 3 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "exposure",
      question:
        "Do you have HIV, or have you been diagnosed with another STI in the past 12 months?",
      type: "single",
      options: [
        { label: "Yes, I am living with HIV", points: 4 },
        { label: "Yes, I was diagnosed with another STI recently", points: 3 },
        { label: "No", points: 0 },
        { label: "I don't know my HIV status", points: 2 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "When did your symptoms first appear, and have they changed over time?",
      type: "single",
      options: [
        { label: "A painless sore appeared weeks ago and has since healed, now I have a rash or other symptoms", points: 5 },
        { label: "Symptoms appeared within the past few weeks", points: 3 },
        { label: "Symptoms have been present for several months", points: 2 },
        { label: "I have not noticed any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
