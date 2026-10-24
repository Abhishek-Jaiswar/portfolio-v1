export interface ProcessPhase {
  step: string;
  title: string;
  summary: string;
  details: string[];
}

export const processPhases: ProcessPhase[] = [
  {
    step: "01",
    title: "Discovery & scoping",
    summary:
      "I start by understanding the domain, the users, and what success actually looks like before writing a line of code.",
    details: [
      "Map the real business workflow, constraints, and edge cases.",
      "Define scope, success metrics, and explicit non-goals.",
      "Cut the smallest useful slice that can ship and teach us something.",
    ],
  },
  {
    step: "02",
    title: "Architecture & data modeling",
    summary:
      "I model the domain in the database first, then design boundaries that scale and fail gracefully.",
    details: [
      "Model entities and relationships accurately in PostgreSQL.",
      "Design multi-tenant isolation and clean service boundaries.",
      "Plan for caching, background jobs, and horizontal scaling from day one.",
    ],
  },
  {
    step: "03",
    title: "Build & integrate",
    summary:
      "I build in small, reviewable increments behind typed contracts that run end to end.",
    details: [
      "End-to-end TypeScript with explicit API contracts.",
      "Trunk-based development with small, focused pull requests.",
      "Third-party integrations isolated behind clean abstractions.",
    ],
  },
  {
    step: "04",
    title: "AI integration & automation",
    summary:
      "I add LLMs where they create real leverage — streaming experiences, retrieval, and automation.",
    details: [
      "Streaming chat and tool-calling interfaces over SSE.",
      "Retrieval-augmented generation grounded in your own data.",
      "Multi-step workflows with evaluations, guardrails, and cost controls.",
    ],
  },
  {
    step: "05",
    title: "Test, ship & automate",
    summary:
      "The path to production is automated and boring — safe to deploy any day of the week.",
    details: [
      "Automated tests around critical paths and contracts.",
      "CI/CD pipelines, preview deployments, and containerized environments.",
      "Versioned migrations and reversible releases.",
    ],
  },
  {
    step: "06",
    title: "Observe & iterate",
    summary:
      "Shipping is the beginning. I measure against real usage and improve continuously.",
    details: [
      "Structured logging, metrics, and distributed tracing.",
      "Alerting tied to user impact rather than noise.",
      "Iterate from feedback, telemetry, and postmortems.",
    ],
  },
];

export interface Capability {
  id: string;
  title: string;
  summary: string;
  points: string[];
}

export const capabilities: Capability[] = [
  {
    id: "scalable-architecture",
    title: "Scalable architecture",
    summary:
      "Systems designed to stay fast and correct as traffic, data, and teams grow.",
    points: [
      "Secure data isolation with role-based access control",
      "Caching layers, background jobs, and message queues",
      "Stateless services and horizontal scaling",
      "Query optimization, indexing, and database performance tuning",
    ],
  },
  {
    id: "ai-assisted-engineering",
    title: "AI-assisted engineering",
    summary:
      "Applying modern AI tooling and LLM APIs to accelerate delivery and add intelligent features.",
    points: [
      "Integrating LLM APIs and streaming interfaces",
      "Retrieval-augmented generation fundamentals",
      "Prompt design, guardrails, and evaluation",
      "Automation and developer tooling",
    ],
  },
  {
    id: "developer-experience",
    title: "Developer experience",
    summary:
      "A workflow that makes shipping fast, safe, and repeatable for the whole team.",
    points: [
      "End-to-end TypeScript and explicit API contracts",
      "CI/CD pipelines with preview deployments",
      "Automated testing and trunk-based development",
      "Docker, reproducible environments, and a strong review culture",
    ],
  },
  {
    id: "reliability-and-observability",
    title: "Reliability & observability",
    summary:
      "Production systems that are measured, monitored, and resilient by default.",
    points: [
      "Structured logging, metrics, and distributed tracing",
      "Error tracking and user-impact alerting",
      "Graceful degradation, rate limiting, and backups",
      "Incident response and postmortems that change the system",
    ],
  },
];

export interface AiBlock {
  title: string;
  description: string;
}

export const aiBuildingBlocks: AiBlock[] = [
  {
    title: "LLM integration",
    description:
      "LLM features with resilient providers, retries, timeouts, and graceful fallbacks.",
  },
  {
    title: "Retrieval-augmented generation",
    description:
      "Ground models in your own knowledge using embeddings, chunking, and vector search.",
  },
  {
    title: "Tool & function calling",
    description:
      "Let models take real actions through typed, permissioned, and auditable tools.",
  },
  {
    title: "Agentic workflows",
    description:
      "Multi-step agents that plan, act, and recover — with human checkpoints where it matters.",
  },
  {
    title: "Streaming UX",
    description:
      "Server-Sent Events and incremental rendering for interfaces that feel instant.",
  },
  {
    title: "Evaluations & guardrails",
    description:
      "Test model behavior, constrain outputs, and control cost and latency before launch.",
  },
];

export const principles: string[] = [
  "Model the domain before writing code.",
  "Prefer boring, observable systems over clever ones.",
  "Automate the path to production.",
  "Measure first, optimize second.",
  "Design for failure, not just the happy path.",
  "Keep a human in the loop for AI.",
];
