import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import ExperienceTimeline from "@/components/site/experience-timeline";
import Reveal from "@/components/site/reveal";
import ContactCta from "@/components/sections/contact-cta";
import { experience, education, skillGroups, stats } from "@/data/content";

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Experience & skills."
        description="Roles, responsibilities, and the tools I reach for when building production software."
      />

      <section className="border-b border-line">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.06}
                y={16}
                className="bg-background px-4 py-10 text-center sm:py-12"
              >
                <div className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mx-auto mt-2 max-w-[12rem] text-xs leading-relaxed text-muted">
                  {stat.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <ExperienceTimeline items={experience} />
      </section>

      <section className="border-t border-line">
        <div className="container-page py-16 sm:py-24">
          <Reveal>
            <p className="eyebrow">Education</p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              Academic background.
            </h2>
          </Reveal>

          <div className="mt-12 space-y-10">
            {education.map((item, index) => (
              <Reveal key={item.degree} delay={index * 0.05}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-xl tracking-tight text-foreground">
                    {item.degree}
                  </h3>
                  <span className="font-mono text-xs text-faint">{item.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.institution}
                  {item.grade && <span className="text-muted"> · Grade {item.grade}</span>}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
                <ul className="mt-4 max-w-2xl space-y-2">
                  {item.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-16 sm:py-24">
          <Reveal>
            <p className="eyebrow">Toolkit</p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              Technologies I work with.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, index) => (
              <Reveal
                key={group.title}
                delay={index * 0.05}
                className="bg-surface p-6"
              >
                <h3 className="eyebrow">{group.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <Link
              href="/how-i-build"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              How I build these systems, end to end
              <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
