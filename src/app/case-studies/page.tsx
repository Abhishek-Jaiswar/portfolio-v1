import { caseStudies } from "@/data/articles";
import PageHeader from "@/components/site/page-header";
import ProjectCard from "@/components/site/project-card";
import ContactCta from "@/components/sections/contact-cta";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Selected work & case studies."
        description="Production systems I've designed and built — multi-agent AI, commerce platforms, and developer tooling."
      />

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((article, index) => (
            <ProjectCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
