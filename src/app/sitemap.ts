import { MetadataRoute } from "next";
import { allArticles } from "@/data/articles";

const baseUrl = "https://tridex.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "",
    "/case-studies",
    "/how-i-build",
    "/editorials",
    "/experience",
    "/contact",
  ].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  const articleRoutes = allArticles.map((article) => ({
    url: `${baseUrl}/${article.type === "work" ? "case-studies" : "editorials"}/${article.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...articleRoutes];
}
