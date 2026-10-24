"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { site } from "@/data/content";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `[Portfolio] ${subject}`
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    window.location.href = mailto;
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-line bg-surface p-8 text-center"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-xl text-accent">
          ✓
        </div>
        <h2 className="mt-5 font-serif text-2xl tracking-tight text-foreground">
          Finish in your email app
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Your email app should open with the message ready to send. If it
          didn&apos;t, email me directly at{" "}
          <a href={`mailto:${site.email}`} className="text-accent">
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-faint focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@company.com" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
          Subject
        </label>
        <select id="subject" name="subject" defaultValue="Full-time role" className={inputClass}>
          <option>Full-time role</option>
          <option>Contract or freelance project</option>
          <option>Technical consultation</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me a little about what you're building..."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
      >
        Send message
        <span>→</span>
      </button>
    </form>
  );
}
