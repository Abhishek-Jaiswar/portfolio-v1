import { editorials } from "@/data/articles";
import PageHeader from "@/components/site/page-header";
import ArticleCard from "@/components/site/article-card";
import ContactCta from "@/components/sections/contact-cta";

export default function EditorialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Notes on building software."
        description="Essays on agentic systems, caching as a product decision, and building tools people can pick up in five minutes."
      />

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {editorials.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
