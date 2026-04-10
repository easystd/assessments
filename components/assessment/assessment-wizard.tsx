"use client";

import { useState, useCallback } from "react";
import { questions } from "@/lib/questions";
import { calculateScore } from "@/lib/scoring";
import { Button } from "@/components/ui/button";
import { ProgressHeader } from "./progress-header";
import { QuestionStep } from "./question-step";
import { ResultsPanel } from "./results-panel";
import { ChevronLeft, ChevronRight, ClipboardCheck } from "lucide-react";

export function AssessmentWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = questions[step];
  const isLastStep = step === questions.length - 1;
  const currentAnswer = answers[currentQuestion?.id];

  const hasAnswer =
    currentAnswer !== undefined &&
    (Array.isArray(currentAnswer) ? currentAnswer.length > 0 : currentAnswer !== "");

  const handleAnswer = useCallback(
    (value: string | string[]) => {
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
    },
    [currentQuestion?.id]
  );

  const handleNext = () => {
    if (isLastStep) {
      setSubmitted(true);
    } else {
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const handleRetake = () => {
    setStep(0);
    setAnswers({});
    setSubmitted(false);
  };

  if (submitted) {
    const result = calculateScore(answers);
    return (
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Assessment Complete
          </h1>
          <p className="text-muted-foreground mt-2">
            Based on your responses about exposure risk, symptoms, and testing
            history
          </p>
        </div>
        <ResultsPanel result={result} onRetake={handleRetake} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12">
      <ProgressHeader current={step + 1} total={questions.length} />

      <div className="mt-8">
        <QuestionStep
          question={currentQuestion}
          answer={currentAnswer}
          onAnswer={handleAnswer}
        />
      </div>

      <div className="flex items-center justify-between mt-8">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={step === 0}
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back
        </Button>

        <Button onClick={handleNext} disabled={!hasAnswer}>
          {isLastStep ? (
            <>
              See Results
              <ClipboardCheck className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Continue
              <ChevronRight className="ml-1 h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-10">
        Anonymous &bull; No data collected &bull; Educational purposes only
      </p>
    </div>
  );
}
