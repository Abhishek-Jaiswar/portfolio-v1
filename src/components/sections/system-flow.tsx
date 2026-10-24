import Reveal from "@/components/site/reveal";

const points = [
  "Model the domain and access patterns first.",
  "Bound every query; index the hot paths.",
  "Move slow work off the request path.",
  "Cache and rate-limit where it actually matters.",
];

function Box({
  x,
  y,
  w,
  h,
  title,
  subtitle,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  subtitle: string;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={14}
        className="fill-background stroke-line"
        strokeWidth={1}
      />
      <text x={x + 18} y={y + 30} fontSize={15.5} fontWeight={600} className="fill-foreground">
        {title}
      </text>
      <text x={x + 18} y={y + 50} fontSize={12} className="fill-muted">
        {subtitle}
      </text>
    </g>
  );
}

export default function SystemFlow() {
  return (
    <section className="border-t border-line">
      <div className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow">System design</p>
            <h2 className="mt-3 max-w-xl font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
              I design systems, not just features.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Recruiters and clients don&apos;t buy a list of technologies — they
              buy someone who can ship and solve their problem. I start from the
              business outcome, then design the data model, the boundaries, and
              the path a request takes through the system.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {points.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-surface p-4 sm:p-6">
              <p className="eyebrow">Where a request goes</p>
              <div className="mt-4 overflow-x-auto">
                <svg
                  viewBox="0 0 1040 360"
                  role="img"
                  aria-label="Diagram of the path a request takes through a web application: client, edge, API, cache, background jobs, and the data layer"
                  className="h-auto w-full min-w-[720px]"
                >
                  <defs>
                    <marker
                      id="sf-arrow"
                      viewBox="0 0 10 10"
                      refX="8"
                      refY="5"
                      markerWidth="6"
                      markerHeight="6"
                      orient="auto-start-reverse"
                    >
                      <path d="M0 0 L10 5 L0 10 Z" className="fill-faint" />
                    </marker>
                  </defs>

                  <path
                    d="M210 92 H280"
                    className="flow-dash stroke-line"
                    strokeWidth={1.5}
                    fill="none"
                    markerEnd="url(#sf-arrow)"
                  />
                  <path
                    d="M455 92 H525"
                    className="flow-dash stroke-line"
                    strokeWidth={1.5}
                    fill="none"
                    markerEnd="url(#sf-arrow)"
                  />
                  <path
                    d="M740 92 H810"
                    className="flow-dash stroke-line"
                    strokeWidth={1.5}
                    fill="none"
                    markerEnd="url(#sf-arrow)"
                  />

                  <path
                    d="M605 124 V204"
                    className="flow-dash stroke-line"
                    strokeWidth={1.5}
                    fill="none"
                    markerEnd="url(#sf-arrow)"
                  />
                  <path
                    d="M700 124 V166 H830 V204"
                    className="flow-dash stroke-line"
                    strokeWidth={1.5}
                    fill="none"
                    markerEnd="url(#sf-arrow)"
                  />

                  <text x={245} y={84} textAnchor="middle" fontSize={11} className="fill-faint">
                    HTTPS
                  </text>
                  <text x={490} y={84} textAnchor="middle" fontSize={11} className="fill-faint">
                    auth
                  </text>
                  <text x={775} y={84} textAnchor="middle" fontSize={11} className="fill-faint">
                    indexes
                  </text>

                  <Box x={40} y={60} w={170} h={64} title="Client" subtitle="React · Next.js" />
                  <Box x={285} y={60} w={170} h={64} title="Edge / CDN" subtitle="Static + caching" />
                  <Box x={530} y={60} w={210} h={64} title="API layer" subtitle="Node.js · Express" />
                  <Box x={815} y={60} w={185} h={64} title="Data layer" subtitle="PostgreSQL · MongoDB" />
                  <Box x={530} y={210} w={150} h={64} title="Cache" subtitle="Hot reads" />
                  <Box x={730} y={210} w={200} h={64} title="Background jobs" subtitle="Queue + workers" />
                </svg>
              </div>
              <p className="mt-4 border-t border-line pt-4 text-xs leading-relaxed text-faint">
                Caching, indexing, rate limiting, and observability are
                cross-cutting — they apply at every layer, not just one.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
