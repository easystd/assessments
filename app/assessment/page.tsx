"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    id: 1,
    question: "Have you ever been tested for any STDs?",
    options: [
      "Yes, within the past 6 months",
      "Yes, 6–12 months ago",
      "Yes, more than 1 year ago",
      "No, I have never been tested",
      "Unsure"
    ]
  },
  {
    id: 2,
    question: "Have you had any sexual contact (vaginal, anal, or oral) in the past 12 months?",
    options: ["Yes", "No"]
  },
  {
    id: 3,
    question: "Have you noticed any ulcers, sores, or lesions on your genitals, anus, or mouth?",
    options: ["Yes, painless", "Yes, painful", "No", "Unsure"]
  },
  {
    id: 4,
    question: "Have you had any of the following skin changes?",
    options: [
      "Rash anywhere on the body (especially palms or soles)",
      "Red patches or redness",
      "Skin ulcer or open wound",
      "None of the above"
    ],
    multi: true
  },
  {
    id: 5,
    question: "Have you experienced any of these?",
    options: [
      "Lesions or sores in the mouth or around the lips",
      "Sore throat",
      "Fever or flu-like symptoms",
      "None of the above"
    ],
    multi: true
  },
  {
    id: 6,
    question: "Are these symptoms new (acute) rather than a long-term/chronic issue?",
    options: ["Yes", "No", "Unsure"]
  }
];

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);

  const question = questions[currentStep];

  const toggleOption = (option: string) => {
    setAnswers((prev) => {
      const current = prev[question.id] as string[] || [];
      return {
        ...prev,
        [question.id]: current.includes(option)
          ? current.filter((o) => o !== option)
          : [...current, option]
      };
    });
  };

  const selectOption = (option: string) => {
    setAnswers((prev) => ({ ...prev, [question.id]: option }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setSubmitted(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // Simple risk scoring
  const getRiskLevel = () => {
    let score = 0;
    if (answers[3] && (answers[3] as string).includes("Yes")) score += 4;
    if (answers[4] && Array.isArray(answers[4]) && answers[4].length > 0 && !answers[4].includes("None of the above")) score += 3;
    if (answers[5] && Array.isArray(answers[5]) && answers[5].length > 0 && !answers[5].includes("None of the above")) score += 2;
    if (answers[2] === "Yes") score += 2;
    if (answers[6] === "Yes") score += 1;

    if (score >= 7) return { level: "High", color: "red", text: "High concern — see a doctor promptly" };
    if (score >= 4) return { level: "Moderate", color: "amber", text: "Moderate concern — testing recommended" };
    return { level: "Low", color: "emerald", text: "Low concern at this time" };
  };

  if (submitted) {
    const risk = getRiskLevel();
    const color = risk.level === "High" ? "red" : risk.level === "Moderate" ? "amber" : "emerald";

    return (
      <div className="min-h-screen bg-slate-50 py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className={`text-center py-8 px-6 rounded-3xl mb-8 border-2 border-${color}-200 bg-white`}>
            <div className={`mx-auto inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-${color}-100 text-${color}-600 text-5xl mb-6`}>
              {risk.level === "High" ? "⚠️" : risk.level === "Moderate" ? "⚡" : "✅"}
            </div>
            <h1 className="text-3xl font-semibold mb-3">Assessment Complete</h1>
            <p className={`text-${color}-600 text-xl font-medium`}>{risk.text}</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-8">
            <h2 className="text-2xl font-semibold">What your answers suggest</h2>
            <p className="text-slate-700 leading-relaxed">
              Your answers indicate {risk.level === "High" 
                ? "symptoms that may be associated with syphilis or another condition." 
                : risk.level === "Moderate" 
                ? "some symptoms that could be related to syphilis." 
                : "low likelihood of syphilis at this time."}
            </p>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="font-semibold mb-4">Recommended Next Steps</h3>
              <ol className="space-y-3 text-sm list-decimal pl-5 text-slate-700">
                <li>Visit a doctor or sexual health clinic as soon as possible</li>
                <li>Get a laboratory blood test for syphilis</li>
                <li>Inform recent sexual partners so they can also get tested</li>
              </ol>
            </div>

            <div className="pt-6 border-t text-xs text-slate-500">
              <strong>Medical Disclaimer:</strong> This is an educational assessment only and is not a diagnosis
