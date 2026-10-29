"use client";

import { motion, useReducedMotion } from "motion/react";
import { stats } from "@/data/content";

export default function StatsBand() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-y border-line">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: (index % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-background px-6 py-10 sm:py-12"
            >
              <div className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs leading-relaxed text-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
