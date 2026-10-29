"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Experience } from "@/data/content";

interface ExperienceTimelineProps {
  items: Experience[];
  showHighlights?: boolean;
}

export default function ExperienceTimeline({
  items,
  showHighlights = true,
}: ExperienceTimelineProps) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative pl-8">
      <span className="absolute bottom-2 left-3 top-2 w-px bg-line" aria-hidden />

      <ul className="space-y-12">
        {items.map((job, index) => (
          <motion.li
            key={`${job.company}-${job.period}`}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <span
              className={`absolute -left-5 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background ${
                job.current ? "bg-accent" : "bg-foreground"
              }`}
              aria-hidden
            />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-serif text-xl tracking-tight text-foreground">
                {job.role}
              </h3>
              <span className="font-mono text-xs text-faint">{job.period}</span>
            </div>

            <p className="mt-1 text-sm font-medium text-accent">
              {job.company} <span className="text-muted">· {job.location}</span>
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              {job.summary}
            </p>

            {showHighlights && job.highlights.length > 0 && (
              <ul className="mt-4 max-w-2xl space-y-2">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
