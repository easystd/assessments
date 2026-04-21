"use client";

import type { ConditionResult } from "@/lib/symptom-checker";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Alert,
  AlertDescription,
  Progress,
  Separator,
} from "@easystd/ui-shared";
import {
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  ShieldAlert,
  ExternalLink,
  RotateCcw,
  Info,
} from "lucide-react";

interface ResultsProps {
  results: ConditionResult[];
  onRetake: () => void;
}

const levelConfig = {
  "very-high": {
    icon: ShieldAlert,
    color: "text-red-600",
    badgeClass: "bg-red-100 text-red-700 border-red-200",
  },
  high: {
    icon: AlertCircle,
    color: "text-orange-600",
    badgeClass: "bg-orange-100 text-orange-700 border-orange-200",
  },
  moderate: {
    icon: AlertTriangle,
    color: "text-amber-600",
    badgeClass: "bg-amber-100 text-amber-700 border-amber-200",
  },
  low: {
    icon: ShieldCheck,
    color: "text-emerald-600",
    badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
};

export function Results({ results, onRetake }: ResultsProps) {
  const topResults = results.slice(0, 5);

  return (
    <div className="space-y-6">
      {topResults.length === 0 ? (
        <Card>
          <CardContent className="pt-6 text-center space-y-3">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200">
              <ShieldCheck className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-xl font-semibold">Low Overall Risk</h2>
            <p className="text-muted-foreground text-sm">
              Based on your responses, no conditions met the threshold for
              elevated concern. If you have specific concerns, testing is the
              only way to know for sure.
            </p>
          </CardContent>
        </Card>
      ) : (
        <>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">
                Conditions to Consider Testing For
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Ranked by likelihood based on your symptoms and risk factors.
                Testing is the only way to confirm a diagnosis.
              </p>
            </CardHeader>
          </Card>

          <div className="space-y-4">
            {topResults.map((result) => {
              const cfg = levelConfig[result.level];
              const Icon = cfg.icon;
              return (
                <Card key={result.slug}>
                  <CardContent className="pt-5 pb-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <Icon className={`h-5 w-5 flex-shrink-0 ${cfg.color}`} />
                        <span className="font-medium truncate">{result.name}</span>
                      </div>
                      <Badge className={`flex-shrink-0 text-xs ${cfg.badgeClass}`}>
                        {result.label}
                      </Badge>
                    </div>
                    <Progress value={result.percentage} className="h-2 mb-4" />
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-muted-foreground">
                        {result.percentage}% match
                      </span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={result.learnMoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Learn More
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a
                            href={result.testUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get Tested
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </>
      )}

      <Separator />

      <div className="space-y-3">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            This assessment is for{" "}
            <strong>educational purposes only</strong> and does not constitute
            medical advice, diagnosis, or treatment. Only laboratory testing can
            confirm or rule out any condition.
          </AlertDescription>
        </Alert>
        <Alert>
          <ShieldCheck className="h-4 w-4" />
          <AlertDescription>
            <strong>Your privacy is protected.</strong> No personal information
            was collected during this assessment. Your responses were processed
            entirely in your browser and are not stored or transmitted.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-center pt-2">
        <Button variant="ghost" onClick={onRetake}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Retake Assessment
        </Button>
      </div>
    </div>
  );
}
