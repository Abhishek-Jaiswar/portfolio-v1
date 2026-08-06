"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { techMarketIndex, careerAppointments } from "@/data/homepage-data";
import { CareerAppointment } from "@/data/localized/homepage-articles";
import { useLanguage } from "@/context/language-context";

interface MarketChronicleSectionProps {
  appointments?: CareerAppointment[];
}

export default function MarketChronicleSection({
  appointments = careerAppointments,
}: MarketChronicleSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 my-6 py-4 border-b-2 border-[#1c1917]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: TECH MARKET WATCH (Col 1-4) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 space-y-4 lg:border-r lg:border-[#1c1917]/30 lg:pr-6"
        >
          <h3 className="text-xs font-mono font-bold tracking-widest text-[#b91c1c] uppercase border-b-2 border-[#1c1917] pb-1.5 flex items-center justify-between">
            <span>{t("market.indexTitle")}</span>
            <span className="text-[10px] text-[#1c1917]/60">{t("market.profitProficiency")}</span>
          </h3>

          <div className="space-y-2.5 text-xs font-mono">
            {techMarketIndex.map((stock, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-[#1c1917]/15 pb-2 hover:bg-[#e4d4b2]/30 p-1 transition-colors"
              >
                <div>
                  <span className="font-black text-[#b91c1c] mr-2">{stock.symbol}</span>
                  <span className="font-bold">{stock.name}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-10 h-3 text-[#b91c1c]" viewBox="0 0 50 15" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M0 12 L10 9 L20 13 L30 4 L40 7 L50 2" />
                  </svg>
                  <span className="font-black text-[#b91c1c]">{stock.gain}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-[#1c1917] p-3 bg-[#e4d4b2]/50 text-xs font-mono space-y-1.5 mt-4">
            <div className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-widest">
              {t("market.analysisSummaryTitle")}
            </div>
            <p className="text-[11px] text-[#1c1917]/80 leading-relaxed font-serif">
              {t("market.analysisSummaryText")}
            </p>
          </div>
        </motion.div>

        {/* Right: BUSINESS CHRONICLE & CAREER APPOINTMENTS (Col 5-12) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 space-y-4 lg:pl-4"
        >
          <h3 className="text-xs font-mono font-bold tracking-widest text-[#b91c1c] uppercase border-b-2 border-[#1c1917] pb-1.5 flex items-center justify-between">
            <span>{t("home.businessChronicleHeading")}</span>
            <span className="text-[10px] text-[#1c1917]/60">{t("market.officialAppointments")}</span>
          </h3>

          <div className="space-y-6">
            {appointments.map((job, idx) => (
              <div key={idx} className="border-b border-[#1c1917]/20 pb-4 grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-3 font-mono text-xs text-[#b91c1c] font-bold">
                  {job.period}
                </div>
                <div className="md:col-span-9 space-y-1">
                  <h4 className="font-serif font-black text-xl text-[#1c1917]">
                    {job.title}
                  </h4>
                  <div className="font-mono text-xs font-bold text-[#b91c1c]">
                    {job.company}
                  </div>
                  <p className="font-serif text-xs text-[#1c1917]/80 leading-relaxed pt-1">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 text-right">
            <Link href="/experience" className="text-xs font-mono font-bold text-[#b91c1c] hover:underline uppercase tracking-wider">
              {t("market.viewCareerHistory")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
