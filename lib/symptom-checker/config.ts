import type {
  SymptomCheckerQuestion,
  SymptomCheckerConfig,
  ConditionInfo,
} from "./types";

/* ------------------------------------------------------------------ */
/*  Condition slugs (short keys used in score maps)                   */
/* ------------------------------------------------------------------ */
// ch = chlamydia, gn = gonorrhea, sy = syphilis, hv = hiv,
// hs = herpes, hp = hpv, tr = trichomoniasis,
// pd = pid, bv = bv, ut = uti, yi = yeast

const conditions: ConditionInfo[] = [
  { slug: "ch", name: "Chlamydia", shortName: "Chlamydia", testUrl: "https://www.stdcheck.com/chlamydia-test.php", learnMoreUrl: "https://easystd.com/chlamydia" },
  { slug: "gn", name: "Gonorrhea", shortName: "Gonorrhea", testUrl: "https://www.stdcheck.com/gonorrhea-test.php", learnMoreUrl: "https://easystd.com/gonorrhea" },
  { slug: "sy", name: "Syphilis", shortName: "Syphilis", testUrl: "https://www.stdcheck.com/syphilis-test.php", learnMoreUrl: "https://easystd.com/syphilis" },
  { slug: "hv", name: "HIV", shortName: "HIV", testUrl: "https://www.stdcheck.com/hiv-test.php", learnMoreUrl: "https://easystd.com/hiv-aids" },
  { slug: "hs", name: "Genital Herpes (HSV-1 & HSV-2)", shortName: "Herpes", testUrl: "https://www.stdcheck.com/herpes-test.php", learnMoreUrl: "https://easystd.com/genital-herpes" },
  { slug: "hp", name: "Human Papillomavirus (HPV)", shortName: "HPV", testUrl: "https://www.stdcheck.com/std-test-panel.php", learnMoreUrl: "https://easystd.com/human-papillomavirus-hpv" },
  { slug: "tr", name: "Trichomoniasis", shortName: "Trich", testUrl: "https://www.stdcheck.com/std-test-panel.php", learnMoreUrl: "https://easystd.com/trichomoniasis" },
  { slug: "pd", name: "Pelvic Inflammatory Disease (PID)", shortName: "PID", testUrl: "https://www.stdcheck.com/std-test-panel.php", learnMoreUrl: "https://easystd.com/pelvic-inflammatory-disease-pid" },
  { slug: "bv", name: "Bacterial Vaginosis (BV)", shortName: "BV", testUrl: "https://www.stdcheck.com/std-test-panel.php", learnMoreUrl: "https://easystd.com/bacterial-vaginosis" },
  { slug: "ut", name: "Urinary Tract Infection (UTI)", shortName: "UTI", testUrl: "https://www.stdcheck.com/std-test-panel.php", learnMoreUrl: "https://easystd.com/urinary-tract-infection-uti" },
  { slug: "yi", name: "Vaginal Yeast Infection", shortName: "Yeast", testUrl: "https://www.stdcheck.com/std-test-panel.php", learnMoreUrl: "https://easystd.com/vaginal-yeast-infection" },
];

/* ------------------------------------------------------------------ */
/*  Questions                                                         */
/* ------------------------------------------------------------------ */

const questions: SymptomCheckerQuestion[] = [
  // ============================================================
  // SECTION 1: CONTEXT (×0.8 weight)
  // ============================================================
  {
    id: 1,
    category: "context",
    question: "What is your sex or gender?",
    type: "single",
    options: [
      { label: "Woman", scores: { bv: 2, yi: 2, ut: 3, pd: 2, ch: 2, tr: 2 } },
      { label: "Man who has sex with men (MSM)", scores: { hv: 3, sy: 3, gn: 3, hp: 3, hs: 1, ch: 2 } },
      { label: "Man who has sex with women only", scores: { ch: 1, gn: 1, hs: 1, sy: 1, hv: 1 } },
      { label: "Transgender woman", scores: { hv: 3, sy: 2, gn: 2 } },
      { label: "Prefer not to say", scores: { ch: 1, gn: 1, sy: 1, hv: 1, hs: 1 } },
    ],
  },
  {
    id: 2,
    category: "context",
    question: "What is your age range?",
    type: "single",
    options: [
      { label: "Under 25", scores: { ch: 3, gn: 3, hp: 2, pd: 2 } },
      { label: "25–34", scores: { sy: 3, hv: 2, gn: 2, ch: 2 } },
      { label: "35–44", scores: { sy: 2, hv: 2 } },
      { label: "45 or older", scores: { ut: 1 } },
    ],
  },
  {
    id: 3,
    category: "context",
    question: "Are you currently pregnant or planning a pregnancy?",
    type: "single",
    options: [
      { label: "Yes, currently pregnant", scores: { ch: 2, sy: 3, hv: 2, bv: 2, hs: 2 } },
      { label: "Yes, planning a pregnancy", scores: { ch: 1, sy: 2, hv: 1 } },
      { label: "No", scores: {} },
      { label: "Not applicable", scores: {} },
    ],
  },
  {
    id: 4,
    category: "context",
    question: "Have you been diagnosed with an STI before?",
    type: "single",
    options: [
      { label: "Yes, within the past year", scores: { ch: 3, gn: 3, sy: 2, hv: 2, hs: 1, pd: 2 } },
      { label: "Yes, more than a year ago", scores: { ch: 1, gn: 1, sy: 1 } },
      { label: "No", scores: {} },
      { label: "Unsure", scores: { ch: 1, gn: 1, sy: 1, hv: 1 } },
    ],
  },

  // ============================================================
  // SECTION 2: EXPOSURE (×1.0 weight)
  // ============================================================
  {
    id: 5,
    category: "exposure",
    question: "How many sexual partners have you had in the past 6 months?",
    type: "single",
    options: [
      { label: "4 or more", scores: { ch: 3, gn: 3, sy: 3, hv: 3, hs: 2, hp: 3, tr: 2, pd: 2 } },
      { label: "2–3", scores: { ch: 2, gn: 2, sy: 2, hv: 2, hs: 1, hp: 2, tr: 1, pd: 1 } },
      { label: "1", scores: { ch: 1, gn: 1, sy: 1, hv: 1, hs: 1, hp: 1 } },
      { label: "None", scores: {} },
    ],
  },
  {
    id: 6,
    category: "exposure",
    question:
      "What types of sexual contact have you had recently without a condom or barrier? Select all that apply.",
    type: "multi",
    options: [
      { label: "Vaginal intercourse", scores: { ch: 3, gn: 3, hv: 2, hs: 2, hp: 2, sy: 2, tr: 3, bv: 1 } },
      { label: "Anal intercourse", scores: { gn: 3, hv: 4, sy: 3, ch: 2, hs: 2, hp: 2 } },
      { label: "Oral sex (giving)", scores: { gn: 3, sy: 3, hs: 2, hp: 1 } },
      { label: "Oral sex (receiving)", scores: { hs: 2, gn: 1, sy: 1 } },
      { label: "Genital skin-to-skin contact without penetration", scores: { hs: 2, hp: 2 } },
      { label: "All contact was protected or I have not been sexually active", scores: {} },
    ],
  },
  {
    id: 7,
    category: "exposure",
    question:
      "Has a sexual partner been diagnosed with an STD, or have you been notified of an exposure?",
    type: "single",
    options: [
      { label: "Yes", scores: { ch: 4, gn: 4, sy: 4, hv: 4, hs: 4, hp: 3, tr: 3 } },
      { label: "No", scores: {} },
      { label: "Unsure", scores: { ch: 1, gn: 1, sy: 1, hv: 1, hs: 1 } },
    ],
  },
  {
    id: 8,
    category: "exposure",
    question: "Have you shared needles, syringes, or injection equipment?",
    type: "single",
    options: [
      { label: "Yes, within the past year", scores: { hv: 5 } },
      { label: "Yes, more than a year ago", scores: { hv: 2 } },
      { label: "No", scores: {} },
    ],
  },
  {
    id: 9,
    category: "exposure",
    question:
      "Do any of these additional risk factors apply? Select all that apply.",
    type: "multi",
    options: [
      { label: "I have met partners through apps or anonymous encounters", scores: { sy: 2, hv: 2, gn: 2 } },
      { label: "I have exchanged sex for money, drugs, or housing", scores: { hv: 3, sy: 3, gn: 2, ch: 2 } },
      { label: "I have a weakened immune system (HIV, immunosuppressive medication)", scores: { hs: 2, hp: 3, yi: 2 } },
      { label: "I use vaginal douches or scented products", scores: { bv: 4, yi: 1 } },
      { label: "I recently took antibiotics", scores: { yi: 4, bv: 2 } },
      { label: "None of these apply", scores: {} },
    ],
  },

  // ============================================================
  // SECTION 3: SYMPTOMS (×1.2 weight)
  // ============================================================
  {
    id: 10,
    category: "symptoms",
    question: "Have you noticed any unusual genital discharge?",
    type: "single",
    options: [
      { label: "Yes, thick yellowish or greenish discharge", scores: { gn: 5, ch: 2, tr: 1 } },
      { label: "Yes, clear, watery, or milky discharge", scores: { ch: 4, gn: 1 } },
      { label: "Yes, thin grayish-white discharge with a fishy odor", scores: { bv: 5 } },
      { label: "Yes, thick white cottage cheese-like discharge with no strong odor", scores: { yi: 5 } },
      { label: "Yes, frothy yellowish-green discharge with a strong odor", scores: { tr: 5 } },
      { label: "No unusual discharge", scores: {} },
      { label: "Unsure", scores: { ch: 1, gn: 1, bv: 1, yi: 1, tr: 1 } },
    ],
  },
  {
    id: 11,
    category: "symptoms",
    question:
      "Have you noticed any sores, blisters, warts, or unusual growths on your genitals, anus, or mouth?",
    type: "single",
    options: [
      { label: "Yes, painful blisters or ulcers that may come and go", scores: { hs: 5 } },
      { label: "Yes, a firm, round, usually painless sore or ulcer", scores: { sy: 5 } },
      { label: "Yes, flesh-colored or cauliflower-like warts or bumps", scores: { hp: 5 } },
      { label: "Yes, but I'm not sure how to describe them", scores: { hs: 2, sy: 2, hp: 2 } },
      { label: "No", scores: {} },
    ],
  },
  {
    id: 12,
    category: "symptoms",
    question: "Are you experiencing pain or burning during urination?",
    type: "single",
    options: [
      { label: "Yes, severe burning", scores: { ut: 5, gn: 4, ch: 3 } },
      { label: "Yes, mild discomfort", scores: { ut: 3, ch: 2, gn: 2, hs: 1, yi: 1 } },
      { label: "No", scores: {} },
    ],
  },
  {
    id: 13,
    category: "symptoms",
    question: "Are you experiencing genital itching or irritation?",
    type: "single",
    options: [
      { label: "Yes, intense itching that is hard to ignore", scores: { yi: 5, tr: 3, hs: 2 } },
      { label: "Yes, mild irritation", scores: { yi: 3, tr: 2, bv: 1, hs: 1 } },
      { label: "No", scores: {} },
    ],
  },
  {
    id: 14,
    category: "symptoms",
    question: "Are you experiencing pelvic or lower abdominal pain?",
    type: "single",
    options: [
      { label: "Yes, moderate to severe pain", scores: { pd: 5, gn: 2, ch: 2 } },
      { label: "Yes, mild or dull discomfort", scores: { pd: 3, ch: 1, gn: 1, ut: 2 } },
      { label: "No", scores: {} },
    ],
  },
  {
    id: 15,
    category: "symptoms",
    question:
      "Have you experienced any of these urinary symptoms? Select all that apply.",
    type: "multi",
    options: [
      { label: "Strong, persistent urge to urinate — even after using the bathroom", scores: { ut: 5 } },
      { label: "Cloudy, dark, or strong-smelling urine", scores: { ut: 4 } },
      { label: "Blood in urine (pink, red, or cola-colored)", scores: { ut: 4 } },
      { label: "None of these", scores: {} },
    ],
  },
  {
    id: 16,
    category: "symptoms",
    question:
      "Have you noticed any skin changes, rashes, or hair loss? Select all that apply.",
    type: "multi",
    options: [
      { label: "Rash on palms, soles of feet, or torso", scores: { sy: 5 } },
      { label: "Patchy hair loss on scalp or eyebrows", scores: { sy: 3 } },
      { label: "Genital redness, swelling, or small cracks on the skin", scores: { yi: 3, hs: 2 } },
      { label: "None of these", scores: {} },
    ],
  },
  {
    id: 17,
    category: "symptoms",
    question:
      "Have you experienced any of these systemic symptoms? Select all that apply.",
    type: "multi",
    options: [
      { label: "Fever with no other obvious cause", scores: { hv: 3, pd: 4, sy: 2, gn: 1 } },
      { label: "Swollen lymph nodes (groin, neck, or armpits)", scores: { hv: 3, hs: 2, sy: 2 } },
      { label: "Unexplained weight loss", scores: { hv: 4 } },
      { label: "Persistent fatigue or night sweats", scores: { hv: 3 } },
      { label: "None of these", scores: {} },
    ],
  },
  {
    id: 18,
    category: "symptoms",
    question:
      "Have you noticed symptoms in any of these areas? Select all that apply.",
    type: "multi",
    options: [
      { label: "Rectal pain, discharge, or bleeding", scores: { gn: 3, ch: 3, hs: 2, sy: 2 } },
      { label: "Persistent sore throat after oral sexual contact", scores: { gn: 3, sy: 2 } },
      { label: "Eye redness, pain, or discharge", scores: { ch: 2, gn: 2 } },
      { label: "Joint pain or swelling with skin lesions", scores: { gn: 4, sy: 1 } },
      { label: "None of these", scores: {} },
    ],
  },
  {
    id: 19,
    category: "symptoms",
    question:
      "Do any of these patterns apply to your symptoms? Select all that apply.",
    type: "multi",
    options: [
      { label: "Tingling or burning sensation BEFORE sores appear", scores: { hs: 5 } },
      { label: "Symptoms that come and go in recurring episodes", scores: { hs: 5, yi: 2 } },
      { label: "A painless sore that healed on its own, then a rash appeared", scores: { sy: 5 } },
      { label: "Fishy odor that worsens after sex or during menstruation", scores: { bv: 4 } },
      { label: "Symptoms worsened after taking antibiotics", scores: { yi: 4 } },
      { label: "None of these", scores: {} },
    ],
  },
  {
    id: 20,
    category: "symptoms",
    question: "When did your symptoms first appear?",
    type: "single",
    options: [
      { label: "Within the past 1–2 weeks", scores: { gn: 3, ch: 2, ut: 3, yi: 2 } },
      { label: "2–4 weeks ago", scores: { sy: 3, hv: 4, ch: 2 } },
      { label: "1–3 months ago", scores: { sy: 3, hs: 2, hp: 1 } },
      { label: "More than 3 months ago", scores: { hv: 2, hp: 1, sy: 1 } },
      { label: "I have not had any symptoms", scores: {} },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Export                                                            */
/* ------------------------------------------------------------------ */

export const symptomChecker: SymptomCheckerConfig = {
  slug: "std-symptom-checker",
  headline: "STD Symptom Checker",
  subtitle: "Free, Private Risk Assessment & Recommendation Tool",
  description:
    "Answer 20 questions about your symptoms and risk factors. Get a personalized list of STDs you may want to test for.",
  metaTitle:
    "STD Symptom Checker | Free Anonymous Risk Assessment — EasySTD",
  metaDescription:
    "Take our free, anonymous STD symptom checker. Answer 20 questions about your symptoms and risk factors. Get personalized testing recommendations.",
  conditions,
  questions,
};
