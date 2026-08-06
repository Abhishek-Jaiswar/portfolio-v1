"use client";

import Link from "next/link";
import InvestigativeCaseCard from "@/components/newspaper/investigative-case-card";
import { ArticleData } from "@/components/newspaper/editorial-modal";
import { useLanguage } from "@/context/language-context";

interface CaseFilesSectionProps {
  caseFiles: ArticleData[];
  onSelectArticle: (article: ArticleData) => void;
}

export default function CaseFilesSection({
  caseFiles,
  onSelectArticle,
}: CaseFilesSectionProps) {
  const { t } = useLanguage();
  // Display only 2 articles on the front page as requested
  const frontPageArticles = caseFiles.slice(0, 2);

  return (
    <section className="relative z-10 my-6 py-4 border-b-2 border-[#1c1917]">
      {/* Section B Header Banner */}
      <div className="flex items-center justify-between border-b-2 border-[#1c1917] pb-2 mb-6">
        <h3 className="text-sm font-mono font-bold tracking-widest text-[#b91c1c] uppercase flex items-center space-x-2">
          <span>SECTION B:</span>
          <span className="text-[#1c1917]">{t("home.caseFilesHeading")}</span>
        </h3>
        <Link
          href="/case-studies"
          className="text-xs font-mono font-bold text-[#b91c1c] hover:underline uppercase tracking-wider hidden sm:inline"
        >
          {t("home.viewAllCaseStudies")}
        </Link>
      </div>

      {/* 2 Borderless Side-by-Side Broadsheet Article Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {frontPageArticles.map((caseFile, index) => (
          <div key={caseFile.id} className="relative">
            <InvestigativeCaseCard
              article={caseFile}
              index={index}
              onReadMore={onSelectArticle}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
