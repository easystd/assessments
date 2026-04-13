import type { AssessmentConfig } from "./types";

export const hpv: AssessmentConfig = {
  slug: "human-papillomavirus-hpv",
  condition: "Human Papillomavirus (HPV)",
  shortName: "HPV",
  headline: "Do I Have HPV?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer a few simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle: "Do I Have HPV? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous HPV risk assessment. Answer questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/human-papillomavirus-hpv",
  questions: [
    {
      id: 1,
      category: "context",
      question: "What is your sex or gender?",
      type: "single",
      options: [
        { label: "Man who has sex with men (MSM)", points: 3 },
        { label: "Man who has sex with women only", points: 1 },
        { label: "Woman", points: 2 },
        { label: "Prefer not to say", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "Have you been vaccinated against HPV (Gardasil)?",
      type: "single",
      options: [
        { label: "Yes, fully vaccinated (all doses)", points: 0 },
        { label: "Yes, but only some doses", points: 1 },
        { label: "No", points: 3 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 3,
      category: "context",
      question: "Have you ever had an abnormal Pap smear, HPV test, or cervical/anal screening result?",
      type: "single",
      options: [
        { label: "Yes, abnormal results within the past 2 years", points: 4 },
        { label: "Yes, but more than 2 years ago and follow-ups were normal", points: 2 },
        { label: "No or not applicable", points: 0 },
        { label: "I have never been screened", points: 2 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "At what age did you first become sexually active? (Earlier sexual debut increases cumulative HPV exposure.)",
      type: "single",
      options: [
        { label: "Under 16", points: 3 },
        { label: "16–18", points: 2 },
        { label: "19 or older", points: 1 },
        { label: "Not yet sexually active", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question: "How many lifetime sexual partners have you had?",
      type: "single",
      options: [
        { label: "10 or more", points: 3 },
        { label: "4–9", points: 2 },
        { label: "1–3", points: 1 },
        { label: "None", points: 0 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question:
        "What types of sexual contact have you had? Select all that apply.",
      type: "multi",
      options: [
        { label: "Vaginal intercourse", points: 2 },
        { label: "Anal intercourse", points: 2 },
        { label: "Oral sex", points: 1 },
        { label: "Genital-to-genital skin contact without penetration", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 7,
      category: "exposure",
      question:
        "How consistently do you use condoms? (Note: condoms reduce HPV risk but do not fully prevent it, since HPV spreads via skin-to-skin contact.)",
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
      category: "exposure",
      question:
        "Do any of these HPV risk-amplifying factors apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "A sexual partner has HPV or genital warts", points: 4 },
        { label: "Weakened immune system (HIV, transplant medication, autoimmune treatment)", points: 3 },
        { label: "I am a current smoker", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you noticed any warts or unusual growths on or around your genitals, anus, or mouth?",
      type: "single",
      options: [
        { label: "Yes, small flesh-colored or grayish soft bumps", points: 5 },
        { label: "Yes, clustered or cauliflower-like growths", points: 5 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "Have you experienced any of the following genital or cervical symptoms? Select all that apply.",
      type: "multi",
      options: [
        { label: "Itching, burning, or discomfort around warts or genital area", points: 2 },
        { label: "Bleeding during or after intercourse", points: 3 },
        { label: "Changes in a mole or lesion in the genital area", points: 2 },
        { label: "Unusual vaginal or anal discharge", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 11,
      category: "symptoms",
      question:
        "Have you noticed any of these oral or throat symptoms? (These may indicate a condition requiring immediate medical evaluation.) Select all that apply.",
      type: "multi",
      options: [
        { label: "Persistent sore throat or hoarseness lasting weeks", points: 3 },
        { label: "Difficulty swallowing or a lump in the throat", points: 3 },
        { label: "Warts or unusual growths in the mouth or on the tongue", points: 4 },
        { label: "Persistent ear pain on one side", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 12,
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
