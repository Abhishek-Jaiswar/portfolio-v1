import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Case Studies",
  description:
    "Production web applications and case studies by Abhishek Jaiswar — full-stack projects covering APIs, data modeling, and responsive frontends.",
  openGraph: {
    title: "Work — Case Studies · Abhishek Jaiswar",
    description:
      "Full-stack web applications and product work built in production.",
  },
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
