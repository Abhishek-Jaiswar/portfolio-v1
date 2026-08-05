"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const STATUS_STEPS = [
  { text: "SETTING TYPE...", sub: "TYPESETTING" },
  { text: "ALIGNING COLUMNS...", sub: "LAYOUT" },
  { text: "CHECKING INK DENSITY...", sub: "PRESS" },
  { text: "NAMASTE", sub: "HINDI" },
  { text: "BONJOUR", sub: "FRENCH" },
  { text: "CIAO", sub: "ITALIAN" },
  { text: "HOLA", sub: "SPANISH" },
  { text: "KONNICHIWA", sub: "JAPANESE" },
  { text: "EDITION READY", sub: "COMPLETE" },
];

interface MultilingualTextProps {
  onComplete?: () => void;
}

export default function MultilingualText({ onComplete }: MultilingualTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === STATUS_STEPS.length - 1) {
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 450);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <div className="relative h-6 flex items-center justify-center overflow-hidden my-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-[#1c1917]/85"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#b91c1c] animate-pulse" />
          <span>{STATUS_STEPS[index].text}</span>
          <span className="text-[10px] text-[#b91c1c] border border-[#b91c1c]/40 px-1 py-0.2">
            {STATUS_STEPS[index].sub}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
