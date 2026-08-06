"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/language-context";
import { LANGUAGE_OPTIONS, Language } from "@/data/translations";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentOption = LANGUAGE_OPTIONS.find((opt) => opt.code === language) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block font-mono text-xs text-[#1c1917]" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1.5 border border-[#1c1917]/40 bg-[#efe4cb] hover:bg-[#1c1917] hover:text-[#efe4cb] px-2.5 py-1 transition-colors font-bold uppercase cursor-pointer shadow-xs"
        title="Select Language"
        aria-label="Select Language"
      >
        {/* Globe Icon */}
        <svg
          className="w-3.5 h-3.5 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 000 18M12 3a14.5 14.5 0 010 18" />
        </svg>
        <span className="text-sm leading-none">{currentOption.flag}</span>
        <span className="font-extrabold">{currentOption.code.toUpperCase()}</span>
        <span className="text-[8px] opacity-70">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-44 bg-[#efe4cb] border-2 border-[#1c1917] shadow-xl z-50 py-1 font-mono text-xs divide-y divide-[#1c1917]/20">
          <div className="px-3 py-1.5 text-[9px] font-black tracking-widest text-[#b91c1c] uppercase flex items-center space-x-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
              <path d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 000 18M12 3a14.5 14.5 0 010 18" />
            </svg>
            <span>CHOOSE LANGUAGE</span>
          </div>
          {LANGUAGE_OPTIONS.map((option) => (
            <button
              key={option.code}
              onClick={() => {
                setLanguage(option.code as Language);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#1c1917] hover:text-[#efe4cb] transition-colors cursor-pointer ${
                language === option.code ? "bg-[#1c1917]/10 font-black text-[#b91c1c]" : "font-bold text-[#1c1917]"
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>{option.flag}</span>
                <span>{option.nativeName}</span>
              </span>
              <span className="text-[10px] uppercase font-mono opacity-70">[{option.code}]</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
