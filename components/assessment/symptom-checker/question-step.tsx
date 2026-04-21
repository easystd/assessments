"use client";

import type { SymptomCheckerQuestion } from "@/lib/symptom-checker";
import {
  RadioGroup,
  RadioGroupItem,
  Checkbox,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@easystd/ui-shared";

interface QuestionStepProps {
  question: SymptomCheckerQuestion;
  answer: string | string[] | undefined;
  onAnswer: (value: string | string[]) => void;
}

export function QuestionStep({ question, answer, onAnswer }: QuestionStepProps) {
  if (question.type === "multi") {
    const selected = (answer as string[]) || [];

    const handleToggle = (label: string, isEmpty: boolean) => {
      if (isEmpty) {
        onAnswer([label]);
        return;
      }

      const filtered = selected.filter((s) => {
        const opt = question.options.find((o) => o.label === s);
        return opt && Object.keys(opt.scores).length > 0;
      });

      if (filtered.includes(label)) {
        onAnswer(filtered.filter((s) => s !== label));
      } else {
        onAnswer([...filtered, label]);
      }
    };

    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl leading-relaxed">
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.options.map((opt) => {
            const checked = selected.includes(opt.label);
            const isEmpty = Object.keys(opt.scores).length === 0;
            return (
              <label
                key={opt.label}
                className={`flex items-center gap-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                  checked
                    ? "border-primary bg-primary/5"
                    : "border-input hover:bg-accent"
                }`}
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={() => handleToggle(opt.label, isEmpty)}
                />
                <span className="text-sm">{opt.label}</span>
              </label>
            );
          })}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={(answer as string) || ""}
          onValueChange={(value) => onAnswer(value)}
          className="space-y-3"
        >
          {question.options.map((opt) => {
            const isSelected = answer === opt.label;
            return (
              <label
                key={opt.label}
                className={`flex items-center gap-3 rounded-lg border p-4 cursor-pointer transition-colors ${
                  isSelected
                    ? "border-primary bg-primary/5"
                    : "border-input hover:bg-accent"
                }`}
              >
                <RadioGroupItem value={opt.label} />
                <span className="text-sm">{opt.label}</span>
              </label>
            );
          })}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
