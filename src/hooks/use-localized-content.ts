"use client";

import { useLanguage } from "@/context/language-context";
import { localizedArticles } from "@/data/localized/homepage-articles";

export function useLocalizedContent() {
  const { language } = useLanguage();

  const data = localizedArticles[language] || localizedArticles.en;

  const leadStory = data.articles[0];
  const featureCaseFiles = data.articles.slice(1, 4);
  const editorials = data.articles.slice(4);
  const appointments = data.appointments;

  return {
    language,
    articles: data.articles,
    leadStory,
    featureCaseFiles,
    editorials,
    appointments,
  };
}
