"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/context/language-context";

export default function TelegraphDeskSection() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="telegraph-form" className="relative z-10 my-6 py-6 border-b-2 border-[#1c1917] bg-[#e4d4b2]/40 p-4 sm:p-6 border">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2 border-b-2 border-[#1c1917] pb-4">
          <span className="font-mono text-xs font-bold text-[#b91c1c] tracking-widest uppercase">
            ★ {t("home.telegraphDeskTitle")} ★
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-black text-[#1c1917]">
            {t("home.telegraphSubtitle")}
          </h3>
        </div>

        {contactSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#efe4cb] border-2 border-[#1c1917] p-6 text-center space-y-3 font-serif"
          >
            <div className="text-2xl font-black text-[#b91c1c]">{t("home.sentSuccess")}</div>
            <button
              onClick={() => setContactSubmitted(false)}
              className="border border-[#1c1917] bg-[#1c1917] text-[#efe4cb] px-4 py-2 font-mono text-xs uppercase font-bold hover:bg-[#b91c1c] cursor-pointer transition-colors"
            >
              {t("header.sendTelegraph")}
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setContactSubmitted(true);
            }}
            className="space-y-4 font-mono text-xs"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#1c1917] uppercase mb-1">
                  {t("home.formName")}:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jane Doe (Tech Corp)"
                  className="w-full bg-[#efe4cb] border border-[#1c1917] p-2.5 font-serif text-sm focus:outline-none focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1c1917] uppercase mb-1">
                  {t("home.formEmail")}:
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="w-full bg-[#efe4cb] border border-[#1c1917] p-2.5 font-serif text-sm focus:outline-none focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c]"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#1c1917] uppercase mb-1">
                {t("home.formMessage")}:
              </label>
              <textarea
                rows={4}
                required
                placeholder="..."
                className="w-full bg-[#efe4cb] border border-[#1c1917] p-2.5 font-serif text-sm focus:outline-none focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c]"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] text-[#1c1917]/60">
                DISPATCH LOCATION: MUMBAI, INDIA &bull; LAT 19.0760° N
              </span>

              <button
                type="submit"
                className="bg-[#b91c1c] hover:bg-[#991b1b] text-white font-mono text-xs px-6 py-3 font-bold uppercase tracking-wider transition-colors shadow cursor-pointer flex items-center space-x-2"
              >
                <span>{t("home.sendBtn")}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
