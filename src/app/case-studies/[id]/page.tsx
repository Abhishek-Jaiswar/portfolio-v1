import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getArticle } from "@/data/articles";
import ArticleDetail from "@/components/site/article-detail";

const baseUrl = "https://tridex.in";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((article) => ({ id: article.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = getArticle(id);
  if (!article) return { title: "Case study not found" };

  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/case-studies/${article.id}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      images: article.image ? [{ url: article.image }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { id } = await params;
  const article = getArticle(id);

  if (!article || article.type !== "work") {
    notFound();
  }

  const related = caseStudies.filter((item) => item.id !== article.id);
  const url = `${baseUrl}/case-studies/${article.id}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}/#article`,
        headline: article.title,
        description: article.summary,
        url,
        image: article.image ? `${baseUrl}${article.image}` : undefined,
        author: { "@id": `${baseUrl}/#person` },
        publisher: { "@id": `${baseUrl}/#person` },
        mainEntityOfPage: url,
        about: article.stack,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${baseUrl}/case-studies`,
          },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleDetail
        article={article}
        related={related}
        backHref="/case-studies"
        backLabel="All case studies"
      />
    </>
  );
}
