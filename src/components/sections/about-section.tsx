import { site, facts } from "@/data/content";
import Reveal from "@/components/site/reveal";

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-line">
      <div className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl tracking-tight text-foreground sm:text-4xl md:text-[2.75rem]">
              Who I am and what I do.
            </h2>
            <div className="mt-6 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start justify-between gap-6 border-b border-line py-4 first:pt-0 last:border-0 last:pb-0"
                >
                  <dt className="shrink-0 text-sm text-muted">{fact.label}</dt>
                  <dd className="text-right text-sm font-medium text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
            >
              Download CV
              <span className="text-faint">↓</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
