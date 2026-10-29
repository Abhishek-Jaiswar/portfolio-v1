"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export default function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="h-full"
    >
      <Link
        href={`/editorials/${article.id}`}
        className="group flex h-full flex-col justify-between gap-8 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-foreground/20 sm:p-7"
      >
        <div>
          <div className="flex items-center justify-between gap-4">
            <span className="eyebrow">{article.category}</span>
            <span className="text-xs text-faint">{article.date}</span>
          </div>
          <h3 className="mt-4 font-serif text-xl leading-snug tracking-tight text-foreground sm:text-2xl">
            {article.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{article.summary}</p>
        </div>

        <div className="flex items-center justify-between text-xs text-faint">
          <span>{article.readTime}</span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
            Read essay
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
