import type { AssessmentConfig } from "./types";

export const hepatitisA: AssessmentConfig = {
  slug: "hepatitis-a",
  condition: "Hepatitis A",
  shortName: "Hep A",
  headline: "Do I Have Hepatitis A?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer a few simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have Hepatitis A? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous hepatitis A risk assessment. Answer questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/hepatitis-a-test.php",
  learnMoreUrl: "https://easystd.com/hepatitis-a",
  questions: [
    {
      id: 1,
      category: "context",
      question:
        "Have you been vaccinated against hepatitis A? (Two doses provide long-term protection.)",
      type: "single",
      options: [
        { label: "Yes, fully vaccinated (both doses)", points: 0 },
        { label: "Yes, but only one dose", points: 1 },
        { label: "No", points: 3 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "Have you ever been diagnosed with hepatitis A before?",
      type: "single",
      options: [
        { label: "Yes — once you recover, you have lifelong immunity", points: 0 },
        { label: "No", points: 1 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 3,
      category: "context",
      question:
        "Do you have any of the following conditions? Select all that apply.",
      type: "multi",
      options: [
        { label: "Chronic liver disease (hepatitis B, hepatitis C, cirrhosis)", points: 3 },
        { label: "HIV or weakened immune system", points: 2 },
        { label: "Currently pregnant", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "Have you traveled to or lived in a region with high hepatitis A rates in the past 2 months? (Central/South America, Africa, Asia, Eastern Europe, the Middle East.)",
      type: "single",
      options: [
        { label: "Yes, within the past 2 weeks", points: 5 },
        { label: "Yes, within the past 2 months", points: 4 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Have you had close contact with someone diagnosed with hepatitis A? (Household member, sexual partner, caregiver.)",
      type: "single",
      options: [
        { label: "Yes, within the past 2 weeks", points: 5 },
        { label: "Yes, within the past 2 months", points: 4 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question:
        "Which of the following risk factors apply to you? Select all that apply.",
      type: "multi",
      options: [
        { label: "Oral-anal sexual contact (rimming)", points: 3 },
        { label: "Men who have sex with men (MSM)", points: 2 },
        { label: "Use of injection or non-injection recreational drugs", points: 3 },
        { label: "Experiencing homelessness or living in a shelter", points: 2 },
        { label: "Working with or caring for someone with hepatitis A", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 7,
      category: "exposure",
      question:
        "Have you eaten raw or undercooked shellfish, or food/water you suspect was contaminated, in the past 2 months? (Hepatitis A spreads through contaminated food and water.)",
      type: "single",
      options: [
        { label: "Yes", points: 3 },
        { label: "Possibly", points: 2 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question:
        "Have you noticed a yellowing of your skin or the whites of your eyes (jaundice)?",
      type: "single",
      options: [
        { label: "Yes, noticeable yellowing", points: 5 },
        { label: "Yes, very slight or I'm not sure", points: 3 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question:
        "Have you experienced any of the following digestive symptoms? Select all that apply.",
      type: "multi",
      options: [
        { label: "Nausea or vomiting", points: 3 },
        { label: "Loss of appetite", points: 2 },
        { label: "Abdominal pain, especially in the upper right side", points: 3 },
        { label: "Diarrhea", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "Have you noticed changes in your urine or stool color?",
      type: "single",
      options: [
        { label: "Yes, dark urine (tea or cola colored)", points: 4 },
        { label: "Yes, pale or clay-colored stool", points: 4 },
        { label: "Both dark urine and pale stool", points: 5 },
        { label: "No changes", points: 0 },
      ],
    },
    {
      id: 11,
      category: "symptoms",
      question:
        "Have you experienced any of these general symptoms? Select all that apply.",
      type: "multi",
      options: [
        { label: "Fatigue or feeling unusually tired", points: 2 },
        { label: "Fever", points: 2 },
        { label: "Joint pain or muscle aches", points: 2 },
        { label: "Itchy skin", points: 1 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 12,
      category: "symptoms",
      question:
        "When did your symptoms begin? (Hepatitis A symptoms typically appear 2–6 weeks after exposure.)",
      type: "single",
      options: [
        { label: "Within the past 1–2 weeks", points: 3 },
        { label: "2–6 weeks ago", points: 4 },
        { label: "More than 6 weeks ago", points: 2 },
        { label: "I have not had any symptoms", points: 0 },
      ],
    },
  ],
};
