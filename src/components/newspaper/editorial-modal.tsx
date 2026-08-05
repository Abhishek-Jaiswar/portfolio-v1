"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export interface ArticleData {
  id: string;
  category: string;
  headline: string;
  deck: string;
  author: string;
  role: string;
  date: string;
  location: string;
  readTime: string;
  image?: string;
  imageCaption?: string;
  paragraphs: string[];
  pullQuote?: string;
  techStack?: string[];
  link?: {
    label: string;
    url: string;
  };
}

interface EditorialModalProps {
  article: ArticleData | null;
  onClose: () => void;
}

export default function EditorialModal({ article, onClose }: EditorialModalProps) {
  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#1c1917]/75 backdrop-blur-xs overflow-y-auto">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative z-10 w-full max-w-3xl bg-[#efe4cb] border-4 border-[#1c1917] p-6 sm:p-8 md:p-10 shadow-2xl text-[#1c1917] max-h-[85vh] overflow-y-auto font-serif"
        >
          {/* Header Metadata */}
          <div className="flex items-center justify-between border-b-2 border-[#1c1917] pb-3 mb-6 text-xs font-mono font-bold uppercase tracking-wider">
            <div className="flex items-center space-x-3 text-[#b91c1c]">
              <span>[ {article.category} ]</span>
              <span>•</span>
              <span className="text-[#1c1917]/70">{article.readTime} READ</span>
            </div>
            <button
              onClick={onClose}
              className="border border-[#1c1917] bg-[#1c1917] text-[#efe4cb] px-3 py-1 text-xs font-mono font-bold hover:bg-[#b91c1c] transition-colors cursor-pointer"
            >
              CLOSE [ESC] ✕
            </button>
          </div>

          {/* Article Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-[#1c1917] mb-3">
            {article.headline}
          </h2>

          {/* Subhead / Deck */}
          {article.deck && (
            <p className="article-deck text-base sm:text-lg text-[#1c1917]/80 italic mb-4 leading-snug">
              {article.deck}
            </p>
          )}

          {/* Byline */}
          <div className="article-byline flex flex-wrap items-center justify-between text-xs font-mono py-2 border-y border-[#1c1917]/30 my-4 text-[#b91c1c]">
            <div>
              BY <span className="font-black">{article.author}</span> — {article.role}
            </div>
            <div className="text-[#1c1917]/60">
              {article.location} &bull; {article.date}
            </div>
          </div>

          {/* Article Image if present */}
          {article.image && (
            <div className="my-6 space-y-2 border border-[#1c1917] p-2 bg-[#e4d4b2]/40">
              <div className="relative w-full h-56 sm:h-72 border border-[#1c1917] overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={article.image}
                  alt={article.headline}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                />
              </div>
              {article.imageCaption && (
                <p className="text-[11px] font-mono text-[#1c1917]/70 italic text-center">
                  FIG. 1.0 — {article.imageCaption}
                </p>
              )}
            </div>
          )}

          {/* Article Content with Drop Cap */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed font-serif text-[#1c1917]/90 mt-6">
            {article.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={index === 0 ? "drop-cap font-serif text-base sm:text-lg" : "font-serif"}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pull Quote */}
          {article.pullQuote && (
            <blockquote className="my-8 border-y-2 border-[#1c1917] py-4 px-6 italic text-lg sm:text-xl font-serif font-bold text-[#b91c1c] text-center bg-[#e4d4b2]/30">
              &ldquo;{article.pullQuote}&rdquo;
            </blockquote>
          )}

          {/* Tech Stack Tags */}
          {article.techStack && article.techStack.length > 0 && (
            <div className="mt-8 pt-4 border-t border-[#1c1917]/20 font-mono text-xs">
              <span className="font-bold text-[#1c1917] uppercase tracking-wider block mb-2">
                TECHNOLOGIES UTILIZED & SPECIFICATIONS:
              </span>
              <div className="flex flex-wrap gap-2">
                {article.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-[#1c1917] bg-[#e4d4b2]/60 px-2.5 py-1 text-[11px] font-bold text-[#1c1917]"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* External Link CTA */}
          {article.link && (
            <div className="mt-8 pt-4 border-t-2 border-[#1c1917] flex justify-end">
              <a
                href={article.link.url}
                target="_blank"
                rel="noreferrer"
                className="bg-[#b91c1c] hover:bg-[#991b1b] text-white font-mono text-xs px-5 py-3 font-bold uppercase tracking-wider transition-colors inline-flex items-center space-x-2 shadow-md"
              >
                <span>{article.link.label}</span>
                <span>→</span>
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
