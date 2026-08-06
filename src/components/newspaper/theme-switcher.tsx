"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme, ThemeMode } from "@/context/theme-context";

const themes: { id: ThemeMode; label: string; icon: string; tag: string }[] = [
  {
    id: "classic",
    label: "CLASSIC",
    icon: "📜",
    tag: "VINTAGE CREAM",
  },
  {
    id: "modern-dark",
    label: "DARK",
    icon: "⚡",
    tag: "CYBER OBSIDIAN",
  },
  {
    id: "modern-light",
    label: "B&W",
    icon: "🗞️",
    tag: "PURE MONOCHROME",
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeTheme = themes.find((t) => t.id === theme) || themes[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left z-30 font-mono" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1.5 border border-[#1c1917] bg-[#efe4cb] px-2.5 py-1 text-xs font-bold text-[#1c1917] hover:bg-[#b91c1c] hover:text-white transition-colors shadow-xs uppercase cursor-pointer"
        aria-label="Select Theme Edition"
        title="Select Theme Edition"
      >
        {/* Palette / Theme Icon */}
        <svg
          className="w-3.5 h-3.5 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2a10 10 0 100 20 4 4 0 000-8h-1.5a1.5 1.5 0 01-1.5-1.5v-.5A2 2 0 007 10h-.5A4.5 4.5 0 012 5.5V5a3 3 0 013-3h7z" />
        </svg>
        <span className="font-extrabold">{activeTheme.label}</span>
        <span className="text-[8px] opacity-70">{isOpen ? "▲" : "▼"}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-1 w-60 sm:w-64 border-2 border-[#1c1917] bg-[#efe4cb] shadow-xl py-1 text-xs z-50 divide-y divide-[#1c1917]/20"
          >
            <div className="px-3 py-1.5 text-[9px] font-bold text-[#b91c1c] uppercase tracking-widest flex items-center space-x-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 4 4 0 000-8h-1.5a1.5 1.5 0 01-1.5-1.5v-.5A2 2 0 007 10h-.5A4.5 4.5 0 012 5.5V5a3 3 0 013-3h7z" />
              </svg>
              <span>THEME EDITION</span>
            </div>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 flex items-center justify-between transition-colors cursor-pointer ${
                  theme === t.id
                    ? "bg-[#1c1917] text-[#efe4cb] font-bold"
                    : "hover:bg-[#b91c1c] hover:text-white text-[#1c1917]"
                }`}
              >
                <span className="flex items-center space-x-2 shrink-0">
                  <span>{t.icon}</span>
                  <span className="font-bold whitespace-nowrap">{t.label}</span>
                </span>
                <span className="text-[9px] opacity-75 whitespace-nowrap ml-2">{t.tag}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
