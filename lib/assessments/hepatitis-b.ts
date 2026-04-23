import type { AssessmentConfig } from "./types";

export const hepatitisB: AssessmentConfig = {
  slug: "hepatitis-b",
  condition: "Hepatitis B",
  shortName: "Hep B",
  headline: "Do I Have Hepatitis B?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer a few simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have Hepatitis B? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous hepatitis B risk assessment. Answer questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/hepatitis-b-test.php",
  learnMoreUrl: "https://easystd.com/hepatitis-b",
  questions: [
    {
      id: 1,
      category: "context",
      question:
        "Have you been vaccinated against hepatitis B? (The standard series is 3 doses.)",
      type: "single",
      options: [
        { label: "Yes, fully vaccinated (all doses)", points: 0 },
        { label: "Yes, but I didn't complete all doses", points: 2 },
        { label: "No", points: 3 },
        { label: "Unsure", points: 2 },
      ],
    },
    {
      id: 2,
      category: "context",
      question:
        "Were you born in a region with high hepatitis B rates? (Sub-Saharan Africa, East/Southeast Asia, the Pacific Islands, parts of South America and Eastern Europe.)",
      type: "single",
      options: [
        { label: "Yes", points: 3 },
        { label: "No", points: 0 },
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
        { label: "HIV or a weakened immune system", points: 3 },
        { label: "Chronic liver disease or hepatitis C", points: 3 },
        { label: "Kidney disease or on dialysis", points: 3 },
        { label: "Diabetes", points: 1 },
        { label: "Currently pregnant", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question:
        "Have you had unprotected sex with a new or casual partner in the past 6 months? (Hepatitis B is 50–100 times more infectious than HIV through sexual contact.)",
      type: "single",
      options: [
        { label: "Yes, multiple partners", points: 4 },
        { label: "Yes, one partner", points: 2 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question:
        "Has a sexual partner or household member been diagnosed with hepatitis B?",
      type: "single",
      options: [
        { label: "Yes, a sexual partner", points: 5 },
        { label: "Yes, a household member", points: 4 },
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
        { label: "Men who have sex with men (MSM)", points: 2 },
        { label: "Injection drug use (current or past), or sharing needles/equipment", points: 4 },
        { label: "Occupational exposure to blood (healthcare, first responder)", points: 2 },
        { label: "Received a blood transfusion or organ transplant before 1992", points: 3 },
        { label: "Tattoo or piercing in an unregulated setting", points: 2 },
        { label: "None of the above", points: 0 },
      ],
    },
    {
      id: 7,
      category: "exposure",
      question:
        "Have you shared personal items that may have had blood on them? (Razors, toothbrushes, nail clippers, glucose monitors.)",
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
        "Have you experienced abdominal pain or discomfort, especially in the upper right area (where the liver is)?",
      type: "single",
      options: [
        { label: "Yes, persistent or severe pain", points: 4 },
        { label: "Yes, mild or occasional discomfort", points: 2 },
        { label: "No", points: 0 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "Have you noticed changes in your urine or stool?",
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
        { label: "Fatigue or feeling unusually tired for weeks", points: 3 },
        { label: "Nausea, vomiting, or loss of appetite", points: 3 },
        { label: "Fever", points: 2 },
        { label: "Joint pain or muscle aches", points: 2 },
        { label: "None of these", points: 0 },
      ],
    },
    {
      id: 12,
      category: "symptoms",
      question:
        "When did your symptoms begin? (Hepatitis B symptoms typically appear 6 weeks to 6 months after exposure. Many adults have no symptoms at all.)",
      type: "single",
      options: [
        { label: "Within the past 1–2 months", points: 3 },
        { label: "2–6 months ago", points: 4 },
        { label: "More than 6 months ago", points: 2 },
        { label: "I have not had any symptoms", points: 0 },
      ],
    },
  ],
};
