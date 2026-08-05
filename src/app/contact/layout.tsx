import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Room & Official Telegraph Desk",
  description:
    "Direct contact telegraph form, hiring inquiries, and official press channels for Abhishek Jaiswar, Full Stack Engineer in Mumbai, India.",
  openGraph: {
    title: "Press Room & Telegraph — Abhishek Jaiswar",
    description:
      "Contact Abhishek Jaiswar for full-stack engineering opportunities, technical consultations, and product collaborations.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
