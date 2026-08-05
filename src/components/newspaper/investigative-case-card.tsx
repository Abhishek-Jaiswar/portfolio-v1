"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { ArticleData } from "./editorial-modal";

interface CaseCardProps {
  article: ArticleData;
  onReadMore: (article: ArticleData) => void;
  index: number;
}

// Case specific highlight metrics
const caseMetrics: Record<string, { label: string; value: string; badge: string }> = {
  "signbooks-investigation": {
    label: "WORKFLOW EFFICIENCY",
    value: "45% REDUCTION",
    badge: "MULTI-TENANT SAAS",
  },
  "lume-chat-report": {
    label: "STREAMING LATENCY",
    value: "LOW LATENCY SSE",
    badge: "AI STREAMING ENGINE",
  },
  "rs-interior-report": {
    label: "PERFORMANCE SCORE",
    value: "95+ LIGHTHOUSE",
    badge: "DIGITAL BRAND EXPERIENCE",
  },
};

export default function InvestigativeCaseCard({
  article,
  onReadMore,
  index,
}: CaseCardProps) {
  const metric = caseMetrics[article.id] || {
    label: "PRODUCTION STATUS",
    value: "VERIFIED SYSTEM",
    badge: "CASE FILE",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="h-full flex flex-col justify-between p-5 border-2 border-[#1c1917] bg-[#efe4cb] hover:border-[#b91c1c] hover:shadow-xl transition-all duration-300 group relative"
    >
      {/* Top Header & Press Stamp */}
      <div>
        <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-widest uppercase text-[#b91c1c] border-b border-[#1c1917]/20 pb-2 mb-3">
          <span className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-[#b91c1c] animate-pulse" />
            <span>{article.category}</span>
          </span>
          <span className="text-[#1c1917]/60">{article.date}</span>
        </div>

        {/* Headline */}
        <Link href={`/case-studies/${article.id}`}>
          <h3 className="font-serif text-2xl font-black text-[#1c1917] group-hover:text-[#b91c1c] transition-colors leading-tight cursor-pointer mb-2 tracking-tight">
            {article.headline}
          </h3>
        </Link>

        {/* Deck */}
        <p className="font-serif italic text-xs text-[#1c1917]/80 mb-3 leading-snug">
          {article.deck}
        </p>

        {/* Byline */}
        <div className="text-[10px] font-mono font-bold text-[#b91c1c] uppercase border-y border-[#1c1917]/20 py-1.5 mb-3 flex items-center justify-between">
          <span>BY {article.author}</span>
          <span className="text-[#1c1917]/60 font-normal">{article.readTime} READ</span>
        </div>

        {/* Press Image with Motion Zoom and Badge */}
        {article.image && (
          <div className="relative w-full h-48 border border-[#1c1917] overflow-hidden mb-3 bg-[#181614] grayscale group-hover:grayscale-0 transition-all duration-500">
            <Image
              src={article.image}
              alt={article.headline}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-108 transition-transform duration-700"
            />
            {/* Press Badge Overlay */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1 }}
              className="absolute top-2 right-2 bg-[#1c1917]/90 backdrop-blur-xs border border-[#efe4cb] text-[#efe4cb] text-[9px] font-mono font-bold uppercase px-2 py-0.5 shadow"
            >
              {metric.badge}
            </motion.div>
          </div>
        )}

        {/* Impact Metric Callout Box */}
        <div className="bg-[#e4d4b2]/60 border border-[#1c1917] p-2.5 mb-3 flex items-center justify-between font-mono text-xs">
          <div>
            <span className="text-[9px] font-bold text-[#b91c1c] uppercase block">
              {metric.label}
            </span>
            <span className="font-black text-sm text-[#1c1917]">{metric.value}</span>
          </div>
          <span className="text-lg text-[#b91c1c]">⚡</span>
        </div>

        {/* Tech Stack Pills with Motion */}
        {article.techStack && (
          <div className="flex flex-wrap gap-1.5 mb-4 font-mono text-[10px]">
            {article.techStack.slice(0, 4).map((tech, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="border border-[#1c1917] bg-[#efe4cb] px-2 py-0.5 font-bold text-[#1c1917]"
              >
                #{tech}
              </motion.span>
            ))}
          </div>
        )}
      </div>

      {/* Footer Action Button */}
      <div className="pt-3 border-t-2 border-[#1c1917] flex items-center justify-between font-mono text-xs">
        <span className="text-[10px] text-[#1c1917]/60 font-bold uppercase">
          DOSSIER NO. #0{index + 1}
        </span>
        <Link
          href={`/case-studies/${article.id}`}
          className="font-bold bg-[#b91c1c] hover:bg-[#991b1b] text-white px-3.5 py-1.5 uppercase text-[11px] cursor-pointer flex items-center space-x-1.5 transition-colors shadow"
        >
          <span>INVESTIGATE</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.article>
  );
}
