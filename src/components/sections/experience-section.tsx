import Link from "next/link";
import { experience } from "@/data/content";
import SectionHeader from "@/components/site/section-header";
import ExperienceTimeline from "@/components/site/experience-timeline";
import Reveal from "@/components/site/reveal";

export default function ExperienceSection() {
  return (
    <section className="border-t border-line">
      <div className="container-page py-20 sm:py-28">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked."
          description="A quick overview of the roles behind my work — full history on the experience page."
          action={
            <Link
              href="/experience"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              Full experience
              <span>→</span>
            </Link>
          }
        />

        <Reveal className="mt-14">
          <ExperienceTimeline items={experience} showHighlights={false} />
        </Reveal>
      </div>
    </section>
  );
}
