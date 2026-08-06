"use client";

import { useState } from "react";
import Link from "next/link";
import NewspaperHeader from "@/components/newspaper/newspaper-header";
import NewspaperArticle from "@/components/newspaper/newspaper-article";
import InvestigativeCaseCard from "@/components/newspaper/investigative-case-card";
import EditorialModal, { ArticleData } from "@/components/newspaper/editorial-modal";
import { useLanguage } from "@/context/language-context";
import { useLocalizedContent } from "@/hooks/use-localized-content";

const caseStudiesList: ArticleData[] = [
  {
    id: "signbooks",
    category: "SPECIAL INVESTIGATION",
    headline: "SignBooks: Automating Operational Workflows for Chartered Accountants & Tax Advisory Firms",
    deck: "Building a secure, multi-tenant operations hub handling compliance signoffs, document automation, and partner metrics.",
    author: "ABHISHEK JAISWAR",
    role: "Lead Full Stack Developer",
    date: "JULY 2026",
    location: "CBS SOFTWARE SOLUTIONS",
    readTime: "6 MIN",
    image: "/project_signbooks.jpg",
    imageCaption: "SignBooks analytics & document authorization dashboard.",
    paragraphs: [
      "Tax advisory and accounting firms manage complex multi-step workflows across dozens of client accounts. Before SignBooks, firm partners relied on fragmented channels resulting in lost hours and tracking bottlenecks.",
      "As Lead Full Stack Developer, Abhishek architected a multi-tenant Node.js microservice architecture with PostgreSQL schema partitioning. The platform includes automated client document collection, digital authorization logs, role-based security, and real-time operational analytics.",
      "With SignBooks deployed across multiple CA practices, audit firms recorded a 45% decrease in compliance processing turnarounds and a 60% increase in client response efficiency.",
    ],
    pullQuote: "Multi-tenant architecture done right isolates client data completely while delivering unified analytics for firm leaders.",
    techStack: ["Node.js", "Express", "PostgreSQL", "Prisma", "React", "Tailwind CSS", "JWT"],
  },
  {
    id: "lume-chat",
    category: "AI ENGINEERING REPORT",
    headline: "Lume Chat: Engineering Real-Time AI Conversational Streaming Engines",
    deck: "Building low-latency Server-Sent Events (SSE) interfaces with dynamic context management and instant code rendering.",
    author: "ABHISHEK JAISWAR",
    role: "AI Systems Engineer",
    date: "MAY 2026",
    location: "MUMBAI, INDIA",
    readTime: "5 MIN",
    image: "/project_lume_chat.jpg",
    imageCaption: "Lume Chat interface with streaming token response parsing.",
    paragraphs: [
      "In modern AI applications, latency perception is everything. Lume Chat was created to deliver immediate visual feedback when interacting with generative LLM endpoints.",
      "Abhishek designed a streaming event pipeline using Server-Sent Events (SSE) and Next.js route handlers. The frontend parses markdown formatting, latex math equations, and syntax-highlighted code blocks on the fly without lagging the browser event loop.",
      "The result is a responsive conversational experience that feels instantaneous and fluid across mobile and desktop devices.",
    ],
    pullQuote: "High-frequency streaming token parsing requires careful UI state batching to maintain 60fps responsiveness.",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "SSE Streaming", "Tailwind CSS"],
  },
  {
    id: "rs-interior",
    category: "PRODUCT & DESIGN",
    headline: "RS Interior Studio: High-Fidelity Architectural Brand Platform",
    deck: "Combining high-resolution architectural photography with performant web architecture for a leading interior design studio.",
    author: "ABHISHEK JAISWAR",
    role: "Full Stack Engineer",
    date: "MARCH 2026",
    location: "MUMBAI, INDIA",
    readTime: "4 MIN",
    image: "/project_rs_interior.jpg",
    imageCaption: "RS Interior Studio showcase displaying spatial photography grid.",
    paragraphs: [
      "Luxury interior brands require web experiences that mirror their physical craftsmanship. RS Interior Studio needed a platform to display high-resolution project portfolios without slowing down mobile client loads.",
      "Abhishek engineered a Next.js platform using responsive image optimization, progressive blur placeholders, and custom CSS grid layouts.",
      "Post-launch metrics showed a 120% increase in qualified digital inquiries and a 95+ Google Lighthouse performance score.",
    ],
    pullQuote: "Great product design pairs aesthetic elegance with blistering page speed performance.",
    techStack: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
  },
];

export default function CaseStudiesPage() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);
  const { t } = useLanguage();
  const { featureCaseFiles } = useLocalizedContent();

  return (
    <div className="min-h-screen p-3 sm:p-6 md:p-8 bg-[#efe4cb] text-[#1c1917] font-serif selection:bg-[#b91c1c] selection:text-white relative overflow-x-hidden">
      {/* Full Newspaper Header & Navbar */}
        <NewspaperHeader />

        {/* Specific Case Studies Section Banner */}
        <div className="text-center border-y-4 border-[#1c1917] py-6 bg-[#efe4cb] my-4 space-y-1">
          <span className="font-mono text-xs font-bold text-[#b91c1c] uppercase tracking-widest block">
            ★ {t("home.caseFilesHeading")} ★
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight">
            {t("nav.caseStudies")}
          </h1>
          <p className="font-mono text-xs text-[#1c1917]/70 font-bold uppercase tracking-widest">
            PRODUCTION SAAS ARCHITECTURES &bull; MULTI-TENANCY &bull; REAL-TIME AI ENGINES
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b-2 border-[#1c1917]">
          {featureCaseFiles.map((article, index) => (
            <InvestigativeCaseCard
              key={article.id}
              article={article}
              index={index}
              onReadMore={(art) => setSelectedArticle(art)}
            />
          ))}
        </div>

        {/* Footer Navigation */}
        <footer className="pt-6 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-[#1c1917]/30 pb-4">
            <Link href="/" className="text-[#b91c1c] font-bold hover:underline">
              ← {t("nav.front")}
            </Link>
            <Link href="/editorials" className="text-[#b91c1c] font-bold hover:underline">
              {t("nav.editorials")} →
            </Link>
          </div>
          <div className="py-4 text-center text-[10px] text-[#1c1917]/60 uppercase tracking-widest">
            THE ABHISHEK TIMES &bull; INVESTIGATIVE SECTION
          </div>
        </footer>

        <EditorialModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
    </div>
  );
}
