import Link from "next/link";
import { caseStudies } from "@/data/articles";
import { marqueeItems } from "@/data/content";
import SectionHeader from "@/components/site/section-header";
import ProjectCard from "@/components/site/project-card";
import Marquee from "@/components/site/marquee";
import Reveal from "@/components/site/reveal";

export default function SelectedWork() {
  return (
    <section id="work" className="container-page py-20 sm:py-28">
      <SectionHeader
        eyebrow="Selected work"
        title="Products I've designed, built, and shipped."
        description="A selection of production web applications — full-stack products with real APIs, data, and users."
        action={
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            All case studies
            <span>→</span>
          </Link>
        }
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.slice(0, 3).map((article, index) => (
          <ProjectCard key={article.id} article={article} index={index} />
        ))}
      </div>

      <Reveal className="mt-16">
        <Marquee items={marqueeItems} />
      </Reveal>
    </section>
  );
}
