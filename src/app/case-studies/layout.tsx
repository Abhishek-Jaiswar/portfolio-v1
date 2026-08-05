import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investigative Case Files & Tech Reports",
  description:
    "In-depth software engineering case studies, multi-tenant SaaS architectures, and production reports by Abhishek Jaiswar including SignBooks, Lume Chat, and RS Interior Studio.",
  openGraph: {
    title: "Investigative Case Files — Abhishek Jaiswar Portfolio",
    description:
      "Production case files on multi-tenant SaaS architectures, real-time AI streaming engines, and web performance.",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
