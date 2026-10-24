"use client";

import { motion } from "motion/react";
import type { ProcessPhase } from "@/data/engineering";

export default function ProcessTimeline({ phases }: { phases: ProcessPhase[] }) {
  return (
    <ol>
      {phases.map((phase, index) => (
        <motion.li
          key={phase.step}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: (index % 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4 border-b border-line py-10 last:border-0 sm:grid-cols-[auto_1fr] sm:gap-12"
        >
          <div className="font-serif text-4xl leading-none tabular-nums text-faint sm:text-5xl">
            {phase.step}
          </div>
          <div>
            <h3 className="font-serif text-2xl tracking-tight text-foreground">
              {phase.title}
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              {phase.summary}
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {phase.details.map((detail) => (
                <li
                  key={detail}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
