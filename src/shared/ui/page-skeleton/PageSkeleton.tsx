import { Container } from "../container";

export const PageSkeleton = () => {
  return (
    <Container>
      <div className="py-8 md:py-12 space-y-10">
        {/* Hero / page title */}
        <div className="space-y-4 animate-pulse">
          <div className="h-10 w-64 rounded bg-neutral-200" />
          <div className="h-4 w-96 max-w-full rounded bg-neutral-200" />
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap gap-3 animate-pulse">
          <div className="h-9 w-28 rounded-full bg-neutral-200" />
          <div className="h-9 w-32 rounded-full bg-neutral-200" />
          <div className="h-9 w-24 rounded-full bg-neutral-200" />
          <div className="h-9 w-36 rounded-full bg-neutral-200" />
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3 animate-pulse">
              <div className="aspect-3/4 rounded-lg bg-neutral-200" />
              <div className="h-4 w-3/4 rounded bg-neutral-200" />
              <div className="h-3 w-1/2 rounded bg-neutral-200" />
              <div className="h-4 w-1/3 rounded bg-neutral-300" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
