import { questions, type Question } from "./questions";

export type RiskLevel = "low" | "moderate" | "high" | "very-high";

export interface RiskResult {
  level: RiskLevel;
  label: string;
  headline: string;
  description: string;
  weightedScore: number;
  maxPossibleScore: number;
}

const CATEGORY_WEIGHTS: Record<Question["category"], number> = {
  context: 0.8,
  exposure: 1.0,
  symptoms: 1.2,
};

export function calculateScore(
  answers: Record<number, string | string[]>
): RiskResult {
  let weightedTotal = 0;
  let maxWeightedTotal = 0;

  for (const q of questions) {
    const weight = CATEGORY_WEIGHTS[q.category];
    const answer = answers[q.id];

    // Calculate max possible for this question
    if (q.type === "multi") {
      const maxMulti = q.options
        .filter((o) => o.points > 0)
        .reduce((sum, o) => sum + o.points, 0);
      maxWeightedTotal += maxMulti * weight;
    } else {
      const maxSingle = Math.max(...q.options.map((o) => o.points));
      maxWeightedTotal += maxSingle * weight;
    }

    if (!answer) continue;

    if (q.type === "multi" && Array.isArray(answer)) {
      const points = answer.reduce((sum, selected) => {
        const opt = q.options.find((o) => o.label === selected);
        return sum + (opt?.points ?? 0);
      }, 0);
      weightedTotal += points * weight;
    } else if (q.type === "single" && typeof answer === "string") {
      const opt = q.options.find((o) => o.label === answer);
      weightedTotal += (opt?.points ?? 0) * weight;
    }
  }

  const rounded = Math.round(weightedTotal * 10) / 10;

  return {
    ...getRiskTier(rounded),
    weightedScore: rounded,
    maxPossibleScore: Math.round(maxWeightedTotal * 10) / 10,
  };
}

function getRiskTier(
  score: number
): Pick<RiskResult, "level" | "label" | "headline" | "description"> {
  if (score >= 25) {
    return {
      level: "very-high",
      label: "Very High Risk",
      headline: "High Risk — Seek Testing Immediately",
      description:
        "Based on your responses, there is significant concern. Please get tested promptly. Syphilis is fully curable with antibiotics when caught early.",
    };
  }
  if (score >= 15) {
    return {
      level: "high",
      label: "High Risk",
      headline: "Elevated Risk — Prompt Testing Advised",
      description:
        "Your responses suggest a meaningful risk. We strongly recommend getting tested as soon as possible. Early detection leads to simple, effective treatment.",
    };
  }
  if (score >= 7) {
    return {
      level: "moderate",
      label: "Moderate Risk",
      headline: "Moderate Risk — Testing Recommended",
      description:
        "Some of your responses indicate potential risk factors. We recommend getting tested to rule out syphilis and other STIs.",
    };
  }
  return {
    level: "low",
    label: "Low Risk",
    headline: "Low Risk Indicated",
    description:
      "Your responses suggest a lower likelihood of syphilis at this time. However, if you have any concerns, testing is the only way to know for sure.",
  };
}
