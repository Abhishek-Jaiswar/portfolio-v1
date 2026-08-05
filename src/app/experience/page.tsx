"use client";

import Link from "next/link";
import { motion } from "motion/react";
import NewspaperHeader from "@/components/newspaper/newspaper-header";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen p-3 sm:p-6 md:p-8 bg-[#efe4cb] text-[#1c1917] font-serif selection:bg-[#b91c1c] selection:text-white relative overflow-x-hidden">
      {/* Full Newspaper Header & Navbar */}
        <NewspaperHeader
          tickerItems={[
            "CAREER REPORT: Full Stack Lead Developer at CBS Software Solutions",
            "INTERNSHIP: Backend API development at KartBuddy Logistics",
            "PEDIGREE: Specializing in high-scale SaaS architectures and Node.js microservices",
          ]}
        />

        {/* Specific Experience Section Banner */}
        <div className="text-center border-y-4 border-[#1c1917] py-6 bg-[#efe4cb] my-4 space-y-1">
          <span className="font-mono text-xs font-bold text-[#b91c1c] uppercase tracking-widest block">
            ★ OFFICIAL CAREER RECORD & APPOINTMENTS ★
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight">
            Business Chronicle
          </h1>
          <p className="font-mono text-xs text-[#1c1917]/70 font-bold uppercase tracking-widest">
            LEADERSHIP ROLES &bull; ENGINEERING MILESTONES &bull; PEDIGREE
          </p>
        </div>

        {/* Experience Timeline as Newspaper Press Release Articles */}
        <div className="space-y-8 py-6 border-b-2 border-[#1c1917]">
          {/* Job 1 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[#1c1917] p-6 bg-[#e4d4b2]/30 space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between text-xs font-mono font-bold border-b border-[#1c1917]/20 pb-2">
              <span className="text-[#b91c1c]">[ APPOINTMENT REPORT ]</span>
              <span>2026 — PRESENT &bull; MUMBAI, INDIA</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1c1917]">
              Full Stack Developer & Tech Lead — CBS Software Solutions (SignBooks)
            </h2>

            <p className="article-deck text-sm sm:text-base text-[#1c1917]/80">
              Leading full-stack engineering for multi-tenant SaaS platforms serving chartered accountants and tax advisory firms.
            </p>

            <div className="drop-cap font-serif text-xs sm:text-sm text-[#1c1917]/90 leading-relaxed space-y-2">
              <p>
                In 2026, Abhishek was appointed to lead the engineering of SignBooks. Under his technical leadership, the platform was overhauled to support multi-tenant organization isolation, automated compliance authorization workflows, and real-time client analytics.
              </p>
              <p>
                He designed Node.js microservices integrated with PostgreSQL, implemented JWT role authorization policies, and led frontend development in React and Tailwind CSS.
              </p>
            </div>

            <div className="pt-3 border-t border-[#1c1917]/20 font-mono text-xs flex flex-wrap gap-2">
              <span className="font-bold text-[#b91c1c]">CORE TECH:</span>
              {["Node.js", "Express", "PostgreSQL", "Prisma", "React", "TypeScript", "Multi-Tenancy"].map((t, i) => (
                <span key={i} className="border border-[#1c1917] bg-[#efe4cb] px-2 py-0.5 text-[10px] font-bold">
                  #{t}
                </span>
              ))}
            </div>
          </motion.article>

          {/* Job 2 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[#1c1917] p-6 bg-[#e4d4b2]/30 space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between text-xs font-mono font-bold border-b border-[#1c1917]/20 pb-2">
              <span className="text-[#b91c1c]">[ APPOINTMENT REPORT ]</span>
              <span>2025 — 2026 &bull; MUMBAI, INDIA</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1c1917]">
              Junior Full Stack Developer — CBS Software Solutions
            </h2>

            <p className="article-deck text-sm sm:text-base text-[#1c1917]/80">
              Developing core features, optimizing database queries, and integrating payment systems for enterprise web tools.
            </p>

            <div className="drop-cap font-serif text-xs sm:text-sm text-[#1c1917]/90 leading-relaxed space-y-2">
              <p>
                During his initial tenure at CBS Software Solutions, Abhishek developed key backend endpoints and responsive frontend views. He integrated payment gateways, optimized complex SQL query execution plans, and built document management features.
              </p>
            </div>

            <div className="pt-3 border-t border-[#1c1917]/20 font-mono text-xs flex flex-wrap gap-2">
              <span className="font-bold text-[#b91c1c]">CORE TECH:</span>
              {["JavaScript", "Node.js", "PostgreSQL", "React", "REST APIs"].map((t, i) => (
                <span key={i} className="border border-[#1c1917] bg-[#efe4cb] px-2 py-0.5 text-[10px] font-bold">
                  #{t}
                </span>
              ))}
            </div>
          </motion.article>

          {/* Job 3 */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[#1c1917] p-6 bg-[#e4d4b2]/30 space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between text-xs font-mono font-bold border-b border-[#1c1917]/20 pb-2">
              <span className="text-[#b91c1c]">[ APPOINTMENT REPORT ]</span>
              <span>2024 — 2025 &bull; MUMBAI, INDIA</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#1c1917]">
              Backend Developer Intern — KartBuddy Logistics Pvt. Ltd.
            </h2>

            <p className="article-deck text-sm sm:text-base text-[#1c1917]/80">
              Building REST API modules for referral networks and partner lead tracking.
            </p>

            <div className="drop-cap font-serif text-xs sm:text-sm text-[#1c1917]/90 leading-relaxed space-y-2">
              <p>
                At KartBuddy Logistics, Abhishek built backend microservices for managing affiliate partner referrals and automated email dispatchers.
              </p>
            </div>

            <div className="pt-3 border-t border-[#1c1917]/20 font-mono text-xs flex flex-wrap gap-2">
              <span className="font-bold text-[#b91c1c]">CORE TECH:</span>
              {["Node.js", "Express", "MongoDB", "REST APIs"].map((t, i) => (
                <span key={i} className="border border-[#1c1917] bg-[#efe4cb] px-2 py-0.5 text-[10px] font-bold">
                  #{t}
                </span>
              ))}
            </div>
          </motion.article>
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
