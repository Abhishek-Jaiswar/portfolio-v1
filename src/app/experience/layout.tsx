import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Chronicle & Official Career Appointments",
  description:
    "Career history, appointments, and engineering pedigree of Abhishek Jaiswar, Full Stack Developer & Tech Lead based in Mumbai, India.",
  openGraph: {
    title: "Business Chronicle — Abhishek Jaiswar Career Record",
    description:
      "Full-stack engineering history, lead roles, and technical achievements at CBS Software Solutions and KartBuddy Logistics.",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
