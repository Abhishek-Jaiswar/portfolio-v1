import Reveal from "@/components/site/reveal";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-line">
      <div className="container-page py-16 sm:py-24">
        <Reveal className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
