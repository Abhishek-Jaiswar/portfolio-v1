
"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { site } from "@/data/content";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const words = site.hero.headline.split(" ");

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduceMotion) return;

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
          duration: 0.8,
        },
      });

      tl.from(".hero-eyebrow", {
        opacity: 0,
        y: 14,
        duration: 0.55,
      })
        .from(
          ".hero-word",
          {
            opacity: 0,
            yPercent: 65,
            stagger: 0.045,
            duration: 0.7,
          },
          "-=0.25"
        )
        .from(
          ".hero-intro",
          {
            opacity: 0,
            y: 18,
            duration: 0.65,
          },
          "-=0.35"
        )
        .from(
          ".hero-visual",
          {
            opacity: 0,
            scale: 0.975,
            duration: 0.9,
          },
          "-=0.7"
        )
        .from(
          ".hero-signature",
          {
            opacity: 0,
            clipPath: "inset(0 100% 0 0)",
            duration: 1,
            ease: "power2.inOut",
          },
          "-=0.5"
        )
        .from(
          ".hero-loop",
          {
            opacity: 0,
            x: 8,
            duration: 0.5,
          },
          "-=0.65"
        )
        .from(
          ".hero-seo",
          {
            opacity: 0,
            y: 12,
            duration: 0.6,
          },
          "-=0.4"
        );
    },
    { scope: root }
  );

  const surname = site.name.split(" ").slice(1).join(" ");

  return (
    <section
      ref={root}
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-background"
    >
      <div className="container-page grid items-center gap-10 lg:min-h-[min(780px,calc(100svh-4rem))] lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 xl:gap-14">
        {/* LEFT: Introduction */}
        <div className="min-w-0 lg:pr-2">
          <p className="hero-eyebrow eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Software Engineer</span>
            <span
              aria-hidden="true"
              className="h-1 w-1 rounded-full bg-faint"
            />
            <span>{site.location}</span>
          </p>

          <h1
            id="hero-heading"
            className="mt-5 max-w-[15ch] font-serif text-[2.65rem] leading-[1.06] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[3.65rem] xl:text-[4.25rem]"
          >
            {words.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="hero-word inline-block"
              >
                {word}
                {index < words.length - 1 ? "\u00A0" : ""}
              </span>
            ))}
          </h1>

          <p className="hero-intro mt-6 max-w-[36rem] text-base leading-[1.85] text-muted sm:text-[1.05rem] sm:leading-[1.8]">
            {site.hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/case-studies"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-[opacity,transform] duration-200 hover:-translate-y-0.5 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              View my work
              <span aria-hidden="true">↗</span>
            </Link>

            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              Download CV
              <span aria-hidden="true" className="text-faint">
                ↓
              </span>
            </a>
          </div>

          <p className="mt-7 inline-flex items-center gap-2 text-sm text-muted">
            <span
              aria-hidden="true"
              className="relative flex h-2 w-2 shrink-0"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {site.status}
          </p>
        </div>

        {/* RIGHT: Portrait composition */}
        <div className="hero-visual relative min-w-0 sm:mx-4 lg:mx-0 lg:self-stretch">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[500px] lg:ml-auto lg:aspect-auto lg:h-full">
            {/* Image frame */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={site.avatar}
                alt={`Portrait of ${site.name}`}
                fill
                priority
                className="object-cover"
              />
              <div className="hero-seo absolute inset-x-0 bottom-0 border-t border-white/15 bg-black/80 px-4 py-4 backdrop-blur-md sm:px-6 sm:py-6">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/70 sm:text-[10px]">
                  Full-stack developer · Mumbai
                </p>
                <p className="mt-1.5 max-w-[46ch] text-xs leading-relaxed text-white sm:mt-2 sm:text-sm">
                  <span className="sm:hidden">
                    I build scalable web applications with React, Next.js,
                    Node.js, PostgreSQL, and MongoDB.
                  </span>
                  <span className="hidden sm:inline">
                    I&apos;m Abhishek Jaiswar, a full-stack developer based in
                    Mumbai. I build scalable web applications with React, Next.js,
                    Node.js, PostgreSQL, and MongoDB — from secure APIs and data
                    modeling to production-ready interfaces.
                  </span>
                </p>
              </div>
            </div>

            {/* Handwritten signature */}
            <span
              aria-hidden="true"
              className="hero-signature pointer-events-none absolute right-4 top-5 z-10 -rotate-6 whitespace-nowrap font-script text-2xl leading-none text-foreground sm:right-6 sm:top-7 sm:text-4xl"
            >
              {site.firstName}
              <br />
              {surname}
            </span>

            {/* Build / Learn / Improve / Repeat */}
            <div
              aria-hidden="true"
              className="hero-loop pointer-events-none absolute -right-3 top-[44%] z-10 hidden -translate-y-1/2 items-start gap-2 lg:flex xl:-right-10"
            >
              <svg
                width="34"
                height="44"
                viewBox="0 0 44 44"
                className="mt-1 rotate-[10deg] text-muted"
              >
                <path
                  d="M10 36 C10 20, 28 18, 34 23"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M34 8 L30 14 L37 13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col font-mono text-[9px] uppercase leading-[1.8] tracking-[0.22em] text-muted">
                <span>Build</span>
                <span>Learn</span>
                <span>Improve</span>
                <span>Repeat</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
