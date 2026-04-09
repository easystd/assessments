import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syphilis Assessment | Professional Symptom Checker",
  description: "Anonymous, educational syphilis symptom assessment tool. Not a diagnosis — always get lab tested.",
  keywords: ["syphilis", "std", "symptom checker", "assessment", "sexual health"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
