"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { Article } from "@/data/articles";

interface ProjectCardProps {
  article: Article;
  index?: number;
}

export default function ProjectCard({ article, index = 0 }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      className="h-full"
    >
      <Link
        href={`/case-studies/${article.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-foreground/20"
      >
        {article.image && (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between gap-4">
            <span className="eyebrow">{article.category}</span>
            <span className="text-xs text-faint">{article.date}</span>
          </div>

          <h3 className="mt-3 font-serif text-2xl leading-snug tracking-tight text-foreground">
            {article.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
            {article.summary}
          </p>

          {article.stack && article.stack.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {article.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-1 text-[11px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            View case study
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
