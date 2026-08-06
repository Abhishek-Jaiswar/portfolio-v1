"use client";

import { useLanguage } from "@/context/language-context";

export default function NewspaperFooter() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 border-t-4 border-[#1c1917] pt-6 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono border-b border-[#1c1917]/30 pb-6">
        <div>
          <h4 className="font-display font-black text-xl text-[#1c1917] uppercase">The Abhishek Times</h4>
          <p className="text-[11px] text-[#1c1917]/70 mt-1 leading-relaxed">
            {t("footer.tagline")}
          </p>
        </div>

        <div>
          <div className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-widest mb-1">{t("footer.printedPublishedTitle")}</div>
          <div className="font-bold text-[#1c1917] text-xs">{t("footer.location")}</div>
          <div className="text-[10px] text-[#1c1917]/60 mt-1">{t("footer.globalAvailability")}</div>
        </div>

        <div>
          <div className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-widest mb-1">{t("footer.volumeIssueTitle")}</div>
          <div className="font-bold text-[#1c1917] text-xs">{t("footer.volumeInfo")}</div>
          <div className="text-[10px] text-[#1c1917]/60 mt-1">{t("footer.circulationInfo")}</div>
        </div>

        <div>
          <div className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-widest mb-1">{t("footer.rightsTitle")}</div>
          <div className="text-[10px] text-[#1c1917]/70 leading-tight">
            {t("footer.rightsText")}
          </div>
        </div>
      </div>

      <div className="py-4 text-center text-[10px] font-mono text-[#1c1917]/60 uppercase tracking-widest">
        {t("footer.endNotice")}
      </div>
    </footer>
  );
}
