"use client";

import { type RiskResult } from "@/lib/scoring";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  ShieldAlert,
  ExternalLink,
  RotateCcw,
  Info,
} from "lucide-react";

interface ResultsPanelProps {
  result: RiskResult;
  onRetake: () => void;
  affiliateUrl: string;
  learnMoreUrl: string;
  condition: string;
}

const riskConfig = {
  low: {
    icon: ShieldCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  moderate: {
    icon: AlertTriangle,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    badgeClass: "bg-amber-100 text-amber-700 border-amber-200",
  },
  high: {
    icon: AlertCircle,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    badgeClass: "bg-orange-100 text-orange-700 border-orange-200",
  },
  "very-high": {
    icon: ShieldAlert,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    badgeClass: "bg-red-100 text-red-700 border-red-200",
  },
};

export function ResultsPanel({
  result,
  onRetake,
  affiliateUrl,
  learnMoreUrl,
  condition,
}: ResultsPanelProps) {
  const config = riskConfig[result.level];
  const Icon = config.icon;

  return (
    <div className="space-y-6">
      {/* Risk tier card */}
      <Card className={`${config.border} ${config.bg}`}>
        <CardHeader className="text-center pb-4">
          <div
            className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ${config.border}`}
          >
            <Icon className={`h-8 w-8 ${config.color}`} />
          </div>
          <div className="pt-4">
            <Badge className={config.badgeClass}>{result.label}</Badge>
          </div>
          <CardTitle className="text-2xl pt-2">{result.headline}</CardTitle>
          <CardDescription className="text-base pt-1">
            {result.description}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Next steps */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recommended Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal pl-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <span className="text-foreground font-medium">
                Get tested at a certified lab.
              </span>{" "}
              A laboratory test can confirm or rule out {condition}. Results are
              typically available within 1–2 business days.
            </li>
            <li>
              <span className="text-foreground font-medium">
                Share your results with a healthcare provider.
              </span>{" "}
              A doctor can interpret lab results in context and recommend
              treatment if needed.
            </li>
            <li>
              <span className="text-foreground font-medium">
                Inform recent sexual partners.
              </span>{" "}
              If you test positive, notifying partners helps prevent further
              spread.
            </li>
            <li>
              <span className="text-foreground font-medium">
                Follow up as recommended.
              </span>{" "}
              Early detection and treatment prevents complications and protects
              your health.
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Primary CTA */}
      <Card className="border-primary/20">
        <CardContent className="pt-6 text-center space-y-4">
          <h3 className="text-lg font-semibold">
            Fast, Private, Confidential STI Testing
          </h3>
          <p className="text-sm text-muted-foreground">
            Order your test online. Visit a certified lab near you. Get results
            in 1–2 days. No appointment needed.
          </p>
          <Button size="lg" className="w-full sm:w-auto text-base px-8" asChild>
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Tested Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="text-xs text-muted-foreground">
            Trusted by over 1 million customers &bull; 4,500+ certified labs
            nationwide
          </p>
        </CardContent>
      </Card>

      {/* Secondary CTA */}
      <div className="text-center">
        <Button variant="outline" asChild>
          <a href={learnMoreUrl} target="_blank" rel="noopener noreferrer">
            Learn More About {condition}
          </a>
        </Button>
      </div>

      <Separator />

      {/* Disclaimers */}
      <div className="space-y-3">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            This assessment is for <strong>educational purposes only</strong> and
            does not constitute medical advice, diagnosis, or treatment. Only a
            laboratory test can confirm a diagnosis of {condition}.
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

      {/* Retake */}
      <div className="flex justify-center pt-2">
        <Button variant="ghost" onClick={onRetake}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Retake Assessment
        </Button>
      </div>
    </div>
  );
}
