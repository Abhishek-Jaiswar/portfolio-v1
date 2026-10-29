export default function Loading() {
  return (
    <section
      role="status"
      aria-label="Loading page"
      className="container-page flex min-h-[55vh] flex-col justify-center py-20"
    >
      <span className="eyebrow">Loading</span>
      <span className="mt-5 h-10 w-3/4 max-w-xl animate-pulse rounded-lg bg-surface-hover motion-reduce:animate-none" />
      <span className="mt-4 h-4 w-full max-w-lg animate-pulse rounded bg-surface-hover motion-reduce:animate-none" />
      <span className="mt-2 h-4 w-2/3 max-w-md animate-pulse rounded bg-surface-hover motion-reduce:animate-none" />
      <span className="sr-only">Loading page content</span>
    </section>
  );
}
