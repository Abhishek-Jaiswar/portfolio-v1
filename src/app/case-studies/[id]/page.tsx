"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "motion/react";
import NewspaperHeader from "@/components/newspaper/newspaper-header";
import { useLocalizedContent } from "@/hooks/use-localized-content";
import { localizedArticles } from "@/data/localized/homepage-articles";
import { ArticleData } from "@/components/newspaper/editorial-modal";
import InvestigativeCaseCard from "@/components/newspaper/investigative-case-card";
import { useLanguage } from "@/context/language-context";

interface ArticleDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const resolvedParams = use(params);
  const { articles } = useLocalizedContent();
  const { language } = useLanguage();

  // Look up in active localized content first, then fallback to English
  let article: ArticleData | undefined = articles.find((a) => a.id === resolvedParams.id);
  if (!article) {
    article = localizedArticles.en.articles.find((a) => a.id === resolvedParams.id);
  }

  // Fallback to first article if id is invalid or generic
  if (!article) {
    article = articles[0] || localizedArticles.en.articles[0];
  }

  if (!article) {
    notFound();
  }

  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen p-3 sm:p-6 md:p-8 bg-[#efe4cb] text-[#1c1917] font-serif selection:bg-[#b91c1c] selection:text-white relative overflow-x-hidden">
      {/* Full Header & Navigation */}
      <NewspaperHeader
        tickerItems={[
          `SPECIAL DISPATCH: ${article.headline}`,
          "MUMBAI EDITION: Software Architecture & Systems Engineering Investigation",
          "PRESS WIRE: Open for Full-Time Software Engineering Roles",
        ]}
      />

      {/* Main Full-Page Article Broadside Container */}
      <article className="w-full max-w-7xl mx-auto pt-1 pb-6 space-y-3.5">
        {/* Article Breadcrumb & Category Header */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-[#1c1917] pb-2 text-xs font-mono font-bold uppercase text-[#b91c1c]">
          <div className="flex items-center space-x-2">
            <Link href="/case-studies" className="hover:underline flex items-center space-x-1">
              <span>← ALL INVESTIGATIONS</span>
            </Link>
            <span>/</span>
            <span>{article.category}</span>
          </div>

          <span className="text-[#1c1917]/60">
            {article.readTime} ESTIMATED READ &bull; {article.date}
          </span>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-tight text-[#1c1917]"
        >
          {article.headline}
        </motion.h1>

        {/* Deck */}
        {article.deck && (
          <p className="article-deck text-lg sm:text-xl text-[#1c1917]/85 italic leading-snug border-l-4 border-[#b91c1c] pl-4 py-1">
            {article.deck}
          </p>
        )}

        {/* Author Byline Box */}
        <div className="article-byline flex flex-wrap items-center justify-between text-xs font-mono py-3 px-4 bg-[#e4d4b2]/40 border-y-2 border-[#1c1917] text-[#b91c1c]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full border border-[#1c1917] relative overflow-hidden bg-[#181614]">
              <Image src="/abhishek.jpg" alt="Abhishek Jaiswar" fill sizes="40px" className="object-cover grayscale" />
            </div>
            <div>
              <span className="font-black text-[#1c1917] text-sm">BY {article.author}</span>
              <span className="block text-[10px] text-[#1c1917]/70 font-semibold">{article.role}</span>
            </div>
          </div>

          <div className="text-right text-[11px] text-[#1c1917]/70 space-y-0.5">
            <div>LOCATION: <span className="font-bold text-[#1c1917]">{article.location}</span></div>
            <div>DATE: <span className="font-bold text-[#1c1917]">{article.date}</span></div>
          </div>
        </div>

        {/* Featured Press Image & Figure Box */}
        {article.image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="my-6 space-y-2 border-2 border-[#1c1917] p-2 bg-[#e4d4b2]/30"
          >
            <div className="relative w-full h-64 sm:h-96 md:h-[420px] border border-[#1c1917] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 bg-[#181614]">
              <Image
                src={article.image}
                alt={article.headline}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
                priority
              />
            </div>
            {article.imageCaption && (
              <p className="text-xs font-mono text-[#1c1917]/80 italic text-center py-1 border-t border-[#1c1917]/20">
                FIG 1.0 — {article.imageCaption}
              </p>
            )}
          </motion.div>
        )}

        {/* System Pointers Callout Grid (In-Depth Technical Blueprint) */}
        {article.pointers && article.pointers.length > 0 && (
          <div className="my-6 border-2 border-[#1c1917] bg-[#efe4cb] p-5 space-y-3 font-mono">
            <div className="text-xs font-bold text-[#b91c1c] uppercase tracking-widest border-b border-[#1c1917]/30 pb-1.5 flex items-center justify-between">
              <span>SYSTEM ARCHITECTURE & TECHNICAL BLUEPRINT</span>
              <span className="text-[10px] text-[#1c1917]/60">KEY INVARIANTS</span>
            </div>
            <ul className="space-y-2 text-xs text-[#1c1917]/90 font-serif leading-relaxed">
              {article.pointers.map((pointer, i) => (
                <li key={i} className="flex items-start space-x-2.5">
                  <span className="font-mono font-black text-[#b91c1c] text-sm leading-none pt-0.5">•</span>
                  <span>{pointer}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Deep Article Paragraph Content in Newspaper Flow */}
        <div className="text-base sm:text-lg leading-relaxed font-serif text-[#1c1917]/95 space-y-6 pt-4 border-t border-[#1c1917]/20 text-justify">
          {article.paragraphs.map((para, index) => (
            <p
              key={index}
              className={index === 0 ? "drop-cap font-serif" : "font-serif"}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Pull Quote Box */}
        {article.pullQuote && (
          <blockquote className="my-8 border-y-4 border-[#1c1917] py-6 px-8 bg-[#e4d4b2]/50 text-center">
            <p className="font-serif italic text-xl sm:text-2xl font-bold text-[#b91c1c] leading-snug">
              &ldquo;{article.pullQuote}&rdquo;
            </p>
            <footer className="font-mono text-xs font-bold text-[#1c1917] uppercase tracking-widest mt-3">
              — SYSTEM ARCHITECTURE STATEMENT &bull; ABHISHEK JAISWAR
            </footer>
          </blockquote>
        )}

        {/* Technical Stack Specifications Section */}
        {article.techStack && article.techStack.length > 0 && (
          <div className="border-2 border-[#1c1917] p-6 bg-[#efe4cb] space-y-3 font-mono">
            <h3 className="text-xs font-bold text-[#b91c1c] uppercase tracking-widest border-b border-[#1c1917]/20 pb-2">
              ENGINEERING TOOLKIT & STACK SPECIFICATIONS
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {article.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="border border-[#1c1917] bg-[#e4d4b2] px-3 py-1.5 text-xs font-bold text-[#1c1917] hover:bg-[#b91c1c] hover:text-white transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author & Software Engineer Bio Box */}
        <div className="border-t-2 border-b-4 border-[#1c1917] py-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center font-serif bg-[#e4d4b2]/20 p-4">
          <div className="sm:col-span-3 flex justify-center">
            <div className="relative w-28 h-28 border-2 border-[#1c1917] overflow-hidden grayscale bg-[#181614]">
              <Image src="/abhishek.jpg" alt="Abhishek Jaiswar" fill sizes="112px" className="object-cover" />
            </div>
          </div>
          <div className="sm:col-span-9 space-y-2">
            <span className="font-mono text-[10px] font-bold text-[#b91c1c] uppercase tracking-widest">
              ABOUT THE ENGINEER
            </span>
            <h4 className="font-serif font-black text-xl text-[#1c1917]">Abhishek Jaiswar</h4>
            <p className="text-xs text-[#1c1917]/80 leading-relaxed font-serif">
              Software Engineer based in Mumbai, India. Specialized in engineering high-scale backend architectures, multi-tenant computational systems, and real-time AI interfaces.
            </p>
            <div className="pt-1 flex items-center space-x-4 font-mono text-xs text-[#b91c1c] font-bold">
              <Link href="/contact" className="hover:underline">SEND TELEGRAPH →</Link>
              <a href="https://github.com/Abhishek-Jaiswar" target="_blank" rel="noreferrer" className="hover:underline">GITHUB ↗</a>
              <a href="https://linkedin.com/in/abhishek-jaiswar" target="_blank" rel="noreferrer" className="hover:underline">LINKEDIN ↗</a>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        <section className="pt-6 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#1c1917] pb-2">
            <h3 className="text-xs font-mono font-bold text-[#b91c1c] uppercase tracking-widest">
              RELATED CASE FILES & SYSTEM INVESTIGATIONS
            </h3>
            <Link href="/case-studies" className="text-xs font-mono font-bold text-[#1c1917] hover:text-[#b91c1c] uppercase">
              VIEW ALL DISPATCHES →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relArt, i) => (
              <InvestigativeCaseCard
                key={relArt.id}
                article={relArt}
                index={i}
                onReadMore={() => {
                  window.location.href = `/case-studies/${relArt.id}`;
                }}
              />
            ))}
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto border-t-2 border-[#1c1917] pt-6 font-mono text-xs flex flex-wrap items-center justify-between">
        <Link href="/case-studies" className="text-[#b91c1c] font-bold hover:underline">
          ← BACK TO CASE FILES
        </Link>
        <div className="text-[10px] text-[#1c1917]/60 uppercase tracking-widest">
          THE ABHISHEK TIMES &bull; SPECIAL INVESTIGATION DISPATCH
        </div>
      </footer>
    </div>
  );
}
