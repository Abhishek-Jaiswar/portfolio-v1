"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArticleData } from "@/components/newspaper/editorial-modal";
import { useLanguage } from "@/context/language-context";

interface HeroBentoSectionProps {
  leadStory: ArticleData;
  onSelectArticle: (article: ArticleData) => void;
}

export default function HeroBentoSection({
  leadStory,
  onSelectArticle,
}: HeroBentoSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 my-4 sm:my-6 py-2 border-b-2 border-[#1c1917]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT COLUMN: HERO LEAD STORY & AT A GLANCE (Col 1-8) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-8 flex flex-col justify-between space-y-4 lg:border-r lg:border-[#1c1917]/30 lg:pr-6"
        >
          <div>
            {/* Category Header */}
            <div className="text-xs font-mono font-bold tracking-widest text-[#b91c1c] uppercase mb-1">
              {leadStory.category || t("bento.exclusiveLead")}
            </div>

            {/* Headline */}
            <h2
              onClick={() => onSelectArticle(leadStory)}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1917] hover:text-[#b91c1c] transition-colors leading-[1.08] tracking-tight cursor-pointer mb-2.5 text-left"
            >
              {leadStory.headline}
            </h2>

            {/* Deck Subhead */}
            <p className="article-deck text-xs sm:text-sm text-[#1c1917]/85 italic mb-3 leading-snug text-left">
              {leadStory.deck}
            </p>

            {/* Byline Bar with Top and Bottom Dividers */}
            <div className="article-byline flex flex-wrap items-center justify-between text-[11px] font-mono py-1.5 my-3 border-y border-[#1c1917]/30">
              <div className="text-[#1c1917]">
                <span className="font-bold text-[#b91c1c]">{t("modal.by")} {leadStory.author}</span>
                <span className="text-[#1c1917]/60 block sm:inline sm:ml-2 font-semibold">{leadStory.role}</span>
              </div>
              <div className="text-[#1c1917]/60 font-mono text-[10px]">
                {t("bento.mumbaiBureau")} &bull; {t("bento.readTimeLabel")} {leadStory.readTime}
              </div>
            </div>

            {/* Split 2-Subcolumn Layout: Lead Text + At A Glance Box */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 my-4 items-start">
              {/* Left Sub-column: Paragraphs with Crimson Drop Cap */}
              <div className="md:col-span-7 font-serif text-xs sm:text-sm text-[#1c1917]/90 leading-relaxed text-justify space-y-3">
                <p className="drop-cap">
                  {leadStory.paragraphs[0]}
                </p>
                {leadStory.paragraphs[1] ? (
                  <p>{leadStory.paragraphs[1]}</p>
                ) : (
                  <p>
                    Through rigorous performance profiling, modular component design, and automated deployment strategies, his engineering solutions deliver enterprise-grade reliability and scalable business impact.
                  </p>
                )}
              </div>

              {/* Right Sub-column: At A Glance Callout Box */}
              <div className="md:col-span-5 border border-[#1c1917] p-3.5 bg-[#e4d4b2]/30 space-y-3 font-mono text-xs">
                <div className="text-[10px] font-bold text-[#1c1917] uppercase tracking-widest border-b border-[#1c1917]/20 pb-1">
                  AT A GLANCE
                </div>

                {/* Metric 1 */}
                <div className="flex items-center space-x-3 border-b border-dashed border-[#1c1917]/20 pb-2">
                  <div className="p-2 border border-[#1c1917] bg-[#efe4cb] text-[#1c1917]">
                    <svg className="w-5 h-5 text-[#1c1917]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-[#1c1917]/60 uppercase block">IMPACT METRIC</span>
                    <span className="font-black text-sm text-[#b91c1c]">45% SPEEDUP</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center space-x-3 border-b border-dashed border-[#1c1917]/20 pb-2">
                  <div className="p-2 border border-[#1c1917] bg-[#efe4cb] text-[#1c1917]">
                    <svg className="w-5 h-5 text-[#1c1917]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-[#1c1917]/60 uppercase block">ARCHITECTURE</span>
                    <span className="font-black text-xs sm:text-sm text-[#1c1917]">MULTI-TENANT</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 border border-[#1c1917] bg-[#efe4cb] text-[#1c1917]">
                    <svg className="w-5 h-5 text-[#1c1917]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-[#1c1917]/60 uppercase block">PRIMARY STACK</span>
                    <span className="font-black text-xs sm:text-sm text-[#1c1917]">FULL-STACK &bull; AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons Row (Matching Reference Image) */}
          <div className="pt-3 border-t border-[#1c1917]/30 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            <button
              onClick={() => onSelectArticle(leadStory)}
              className="bg-[#b91c1c] hover:bg-[#991b1b] text-white py-2.5 px-4 font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow cursor-pointer"
            >
              <span>📖</span>
              <span>READ FULL DISPATCH →</span>
            </button>

            <Link
              href="/case-studies"
              className="border-2 border-[#1c1917] bg-[#efe4cb] hover:bg-[#1c1917] hover:text-[#efe4cb] text-[#1c1917] py-2.5 px-4 font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 text-center"
            >
              <span>📁</span>
              <span>INVESTIGATIONS & CASE FILES</span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: PRESS PORTRAIT & AVAILABILITY STATUS (Col 9-12) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-4 flex flex-col justify-between space-y-4"
        >
          <div className="space-y-3">
            {/* Header */}
            <div className="text-[10px] font-mono font-bold uppercase text-[#1c1917] tracking-widest border-b border-[#1c1917]/30 pb-1">
              PRESS PORTRAIT &bull; FIG. 1.1
            </div>

            {/* Framed Photo with Bottom Caption */}
            <div className="border-2 border-[#1c1917] shadow-xs">
              <div className="relative w-full h-[360px] sm:h-[400px] overflow-hidden bg-[#181614] group">
                <Image
                  src="/abhishek.jpg"
                  alt="Abhishek Jaiswar - Software Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "center 15%" }}
                  className="grayscale contrast-125 filter group-hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
              <div className="bg-[#efe4cb] border-t border-[#1c1917] text-[#1c1917] p-2 text-[10px] font-mono">
                <span className="font-bold text-[#b91c1c]">DISPATCH:</span> Abhishek Jaiswar, Full Stack Engineer.
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="border border-[#1c1917] bg-[#efe4cb] p-3 text-xs font-mono space-y-2">
              <div className="flex items-center justify-between border-b border-[#1c1917]/20 pb-1.5">
                <span className="font-bold text-[#1c1917] text-[11px] uppercase">{t("bento.availabilityStatus")}</span>
                <span className="font-extrabold text-[#b91c1c] text-xs uppercase">{t("bento.openStatus")}</span>
              </div>
              <p className="text-[#1c1917]/80 text-[10px] leading-tight">
                Accepting full-time engineering and lead developer roles in high-growth product teams.
              </p>
              <div className="pt-1.5 border-t border-dashed border-[#1c1917]/20 space-y-1 text-[10px]">
                <div className="flex justify-between">
                  <span className="text-[#1c1917]/60">LOCATION:</span>
                  <span className="font-bold">Mumbai, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1c1917]/60">PRIMARY ROLE:</span>
                  <span className="font-bold">Full Stack Lead</span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Resume Button (Solid Dark Button) */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-full border-2 border-[#1c1917] bg-[#1c1917] text-[#efe4cb] hover:bg-[#b91c1c] hover:border-[#b91c1c] font-mono text-xs py-3 px-4 font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 shadow cursor-pointer mt-2"
          >
            <span>↓</span>
            <span>DOWNLOAD RESUME PDF</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
