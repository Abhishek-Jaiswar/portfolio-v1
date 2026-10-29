import Reveal from "@/components/site/reveal";
import SectionHeader from "@/components/site/section-header";

const requestPath = [
  {
    step: "01",
    title: "Interface",
    detail: "The user action and the feedback they need.",
    tech: "React · Next.js",
  },
  {
    step: "02",
    title: "Edge",
    detail: "Route traffic, serve static assets, protect entry points.",
    tech: "CDN · HTTPS",
  },
  {
    step: "03",
    title: "Application",
    detail: "Validate input, enforce access, apply domain rules.",
    tech: "Node.js · APIs",
  },
  {
    step: "04",
    title: "Data",
    detail: "Persist the source of truth and return a useful result.",
    tech: "PostgreSQL · MongoDB",
  },
];

const systemConcerns = [
  {
    title: "Fast paths",
    detail: "Indexes and caching for the reads that matter.",
    mark: "↗",
  },
  {
    title: "Slow work",
    detail: "Queues and workers for tasks outside the request path.",
    mark: "⤴",
  },
  {
    title: "Production health",
    detail: "Logs, metrics, and alerts tied to user impact.",
    mark: "◎",
  },
];

export default function SystemFlow() {
  return (
    <section id="system-design" className="border-t border-line">
      <div className="container-page py-20 sm:py-24 lg:py-28">
        <SectionHeader
          eyebrow="System design"
          title="A clear path from request to result."
          description="I start with the user and business outcome, then shape the application around the data, boundaries, and operational needs."
        />

        <Reveal className="mt-10 sm:mt-12">
          <div className="min-w-0 overflow-hidden rounded-3xl border border-line bg-surface p-4 sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 sm:pb-5">
              <p className="eyebrow">A typical request lifecycle</p>
              <span className="inline-flex items-center gap-2 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Designed around the product
              </span>
            </div>

            <ol className="mt-5 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {requestPath.map((item, index) => (
                <li key={item.step} className="relative min-w-0">
                  <div className="h-full min-w-0 rounded-2xl border border-line bg-background p-4 transition-colors duration-200 hover:border-foreground/20 hover:bg-surface-hover sm:p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[10px] tracking-[0.16em] text-faint">
                        STEP {item.step}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-sm text-accent"
                      >
                        {index === requestPath.length - 1 ? "●" : "→"}
                      </span>
                    </div>
                    <h3 className="mt-5 font-serif text-xl tracking-tight text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 min-h-[3rem] text-sm leading-relaxed text-muted">
                      {item.detail}
                    </p>
                    <p className="mt-5 border-t border-line pt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-faint">
                      {item.tech}
                    </p>
                  </div>
                  {index < requestPath.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-xs text-muted lg:flex"
                    >
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-5 border-t border-line pt-5 sm:mt-6 sm:pt-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
                <div>
                  <p className="eyebrow">Built into the system</p>
                  <p className="mt-1 text-sm text-muted">
                    Production concerns shape every layer, not just the API.
                  </p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-faint">
                  Performance · Resilience · Observability
                </span>
              </div>

              <ul className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {systemConcerns.map((item) => (
                  <li
                    key={item.title}
                    className="flex min-w-0 items-start gap-3 rounded-xl border border-line/70 p-4"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-sm text-accent"
                    >
                      {item.mark}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
