import type {
  SymptomCheckerQuestion,
  ConditionInfo,
  ConditionResult,
  ConditionScores,
} from "./types";

const CATEGORY_WEIGHTS: Record<SymptomCheckerQuestion["category"], number> = {
  context: 0.8,
  exposure: 1.0,
  symptoms: 1.2,
};

/** Minimum percentage to include a condition in results */
const MIN_DISPLAY_THRESHOLD = 0.15;

export function calculateSymptomCheckerResults(
  questions: SymptomCheckerQuestion[],
  conditions: ConditionInfo[],
  answers: Record<number, string | string[]>,
): ConditionResult[] {
  const conditionSlugs = conditions.map((c) => c.slug);

  // Initialize accumulators
  const scores: Record<string, number> = {};
  const maxScores: Record<string, number> = {};
  for (const slug of conditionSlugs) {
    scores[slug] = 0;
    maxScores[slug] = 0;
  }

  for (const q of questions) {
    const weight = CATEGORY_WEIGHTS[q.category];
    const answer = answers[q.id];

    // Calculate max possible per condition for this question
    if (q.type === "multi") {
      // Max = sum of all positive scores per condition
      for (const slug of conditionSlugs) {
        const positiveSum = q.options
          .filter((o) => (o.scores[slug] ?? 0) > 0)
          .reduce((sum, o) => sum + (o.scores[slug] ?? 0), 0);
        maxScores[slug] += positiveSum * weight;
      }
    } else {
      // Max = highest single option per condition
      for (const slug of conditionSlugs) {
        const maxOption = Math.max(
          ...q.options.map((o) => o.scores[slug] ?? 0),
        );
        maxScores[slug] += maxOption * weight;
      }
    }

    // Accumulate actual scores from answers
    if (!answer) continue;

    if (q.type === "multi" && Array.isArray(answer)) {
      const combined = mergeSelectedScores(q, answer);
      for (const slug of conditionSlugs) {
        scores[slug] += (combined[slug] ?? 0) * weight;
      }
    } else if (q.type === "single" && typeof answer === "string") {
      const opt = q.options.find((o) => o.label === answer);
      if (opt) {
        for (const slug of conditionSlugs) {
          scores[slug] += (opt.scores[slug] ?? 0) * weight;
        }
      }
    }
  }

  // Build results, filter, sort
  const results: ConditionResult[] = [];

  for (const cond of conditions) {
    const s = scores[cond.slug];
    const max = maxScores[cond.slug];
    if (max === 0) continue;

    const pct = s / max;
    if (pct < MIN_DISPLAY_THRESHOLD) continue;

    results.push({
      slug: cond.slug,
      name: cond.name,
      shortName: cond.shortName,
      testUrl: cond.testUrl,
      learnMoreUrl: cond.learnMoreUrl,
      score: Math.round(s * 10) / 10,
      maxScore: Math.round(max * 10) / 10,
      percentage: Math.round(pct * 100),
      ...getRiskLevel(pct),
    });
  }

  // Sort by percentage descending
  results.sort((a, b) => b.percentage - a.percentage);

  return results;
}

function mergeSelectedScores(
  q: SymptomCheckerQuestion,
  selected: string[],
): ConditionScores {
  const merged: ConditionScores = {};
  for (const label of selected) {
    const opt = q.options.find((o) => o.label === label);
    if (!opt) continue;
    for (const [slug, pts] of Object.entries(opt.scores)) {
      merged[slug] = (merged[slug] ?? 0) + pts;
    }
  }
  return merged;
}

function getRiskLevel(percentage: number): {
  level: ConditionResult["level"];
  label: string;
} {
  if (percentage >= 0.5) {
    return { level: "very-high", label: "Strongly Indicated — Prompt Testing Advised" };
  }
  if (percentage >= 0.35) {
    return { level: "high", label: "Likely — Testing Recommended" };
  }
  if (percentage >= 0.2) {
    return { level: "moderate", label: "Possible — Consider Testing" };
  }
  return { level: "low", label: "Lower Concern — Test If Worried" };
}
