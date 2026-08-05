"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import NewsTicker from "@/components/newspaper/news-ticker";

interface HeaderProps {
  tickerItems?: string[];
  isFrontPage?: boolean;
}

export default function NewspaperHeader({ tickerItems, isFrontPage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // If isFrontPage is not explicitly passed, infer from pathname
  const showFullMasthead = isFrontPage !== undefined ? isFrontPage : pathname === "/";

  const navLinks = [
    { href: "/", label: "PAGE ONE [FRONT]" },
    { href: "/case-studies", label: "INVESTIGATIONS & CASE FILES" },
    { href: "/editorials", label: "EDITORIALS & OP-EDS" },
    { href: "/experience", label: "BUSINESS CHRONICLE" },
    { href: "/contact", label: "PRESS ROOM [CONTACT]" },
  ];

  return (
    <header className="relative z-10 flex flex-col items-center w-full">
      {/* Top Metadata Bar */}
      <div className="w-full flex items-center justify-between border-b border-[#1c1917]/30 pb-2 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#1c1917]/70 uppercase px-2 sm:px-4">
        <span className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-[#b91c1c] animate-ping" />
          <span>EST. 2026</span>
        </span>
        <span className="font-extrabold text-[#1c1917] text-center">MUMBAI &bull; MAHARASHTRA &bull; INDIA</span>
        <span>DAILY TECH EDITION</span>
      </div>

      {/* Main Gothic Masthead Title (Only on Front Page or if showFullMasthead is true) */}
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
                The Abhishek Times
              </motion.h1>
            </Link>
            <div className="text-[10px] sm:text-xs font-mono text-[#b91c1c] font-black uppercase tracking-[0.3em] mt-1">
              THE CHRONICLE OF IDEAS &bull; HIGH-SCALE SYSTEMS &bull; SOFTWARE ARCHITECTURE
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3 sm:space-x-6 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#1c1917]/70 uppercase my-1 text-center">
            <div className="hidden sm:block w-16 sm:w-24 h-[1px] bg-[#1c1917]/40" />
            <span>VOLUME I &bull; ISSUE #214 &bull; PUBLISHED DAILY IN MUMBAI</span>
            <div className="hidden sm:block w-16 sm:w-24 h-[1px] bg-[#1c1917]/40" />
          </div>
        </>
      ) : (
        /* Subpage Compact Header Bar with Brand Title */
        <div className="w-full flex items-center justify-between border-b-2 border-[#1c1917] py-2 my-1 px-2 font-mono">
          <Link href="/" className="font-display text-xl sm:text-2xl font-black uppercase text-[#1c1917] hover:text-[#b91c1c] transition-colors tracking-tight">
            The Abhishek Times
          </Link>
          <span className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-widest hidden sm:inline">
            OFFICIAL DISPATCH EDITION
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
                className={`transition-colors relative pb-1 ${
                  isActive
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
          <span>SEND TELEGRAPH</span>
          <span>✉</span>
        </Link>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div className="flex md:hidden w-full border-y-2 border-[#1c1917] my-2 py-2 items-center justify-between px-2 text-xs font-mono font-bold uppercase relative">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#b91c1c]" />
          <span className="text-[#b91c1c] font-black">
            {navLinks.find((l) => l.href !== "/" && pathname.startsWith(l.href))?.label || "PAGE ONE"}
          </span>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="border border-[#1c1917] bg-[#1c1917] text-[#efe4cb] px-3 py-1 text-xs font-mono font-bold flex items-center space-x-1.5 active:scale-95 transition-transform"
        >
          <span>{menuOpen ? "CLOSE [X]" : "SECTIONS [☰]"}</span>
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
                  className={`block p-2 border-b border-[#1c1917]/20 ${
                    isActive ? "text-[#b91c1c] font-black" : "hover:text-[#b91c1c]"
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
              <span>SEND TELEGRAPH</span>
              <span>✉</span>
            </Link>
          </div>
        )}
      </div>

      {/* Animated Motion Breaking News Ticker */}
      <NewsTicker items={tickerItems} />
    </header>
  );
}
