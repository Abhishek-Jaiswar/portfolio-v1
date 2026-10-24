"use client";

import { motion } from "motion/react";

export default function Marquee({ items }: { items: readonly string[] }) {
  const doubled = [...items, ...items];

  return (
    <div className="flex overflow-hidden border-y border-line py-8">
      <motion.div
        className="flex shrink-0 items-center gap-8 pr-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 34 }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-8 font-serif text-2xl text-muted sm:text-3xl"
          >
            {item}
            <span className="text-sm text-accent">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
