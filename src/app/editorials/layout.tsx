import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Editorial Page & Technical Essays",
  description:
    "Technical essays, opinion pieces, and software philosophy by Abhishek Jaiswar on AI augmentation, pragmatic architecture, and shipping production SaaS.",
  openGraph: {
    title: "The Editorial Page — Abhishek Jaiswar",
    description:
      "Essays on pragmatic software architecture, AI human synergy, and building durable engineering systems.",
  },
};

export default function EditorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
