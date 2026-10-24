import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/site/reveal";
import ProjectCard from "@/components/site/project-card";
import ArticleCard from "@/components/site/article-card";
import type { Article } from "@/data/articles";

interface ArticleDetailProps {
  article: Article;
  related: Article[];
  backHref: string;
  backLabel: string;
}

export default function ArticleDetail({
  article,
  related,
  backHref,
  backLabel,
}: ArticleDetailProps) {
  const isWork = article.type === "work";

  return (
    <article className="container-page py-12 sm:py-16">
      <Reveal>
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <span>←</span> {backLabel}
        </Link>

        <p className="eyebrow mt-8">{article.category}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {article.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {article.summary}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-faint">
          <span>{article.date}</span>
          <span className="h-1 w-1 rounded-full bg-faint" />
          <span>{article.readTime}</span>
        </div>
      </Reveal>

      {article.image && (
        <Reveal className="mt-12" y={20}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-surface">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 76rem"
              className="object-cover"
            />
          </div>
          {article.imageCaption && (
            <p className="mt-3 text-xs text-faint">{article.imageCaption}</p>
          )}
        </Reveal>
      )}

      {article.gallery && article.gallery.length > 0 && (
        <Reveal className="mt-6 grid gap-6 sm:grid-cols-2">
          {article.gallery.map((item) => (
            <div key={item.src}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-surface">
                <Image
                  src={item.src}
                  alt={item.caption ?? article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              {item.caption && (
                <p className="mt-3 text-xs text-faint">{item.caption}</p>
              )}
            </div>
          ))}
        </Reveal>
      )}

      {article.highlights && article.highlights.length > 0 && (
        <Reveal className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {article.highlights.map((highlight) => (
            <div key={highlight} className="bg-surface p-6">
              <p className="text-sm leading-relaxed text-muted">{highlight}</p>
            </div>
          ))}
        </Reveal>
      )}

      <Reveal className="mt-14 max-w-3xl space-y-6 text-lg leading-relaxed text-foreground/90">
        {article.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Reveal>

      {article.quote && (
        <Reveal className="mt-14 max-w-3xl border-l-2 border-accent pl-6">
          <p className="font-serif text-2xl italic leading-snug text-foreground sm:text-3xl">
            &ldquo;{article.quote}&rdquo;
          </p>
        </Reveal>
      )}

      {article.stack && article.stack.length > 0 && (
        <Reveal className="mt-14 max-w-3xl">
          <h2 className="eyebrow">Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-3 py-1.5 text-sm text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      )}

      {article.links && article.links.length > 0 && (
        <Reveal className="mt-14 max-w-3xl">
          <h2 className="eyebrow">Links</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-muted transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      )}

      <Reveal className="mt-14">
        <Link
          href="/how-i-build"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          See how I build systems like this
          <span>→</span>
        </Link>
      </Reveal>

      {related.length > 0 && (
        <section className="mt-20 border-t border-line pt-12">
          <h2 className="font-serif text-2xl tracking-tight text-foreground">
            {isWork ? "More case studies" : "More writing"}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) =>
              isWork ? (
                <ProjectCard key={item.id} article={item} index={index} />
              ) : (
                <ArticleCard key={item.id} article={item} index={index} />
              )
            )}
          </div>
        </section>
      )}
    </article>
  );
}
