import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, DatabaseZap, Stethoscope, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Disclaimer banner */}
      <div className="border-b bg-muted/50 text-center py-2.5 px-4 text-xs text-muted-foreground">
        Educational tool only &bull; Not a medical diagnosis &bull; Always get
        lab tested
      </div>

      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:py-20">
          {/* Hero */}
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="text-sm">
              Anonymous Assessment
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Do I Have Syphilis?
            </h1>

            <p className="text-xl text-muted-foreground">
              Free, Private Symptom &amp; Risk Assessment
            </p>

            <p className="text-muted-foreground max-w-md mx-auto">
              Answer 10 simple questions. Get personalized guidance in under 3
              minutes. Completely anonymous — no data collected.
            </p>

            <div className="pt-4">
              <Button size="lg" className="text-base px-8 h-12" asChild>
                <Link href="/do-i-have-syphilis-assessment">
                  Start Free Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-3 gap-6 mt-16 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Anonymous
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DatabaseZap className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                No Data Stored
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Stethoscope className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Clinically Informed
              </span>
            </div>
          </div>

          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Why take this assessment?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Syphilis symptoms can be subtle, painless, or entirely absent.
                  This tool helps you understand your risk level and decide
                  whether testing is appropriate for you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">What to expect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  10 straightforward questions covering risk factors and
                  symptoms. Takes under 3 minutes. You&apos;ll receive an instant,
                  private risk assessment with clear next steps.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Footer disclaimer */}
          <p className="text-center text-xs text-muted-foreground mt-16">
            Data never collected &bull; Results are private &bull; For
            educational purposes only
          </p>
        </div>
      </main>
    </div>
  );
}
