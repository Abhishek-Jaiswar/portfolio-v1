export interface Article {
  id: string;
  type: "work" | "writing";
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  image?: string;
  imageCaption?: string;
  gallery?: { src: string; caption?: string }[];
  body: string[];
  highlights?: string[];
  quote?: string;
  stack?: string[];
  links?: { label: string; href: string }[];
}

export const caseStudies: Article[] = [
  {
    id: "astralearn-ai",
    type: "work",
    category: "AI Engineering",
    title: "AstraLearn AI — an autonomous multi-agent learning academy",
    summary:
      "An autonomous academy where ten LangGraph agents interview a learner, verify their resources, design a curriculum, teach it, quiz them, and recalibrate the path.",
    date: "July 2026",
    readTime: "8 min read",
    image: "/project_astralearn.png",
    imageCaption:
      "AstraLearn's Academy Overview: the ten-agent pipeline matrix and live graph state.",
    gallery: [
      {
        src: "/project_astralearn-quickstart.png",
        caption:
          "Quick Start Goal turns a plain-language target, category, and timeline into a scoped learning pipeline.",
      },
    ],
    body: [
      "AstraLearn starts with a goal, not a course catalog. The learner types what they want to learn, picks a category — project, exam, or concept — and chooses a timeline between one and sixty days. From there the system runs a nine-stage loop: goal intake, counselor interview, profile compilation, librarian discovery, SourceTrust scoring, curriculum generation, classroom delivery, quiz or lab, and coach-led adaptation.",
      "The pipeline is ten specialist agents behind a LangGraph state machine. A counselor runs a three-to-five turn diagnostic instead of serving a static form; a profiler converts the transcript into a LearnerProfile with baseline scores, learning modality, and predicted friction points; a librarian indexes candidate material into Pinecone while a source verifier applies SourceTrust, a weighted rubric covering author authority, peer review, domain credibility, recency, and fit with the learner's baseline. Resources scoring below 50 are rejected and surfaced in an audit board rather than silently hidden.",
      "Once resources clear the bar, a curriculum architect writes phases, modules, and lessons with prerequisite dependencies inside a Prisma transaction, and a schedule planner maps them onto the learner's available hours. The classroom agent streams markdown lessons with citations and an ask-a-doubt console, while a visual explainer generates Mermaid diagrams alongside the text.",
      "Assessment closes the loop. The examiner generates multiple-choice quizzes or practical task cards and scores submissions. If accuracy falls below 70%, the adaptive coach inserts a remedial lesson as the next block and records the weakness; learners who clear the threshold get later modules unlocked early. Those changes run as atomic updates, so the curriculum never ends up half-rewritten.",
      "The architecture is deliberately asynchronous. Express and Socket.io accept the request, BullMQ hands heavy generation to Redis-backed workers, and the graph persists its state in PostgreSQL through Prisma at every node. Zod schemas guard both HTTP inputs and agent outputs, and Socket.io events — agent:started, agent:progress, agent:completed, agent:error — turn a multi-minute run into a visible, resumable process that the Next.js 16 and React 19 client can watch in real time.",
    ],
    highlights: [
      "Ten specialist agents coordinated as a single LangGraph state machine.",
      "SourceTrust scores resources on authority, peer review, domain, recency, and learner fit.",
      "Quiz scores below 70% trigger remedial lessons; stronger learners are fast-tracked.",
    ],
    quote:
      "Agentic systems are state machines with language models inside them — not chat prompts stacked in a loop.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Express 5",
      "LangGraph",
      "Deep Agents SDK",
      "Pinecone",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Socket.io",
      "Zod",
    ],
    links: [
      { label: "Live demo", href: "https://astra-ai-academy.vercel.app/" },
      {
        label: "Source",
        href: "https://github.com/Abhishek-Jaiswar/autonomous-agent-driven-academy",
      },
    ],
  },
  {
    id: "zenvoraa",
    type: "work",
    category: "E-commerce Platform",
    title: "Zenvoraa — jewellery commerce from storefront to back office",
    summary:
      "A production jewellery storefront and admin dashboard with catalog, cart, Razorpay checkout, inventory, orders, coupons, and reporting.",
    date: "August 2026",
    readTime: "6 min read",
    image: "/zenvoraa.png",
    imageCaption: "Zenvoraa's storefront hero and jewellery collection navigation.",
    body: [
      "Zenvoraa needed two products at once: an editorial storefront that makes fine jewellery feel considered, and an operations back office that can actually run the business. The two live in one Next.js App Router codebase.",
      "The storefront covers the full buying journey — landing pages, catalog and product detail, cart, addresses, Razorpay checkout, order history, wishlist, blog, and policy pages. Behind it, the dashboard handles products with variants, media and specifications; categories, brands and tags; warehouses, suppliers, purchase orders, stock adjustments and an inventory audit ledger; orders with a tracking timeline; coupons and offers; announcements; landing-page composition; media; and downloadable sales, profit, and performance reports.",
      "The API is a separate Express and TypeScript service backed by Prisma and PostgreSQL, with Redis-backed caching per module, an S3/Cloudinary storage abstraction, email templates, and PDF generation for invoices, purchase-order quotes, and shipping labels. Authentication uses signed cookies with role-based middleware, and GitHub Actions plus Docker handle builds.",
      "The harder design decision was treating inventory as a ledger rather than an editable number. Stock movements, purchase orders, and adjustments are recorded events, so the number on the product page can always be explained — which matters far more in commerce than a prettier shop grid.",
    ],
    highlights: [
      "Storefront and full admin dashboard delivered in one Next.js codebase.",
      "Prisma/PostgreSQL API with Redis caching and Razorpay checkout.",
      "Inventory ledger, purchase orders, PDF invoices and labels, and sales reports.",
    ],
    quote:
      "Commerce is mostly bookkeeping in disguise — the storefront is the easy part; inventory, orders, and payments are where the product lives.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Razorpay",
      "Cloudinary",
    ],
    links: [
      { label: "Live site", href: "https://zenvoraa.in" },
      {
        label: "Storefront source",
        href: "https://github.com/Abhishek-Jaiswar/cbs-ecommerce-frontend",
      },
      {
        label: "API source",
        href: "https://github.com/Abhishek-Jaiswar/cbs-ecommerce-api",
      },
    ],
  },
  {
    id: "rs-interior",
    type: "work",
    category: "Product & Design",
    title: "RS Interior Studio — a high-contrast brand platform",
    summary:
      "A dark, image-led site for an interior design and construction studio, built around a draggable before/after transformation.",
    date: "March 2026",
    readTime: "4 min read",
    image: "/rsinteriors.png",
    imageCaption:
      "RS Interior Studio's before/after hero and brand-first layout.",
    body: [
      "RS Interior Studio sells a full-spectrum service — interior design, civil construction, and electrical engineering under one roof — so the site had to feel as considered as the spaces it builds.",
      "The homepage opens with a draggable before/after comparison instead of a static hero, making the transformation literal. From there it moves through services, a project portfolio, the reasons to choose the studio, and a free-estimate CTA, with a persistent WhatsApp contact path on mobile.",
      "I built it as a Next.js application with a custom CSS Grid portfolio, responsive art direction for large architectural photography, and motion used sparingly to support the before/after interaction rather than compete with it.",
      "The design language is deliberately high-contrast: a lime accent against near-black, oversized display type, and image-led sections that keep the work in front. It is a brand site that has to load fast on a phone at a project site, not just look good on a desktop.",
    ],
    highlights: [
      "Draggable before/after slider as the primary hero interaction.",
      "Services, portfolio, and free-estimate flow in one continuous narrative.",
      "Responsive, performance-first delivery for large architectural imagery.",
    ],
    quote:
      "Design excellence in software is where aesthetic elegance meets uncompromised performance.",
    stack: ["React", "Next.js", "CSS Grid", "Motion", "Vercel"],
  },
  {
    id: "marketplace-monorepo",
    type: "work",
    category: "Marketplace Platform",
    title: "Marketplace — a monorepo for storefront, sellers, and admins",
    summary:
      "A pnpm and Turborepo workspace with a customer storefront, seller onboarding portal, and central admin, backed by one typed API and shared packages.",
    date: "October 2026",
    readTime: "7 min read",
    image: "/project_marketplace.png",
    imageCaption: "Seller dashboard from the marketplace's seller-central app.",
    body: [
      "Multi-sided marketplaces fail at the boundaries: who is allowed to list, how a seller gets verified, and what a platform admin can inspect. This project is structured around those boundaries rather than around pages.",
      "The workspace holds three Next.js apps and one API. The storefront handles discovery, store pages, product detail, and seller acquisition. Seller Central runs registration, OTP verification, a multi-step onboarding flow with bank details, GSTIN verification, legal review, and signature capture, followed by store branding and logistics pickup setup. Admin Central gives the platform team a dashboard for inspecting and approving sellers.",
      "The Express API is organized by module — users, sellers, customers, categories, and shared services — with Redis-backed caches, role middleware, request context and structured logging, rate limiting, security headers, and a storage provider interface that swaps between Cloudinary and S3. The Prisma schema is split across identity, seller, catalog, customer, and shared domains.",
      "What keeps the three apps coherent is the shared layer: a Prisma package, a TypeScript package of RTK Query APIs and onboarding slices, a shadcn-based UI package, and shared logger, ESLint, and TypeScript configs. Turborepo and pnpm turn those contracts into a single install, build, and type-check pipeline.",
    ],
    highlights: [
      "Three Next.js apps — storefront, seller central, admin central — in one Turborepo.",
      "Shared Prisma schemas and RTK Query contracts keep API types consistent.",
      "Seller onboarding with GSTIN verification, bank details, and signature capture.",
    ],
    quote:
      "In a marketplace, the interesting product is not the shopfront — it is the contract between the platform, the seller, and the buyer.",
    stack: [
      "Next.js",
      "TypeScript",
      "Turborepo",
      "pnpm",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "RTK Query",
      "Tailwind CSS",
    ],
    links: [
      { label: "Live site", href: "https://marketplace-web-pink.vercel.app" },
      {
        label: "Source",
        href: "https://github.com/Abhishek-Jaiswar/marketplace",
      },
    ],
  },
  {
    id: "orbit-md",
    type: "work",
    category: "Developer Tooling",
    title: "Orbit MD — a Rust static site generator with components in Markdown",
    summary:
      "A Rust CLI that compiles Markdown with JSX-style component tags into static HTML, with a scaffolding command and a hot-rebuilding dev server.",
    date: "July 2026",
    readTime: "5 min read",
    image: "/orbitmd.png",
    imageCaption:
      "orbit-md published on crates.io — MIT licensed, 30.1 KiB, one version.",
    body: [
      "Writers want Markdown; product pages need components. Orbit closes that gap: any .md file can use PascalCase tags like <Alert> and <Button>, which resolve to Handlebars components at build time and compile down to plain static HTML.",
      "The CLI is deliberately small. orbit init scaffolds orbit.yaml, a content directory, reusable components, and a base template. orbit new page creates a new file. orbit build compiles Markdown into .orbit. orbit dev serves the site at 127.0.0.1:3000, rebuilds on save, and supports custom ports and an --open flag.",
      "Under the hood it is a Rust pipeline: parse frontmatter, resolve component tags, render layouts and components, and write static output. The crate is published on crates.io as orbit-md and installs a single orbit binary, so setup is cargo install orbit-md followed by orbit init.",
      "Shipping a tool taught me that the interesting engineering is not only the compiler. It is the defaults, the first error message, and whether the rebuild loop feels instant enough that someone keeps editing.",
    ],
    highlights: [
      "JSX-style components inside plain Markdown pages.",
      "init, build, and dev commands with auto-rebuild and custom ports.",
      "Published to crates.io and installable with cargo install orbit-md.",
    ],
    quote:
      "A developer tool ships twice: once as code, and once as the first five minutes someone spends with it.",
    stack: ["Rust", "Handlebars", "Markdown", "YAML", "CLI", "crates.io"],
    links: [
      { label: "crates.io", href: "https://crates.io/crates/orbit-md" },
      { label: "Source", href: "https://github.com/Abhishek-Jaiswar/orbit-md" },
    ],
  },
  {
    id: "lume-chat",
    type: "work",
    category: "Real-time AI",
    title: "Lume Chat — real-time chat with a multimodal AI assistant",
    summary:
      "A Socket.io chat app with image sharing and a Gemini-powered assistant that streams context-aware replies in real time.",
    date: "January 2026",
    readTime: "5 min read",
    image: "/project_lume_chat.jpg",
    imageCaption: "Lume Chat's AI workspace with streamed, context-aware replies.",
    body: [
      "Chat products live or die on latency and presence. Lume pairs Socket.io messaging with a multimodal assistant that can read images and answer in the context of a specific message.",
      "The client is React 19 with Vite, TypeScript, Tailwind and shadcn/ui, Zustand for state, React Hook Form and Zod for validation, and socket.io-client for transport. The server is Node.js and Express with MongoDB and Mongoose, Passport and JWT authentication, Cloudinary for image storage, and the Google Generative AI SDK running Gemini 2.0 Flash.",
      "AI replies stream token by token over socket events, so the response appears as it is generated instead of after a long pause. Context is scoped to the thread and the message being replied to, and uploaded images are stored in Cloudinary before being passed to the model. The app is deployed as a static client and a web service on Render.",
      "The lesson was that real-time AI is mostly plumbing. The model gets the attention, but the product quality comes from the socket layer, the context window, and how gracefully the stream handles a slow or interrupted response.",
    ],
    highlights: [
      "Socket.io messaging with real-time AI reply streaming.",
      "Gemini 2.0 Flash handles text and images with thread-aware context.",
      "React 19 and Zustand client; Express, MongoDB, and Cloudinary backend.",
    ],
    quote:
      "Real-time AI is less about the model and more about the plumbing that makes the first token arrive quickly.",
    stack: [
      "React 19",
      "Vite",
      "TypeScript",
      "Zustand",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini",
      "Cloudinary",
      "Tailwind CSS",
    ],
    links: [
      { label: "Live demo", href: "https://lume-chat.onrender.com" },
      { label: "Source", href: "https://github.com/Abhishek-Jaiswar/lume-chat" },
    ],
  },
  {
    id: "carriculae",
    type: "work",
    category: "EdTech Product",
    title: "Carriculae — an AI curriculum that gates progress with quizzes",
    summary:
      "A personal learning app that generates structured curricula with Groq, locks topics behind quizzes, and schedules spaced reviews.",
    date: "May 2026",
    readTime: "5 min read",
    image: "/carriculae.png",
    imageCaption:
      "Carriculae's landing page: strict sequence, focus sessions, and quiz-gated mastery.",
    body: [
      "Most learning trackers let you tick boxes. Carriculae makes progress earned: topics unlock sequentially, a quiz gate must be passed before moving on, a failed attempt triggers a cooldown, and passing a review schedules the next one.",
      "The app is built on the Next.js App Router with React, TypeScript, Tailwind, and MongoDB through Mongoose. A POST /api/generate route turns a subject into structured topics with resources and subtopics using Groq, while the learn page and progress endpoints drive the study loop and surface outcome metrics such as streaks and completion.",
      "There is a surprising amount of trust and safety work in an AI study tool. Resource URLs are normalized to HTTPS only, an optional allowlist restricts which domains can be recommended, learner thumbs-up and thumbs-down feedback feeds a quality loop, and generation and quiz endpoints are rate limited — in memory for now, with Redis noted as the path to multi-instance scale.",
      "Building it clarified that the useful unit of an educational product is a loop, not a library: generate, study, prove, review, repeat. Everything else is presentation.",
    ],
    highlights: [
      "Groq-generated curricula with structured topics and resources.",
      "Quiz-gated topic unlocking with cooldowns and spaced review.",
      "HTTPS-only resources with an optional domain allowlist.",
    ],
    quote:
      "A learning product should change what you do tomorrow, not just what you saved today.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Groq",
      "Tailwind CSS",
    ],
    links: [
      { label: "Live demo", href: "https://carriculae.vercel.app/" },
      {
        label: "Source",
        href: "https://github.com/Abhishek-Jaiswar/carriculae",
      },
    ],
  },
];

export const editorials: Article[] = [
  {
    id: "agentic-systems-are-state-machines",
    type: "writing",
    category: "AI Engineering",
    title: "Agentic systems are state machines, not chat prompts",
    summary:
      "The hard part of a multi-agent product isn't the prompt — it's the state, the handoffs, and what happens when an agent fails.",
    date: "September 2026",
    readTime: "6 min read",
    body: [
      "After wiring a ten-agent learning pipeline, I stopped thinking of agents as personalities and started thinking of them as nodes. Each one has a contract: a typed input, a typed output, and a narrow job. The intelligence lives in the model, but the reliability lives in the graph.",
      "That distinction changes the engineering. Every node persists its result, so a failed run can resume instead of restarting from the interview. Slow generation moves onto a queue, and progress is streamed to the client so a multi-minute workflow still feels alive. Outputs are validated before they cross an edge, because an unverified curriculum should never reach the teaching agent.",
      "Prompts still matter, but they are the smallest part of the system. Retries, timeouts, dead-letter handling, provenance, and observable runs are what make an agentic product trustworthy. Users do not care how clever the prompt is; they care that the academy remembers where it was and can explain what it produced.",
      "The goal is boring agents inside a resilient machine — not a brilliant prompt that occasionally works.",
    ],
    quote:
      "A prompt is not an architecture. The graph, the state, and the failure paths are.",
  },
  {
    id: "caching-is-a-product-decision",
    type: "writing",
    category: "Systems Design",
    title: "Caching is a product decision, not a performance afterthought",
    summary:
      "Where you cache changes what users see, what admins can trust, and how quickly a catalog updates. Treat it like a product surface.",
    date: "August 2026",
    readTime: "5 min read",
    body: [
      "Adding Redis to a catalog is easy. Deciding what a stale price means is not. In an e-commerce build, caching categories and product listings bought real latency improvements, but it also created a product question: when an admin edits a banner, how long should the storefront keep showing the old one?",
      "The useful rule was to cache read-heavy, low-write domains with explicit invalidation on write, and to leave inventory and orders transactional. Cache keys were scoped per entity so a category change could not accidentally invalidate the wrong surface. TTLs became visible configuration rather than hidden constants.",
      "The mistake I see most often is treating the cache as an infrastructure detail. It is not. Every cache is a claim about acceptable staleness, and that claim is visible to the person using the product. If a seller updates stock and the storefront lies for ten minutes, that is not a performance win — it is a correctness bug.",
      "Decide the freshness contract first. The implementation is the easy half.",
    ],
    quote:
      "Every cache is a promise about how stale your product is allowed to be. Make that promise on purpose.",
  },
  {
    id: "developer-experience-is-the-product",
    type: "writing",
    category: "Developer Tooling",
    title: "For developer tools, the first five minutes are the product",
    summary:
      "Orbit's success was less about Rust and more about making init, dev, and build obvious without reading a manual.",
    date: "July 2026",
    readTime: "4 min read",
    body: [
      "Publishing a static site generator to crates.io taught me that a CLI is a user interface before it is a program. Someone decides whether your tool is worth keeping in the gap between cargo install and the first local preview.",
      "So Orbit optimizes that gap. init produces a site that already builds. dev serves it, watches files, and rebuilds on save, with --open and --port for the obvious variations. new page exists because the second thing anyone does after seeing the homepage is write another one. Markdown stays the source of truth, and components are optional tags rather than a required syntax.",
      "Rust made the loop fast, but speed was table stakes. The actual feature was removing decisions: no bundler config, no plugin graph, no README required before the first successful build. The error messages name the file and line because that is where the user's attention already is.",
      "Nobody adopts a tool because of the language it is written in. They adopt it because the first five minutes felt effortless.",
    ],
    quote:
      "Nobody adopts a tool because of its language. They adopt it because the first five minutes felt effortless.",
  },
];

export const allArticles: Article[] = [...caseStudies, ...editorials];

export function getArticle(id: string): Article | undefined {
  return allArticles.find((article) => article.id === id);
}
