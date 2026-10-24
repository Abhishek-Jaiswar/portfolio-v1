import PageHeader from "@/components/site/page-header";
import ContactForm from "@/components/sections/contact-form";
import Reveal from "@/components/site/reveal";
import { site, socials } from "@/data/content";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk."
        description="Have a role, a project, or a question? Send a message and I'll get back to you."
      />

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="space-y-10">
            <div>
              <h2 className="eyebrow">Direct</h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block break-all font-serif text-2xl tracking-tight text-foreground transition-colors hover:text-accent"
              >
                {site.email}
              </a>
              <p className="mt-2 text-sm text-muted">
                {site.location} · {site.timezone}
              </p>
            </div>

            <div>
              <h2 className="eyebrow">Elsewhere</h2>
              <ul className="mt-4 space-y-1">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center justify-between border-b border-line py-3 text-sm"
                    >
                      <span className="text-foreground">{social.label}</span>
                      <span className="text-muted">
                        {social.handle}
                        <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="eyebrow">Availability</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {site.status}. I typically reply within a day or two.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
