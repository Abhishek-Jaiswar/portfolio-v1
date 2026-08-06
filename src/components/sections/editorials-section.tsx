"use client";

import Link from "next/link";
import NewspaperArticle from "@/components/newspaper/newspaper-article";
import { ArticleData } from "@/components/newspaper/editorial-modal";
import { useLanguage } from "@/context/language-context";

interface EditorialsSectionProps {
  editorials: ArticleData[];
  onSelectArticle: (article: ArticleData) => void;
}

export default function EditorialsSection({
  editorials,
  onSelectArticle,
}: EditorialsSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 my-6 py-4 border-b-2 border-[#1c1917]">
      <div className="flex items-center justify-between border-b-2 border-[#1c1917] pb-2 mb-6">
        <h3 className="text-sm font-mono font-bold tracking-widest text-[#b91c1c] uppercase flex items-center space-x-2">
          <span>SECTION C:</span>
          <span className="text-[#1c1917]">{t("home.editorialsHeading")}</span>
        </h3>
        <Link
          href="/editorials"
          className="text-xs font-mono font-bold text-[#b91c1c] hover:underline uppercase tracking-wider hidden sm:inline"
        >
          {t("home.viewAllEditorials")}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {editorials.map((ed) => (
          <NewspaperArticle
            key={ed.id}
            article={ed}
            onReadMore={onSelectArticle}
            featured
          />
        ))}
      </div>
    </section>
  );
}
