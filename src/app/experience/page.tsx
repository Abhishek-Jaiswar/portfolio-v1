"use client";

import Link from "next/link";
import { motion } from "motion/react";
import NewspaperHeader from "@/components/newspaper/newspaper-header";
import { useLanguage } from "@/context/language-context";
import { useLocalizedContent } from "@/hooks/use-localized-content";

export default function ExperiencePage() {
  const { t } = useLanguage();
  const { appointments } = useLocalizedContent();

  return (
    <div className="min-h-screen p-3 sm:p-6 md:p-8 bg-[#efe4cb] text-[#1c1917] font-serif selection:bg-[#b91c1c] selection:text-white relative overflow-x-hidden">
      {/* Full Newspaper Header & Navbar */}
        <NewspaperHeader />

        {/* Specific Experience Section Banner */}
        <div className="text-center border-y-4 border-[#1c1917] py-6 bg-[#efe4cb] my-4 space-y-1">
          <span className="font-mono text-xs font-bold text-[#b91c1c] uppercase tracking-widest block">
            ★ {t("home.businessChronicleHeading")} ★
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight">
            {t("nav.experience")}
          </h1>
          <p className="font-mono text-xs text-[#1c1917]/70 font-bold uppercase tracking-widest">
            LEADERSHIP ROLES &bull; ENGINEERING MILESTONES &bull; PEDIGREE
          </p>
        </div>

        {/* Experience Timeline as Newspaper Press Release Articles */}
        <div className="space-y-8 py-6 border-b-2 border-[#1c1917]">
          {appointments.map((job, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-[#1c1917] p-6 bg-[#e4d4b2]/30 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between text-xs font-mono font-bold border-b border-[#1c1917]/20 pb-2">
                <span className="text-[#b91c1c]">[ APPOINTMENT REPORT ]</span>
                <span>{job.period} &bull; MUMBAI, INDIA</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1c1917]">
                {job.title} — {job.company}
              </h2>

              <p className="drop-cap font-serif text-xs sm:text-sm text-[#1c1917]/90 leading-relaxed pt-1">
                {job.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Footer Navigation */}
        <footer className="pt-6 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-[#1c1917]/30 pb-4">
            <Link href="/editorials" className="text-[#b91c1c] font-bold hover:underline">
              ← PREVIOUS SECTION: EDITORIALS
            </Link>
            <Link href="/contact" className="text-[#b91c1c] font-bold hover:underline">
              NEXT SECTION: PRESS ROOM [CONTACT] →
            </Link>
          </div>
          <div className="py-4 text-center text-[10px] text-[#1c1917]/60 uppercase tracking-widest">
            THE ABHISHEK TIMES &bull; BUSINESS CHRONICLE SECTION
          </div>
        </footer>
    </div>
  );
}
