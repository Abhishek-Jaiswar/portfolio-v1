import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Essays & Notes",
  description:
    "Essays and technical notes by Abhishek Jaiswar on agentic systems, caching, developer tooling, and designing resilient software.",
  openGraph: {
    title: "Writing — Essays & Notes · Abhishek Jaiswar",
    description:
      "Essays on agentic AI, systems design, and the craft of shipping production software.",
  },
  alternates: { canonical: "/editorials" },
};

export default function EditorialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
