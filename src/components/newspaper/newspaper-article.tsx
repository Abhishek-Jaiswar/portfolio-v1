"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { ArticleData } from "./editorial-modal";

interface ArticleProps {
  article: ArticleData;
  onReadMore?: (article: ArticleData) => void;
  featured?: boolean;
}

export default function NewspaperArticle({
  article,
  onReadMore,
  featured = false,
}: ArticleProps) {
  const detailHref = article.category.includes("OP-ED") || article.category.includes("ESSAY")
    ? `/editorials/${article.id}`
    : `/case-studies/${article.id}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`h-full flex flex-col justify-between p-4 sm:p-5 border border-[#1c1917]/30 bg-[#efe4cb] hover:border-[#1c1917] transition-all group ${
        featured ? "bg-[#e4d4b2]/40 border-[#1c1917]" : ""
      }`}
    >
      <div>
        {/* Category & Date Header */}
        <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-widest uppercase text-[#b91c1c] mb-2 border-b border-[#1c1917]/20 pb-1.5">
          <span>★ {article.category}</span>
          <span className="text-[#1c1917]/60">{article.date}</span>
        </div>

        {/* Headline */}
        <Link href={detailHref}>
          <h3
            className={`font-serif font-black text-[#1c1917] group-hover:text-[#b91c1c] transition-colors leading-tight cursor-pointer ${
              featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            } mb-2`}
          >
            {article.headline}
          </h3>
        </Link>

        {/* Deck */}
        {article.deck && (
          <p className="font-serif italic text-xs sm:text-sm text-[#1c1917]/80 mb-3 leading-snug">
            {article.deck}
          </p>
        )}

        {/* Byline */}
        <div className="text-[10px] font-mono font-bold text-[#b91c1c] uppercase border-y border-[#1c1917]/20 py-1 mb-3">
          BY {article.author} &bull; {article.location}
        </div>

        {/* Image if present */}
        {article.image && (
          <Link href={detailHref} className="block relative w-full h-40 sm:h-48 border border-[#1c1917] overflow-hidden mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
            <Image
              src={article.image}
              alt={article.headline}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        )}

        {/* Lead Paragraph with Drop Cap */}
        <p className="drop-cap font-serif text-xs sm:text-sm text-[#1c1917]/90 leading-relaxed line-clamp-4 mb-4">
          {article.paragraphs[0]}
        </p>
      </div>

      {/* Footer CTA */}
      <div className="pt-3 border-t border-[#1c1917]/20 flex items-center justify-between font-mono text-xs">
        <span className="text-[10px] text-[#1c1917]/60">{article.readTime} READ</span>
        <Link
          href={detailHref}
          className="font-bold text-[#b91c1c] group-hover:underline flex items-center space-x-1 uppercase text-[11px] cursor-pointer"
        >
          <span>FULL STORY</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.article>
  );
}
