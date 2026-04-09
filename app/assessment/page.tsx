"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  { id: 1, question: "Have you ever been tested for any STDs?", options: ["Yes, within the past 6 months", "Yes, 6–12 months ago", "Yes, more than 1 year ago", "No, I have never been tested", "Unsure"] },
  { id: 2, question: "Have you had any sexual contact (vaginal, anal, or oral) in the past 12 months?", options: ["Yes", "No"] },
  { id: 3, question: "Have you noticed any ulcers, sores, or lesions on your genitals, anus, or mouth?", options: ["Yes, painless", "Yes, painful", "No", "Unsure"] },
  { id: 4, question: "Have you had any of the following skin changes?", options: ["Rash anywhere on the body (especially palms or soles)", "Red patches or redness", "Skin ulcer or open wound", "None of the above"], multi: true },
  { id: 5, question: "Have you experienced any of these?", options: ["Lesions or sores in the mouth or around the lips", "Sore throat", "Fever or flu-like symptoms", "None of the above"], multi: true },
  { id: 6, question: "Are these symptoms new (acute) rather than a long-term/chronic issue?", options: ["Yes", "No", "Unsure"] }
];

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);

  const question = questions[currentStep];

  const handleAnswer = (option: string) => {
    setAnswers(prev => ({
      ...prev,
      [question.id]: question.multi 
        ? [...(prev[question.id] as string[] || []).filter(o => o !== option), option]
        : option
    }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(c => c + 1);
    } else {
      setSubmitted(true);
    }
  };

  const prevStep = () => currentStep > 0 && setCurrentStep(c => c - 1);

  const getRisk = () => {
    let score = 0;
    if (answers[3] && typeof answers[3] === "string" && answers[3].includes("Yes")) score += 4;
    if (answers[4] && Array.isArray(answers[4]) && answers[4].some(o => o !== "None of the above")) score += 3;
    if (answers[5] && Array.isArray(answers[5]) && answers[5].some(o => o !== "None of the above")) score += 2;
    if (answers[2] === "Yes") score += 2;
    if (answers[6] === "Yes") score += 1;

    if (score >= 7) return { level: "High", color: "red", text: "High concern — see a doctor promptly" };
    if (score >= 4) return { level: "Moderate", color: "amber", text: "Moderate concern — testing recommended" };
    return { level: "Low", color: "emerald", text: "Low concern at this time" };
  };

  if (submitted) {
    const risk = getRisk();
    const c = risk.level === "High" ? "red" : risk.level === "Moderate" ? "amber" : "emerald";

    return (
      <div className="min-h-screen bg-slate-50 py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className={`text-center py-8 px-6 rounded-3xl mb-8 border-2 border-${c}-200 bg-white`}>
            <div className={`mx-auto w-20 h-20 rounded-2xl bg-${c}-100 text-${c}-600 text-5xl flex items-center justify-center mb-6`}>
              {risk.level === "High" ? "⚠️" : risk.level === "Moderate" ? "⚡" : "✅"}
            </div>
            <h1 className="text-3xl font-semibold mb-2">Assessment Complete</h1>
            <p className={`text-${c}-600 text-xl font-medium`}>{risk.text}</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-8 text-slate-700">
            <h2 className="text-2xl font-semibold">What your answers suggest</h2>
            <p>Your answers indicate {risk.level === "High" ? "symptoms that may be associated with syphilis." : risk.level === "Moderate" ? "some symptoms that could be related." : "low likelihood of syphilis at this time."}</p>

            <div className="pt-6 border-t">
              <h3 className="font-semibold mb-4">Recommended Next Steps</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Consult a doctor or sexual health clinic promptly</li>
                <li>Get a laboratory blood test for syphilis</li>
                <li>Inform recent sexual partners so they can get tested</li>
              </ol>
            </div>

            <div className="pt-6 border-t text-xs text-slate-500">
              <strong>Disclaimer:</strong> This is an educational tool only. It is not a medical diagnosis. Always get tested by a healthcare professional.
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            <button onClick={() => window.location.reload()} className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 rounded-2xl font-medium">
              Retake Assessment
            </button>
            <Link href="/" className="flex-1 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-medium text-center">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between text-sm text-slate-500 mb-8">
          <span>Question {currentStep + 1} of {questions.length}</span>
          <button onClick={() => window.location.reload()} className="text-teal-600">Exit</button>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-10">
          <h2 className="text-2xl font-semibold mb-10">{question.question}</h2>

          <div className="space-y-3">
            {question.options.map((opt, i) => {
              const selected = Array.isArray(answers[question.id]) 
                ? answers[question.id].includes(opt) 
                : answers[question.id] === opt;

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className={`w-full text-left px-6 py-5 rounded-2xl border text-base ${
                    selected ? "border-teal-600 bg-teal-50" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between mt-12">
            <button onClick={prevStep} disabled={currentStep === 0} className="px-8 py-4 text-slate-500 disabled:opacity-40">← Back</button>
            <button 
              onClick={nextStep}
              disabled={!answers[question.id]}
              className="px-10 py-4 bg-teal-600 text-white rounded-2xl font-medium disabled:bg-slate-300"
            >
              {currentStep === questions.length - 1 ? "See Results" : "Continue →"}
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-12">Anonymous • Educational tool only</p>
      </div>
    </div>
  );
}
