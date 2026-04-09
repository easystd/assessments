import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top disclaimer banner */}
      <div className="bg-teal-600 text-white text-center py-3 text-sm font-medium">
        Educational tool only • Not a medical diagnosis • Always get lab tested
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold tracking-tight text-foreground mb-4">
            Do I Have Syphilis?
          </h1>
          <p className="text-2xl text-muted-foreground mb-6">
            Professional Anonymous Symptom Assessment
          </p>
          <p className="text-lg text-slate-600 max-w-md mx-auto">
            Answer a few simple questions. Get clear, personalized guidance in under 3 minutes.
          </p>
        </div>

        {/* Start button */}
        <div className="flex justify-center mb-16">
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center px-10 py-6 bg-primary hover:bg-teal-700 text-primary-foreground text-xl font-semibold rounded-2xl shadow-lg transition-all active:scale-95"
          >
            Start Free Assessment →
          </Link>
        </div>

        {/* Trust signals */}
        <div className="grid grid-cols-3 gap-4 text-center text-xs uppercase tracking-widest text-muted-foreground mb-16">
          <div>Anonymous</div>
          <div>No data stored</div>
          <div>Built by clinicians</div>
        </div>

        {/* Quick info cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-3xl p-8">
            <h3 className="font-semibold mb-3 text-lg">Why take this assessment?</h3>
            <p className="text-sm text-muted-foreground">
              Syphilis symptoms can be subtle or absent. This tool helps you understand your risk and decide if testing is needed.
            </p>
          </div>
          <div className="bg-card border border-border rounded-3xl p-8">
            <h3 className="font-semibold mb-3 text-lg">Important</h3>
            <p className="text-sm text-muted-foreground">
              This is <strong>not</strong> a replacement for professional medical advice or laboratory testing.
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-16">
          Data never collected • Results are private • For educational purposes only
        </p>
      </div>
    </div>
  );
}
