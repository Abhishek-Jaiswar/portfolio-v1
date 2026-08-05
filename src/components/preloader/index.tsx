"use client";

import { motion } from "motion/react";
import { useState } from "react";
import MultilingualText from "./multilingual-text";
import LoadingCounter from "./loading-counter";
import ColumnStripsWipe from "./column-strips-wipe";
import RegistrationMarks from "./registration-marks";
import HandwrittenSignature from "./handwritten-signature";
import HeritageSkyline from "./heritage-skyline";

interface PreloaderProps {
  onFinish?: () => void;
}

export default function Preloader({ onFinish }: PreloaderProps) {
  const [isEnding, setIsEnding] = useState(false);

  const handleCounterComplete = () => {
    setIsEnding(true);
    // Allow printed newspaper column article wipe sequence to play out smoothly (~1.8s)
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 1850);
  };

  return (
    <>
      {/* 5-Column Newspaper Strip Staggered Wipe Exit */}
      <ColumnStripsWipe isEnding={isEnding} />

      {/* Main Preloader Overlay (Strict Responsive Vintage Press Layout) */}
      <motion.div
        className="fixed inset-0 z-50 flex flex-col justify-between p-3 sm:p-6 md:p-8 bg-[#efe4cb] text-[#1c1917] selection:bg-[#b91c1c] selection:text-white overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: isEnding ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Printer Registration Marks Overlay */}
        <RegistrationMarks />

        {/* Top Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 flex items-center justify-between border-b border-[#1c1917]/30 pb-2 sm:pb-3 px-6 sm:px-10 md:px-14 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#1c1917]/70 uppercase"
        >
          <div className="hidden sm:block">EST. 2026</div>
          <div className="text-center font-extrabold text-[#1c1917] mx-auto sm:mx-0">
            MUMBAI, INDIA
          </div>
          <div className="hidden sm:block text-right">DAILY EDITION</div>
        </motion.div>

        {/* Center Masthead & Dashboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 my-auto text-center px-2 sm:px-4 max-w-4xl mx-auto w-full"
        >
          {/* Subtitle Badge */}
          <div className="flex items-center justify-center space-x-1.5 sm:space-x-2 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#b91c1c] uppercase mb-1 sm:mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
            <span>PREPARING TODAY&apos;S EDITION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c]" />
          </div>

          {/* Masthead Title */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#1c1917] tracking-tight leading-none my-1 sm:my-2">
            The Abhishek Times
          </h1>

          {/* Subtitle Divider Rule */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 my-2 sm:my-3 text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#1c1917]/70 uppercase">
            <div className="hidden sm:block w-8 md:w-12 h-[1px] bg-[#1c1917]/40" />
            <span>IDEAS. CODE. IMPACT.</span>
            <div className="hidden sm:block w-8 md:w-12 h-[1px] bg-[#1c1917]/40" />
          </div>

          {/* 3-Column Print Status Dashboard & Red Laser Progress Track */}
          <LoadingCounter onComplete={handleCounterComplete} duration={2.5} />
        </motion.div>

        {/* Bottom Footer Section */}
        <div className="relative z-10 flex flex-col space-y-2 sm:space-y-3">
          {/* Footer Metadata & Heritage Graphic Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-center sm:items-end border-t border-[#1c1917]/30 pt-2 sm:pt-3 px-6 sm:px-10 md:px-14 text-xs font-mono uppercase font-bold"
          >
            {/* Left: APPROVED FOR PRINT & Signature (Signature hidden on mobile) */}
            <div className="hidden sm:flex flex-col items-start space-y-1">
              <span className="text-[#b91c1c] tracking-widest text-[10px] sm:text-[11px]">
                APPROVED FOR PRINT
              </span>
              <HandwrittenSignature />
            </div>

            {/* Center: Heritage Architecture Graphic & Multilingual Ticker */}
            <div className="flex flex-col items-center justify-center text-center my-1 sm:my-0">
              {/* Multilingual Text Ticker */}
              <div className="text-[10px] sm:text-[11px] font-mono text-[#1c1917]/80 tracking-widest">
                <MultilingualText />
              </div>
              {/* Skyline hidden on small mobile */}
              <div className="hidden md:block">
                <HeritageSkyline />
              </div>
            </div>

            {/* Right: HOT OFF THE PRESS (Hidden on mobile to save vertical space) */}
            <div className="hidden sm:flex flex-col items-end space-y-0.5 text-right">
              <span className="text-[#b91c1c] tracking-widest text-[10px] sm:text-[11px]">
                HOT OFF THE PRESS
              </span>
              <span className="text-[#1c1917]/60 text-[9px] sm:text-[10px] tracking-wider">
                THANK YOU FOR WAITING
              </span>
            </div>
          </motion.div>

          {/* Bottom Dark Ribbon */}
          <div className="w-full bg-primary text-[#efe4cb] py-1.5 sm:py-2 text-center text-[10px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-[0.25em] uppercase border-t border-[#1c1917]">
            A WEB PORTFOLIO BY ABHISHEK JAISWAR
          </div>
        </div>
      </motion.div>
    </>
  );
}