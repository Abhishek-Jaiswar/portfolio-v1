"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section
      role="alert"
      className="container-page flex min-h-[65vh] flex-col items-center justify-center py-20 text-center"
    >
      <p className="eyebrow">Something went wrong</p>
      <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-6xl">
        This page didn&apos;t load as expected.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted">
        Try loading it again. If the problem continues, head back home and try
        again later.
      </p>
      {error.digest && (
        <p className="mt-4 font-mono text-xs text-faint">
          Error reference: {error.digest}
        </p>
      )}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-[transform,opacity] duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
