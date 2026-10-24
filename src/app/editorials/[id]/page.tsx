import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { editorials, getArticle } from "@/data/articles";
import ArticleDetail from "@/components/site/article-detail";

const baseUrl = "https://tridex.in";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return editorials.map((article) => ({ id: article.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = getArticle(id);
  if (!article) return { title: "Essay not found" };

  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/editorials/${article.id}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
    },
  };
}

export default async function EditorialPage({ params }: PageProps) {
  const { id } = await params;
  const article = getArticle(id);

  if (!article || article.type !== "writing") {
    notFound();
  }

  const related = editorials.filter((item) => item.id !== article.id);
  const url = `${baseUrl}/editorials/${article.id}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}/#article`,
        headline: article.title,
        description: article.summary,
        url,
        articleSection: "Writing",
        author: { "@id": `${baseUrl}/#person` },
        publisher: { "@id": `${baseUrl}/#person` },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Writing",
            item: `${baseUrl}/editorials`,
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
        backHref="/editorials"
        backLabel="All writing"
      />
    </>
  );
}
