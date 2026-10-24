import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Skills",
  description:
    "Career history, roles, and technical skills of Abhishek Jaiswar, a software engineer based in Mumbai, India.",
  openGraph: {
    title: "Experience & Skills · Abhishek Jaiswar",
    description:
      "Software engineering history, roles, and the tools I build with.",
  },
  alternates: { canonical: "/experience" },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
