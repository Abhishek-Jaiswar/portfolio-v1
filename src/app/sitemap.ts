import { MetadataRoute } from "next";
import { ALL_ARTICLES } from "@/data/articles";

const baseUrl = "https://abhishekjaiswar.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Static routes
  const routes = ["", "/case-studies", "/editorials", "/experience", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Dynamic article routes
  const articleRoutes = ALL_ARTICLES.map((article) => {
    const isOpEd = article.category.includes("OP-ED") || article.category.includes("ESSAY");
    const prefix = isOpEd ? "/editorials" : "/case-studies";

    return {
      url: `${baseUrl}${prefix}/${article.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...routes, ...articleRoutes];
}
