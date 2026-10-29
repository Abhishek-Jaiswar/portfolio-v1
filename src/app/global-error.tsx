"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
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
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <main
          role="alert"
          className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:px-10"
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            Site error
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
            The site hit an unexpected problem.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Please try again. If it keeps happening, come back in a little while.
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
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              Try again
            </button>
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
            >
              Back home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
