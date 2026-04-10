import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Do I Have Syphilis? | Free Anonymous Risk Assessment — EasySTD",
  description:
    "Take our free, anonymous syphilis risk assessment. Answer 10 questions in under 3 minutes. Get personalized guidance and testing recommendations. No data collected.",
  keywords: [
    "do i have syphilis",
    "syphilis quiz",
    "syphilis symptom checker",
    "syphilis risk assessment",
    "STD test",
    "syphilis test",
    "anonymous STD quiz",
  ],
  openGraph: {
    title: "Do I Have Syphilis? | Free Anonymous Risk Assessment",
    description:
      "Answer 10 confidential questions. Get personalized risk guidance in under 3 minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
