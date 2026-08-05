"use client";

import { motion } from "motion/react";

interface ColumnStripsWipeProps {
  isEnding: boolean;
}

const COLUMNS_DATA = [
  {
    tag: "SECTION A • COL 01",
    headline: "SOFTWARE & SYSTEMS",
    body: "In a decisive 2026 edition, Mumbai-based engineer Abhishek Jaiswar reveals next-gen web systems designed for maximum scale and aesthetic precision.",
    sub: "VOL. 2026 • NO. 01",
  },
  {
    tag: "SECTION B • COL 02",
    headline: "ARCHITECTURAL VISION",
    body: "Combining high-performance Next.js architectures with fluid motion curves. Crafting digital products that stand out on the global stage.",
    sub: "FEATURE STORY",
  },
  {
    tag: "SPECIAL EDITION",
    headline: "THE ABHISHEK TIMES",
    body: "IDEAS. CODE. IMPACT. Printing stories that matter in real time. Full-stack engineering meets state-of-the-art UI craftsmanship.",
    sub: "EDITORIAL BOARD",
  },
  {
    tag: "SECTION C • COL 04",
    headline: "ENGINEERING EXCELLENCE",
    body: "Zero-latency hydration, pixel-perfect responsiveness, and robust TypeScript foundations built for modern web applications.",
    sub: "TECH DISPATCH",
  },
  {
    tag: "SECTION D • COL 05",
    headline: "AVAILABLE FOR PROJECTS",
    body: "Currently taking on select engineering projects, architectural design systems, and high-impact web development worldwide.",
    sub: "MUMBAI • INDIA",
  },
];

export default function ColumnStripsWipe({ isEnding }: ColumnStripsWipeProps) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-40 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 overflow-hidden">
      {COLUMNS_DATA.map((col, index) => (
        <motion.div
          key={index}
          className={`h-full bg-[#181614] border-r border-[#efe4cb]/20 relative flex flex-col justify-between p-4 md:p-6 overflow-hidden ${
            index >= 3 ? "hidden md:flex" : index >= 1 ? "hidden sm:flex" : "flex"
          }`}
          initial={{ y: "0%" }}
          animate={{ y: isEnding ? "-100%" : "0%" }}
          transition={{
            duration: 1.0,
            ease: [0.76, 0, 0.24, 1],
            delay: isEnding ? index * 0.1 : 0,
          }}
        >
          {/* Header Tag */}
          <div className="flex items-center justify-between border-b border-[#efe4cb]/20 pb-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#b91c1c] uppercase">
              {col.tag}
            </span>
            <span className="text-[9px] font-mono text-[#efe4cb]/40">
              P. 0{index + 1}
            </span>
          </div>

          {/* Column Article Content */}
          <div className="my-auto py-4 space-y-4">
            {/* Column Headline */}
            <h3 className="font-display text-2xl md:text-3xl font-black text-[#efe4cb] tracking-tight leading-none uppercase border-b-2 border-[#b91c1c] pb-2">
              {col.headline}
            </h3>

            {/* Column Body Text */}
            <p className="font-serif text-xs md:text-sm leading-relaxed text-[#efe4cb]/80 text-justify">
              {col.body}
            </p>

            {/* Vertical Decorative Divider */}
            <div className="w-8 h-[2px] bg-[#b91c1c]" />
          </div>

          {/* Footer Metadata */}
          <div className="border-t border-[#efe4cb]/20 pt-2 flex items-center justify-between text-[10px] font-mono text-[#efe4cb]/50 uppercase tracking-widest">
            <span>{col.sub}</span>
            <span className="text-[#b91c1c] font-bold">2026</span>
          </div>

          {/* Crimson Column Divider Line */}
          <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#b91c1c]/50 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}
