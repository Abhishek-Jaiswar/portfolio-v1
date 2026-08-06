"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import NewsTicker from "@/components/newspaper/news-ticker";
import LanguageSwitcher from "@/components/newspaper/language-switcher";
import ThemeSwitcher from "@/components/newspaper/theme-switcher";
import { useLanguage } from "@/context/language-context";

interface HeaderProps {
  tickerItems?: string[];
  isFrontPage?: boolean;
}

export default function NewspaperHeader({ tickerItems, isFrontPage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  // If isFrontPage is not explicitly passed, infer from pathname
  const showFullMasthead = isFrontPage !== undefined ? isFrontPage : pathname === "/";

  const navLinks = [
    { href: "/", label: t("nav.front") },
    { href: "/case-studies", label: t("nav.caseStudies") },
    { href: "/editorials", label: t("nav.editorials") },
    { href: "/experience", label: t("nav.experience") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="relative z-10 flex flex-col items-center w-full">
      {/* Top Metadata Bar */}
      <div className="w-full flex flex-wrap items-center justify-between border-b border-[#1c1917]/30 pb-2 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#1c1917]/70 uppercase px-2 sm:px-4 gap-2">
        <span className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-[#b91c1c] animate-ping" />
          <span>{t("header.established")}</span>
        </span>
        <span className="font-extrabold text-[#1c1917] text-center">{t("header.location")}</span>
        <div className="flex items-center space-x-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
      {/* Main Gothic Masthead Title */}
      {showFullMasthead ? (
        <>
          <div className="w-full text-center border-y-4 border-[#1c1917] my-3 py-3 sm:py-5 bg-[#efe4cb] relative">
            <Link href="/">
              <motion.h1
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#1c1917] tracking-tight uppercase leading-none select-none hover:text-[#b91c1c] transition-colors"
              >
                {t("header.mastheadTitle")}
              </motion.h1>
            </Link>
            <div className="text-[10px] sm:text-xs font-mono text-[#b91c1c] font-black uppercase tracking-[0.3em] mt-1.5">
              {t("header.mastheadSub")}
            </div>
          </div>
          <NewsTicker items={tickerItems} />
        </>
      ) : (
        /* Subpage Compact Header Bar with Brand Title */
        <div className="w-full flex items-center justify-between border-b-2 border-[#1c1917] py-2 my-1 px-2 font-mono">
          <Link href="/" className="font-display text-xl sm:text-2xl font-black uppercase text-[#1c1917] hover:text-[#b91c1c] transition-colors tracking-tight">
            {t("header.mastheadTitle")}
          </Link>
          <span className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-widest hidden sm:inline">
            {t("header.subheadDispatch")}
          </span>
        </div>
      )}

      {/* Shared Navigation Bar */}
      <nav className="hidden md:flex w-full border-y-2 border-[#1c1917] my-2 py-2 items-center justify-between gap-2 px-4 text-xs font-mono font-bold uppercase">
        <div className="flex items-center space-x-6 lg:space-x-8 py-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors relative pb-1 ${isActive
                    ? "text-[#b91c1c] font-black border-b-2 border-[#b91c1c]"
                    : "text-[#1c1917] hover:text-[#b91c1c]"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact#telegraph-form"
          className="border border-[#1c1917] bg-[#1c1917] text-[#efe4cb] px-3.5 py-1 text-[11px] hover:bg-[#b91c1c] hover:border-[#b91c1c] transition-colors flex items-center space-x-1 font-bold shrink-0"
        >
          <span>{t("header.sendTelegraph")}</span>
          <span>✉</span>
        </Link>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className="flex md:hidden w-full border-y-2 border-[#1c1917] my-2 py-2 items-center justify-between px-2 text-xs font-mono font-bold uppercase relative">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#b91c1c]" />
          <span className="text-[#b91c1c] font-black">
            {navLinks.find((l) => l.href !== "/" && pathname.startsWith(l.href))?.label || t("nav.front")}
          </span>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="border border-[#1c1917] bg-[#1c1917] text-[#efe4cb] px-3 py-1 text-xs font-mono font-bold flex items-center space-x-1.5 active:scale-95 transition-transform"
        >
          <span>{menuOpen ? `${t("header.close")} [X]` : `${t("header.sections")} [☰]`}</span>
        </button>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-[#efe4cb] border-2 border-[#1c1917] p-4 z-40 shadow-2xl space-y-3 font-mono text-xs font-bold uppercase text-[#1c1917]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block p-2 border-b border-[#1c1917]/20 ${isActive ? "text-[#b91c1c] font-black" : "hover:text-[#b91c1c]"
                    }`}
                >
                  ● {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact#telegraph-form"
              onClick={() => setMenuOpen(false)}
              className="block p-2 text-[#b91c1c] font-black flex items-center justify-between"
            >
              <span>{t("header.sendTelegraph")}</span>
              <span>✉</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
