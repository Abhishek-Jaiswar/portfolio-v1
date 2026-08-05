"use client";

import { motion } from "motion/react";

interface InkDensityMeterProps {
  progress: number;
}

const TOTAL_BARS = 20;

export default function InkDensityMeter({ progress }: InkDensityMeterProps) {
  const activeBars = Math.floor((progress / 100) * TOTAL_BARS);

  return (
    <div className="flex items-center space-x-[3px] mt-1.5">
      {Array.from({ length: TOTAL_BARS }).map((_, index) => {
        const isActive = index < activeBars;
        return (
          <motion.div
            key={index}
            className={`w-[4px] h-4 rounded-[1px] transition-colors duration-150 ${
              isActive ? "bg-[#1c1917]" : "bg-[#1c1917]/20"
            }`}
            animate={{
              scaleY: isActive ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.02,
            }}
          />
        );
      })}
    </div>
  );
}
