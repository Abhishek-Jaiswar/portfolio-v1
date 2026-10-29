import Link from "next/link";
import Reveal from "@/components/site/reveal";
import { site } from "@/data/content";

export default function ContactCta() {
  return (
    <section className="border-t border-line">
      <div className="container-page py-20 sm:py-28">
        <Reveal className="rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-16 sm:py-20">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
            Let&apos;s build something reliable together.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
            I&apos;m open to full-time and contract roles, and always happy to talk
            about architecture, AI systems, or a product you&apos;re building.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-[transform,opacity] duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              {site.email}<span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
            </a>
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-foreground transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              Contact page
              <span>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
