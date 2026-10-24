import Link from "next/link";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";
import ProcessTimeline from "@/components/sections/process-timeline";
import CapabilitiesGrid from "@/components/sections/capabilities-grid";
import AiCapabilities from "@/components/sections/ai-capabilities";
import ContactCta from "@/components/sections/contact-cta";
import { capabilities, principles, processPhases } from "@/data/engineering";
import { site } from "@/data/content";

const baseUrl = "https://tridex.in";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/how-i-build/#webpage`,
      name: "How I Build — Modern Software Engineering",
      description:
        "A modern software development lifecycle covering scalable architecture, AI applications and agents, developer experience, and reliability.",
      url: `${baseUrl}/how-i-build`,
      author: { "@type": "Person", name: site.name, url: baseUrl },
      about: [
        "Software Development Lifecycle",
        "Scalable Architecture",
        "AI-Assisted Engineering",
        "Developer Experience",
        "Observability",
      ],
      mainEntity: {
        "@type": "ItemList",
        itemListElement: capabilities.map((capability, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: capability.title,
            description: capability.summary,
          },
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: "How I Build",
          item: `${baseUrl}/how-i-build`,
        },
      ],
    },
  ],
};

export default function HowIBuildPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="How I build"
        title="Modern software, built to scale and last."
        description="My end-to-end development lifecycle, the architecture patterns behind scalable applications, and how I bring AI-assisted features into production software."
      />

      <section className="container-page py-16 sm:py-24">
        <Reveal>
          <p className="eyebrow">The lifecycle</p>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
            From first principles to production.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Every engagement follows the same backbone — adapted to the problem,
            but never skipping the steps that prevent expensive mistakes later.
          </p>
        </Reveal>

        <div className="mt-10">
          <ProcessTimeline phases={processPhases} />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-16 sm:py-24">
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              What that looks like in practice.
            </h2>
          </Reveal>

          <div className="mt-12">
            <CapabilitiesGrid />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-16 sm:py-24">
          <Reveal>
            <p className="eyebrow">AI-assisted engineering</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              How I approach AI-assisted engineering.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              AI is only valuable when it solves a real problem. I work with LLM
              APIs and streaming interfaces, and ground responses in real data —
              keeping output transparent, observable, and safe to ship.
            </p>
          </Reveal>

          <div className="mt-12">
            <AiCapabilities />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="container-page py-16 sm:py-24">
          <Reveal>
            <p className="eyebrow">Principles</p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
              The rules I don&apos;t break.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal
                key={principle}
                delay={(index % 2) * 0.05}
                y={16}
                className="border-t border-line pt-5"
              >
                <p className="font-serif text-lg tracking-tight text-foreground">
                  {principle}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12">
            <Link
              href="/experience"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              See where I&apos;ve applied this
              <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
