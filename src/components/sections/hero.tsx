
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
          ".hero-portrait-note",
          {
            opacity: 0,
            clipPath: "inset(0 100% 0 0)",
            duration: 1,
            ease: "power2.inOut",
          },
          "-=0.5"
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
      <div className="container-page grid items-center gap-8 py-12 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:py-12 xl:gap-12">
        {/* LEFT: Introduction */}
        <div className="flex min-w-0 flex-col justify-center lg:max-w-[610px] lg:pr-5">
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
            className="mt-6 max-w-[13ch] font-serif text-[2.65rem] leading-[1.04] tracking-[-0.048em] text-foreground sm:text-6xl lg:text-[3.75rem] xl:text-[4.2rem]"
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

          <p className="hero-intro mt-7 max-w-[32rem] text-base leading-[1.85] text-muted sm:text-[1.05rem] sm:leading-[1.85]">
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

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
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

        {/* RIGHT: Editorial portrait */}
        <div className="hero-visual relative min-w-0 sm:mx-4 lg:mx-0">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[430px] pb-11 pt-7 sm:pb-12 lg:ml-auto lg:max-w-[410px] lg:aspect-[4/5]">
            <div className="absolute inset-x-4 bottom-14 top-0 border border-line sm:inset-x-7" />
            <div className="absolute inset-x-0 bottom-11 top-4 overflow-hidden bg-[#e9e7e2] dark:bg-[#202023] sm:inset-x-4 sm:bottom-12 sm:top-7">
              <Image
                src={site.avatar}
                alt={`Portrait of ${site.name}`}
                fill
                priority
                className="object-cover object-[center_28%] grayscale contrast-[1.04]"
              />
            </div>

            <span
              aria-hidden="true"
              className="hero-portrait-note absolute -right-1 top-0 z-10 bg-background px-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted sm:right-2 sm:text-[10px]"
            >
              {site.firstName} Jaiswar <span className="text-faint">/ 01</span>
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}
