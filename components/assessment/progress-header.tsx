"use client";

import { Progress } from "@easystd/ui-shared";

interface ProgressHeaderProps {
  current: number;
  total: number;
}

export function ProgressHeader({ current, total }: ProgressHeaderProps) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Question {current} of {total}
        </span>
        <span>{percent}% complete</span>
      </div>
      <Progress value={percent} className="h-2" />
    </div>
  );
}
