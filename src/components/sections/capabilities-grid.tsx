import Reveal from "@/components/site/reveal";
import { capabilities } from "@/data/engineering";

export default function CapabilitiesGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
      {capabilities.map((capability, index) => (
        <Reveal
          key={capability.id}
          delay={(index % 2) * 0.06}
          className="bg-surface p-8"
        >
          <h3 className="font-serif text-2xl tracking-tight text-foreground">
            {capability.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {capability.summary}
          </p>
          <ul className="mt-6 space-y-3">
            {capability.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
