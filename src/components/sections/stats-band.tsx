import Reveal from "@/components/site/reveal";
import { stats } from "@/data/content";

export default function StatsBand() {
  return (
    <section className=" border-t border-line">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.06}
              y={16}
              className="bg-background px-6 py-10 sm:py-12"
            >
              <div className="font-serif text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs leading-relaxed text-muted">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
