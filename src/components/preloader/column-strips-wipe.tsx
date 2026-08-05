"use client";

import { motion } from "motion/react";

interface ColumnStripsWipeProps {
  isEnding: boolean;
}

const STRIP_COUNT = 5;

export default function ColumnStripsWipe({ isEnding }: ColumnStripsWipeProps) {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-40 grid grid-cols-3 sm:grid-cols-5 overflow-hidden">
      {Array.from({ length: STRIP_COUNT }).map((_, index) => (
        <motion.div
          key={index}
          className={`h-full bg-[#181614] border-r border-[#efe4cb]/15 relative flex flex-col justify-between p-2 sm:p-4 ${
            index >= 3 ? "hidden sm:flex" : "flex"
          }`}
          initial={{ y: "0%" }}
          animate={{ y: isEnding ? "-100%" : "0%" }}
          transition={{
            duration: 0.85,
            ease: [0.87, 0, 0.13, 1],
            delay: isEnding ? index * 0.08 : 0,
          }}
        >
          {/* Column Header Label (Hidden on small mobile) */}
          <div className="hidden sm:block text-[10px] font-mono tracking-widest text-[#efe4cb]/40 uppercase select-none">
            COL. 0{index + 1}
          </div>

          {/* Vertical Accent Rule */}
          <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-[#b91c1c]/40 to-transparent" />

          {/* Column Footer Label (Hidden on small mobile) */}
          <div className="hidden sm:block text-[10px] font-mono tracking-widest text-[#efe4cb]/30 uppercase select-none">
            PRINT 2026
          </div>
        </motion.div>
      ))}
    </div>
  );
}
