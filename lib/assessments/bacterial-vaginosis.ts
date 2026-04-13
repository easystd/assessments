import type { AssessmentConfig } from "./types";

export const bacterialVaginosis: AssessmentConfig = {
  slug: "bacterial-vaginosis",
  condition: "Bacterial Vaginosis (BV)",
  shortName: "BV",
  headline: "Do I Have Bacterial Vaginosis?",
  subtitle: "Free, Private Symptom & Risk Assessment",
  description:
    "Answer a few simple questions about your symptoms and risk factors. Get personalized guidance in under 3 minutes.",
  metaTitle:
    "Do I Have Bacterial Vaginosis? | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous bacterial vaginosis risk assessment. Answer questions in under 3 minutes. Get personalized guidance and testing recommendations.",
  affiliateUrl: "https://www.stdcheck.com/std-test-panel.php",
  learnMoreUrl: "https://easystd.com/bacterial-vaginosis",
  questions: [
    {
      id: 1,
      category: "context",
      question: "Have you had bacterial vaginosis before?",
      type: "single",
      options: [
        { label: "Yes, within the past year", points: 4 },
        { label: "Yes, more than a year ago", points: 2 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 2,
      category: "context",
      question: "Are you currently pregnant?",
      type: "single",
      options: [
        { label: "Yes", points: 2 },
        { label: "No", points: 0 },
        { label: "Possibly", points: 1 },
        { label: "Not applicable", points: 0 },
      ],
    },
    {
      id: 3,
      category: "exposure",
      question:
        "Do you use any of the following? Select all that apply.",
      type: "multi",
      options: [
        { label: "Vaginal douches or internal washes", points: 4 },
        { label: "Scented soaps, sprays, or wipes in the vaginal area", points: 2 },
        { label: "Bubble bath or scented bath products", points: 1 },
        { label: "None of these — I use only water or unscented products", points: 0 },
      ],
    },
    {
      id: 4,
      category: "exposure",
      question: "Have you had a new sexual partner recently, or multiple partners in the past 12 months?",
      type: "single",
      options: [
        { label: "Yes, a new partner in the past few months", points: 3 },
        { label: "Yes, multiple partners in the past year", points: 3 },
        { label: "No, same partner or no partners", points: 0 },
        { label: "Prefer not to say", points: 2 },
      ],
    },
    {
      id: 5,
      category: "exposure",
      question: "Do you have a female sexual partner?",
      type: "single",
      options: [
        { label: "Yes", points: 2 },
        { label: "No", points: 0 },
        { label: "Prefer not to say", points: 1 },
      ],
    },
    {
      id: 6,
      category: "exposure",
      question: "Have you recently taken antibiotics for any reason?",
      type: "single",
      options: [
        { label: "Yes, within the past month", points: 3 },
        { label: "Yes, within the past 3 months", points: 1 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 7,
      category: "exposure",
      question: "Do you currently have an IUD (intrauterine device)?",
      type: "single",
      options: [
        { label: "Yes", points: 2 },
        { label: "No", points: 0 },
        { label: "Unsure", points: 0 },
      ],
    },
    {
      id: 8,
      category: "symptoms",
      question: "Have you noticed any unusual vaginal discharge?",
      type: "single",
      options: [
        { label: "Yes, thin grayish-white or milky discharge", points: 5 },
        { label: "Yes, discharge that looks or feels different than usual", points: 3 },
        { label: "No change in discharge", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 9,
      category: "symptoms",
      question: "Have you noticed a vaginal odor?",
      type: "single",
      options: [
        { label: "Yes, a fishy smell — especially noticeable after sex or during menstruation", points: 5 },
        { label: "Yes, a mild or different-than-usual odor", points: 3 },
        { label: "No unusual odor", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
    {
      id: 10,
      category: "symptoms",
      question:
        "How does your discharge compare to typical yeast infection symptoms?",
      type: "single",
      options: [
        { label: "My discharge is thin and watery — NOT thick or cottage cheese-like", points: 2 },
        { label: "My discharge is thick, white, and clumpy (more like a yeast infection)", points: 0 },
        { label: "I'm not sure how to describe it", points: 1 },
        { label: "I don't have unusual discharge", points: 0 },
      ],
    },
    {
      id: 11,
      category: "symptoms",
      question:
        "Do your symptoms seem to worsen during or just after your menstrual period?",
      type: "single",
      options: [
        { label: "Yes, noticeably worse during or after my period", points: 3 },
        { label: "Possibly, I'm not sure", points: 1 },
        { label: "No", points: 0 },
        { label: "Not applicable (no periods)", points: 0 },
      ],
    },
    {
      id: 12,
      category: "symptoms",
      question: "When did these symptoms start, and do they recur?",
      type: "single",
      options: [
        { label: "They started recently and this is my first episode", points: 2 },
        { label: "They started recently, but I've had BV before", points: 4 },
        { label: "They come and go repeatedly over months", points: 4 },
        { label: "I haven't had any symptoms", points: 0 },
        { label: "Unsure", points: 1 },
      ],
    },
  ],
};
