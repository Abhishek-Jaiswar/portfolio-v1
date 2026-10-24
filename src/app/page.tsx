import Hero from "@/components/sections/hero";
import StatsBand from "@/components/sections/stats-band";
import AboutSection from "@/components/sections/about-section";
import SelectedWork from "@/components/sections/selected-work";
import SystemFlow from "@/components/sections/system-flow";
import ExperienceSection from "@/components/sections/experience-section";
import WritingSection from "@/components/sections/writing-section";
import ContactCta from "@/components/sections/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <AboutSection />
      <SelectedWork />
      {/* <SystemFlow /> */}
      <ExperienceSection />
      <WritingSection />
      <ContactCta />
    </>
  );
}
