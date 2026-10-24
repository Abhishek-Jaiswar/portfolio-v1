import Link from "next/link";
import { nav, site } from "@/data/content";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-5 font-serif text-6xl leading-none tracking-tight text-foreground sm:text-8xl">
        Page not found
      </h1>
      <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
        get you back on track.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Back home
        </Link>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover"
        >
          View selected work
          <span>→</span>
        </Link>
      </div>

      <nav className="mt-14 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="link-underline transition-colors hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={`mailto:${site.email}`}
          className="link-underline transition-colors hover:text-foreground"
        >
          Email
        </a>
      </nav>
    </section>
  );
}
