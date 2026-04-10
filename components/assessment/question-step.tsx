"use client";

import { type Question } from "@/lib/questions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface QuestionStepProps {
  question: Question;
  answer: string | string[] | undefined;
  onAnswer: (value: string | string[]) => void;
}

export function QuestionStep({ question, answer, onAnswer }: QuestionStepProps) {
  if (question.type === "multi") {
    const selected = (answer as string[]) || [];

    const handleToggle = (label: string) => {
      if (label === "None of the above" || label === "None of these") {
        onAnswer([label]);
        return;
      }

      const filtered = selected.filter(
        (s) => s !== "None of the above" && s !== "None of these"
      );

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
                  onCheckedChange={() => handleToggle(opt.label)}
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
