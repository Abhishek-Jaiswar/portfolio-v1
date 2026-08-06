"use client";

import { useState } from "react";
import NewspaperHeader from "@/components/newspaper/newspaper-header";
import EditorialModal, { ArticleData } from "@/components/newspaper/editorial-modal";
import HeroBentoSection from "@/components/sections/hero-bento-section";
import CaseFilesSection from "@/components/sections/case-files-section";
import MarketChronicleSection from "@/components/sections/market-chronicle-section";
import EditorialsSection from "@/components/sections/editorials-section";
import TelegraphDeskSection from "@/components/sections/telegraph-desk-section";
import NewspaperFooter from "@/components/sections/newspaper-footer";
import { useLocalizedContent } from "@/hooks/use-localized-content";

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);
  const { leadStory, featureCaseFiles, editorials, appointments } = useLocalizedContent();

  return (
    <div className="min-h-screen p-3 sm:p-6 md:p-8 bg-[#efe4cb] text-[#1c1917] font-serif selection:bg-[#b91c1c] selection:text-white relative overflow-x-hidden">
      {/* 1. Masthead Header */}
      <NewspaperHeader />

      {/* 2. Section A: Hero Bento & Lead Story */}
      <HeroBentoSection
        leadStory={leadStory}
        onSelectArticle={setSelectedArticle}
      />

      {/* 3. Section B: Investigative Case Files */}
      <CaseFilesSection
        caseFiles={featureCaseFiles}
        onSelectArticle={setSelectedArticle}
      />

      {/* 4. Section C: Tech Market Watch & Business Chronicle */}
      <MarketChronicleSection appointments={appointments} />

      {/* 5. Section D: Editorial Opinion & Essays */}
      <EditorialsSection
        editorials={editorials}
        onSelectArticle={setSelectedArticle}
      />

      {/* 6. Section E: Telegraph & Press Desk Contact */}
      <TelegraphDeskSection />

      {/* 7. Footer */}
      <NewspaperFooter />

      {/* Editorial Reader Modal */}
      <EditorialModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}