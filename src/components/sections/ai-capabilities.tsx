import Reveal from "@/components/site/reveal";
import { aiBuildingBlocks } from "@/data/engineering";

export default function AiCapabilities() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {aiBuildingBlocks.map((block, index) => (
        <Reveal
          key={block.title}
          delay={(index % 3) * 0.06}
          className="h-full rounded-2xl border border-line bg-surface p-6"
        >
          <h3 className="font-serif text-xl tracking-tight text-foreground">
            {block.title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted">
            {block.description}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
