import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abhishek Jaiswar for full-time roles, contract work, or technical consultation. Based in Mumbai, India.",
  openGraph: {
    title: "Contact · Abhishek Jaiswar",
    description:
      "Reach out for engineering roles, projects, and collaborations.",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
