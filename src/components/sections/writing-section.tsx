import Link from "next/link";
import { editorials } from "@/data/articles";
import SectionHeader from "@/components/site/section-header";
import ArticleCard from "@/components/site/article-card";

export default function WritingSection() {
  return (
    <section className="border-t border-line">
      <div className="container-page py-20 sm:py-28">
        <SectionHeader
          eyebrow="Writing"
          title="Notes on building software."
          description="Essays on architecture, AI, and the craft of shipping production systems."
          action={
            <Link
              href="/editorials"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              All writing
              <span>→</span>
            </Link>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {editorials.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
