"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { ArticleData } from "./editorial-modal";
import { useLanguage } from "@/context/language-context";

interface CaseCardProps {
  article: ArticleData;
  onReadMore: (article: ArticleData) => void;
  index: number;
}

export default function InvestigativeCaseCard({
  article,
  onReadMore,
  index,
}: CaseCardProps) {
  const { t } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="h-full flex flex-col justify-between bg-transparent group relative text-[#1c1917] font-serif"
    >
      <div>
        {/* Newspaper Article Category Header */}
        <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-widest uppercase text-[#b91c1c] border-b-2 border-[#1c1917] pb-1 mb-2.5">
          <span>COL. 0{index + 1} &bull; {article.category}</span>
          <span className="text-[#1c1917]/60 font-semibold">{article.date}</span>
        </div>

        {/* Clean Left-Aligned Headline (No Forced Justification Gaps) */}
        <Link href={`/case-studies/${article.id}`}>
          <h3 className="font-serif text-xl sm:text-2xl font-black text-[#1c1917] group-hover:text-[#b91c1c] transition-colors leading-[1.15] cursor-pointer mb-2 tracking-tight text-left">
            {article.headline}
          </h3>
        </Link>

        {/* Deck */}
        {article.deck && (
          <p className="font-serif italic text-sm sm:text-base text-[#1c1917]/85 mb-3 leading-snug text-left">
            {article.deck}
          </p>
        )}

        {/* Byline */}
        <div className="text-[10px] sm:text-xs font-mono font-bold text-[#b91c1c] uppercase border-y border-[#1c1917]/30 py-1.5 mb-3 flex items-center justify-between">
          <span>{t("modal.by")} {article.author}</span>
          <span className="text-[#1c1917]/60 font-semibold">{article.readTime}</span>
        </div>

        {/* Clean Image & Lead Paragraph (Vertical Stacked Layout for Full Column Width) */}
        <div className="space-y-3 mb-3">
          {article.image && (
            <div className="w-full h-40 sm:h-48 border-2 border-[#1c1917] bg-[#efe4cb] p-0.5 relative group-hover:border-[#b91c1c] transition-colors shadow-xs">
              <div className="relative w-full h-full grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.headline}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {article.paragraphs && article.paragraphs.length > 0 && (
            <p className="font-serif text-xs sm:text-sm text-[#1c1917]/90 leading-relaxed text-left font-serif">
              <span className="float-left font-display font-black text-3xl sm:text-4xl text-[#b91c1c] leading-[0.85] pr-1.5 pt-0.5 select-none">
                {article.paragraphs[0].charAt(0)}
              </span>
              {article.paragraphs[0].slice(1)}
            </p>
          )}
        </div>

        {/* Technical Highlights & Key Pointers */}
        {article.pointers && article.pointers.length > 0 && (
          <div className="my-3 py-2 border-t border-[#1c1917]/20 space-y-1.5 font-serif text-xs sm:text-sm text-[#1c1917]/90">
            <span className="font-mono text-[10px] font-bold text-[#b91c1c] uppercase tracking-widest block mb-1">
              KEY INVESTIGATION HIGHLIGHTS:
            </span>
            <ul className="space-y-1.5 pl-1">
              {article.pointers.map((point, i) => (
                <li key={i} className="flex items-start space-x-1.5 text-xs sm:text-sm text-[#1c1917]/90 leading-relaxed text-left">
                  <span className="text-[#b91c1c] font-bold shrink-0 font-mono text-[11px]">❖</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Specifications */}
        {article.techStack && article.techStack.length > 0 && (
          <div className="my-2.5 flex flex-wrap gap-1.5 font-mono text-[10px]">
            {article.techStack.map((tech, i) => (
              <span
                key={i}
                className="border border-[#1c1917]/40 bg-[#efe4cb] px-2 py-0.5 font-bold text-[#1c1917]"
              >
                #{tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Clean Single Action Link (No Noise, Matching Reference) */}
      <div className="pt-2.5 mt-2 border-t-2 border-[#1c1917] flex justify-end font-mono">
        <button
          onClick={() => onReadMore(article)}
          className="font-bold text-[#b91c1c] hover:underline hover:text-[#991b1b] flex items-center space-x-1 uppercase text-xs cursor-pointer transition-colors"
        >
          <span>{t("home.readFullDispatch")}</span>
          <span>→</span>
        </button>
      </div>
    </motion.article>
  );
}
