"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Marquee({ items }: { items: readonly string[] }) {
  const doubled = [...items, ...items];
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative left-1/2 flex w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden border-y border-line py-8">
      <motion.div
        className={`flex shrink-0 items-center gap-8 pr-8 ${reduceMotion ? "w-full flex-wrap justify-center gap-y-3 px-6" : ""}`}
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={reduceMotion ? undefined : { repeat: Infinity, ease: "linear", duration: 34 }}
      >
        {(reduceMotion ? items : doubled).map((item, i) => (
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
