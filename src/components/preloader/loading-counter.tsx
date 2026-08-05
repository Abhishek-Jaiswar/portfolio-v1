"use client";

import { motion, animate, useMotionValue, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";
import InkDensityMeter from "./ink-density-meter";

interface LoadingCounterProps {
  onComplete?: () => void;
  duration?: number;
}

export default function LoadingCounter({ onComplete, duration = 2.5 }: LoadingCounterProps) {
  const progress = useMotionValue(0);
  const [count, setCount] = useState(0);

  useMotionValueEvent(progress, "change", (latest) => {
    const val = Math.round(latest);
    setCount(val);
    if (val === 100 && onComplete) {
      onComplete();
    }
  });

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: duration,
      ease: [0.65, 0, 0.35, 1],
    });

    return () => controls.stop();
  }, [progress, duration]);

  return (
    <div className="w-full max-w-2xl mx-auto my-2 sm:my-4 flex flex-col items-center">
      {/* Print Status Dashboard: Clean 1-Column on Mobile, 3-Column on Tablet/Desktop */}
      <div className="w-full border-y-2 border-[#1c1917] py-3 sm:py-4 my-2 sm:my-4 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center text-center">
        {/* Left Column: PRINT STATUS & Ink Density (Hidden on mobile) */}
        <div className="hidden sm:flex flex-col items-start sm:pl-6 text-left border-r border-[#1c1917]/30 pr-2">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#b91c1c] uppercase">
            PRINT STATUS
          </span>
          <span className="text-xs font-mono text-[#1c1917]/70 mt-1">
            Ink Density
          </span>
          <InkDensityMeter progress={count} />
        </div>

        {/* Center Column: Giant Red Percentage Counter (Always Visible) */}
        <div className="flex items-baseline justify-center font-display my-1 sm:my-0">
          <span className="text-5xl sm:text-6xl md:text-7xl font-black text-[#b91c1c] tracking-tighter tabular-nums">
            {count}
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1c1917] font-serif ml-1">%</span>
        </div>

        {/* Right Column: EDITION NO. (Hidden on mobile) */}
        <div className="hidden sm:flex flex-col items-end sm:pr-6 text-right border-l border-[#1c1917]/30 pl-2">
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#b91c1c] uppercase">
            EDITION NO.
          </span>
          <span className="text-2xl md:text-3xl font-display font-black text-[#1c1917] mt-0.5">
            # 214
          </span>
          <span className="text-[10px] font-mono font-bold text-[#1c1917]/60 tracking-wider">
            VOL. I • 2026
          </span>
        </div>
      </div>

      {/* Subtitle Ticker Line (Clean mobile layout) */}
      <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono font-bold tracking-wider px-1 text-[#1c1917]">
        <span className="hidden sm:inline text-[#1c1917]/80">Printing stories that matter.</span>
        <span className="text-[#1c1917]/80 sm:hidden">PRINTING...</span>
        <span className="text-[#b91c1c] animate-pulse">PLEASE WAIT...</span>
      </div>

      {/* Red Laser Progress Track */}
      <div className="w-full h-1 bg-[#1c1917]/15 rounded-full overflow-hidden mt-2 sm:mt-3 relative">
        <motion.div
          className="h-full bg-[#b91c1c] shadow-[0_0_8px_#b91c1c]"
          style={{ width: `${count}%` }}
          transition={{ ease: "linear" }}
        />
      </div>
    </div>
  );
}