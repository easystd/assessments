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

  const handleSelect = (option: string) => {
    setAnswers(prev => ({
      ...prev,
      [question.id]: question.multi
        ? (prev[question.id] as string[] || []).includes(option)
          ? (prev[question.id] as string[]).filter(a => a !== option)
          : [...(prev[question.id] as string[] || []), option]
        : option
    }));
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

  const riskLevel = () => {
    const score = Object.values(answers).flat().length;
    if (score >= 6) return { level: "High", color: "red", text: "High concern — see a doctor promptly" };
    if (score >= 3) return { level: "Moderate", color: "amber", text: "Moderate concern — testing recommended" };
    return { level: "Low", color: "emerald", text: "Low concern at this time" };
  };

  if (submitted) {
    const risk = riskLevel();
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className={`text-center py-8 px-6 rounded-3xl mb-8 border-2 border-${risk.color}-200 bg-white`}>
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-\( {risk.color}-100 text- \){risk.color}-600 text-4xl mb-6`}>
              {risk.level === "High" ? "⚠️" : risk.level === "Moderate" ? "⚡" : "✅"}
            </div>
            <h1 className="text-3xl font-semibold mb-2">Assessment Complete</h1>
            <p className={`text-${risk.color}-600 text-xl font-medium`}>{risk.text}</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-8 text-slate-700">
            <h2 className="text-2xl font-semibold">What your answers suggest</h2>
            <p className="leading-relaxed">
              Your answers indicate {risk.level === "High" ? "symptoms that may be associated with syphilis or another condition." : risk.level === "Moderate" ? "some symptoms that could be related." : "low likelihood of syphilis at this time."}
            </p>

            <div className="pt-6 border-t">
              <h3 className="font-semibold mb-4">Next steps (strongly recommended)</h3>
              <ol className="space-y-4 text-sm">
                <li className="flex gap
