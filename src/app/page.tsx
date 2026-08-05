"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import RegistrationMarks from "@/components/preloader/registration-marks";
import HeritageSkyline from "@/components/preloader/heritage-skyline";
import NewsTicker from "@/components/newspaper/news-ticker";
import NewspaperArticle from "@/components/newspaper/newspaper-article";
import InvestigativeCaseCard from "@/components/newspaper/investigative-case-card";
import EditorialModal, { ArticleData } from "@/components/newspaper/editorial-modal";

// Featured Articles Database
const homepageArticles: ArticleData[] = [
  {
    id: "lead-story",
    category: "LEAD STORY",
    headline: "Mumbai Developer Engineers High-Scale Systems That Transform Modern Business Operations",
    deck: "How Abhishek Jaiswar combines architectural rigor, full-stack mastery, and AI capabilities to build mission-critical software for real-world impact.",
    author: "ABHISHEK JAISWAR",
    role: "Full Stack Engineer & Tech Lead",
    date: "AUGUST 2026",
    location: "MUMBAI, INDIA",
    readTime: "4 MIN",
    image: "/abhishek.jpg",
    imageCaption: "Abhishek Jaiswar at work in Mumbai engineering high-performance SaaS applications.",
    paragraphs: [
      "In an era where digital tools dictate enterprise agility, Abhishek Jaiswar stands out as an engineer dedicated to building resilient, high-throughput software architectures. Based in Mumbai, India, Abhishek has spearheaded the engineering of multi-tenant SaaS platforms, real-time AI interfaces, and complex enterprise automation pipelines.",
      "His engineering philosophy centers around pragmatic execution: building clean, maintainable TypeScript systems that directly address complex business workflows. From solving intricate multi-tenant data partitioning challenges in legal tech to crafting low-latency AI streaming APIs, Abhishek bridges the gap between sophisticated technical architecture and seamless end-user experience.",
      "Driven by a relentless curiosity for systems engineering, he continuously pushes the boundaries of full-stack development, leveraging modern stacks like Node.js, Next.js, PostgreSQL, Docker, and AI workflow orchestration to deliver production-ready software that scales gracefully.",
    ],
    pullQuote: "Engineering is not merely writing code; it is solving human and organizational bottlenecks through robust computational systems.",
    techStack: ["TypeScript", "Node.js", "Next.js", "React 19", "PostgreSQL", "Docker", "REST APIs"],
  },
  {
    id: "signbooks-investigation",
    category: "INVESTIGATIVE CASE FILE",
    headline: "Behind SignBooks: Automating Operational Workflows for Chartered Accountants & Tax Firms",
    deck: "An in-depth investigation into CBS Software Solutions' flagship multi-tenant platform managing client compliance, document signoffs, and firm analytics.",
    author: "INVESTIGATIVE TECH DESK",
    role: "Software Case File",
    date: "JULY 2026",
    location: "CBS SOFTWARE SOLUTIONS",
    readTime: "6 MIN",
    image: "/project_signbooks.jpg",
    imageCaption: "SignBooks Operations Portal displaying multi-tenant analytics and document verification pipelines.",
    paragraphs: [
      "Chartered accountants and tax advisory firms in India operate under tight compliance deadlines and massive document volumes. SignBooks was created to replace legacy spreadsheets and fragmented messaging apps with an all-in-one operations power center.",
      "As Lead Full Stack Developer, Abhishek architected end-to-end modules for client onboarding, automated document workflows, role-based access controls, and real-time activity audit logs. The system leverages Node.js micro-services paired with PostgreSQL to handle multi-tenant data isolation with strict security protocols.",
      "The result was a transformative operational lift: partner firms reported a 45% reduction in turn-around time for compliance filings and seamless digital collaboration between senior auditors and clients.",
    ],
    pullQuote: "SignBooks streamlined complex tax firm workflows into intuitive digital pipelines, empowering firms to scale without administrative overhead.",
    techStack: ["Node.js", "Express", "PostgreSQL", "Prisma", "React", "Tailwind CSS", "JWT Security"],
    link: {
      label: "EXPLORE SIGNBOOKS INVESTIGATION",
      url: "/case-studies",
    },
  },
  {
    id: "lume-chat-report",
    category: "AI DISPATCH",
    headline: "Lume Chat: Engineering Low-Latency Real-Time AI Conversational Engines",
    deck: "Exploring the inner workings of an AI-driven chat application designed for streaming responses, contextual memory, and sleek user interaction.",
    author: "AI SYSTEMS BUREAU",
    role: "Product Architecture Report",
    date: "MAY 2026",
    location: "MUMBAI, INDIA",
    readTime: "5 MIN",
    image: "/project_lume_chat.jpg",
    imageCaption: "Lume Chat interface demonstrating SSE response streaming and dynamic prompt memory.",
    paragraphs: [
      "As generative AI transitions from experimental novelty to core business utility, responsive user interfaces are essential. Lume Chat was built to explore low-latency Server-Sent Events (SSE) streaming and real-time context management.",
      "Abhishek designed Lume Chat with an event-driven backend capable of parsing streamed LLM tokens into formatted markdown, code blocks, and math equations instantly. The frontend utilizes React state synchronization to maintain fluid 60fps animations while processing heavy incoming data streams.",
      "Lume Chat showcases how thoughtful frontend engineering combined with resilient API integration produces magical, frictionless AI experiences.",
    ],
    pullQuote: "Fast AI response streaming requires meticulous state management to ensure zero UI jank while handling high-frequency token events.",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Server-Sent Events", "Tailwind CSS", "Vercel"],
    link: {
      label: "VIEW LUME CHAT CASE STUDY",
      url: "/case-studies",
    },
  },
  {
    id: "rs-interior-report",
    category: "DESIGN & PRODUCT",
    headline: "RS Interior Studio: Crafting High-Contrast Digital Architecture for Modern Spaces",
    deck: "How minimalist design, performant image delivery, and smooth typography elevated an interior design brand's web presence.",
    author: "EDITORIAL DESIGN DESK",
    role: "Creative Direction",
    date: "MARCH 2026",
    location: "MUMBAI, INDIA",
    readTime: "3 MIN",
    image: "/project_rs_interior.jpg",
    imageCaption: "RS Interior Studio showcase displaying spatial photography and tailored portfolio grid.",
    paragraphs: [
      "Architecture and interior design demand high visual fidelity. For RS Interior Studio, Abhishek delivered a bespoke web platform that balances high-resolution image galleries with blazing-fast page load speeds.",
      "Utilizing Next.js image optimization, CSS grid systems, and progressive loading techniques, the website highlights architectural achievements without sacrificing mobile bandwidth performance.",
      "The client experienced a 120% increase in digital lead conversions within 90 days of launch.",
    ],
    pullQuote: "Design excellence in software is where aesthetic elegance meets uncompromised performance.",
    techStack: ["React", "Next.js", "CSS Grid", "Framer Motion", "Vercel"],
    link: {
      label: "VIEW RS INTERIOR CASE STUDY",
      url: "/case-studies",
    },
  },
  {
    id: "editorial-ai-synergy",
    category: "OPINION & ESSAY",
    headline: "Why I Believe in Building AI-Augmented Systems Over Pure Automation",
    deck: "The true leverage of artificial intelligence lies in expanding human agency, not replacing critical judgment.",
    author: "ABHISHEK JAISWAR",
    role: "Columnist & Lead Developer",
    date: "AUGUST 2026",
    location: "THE OP-ED PAGE",
    readTime: "4 MIN",
    paragraphs: [
      "There is a prevalent misconception in current software circles that AI should completely automate away human decision-making. Through my work building enterprise applications, I have learned that the most powerful systems are those that augment human intelligence rather than isolate it.",
      "When we design AI workflows to assist professional operators—such as helping tax auditors identify discrepancies or assisting developers in code generation—we create a feedback loop of speed, accuracy, and confidence. The human retains critical oversight while the machine eliminates computational drudgery.",
      "As engineers, our responsibility is to design transparent interfaces and robust guardrails around AI systems so that software remains accountable, reliable, and deeply empowering.",
    ],
    pullQuote: "AI should serve as a high-velocity exocortex for human intellect, accelerating throughput while honoring domain expertise.",
  },
  {
    id: "editorial-pragmatic-code",
    category: "TECH PHILOSOPHY",
    headline: "The Pragmatic Developer: Shipping Production Software That Endures",
    deck: "Lessons learned on maintaining simplicity, prioritizing data integrity, and avoiding over-engineering in early-stage SaaS.",
    author: "ABHISHEK JAISWAR",
    role: "Columnist & Lead Developer",
    date: "JULY 2026",
    location: "THE OP-ED PAGE",
    readTime: "5 MIN",
    paragraphs: [
      "It is easy to over-engineer software in pursuit of theoretical perfection. However, production environments ruthlessly reward clarity, predictable error handling, and robust database design.",
      "In my development journey, I adhere to three core principles: 1) Model your domain accurately in database schemas first; 2) Keep API contracts explicit and strongly typed; 3) Prioritize observable code over complex abstraction layers.",
      "When systems are built with clear boundaries and minimal unnecessary dependencies, refactoring becomes effortless and feature velocity stays high even as team sizes grow.",
    ],
    pullQuote: "Simple code written with high domain understanding will outlast complex abstractions every single time.",
  },
];

import NewspaperHeader from "@/components/newspaper/newspaper-header";

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const leadStory = homepageArticles[0];
  const featureCaseFiles = homepageArticles.slice(1, 4);
  const editorials = homepageArticles.slice(4);

  return (
    <div className="min-h-screen p-3 sm:p-6 md:p-8 bg-[#efe4cb] text-[#1c1917] font-serif selection:bg-[#b91c1c] selection:text-white relative overflow-x-hidden">
      {/* 1. TOP MASTHEAD HEADER */}
      <NewspaperHeader />

        {/* 2. MAIN FRONT PAGE LEAD STORY BENTO GRID */}
        <section className="relative z-10 my-4 sm:my-6 py-2 border-b-2 border-[#1c1917]">
          <div className="text-xs font-mono font-bold tracking-widest text-[#b91c1c] uppercase flex items-center justify-between border-b-2 border-[#1c1917] pb-2 mb-4">
            <span className="flex items-center space-x-2">
              <span>SECTION A:</span>
              <span className="text-[#1c1917]">EDITORIAL BENTO DISPATCH & LEAD STORY</span>
            </span>
            <span className="text-[#1c1917]/60 hidden sm:inline">VOL. I &bull; DAILY EDITION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* CARD A: HERO LEAD STORY DISPATCH (Col 1-8) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="md:col-span-8 border-2 border-[#1c1917] p-5 bg-[#efe4cb] flex flex-col justify-between space-y-4 hover:border-[#b91c1c] transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-widest text-[#b91c1c] uppercase border-b border-[#1c1917]/20 pb-1.5 mb-2">
                  <span>★ EXCLUSIVE LEAD STORY</span>
                  <span className="text-[#1c1917]/60">READ TIME: 4 MIN</span>
                </div>

                <h2
                  onClick={() => setSelectedArticle(leadStory)}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#1c1917] hover:text-[#b91c1c] transition-colors leading-[1.05] tracking-tight cursor-pointer my-2"
                >
                  {leadStory.headline}
                </h2>

                <p className="article-deck text-xs sm:text-sm text-[#1c1917]/80 my-2">
                  {leadStory.deck}
                </p>

                <div className="article-byline flex items-center justify-between text-[11px] font-mono py-1.5 my-2 border-y border-[#1c1917]/30 text-[#b91c1c]">
                  <span>BY <span className="font-black">{leadStory.author}</span> &bull; {leadStory.role}</span>
                  <span className="text-[#1c1917]/60 font-normal hidden sm:inline">MUMBAI BUREAU</span>
                </div>

                <p className="drop-cap font-serif text-xs sm:text-sm text-[#1c1917]/90 leading-relaxed my-2">
                  {leadStory.paragraphs[0]}
                </p>
              </div>

              {/* Stat Highlight & Action Bar */}
              <div className="pt-3 border-t border-[#1c1917]/20 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-4 text-xs font-mono">
                  <div className="border-r border-[#1c1917]/30 pr-4">
                    <span className="text-[10px] font-bold text-[#b91c1c] uppercase block">IMPACT METRIC</span>
                    <span className="font-black text-sm text-[#1c1917]">45% SPEEDUP</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#b91c1c] uppercase block">ARCHITECTURE</span>
                    <span className="font-black text-sm text-[#1c1917]">MULTI-TENANT</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedArticle(leadStory)}
                    className="bg-[#b91c1c] hover:bg-[#991b1b] text-white font-mono text-xs px-4 py-2 font-bold uppercase tracking-wider transition-colors flex items-center space-x-1.5 shadow cursor-pointer"
                  >
                    <span>READ FULL STORY</span>
                    <span>→</span>
                  </button>
                  <Link
                    href="/case-studies"
                    className="border border-[#1c1917] hover:bg-[#1c1917] hover:text-[#efe4cb] font-mono text-xs px-3 py-2 font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>CASE FILES</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* CARD B: PRESS PORTRAIT & STATUS BEACON (Col 9-12) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="md:col-span-4 border-2 border-[#1c1917] p-4 bg-[#e4d4b2]/40 flex flex-col justify-between space-y-3"
            >
              <div className="space-y-3 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase text-[#1c1917]/70 tracking-widest border-b border-[#1c1917]/20 pb-1 shrink-0">
                  <span>PRESS PORTRAIT &bull; FIG. 1.1</span>
                  <span className="flex items-center space-x-1 text-[#b91c1c]">
                    <span className="w-2 h-2 rounded-full bg-[#b91c1c] animate-ping" />
                    <span>ACTIVE</span>
                  </span>
                </div>

                {/* Flexible Full-Height Portrait Image with Explicit Top Alignment */}
                <div className="relative w-full flex-1 min-h-[280px] sm:min-h-[320px] border border-[#1c1917] overflow-hidden shadow bg-[#181614] group">
                  <Image
                    src="/abhishek.jpg"
                    alt="Abhishek Jaiswar - Software Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                    className="grayscale contrast-125 filter group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#1c1917]/90 text-[#efe4cb] p-2 text-[10px] font-mono">
                    <span className="font-bold text-[#b91c1c]">DISPATCH:</span> Abhishek Jaiswar, Full Stack Engineer.
                  </div>
                </div>

                {/* Status & Telemetry Information Box */}
                <div className="bg-[#efe4cb] border border-[#1c1917] p-2.5 text-[11px] font-mono space-y-1.5 shadow-xs shrink-0">
                  <div className="font-bold text-[#b91c1c] text-[10px] uppercase flex items-center justify-between border-b border-[#1c1917]/15 pb-1">
                    <span>AVAILABILITY STATUS</span>
                    <span className="text-[#1c1917] font-black">OPEN</span>
                  </div>
                  <p className="text-[#1c1917]/80 text-[10px] leading-tight">
                    Accepting full-time engineering and lead developer roles in high-growth product teams.
                  </p>
                  <div className="pt-1 text-[10px] space-y-0.5 border-t border-[#1c1917]/15 text-[#1c1917]/90">
                    <div className="flex justify-between">
                      <span className="text-[#1c1917]/60">LOCATION:</span>
                      <span className="font-bold">Mumbai, India</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#1c1917]/60">PRIMARY ROLE:</span>
                      <span className="font-bold">Full Stack Lead</span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full border border-[#1c1917] bg-[#1c1917] text-[#efe4cb] hover:bg-[#b91c1c] hover:border-[#b91c1c] font-mono text-xs py-2.5 px-3 font-bold uppercase tracking-wider transition-colors flex items-center justify-between shadow cursor-pointer shrink-0 mt-2"
              >
                <span>DOWNLOAD RESUME PDF</span>
                <span>↓</span>
              </a>
            </motion.div>

            {/* CARD C: CORE COMPETENCIES MANIFESTO (Col 1-4) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="md:col-span-4 border border-[#1c1917] p-4 bg-[#efe4cb] flex flex-col justify-between space-y-3"
            >
              <div>
                <h3 className="text-[11px] font-mono font-bold tracking-widest text-[#b91c1c] uppercase border-b border-[#1c1917]/20 pb-1.5 mb-2">
                  SPECIFICATION MANIFESTO
                </h3>

                <ul className="space-y-1.5 font-mono text-xs text-[#1c1917]">
                  <li className="flex items-center justify-between border-b border-[#1c1917]/10 pb-1">
                    <span className="font-bold">Full Stack SaaS Architecture</span>
                    <span className="text-[#b91c1c] text-[10px] font-black">HIGH</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-[#1c1917]/10 pb-1">
                    <span className="font-bold">Node.js / Next.js / TypeScript</span>
                    <span className="text-[#b91c1c] text-[10px] font-black">CORE</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-[#1c1917]/10 pb-1">
                    <span className="font-bold">PostgreSQL & Multi-Tenancy</span>
                    <span className="text-[#b91c1c] text-[10px] font-black">EXPERT</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-[#1c1917]/10 pb-1">
                    <span className="font-bold">AI Workflow & LLM Integration</span>
                    <span className="text-[#b91c1c] text-[10px] font-black">ACTIVE</span>
                  </li>
                </ul>
              </div>

              <div className="text-[10px] font-mono text-[#1c1917]/60 border-t border-[#1c1917]/20 pt-2">
                VERIFIED TECHNICAL COMPETENCIES &bull; 2026 EDITION
              </div>
            </motion.div>

            {/* CARD D: CHIEF EDITOR'S PULL QUOTE (Col 5-8) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="md:col-span-4 border border-[#1c1917] p-4 bg-[#e4d4b2]/50 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-[#b91c1c] uppercase border-b border-[#1c1917]/20 pb-1 mb-2">
                  CHIEF ARCHITECT&apos;S QUOTE
                </div>

                <blockquote className="italic font-serif text-sm sm:text-base font-bold text-[#1c1917] leading-snug my-2">
                  &ldquo;{leadStory.pullQuote}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center justify-between font-mono text-[11px] pt-2 border-t border-[#1c1917]/20">
                <span className="font-bold text-[#b91c1c]">— ABHISHEK JAISWAR</span>
                <span className="text-[#1c1917]/60">MUMBAI, INDIA</span>
              </div>
            </motion.div>

            {/* CARD E: HEADQUARTERS DATELINE & SKYLINE (Col 9-12) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="md:col-span-4 border border-[#1c1917] p-4 bg-[#efe4cb] flex flex-col justify-between space-y-2 text-center"
            >
              <div>
                <div className="text-[10px] font-mono font-bold text-[#b91c1c] uppercase tracking-widest mb-1">
                  DATELINE & HEADQUARTERS
                </div>
                <div className="font-serif font-black text-sm text-[#1c1917]">
                  MUMBAI, MAHARASHTRA, INDIA
                </div>
                <div className="text-[9px] font-mono text-[#1c1917]/60 tracking-widest mt-0.5">
                  LAT 19.0760° N &bull; LONG 72.8777° E
                </div>
              </div>

              <div className="my-1">
                <HeritageSkyline />
              </div>

              <Link
                href="/contact#telegraph-form"
                className="w-full border border-[#1c1917] hover:bg-[#1c1917] hover:text-[#efe4cb] text-[#1c1917] font-mono text-[11px] py-1.5 px-2 font-bold uppercase tracking-wider transition-colors flex items-center justify-center space-x-1"
              >
                <span>SEND DIRECT TELEGRAPH</span>
                <span>✉</span>
              </Link>
            </motion.div>

          </div>
        </section>

        {/* 3. MIDDLE SECTION: INVESTIGATIVE CASE FILES & TECH MARKET WATCH */}
        <section className="relative z-10 my-6 py-4 border-b-2 border-[#1c1917]">
          <div className="flex items-center justify-between border-b-2 border-[#1c1917] pb-2 mb-6">
            <h3 className="text-sm font-mono font-bold tracking-widest text-[#b91c1c] uppercase flex items-center space-x-2">
              <span>SECTION B:</span>
              <span className="text-[#1c1917]">INVESTIGATIVE CASE FILES & TECH REPORTS</span>
            </h3>
            <Link
              href="/case-studies"
              className="text-xs font-mono font-bold text-[#b91c1c] hover:underline uppercase tracking-wider hidden sm:inline"
            >
              ALL INVESTIGATIONS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featureCaseFiles.map((caseFile, index) => (
              <InvestigativeCaseCard
                key={caseFile.id}
                article={caseFile}
                index={index}
                onReadMore={(art) => setSelectedArticle(art)}
              />
            ))}
          </div>
        </section>

        {/* 4. FINANCIAL & TECH MARKET WATCH & BUSINESS CHRONICLE */}
        <section className="relative z-10 my-6 py-4 border-b-2 border-[#1c1917]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: TECH MARKET WATCH (Col 1-4) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 space-y-4 lg:border-r lg:border-[#1c1917]/30 lg:pr-6"
            >
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#b91c1c] uppercase border-b-2 border-[#1c1917] pb-1.5 flex items-center justify-between">
                <span>TECH MARKET INDEX</span>
                <span className="text-[10px] text-[#1c1917]/60">PROFIT & PROFICIENCY</span>
              </h3>

              <div className="space-y-2.5 text-xs font-mono">
                {[
                  { symbol: "$TS", name: "TypeScript", gain: "+98%", status: "BULLISH" },
                  { symbol: "$NODE", name: "Node.js & Express", gain: "+95%", status: "HIGH VOLUME" },
                  { symbol: "$REACT", name: "React 19 & Next.js", gain: "+94%", status: "STABLE" },
                  { symbol: "$PG", name: "PostgreSQL & Prisma", gain: "+92%", status: "STRONG" },
                  { symbol: "$AI", name: "AI Workflow APIs", gain: "+90%", status: "GAINING" },
                  { symbol: "$DOCK", name: "Docker & Containers", gain: "+88%", status: "STEADY" },
                ].map((stock, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-[#1c1917]/15 pb-2 hover:bg-[#e4d4b2]/30 p-1 transition-colors"
                  >
                    <div>
                      <span className="font-black text-[#b91c1c] mr-2">{stock.symbol}</span>
                      <span className="font-bold">{stock.name}</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <svg className="w-10 h-3 text-[#b91c1c]" viewBox="0 0 50 15" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M0 12 L10 9 L20 13 L30 4 L40 7 L50 2" />
                      </svg>
                      <span className="font-black text-[#b91c1c]">{stock.gain}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-[#1c1917] p-3 bg-[#e4d4b2]/50 text-xs font-mono space-y-1.5 mt-4">
                <div className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-widest">
                  MARKET ANALYSIS SUMMARY
                </div>
                <p className="text-[11px] text-[#1c1917]/80 leading-relaxed font-serif">
                  High proficiency across full-stack backend APIs, database management, modern frontend frameworks, and automated deployment pipelines.
                </p>
              </div>
            </motion.div>

            {/* Right: BUSINESS CHRONICLE & CAREER APPOINTMENTS (Col 5-12) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 space-y-4 lg:pl-4"
            >
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#b91c1c] uppercase border-b-2 border-[#1c1917] pb-1.5 flex items-center justify-between">
                <span>BUSINESS & CAREER CHRONICLE</span>
                <span className="text-[10px] text-[#1c1917]/60">OFFICIAL APPOINTMENTS</span>
              </h3>

              <div className="space-y-6">
                {/* Role 1 */}
                <div className="border-b border-[#1c1917]/20 pb-4 grid grid-cols-1 md:grid-cols-12 gap-3">
                  <div className="md:col-span-3 font-mono text-xs text-[#b91c1c] font-bold">
                    2026 — PRESENT
                  </div>
                  <div className="md:col-span-9 space-y-1">
                    <h4 className="font-serif font-black text-xl text-[#1c1917]">
                      Full Stack Developer & Tech Lead
                    </h4>
                    <div className="font-mono text-xs font-bold text-[#b91c1c]">
                      CBS Software Solutions &bull; SignBooks
                    </div>
                    <p className="font-serif text-xs text-[#1c1917]/80 leading-relaxed pt-1">
                      Leading the engineering of SignBooks multi-tenant platform. Designed document authorization engines, audit logs, role management, and database schemas handling complex CA firm operations.
                    </p>
                  </div>
                </div>

                {/* Role 2 */}
                <div className="border-b border-[#1c1917]/20 pb-4 grid grid-cols-1 md:grid-cols-12 gap-3">
                  <div className="md:col-span-3 font-mono text-xs text-[#b91c1c] font-bold">
                    2025 — 2026
                  </div>
                  <div className="md:col-span-9 space-y-1">
                    <h4 className="font-serif font-black text-xl text-[#1c1917]">
                      Junior Full Stack Developer
                    </h4>
                    <div className="font-mono text-xs font-bold text-[#b91c1c]">
                      CBS Software Solutions
                    </div>
                    <p className="font-serif text-xs text-[#1c1917]/80 leading-relaxed pt-1">
                      Developed core feature modules, integrated third-party payment gateways, built responsive UI interfaces, and optimized PostgreSQL query execution speeds.
                    </p>
                  </div>
                </div>

                {/* Role 3 */}
                <div className="border-b border-[#1c1917]/20 pb-4 grid grid-cols-1 md:grid-cols-12 gap-3">
                  <div className="md:col-span-3 font-mono text-xs text-[#b91c1c] font-bold">
                    2024 — 2025
                  </div>
                  <div className="md:col-span-9 space-y-1">
                    <h4 className="font-serif font-black text-xl text-[#1c1917]">
                      Backend Developer Intern
                    </h4>
                    <div className="font-mono text-xs font-bold text-[#b91c1c]">
                      KartBuddy Logistics Pvt. Ltd.
                    </div>
                    <p className="font-serif text-xs text-[#1c1917]/80 leading-relaxed pt-1">
                      Engineered REST API endpoints for referral systems, partner management tools, and automated email notification dispatchers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-right">
                <Link href="/experience" className="text-xs font-mono font-bold text-[#b91c1c] hover:underline uppercase tracking-wider">
                  VIEW COMPLETE CAREER HISTORY & PEDIGREE →
                </Link>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 5. EDITORIAL OP-ED & ESSAYS SECTION */}
        <section className="relative z-10 my-6 py-4 border-b-2 border-[#1c1917]">
          <div className="flex items-center justify-between border-b-2 border-[#1c1917] pb-2 mb-6">
            <h3 className="text-sm font-mono font-bold tracking-widest text-[#b91c1c] uppercase flex items-center space-x-2">
              <span>SECTION C:</span>
              <span className="text-[#1c1917]">EDITORIAL OPINION & TECHNICAL ESSAYS</span>
            </h3>
            <Link
              href="/editorials"
              className="text-xs font-mono font-bold text-[#b91c1c] hover:underline uppercase tracking-wider hidden sm:inline"
            >
              ALL OP-EDS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {editorials.map((ed) => (
              <NewspaperArticle
                key={ed.id}
                article={ed}
                onReadMore={(art) => setSelectedArticle(art)}
                featured
              />
            ))}
          </div>
        </section>

        {/* 6. PRESS TELEGRAPH & CONTACT CLASSIFIEDS */}
        <section id="telegraph-form" className="relative z-10 my-6 py-6 border-b-2 border-[#1c1917] bg-[#e4d4b2]/40 p-4 sm:p-6 border">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2 border-b-2 border-[#1c1917] pb-4">
              <span className="font-mono text-xs font-bold text-[#b91c1c] tracking-widest uppercase">
                ★ OFFICIAL TELEGRAPH & PRESS DESK ★
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-black text-[#1c1917]">
                Send a Dispatch to Abhishek Jaiswar
              </h3>
              <p className="font-serif italic text-sm text-[#1c1917]/70">
                Have a project inquiry, engineering opportunity, or technical question? Submit your message below.
              </p>
            </div>

            {contactSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#efe4cb] border-2 border-[#1c1917] p-6 text-center space-y-3 font-serif"
              >
                <div className="text-2xl font-black text-[#b91c1c]">TELEGRAPH TRANSMITTED SUCCESSFULLY [OK]</div>
                <p className="text-sm text-[#1c1917]/80">
                  Thank you for reaching out. Your message has been routed directly to Abhishek&apos;s primary press inbox.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="border border-[#1c1917] bg-[#1c1917] text-[#efe4cb] px-4 py-2 font-mono text-xs uppercase font-bold hover:bg-[#b91c1c] cursor-pointer transition-colors"
                >
                  SEND ANOTHER DISPATCH
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-4 font-mono text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1c1917] uppercase mb-1">
                      SENDER NAME / ORGANIZATION:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe (Tech Corp)"
                      className="w-full bg-[#efe4cb] border border-[#1c1917] p-2.5 font-serif text-sm focus:outline-none focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1c1917] uppercase mb-1">
                      RETURN TELEGRAPH EMAIL:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full bg-[#efe4cb] border border-[#1c1917] p-2.5 font-serif text-sm focus:outline-none focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#1c1917] uppercase mb-1">
                    TELEGRAPH MESSAGE CONTENT:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="State your inquiry, opportunity, or message details here..."
                    className="w-full bg-[#efe4cb] border border-[#1c1917] p-2.5 font-serif text-sm focus:outline-none focus:border-[#b91c1c] focus:ring-1 focus:ring-[#b91c1c]"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] text-[#1c1917]/60">
                    DISPATCH LOCATION: MUMBAI, INDIA &bull; LAT 19.0760° N
                  </span>

                  <button
                    type="submit"
                    className="bg-[#b91c1c] hover:bg-[#991b1b] text-white font-mono text-xs px-6 py-3 font-bold uppercase tracking-wider transition-colors shadow cursor-pointer flex items-center space-x-2"
                  >
                    <span>TRANSMIT DISPATCH</span>
                    <span>✉</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* 7. FOOTER */}
        <footer className="relative z-10 border-t-4 border-[#1c1917] pt-6 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono border-b border-[#1c1917]/30 pb-6">
            <div>
              <h4 className="font-display font-black text-xl text-[#1c1917] uppercase">The Abhishek Times</h4>
              <p className="text-[11px] text-[#1c1917]/70 mt-1 leading-relaxed">
                A digital broadsheet newspaper chronicling software architecture, ideas, and real-world engineering impact.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-widest mb-1">PRINTED & PUBLISHED IN</div>
              <div className="font-bold text-[#1c1917] text-xs">MUMBAI, MAHARASHTRA, INDIA</div>
              <div className="text-[10px] text-[#1c1917]/60 mt-1">AVAILABLE GLOBALLY VIA HTTP</div>
            </div>

            <div>
              <div className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-widest mb-1">VOLUME & ISSUE</div>
              <div className="font-bold text-[#1c1917] text-xs">VOL. I &bull; ISSUE 214</div>
              <div className="text-[10px] text-[#1c1917]/60 mt-1">CIRCULATION: UNLIMITED</div>
            </div>

            <div>
              <div className="text-[10px] font-bold text-[#b91c1c] uppercase tracking-widest mb-1">RIGHTS & DISCLOSURE</div>
              <div className="text-[10px] text-[#1c1917]/70 leading-tight">
                © 2026 Abhishek Jaiswar. All rights reserved. Designed with passion & precision.
              </div>
            </div>
          </div>

          <div className="py-4 text-center text-[10px] font-mono text-[#1c1917]/60 uppercase tracking-widest">
            END OF EDITION &bull; THE ABHISHEK TIMES &bull; THANK YOU FOR READING
          </div>
        </footer>

        {/* Editorial Reader Modal */}
        <EditorialModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
    </div>
  );
}