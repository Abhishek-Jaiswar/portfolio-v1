"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import NewspaperHeader from "@/components/newspaper/newspaper-header";
import NewspaperArticle from "@/components/newspaper/newspaper-article";
import EditorialModal, { ArticleData } from "@/components/newspaper/editorial-modal";

const editorialsList: ArticleData[] = [
  {
    id: "ai-synergy",
    category: "OP-ED ESSAY",
    headline: "Why I Believe in Building AI-Augmented Software Over Full Automation",
    deck: "Exploring how software engineers can leverage artificial intelligence to multiply human capability rather than replacing human judgement.",
    author: "ABHISHEK JAISWAR",
    role: "Columnist & Lead Engineer",
    date: "AUGUST 2026",
    location: "MUMBAI, INDIA",
    readTime: "5 MIN",
    paragraphs: [
      "There is a prevalent belief in technology circles that AI should completely automate away human decision-making. Through my experience engineering enterprise platforms, I have come to realize that the most impactful tools are those that augment human intelligence.",
      "When we build AI workflows to assist professional operators—such as helping chartered accountants analyze financial anomalies or assisting developers with automated test writing—we create a high-velocity feedback loop. The professional retains critical oversight while the machine eliminates computational drudgery.",
      "Our duty as software architects is to design transparent interfaces, verifiable outputs, and resilient error recovery mechanisms so that human-AI interaction remains trustworthy and empowering.",
    ],
    pullQuote: "AI should serve as an intellectual multiplier for human expertise, accelerating throughput while honoring domain knowledge.",
  },
  {
    id: "pragmatic-code",
    category: "ENGINEERING ESSAY",
    headline: "The Pragmatic Architect: Shipping Production Software That Endures",
    deck: "Lessons learned on maintaining architectural simplicity, enforcing explicit API contracts, and avoiding premature abstraction.",
    author: "ABHISHEK JAISWAR",
    role: "Columnist & Lead Engineer",
    date: "JULY 2026",
    location: "MUMBAI, INDIA",
    readTime: "4 MIN",
    paragraphs: [
      "It is easy to over-engineer software in pursuit of theoretical perfection. However, production environments ruthlessly reward clarity, predictable error handling, and robust database design.",
      "In my development journey, I adhere to three core principles: 1) Model your domain accurately in database schemas first; 2) Keep API contracts explicit and strongly typed; 3) Prioritize observable code over complex abstraction layers.",
      "When systems are built with clear boundaries and minimal unnecessary dependencies, refactoring becomes effortless and feature velocity stays high even as team sizes grow.",
    ],
    pullQuote: "Simple code written with deep domain understanding will outlast complex abstractions every single time.",
  },
  {
    id: "scaling-saas",
    category: "SYSTEMS COLUMN",
    headline: "Designing Multi-Tenant SaaS Architectures for Resilience and Isolation",
    deck: "Key architectural patterns for managing schema isolation, role authorization, and high throughput in enterprise applications.",
    author: "ABHISHEK JAISWAR",
    role: "Systems Architect",
    date: "JUNE 2026",
    location: "MUMBAI, INDIA",
    readTime: "6 MIN",
    paragraphs: [
      "Multi-tenant application development presents unique challenges: how do you guarantee data isolation between organizational accounts while maintaining shared infrastructure efficiency?",
      "In SignBooks, we utilized PostgreSQL tenant key partitioning combined with row-level security policies. This ensured that cross-tenant data leak vulnerabilities were mathematically impossible at the database layer.",
      "Enforcing strict database-level security policies frees application code to focus on business logic while maintaining enterprise compliance standards.",
    ],
    pullQuote: "Security should be enforced at the data layer, not left solely to application-level conditional checks.",
  },
];

export default function EditorialsPage() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);

  return (
    <div className="min-h-screen p-3 sm:p-6 md:p-8 bg-[#efe4cb] text-[#1c1917] font-serif selection:bg-[#b91c1c] selection:text-white relative overflow-x-hidden">
      {/* Full Newspaper Header & Navbar */}
        <NewspaperHeader
          tickerItems={[
            "OPINION: Building human-augmented AI systems",
            "ESSAY: Pragmatic engineering principles for endurance",
            "SYSTEMS: Schema isolation in multi-tenant SaaS",
          ]}
        />

        {/* Specific Editorials Section Banner */}
        <div className="text-center border-y-4 border-[#1c1917] py-6 bg-[#efe4cb] my-4 space-y-1">
          <span className="font-mono text-xs font-bold text-[#b91c1c] uppercase tracking-widest block">
            ★ TECHNICAL PHILOSOPHY & OPINION COLUMNS ★
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight">
            The Editorial Page
          </h1>
          <p className="font-mono text-xs text-[#1c1917]/70 font-bold uppercase tracking-widest">
            AI AUGMENTATION &bull; PRAGMATIC ARCHITECTURE &bull; SOFTWARE ESSAYS
          </p>
        </div>

        {/* Editorial Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b-2 border-[#1c1917]">
          {editorialsList.map((article) => (
            <NewspaperArticle
              key={article.id}
              article={article}
              onReadMore={(art) => setSelectedArticle(art)}
              featured
            />
          ))}
        </div>

        {/* Footer Navigation */}
        <footer className="pt-6 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-[#1c1917]/30 pb-4">
            <Link href="/case-studies" className="text-[#b91c1c] font-bold hover:underline">
              ← PREVIOUS SECTION: CASE FILES
            </Link>
            <Link href="/experience" className="text-[#b91c1c] font-bold hover:underline">
              NEXT SECTION: BUSINESS CHRONICLE →
            </Link>
          </div>
          <div className="py-4 text-center text-[10px] text-[#1c1917]/60 uppercase tracking-widest">
            THE ABHISHEK TIMES &bull; EDITORIAL SECTION
          </div>
        </footer>

        <EditorialModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
    </div>
  );
}
