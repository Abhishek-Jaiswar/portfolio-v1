import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "How I Build — Modern Software Engineering",
  description:
    "Abhishek Jaiswar's software development lifecycle: scalable architecture, AI-assisted engineering, developer experience, and reliability — from discovery and data modeling to CI/CD and observability.",
  keywords: [
    "modern software development lifecycle",
    "scalable application architecture",
    "AI application development",
    "AI agents",
    "retrieval-augmented generation",
    "multi-tenant architecture",
    "CI/CD",
    "observability",
    "full stack engineering",
  ],
  openGraph: {
  title: "How I Build — Modern Software Engineering",
    description:
      "The lifecycle, architecture patterns, and AI-agent practices behind production software.",
  },
  alternates: { canonical: "/how-i-build" },
};

export default function HowIBuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
