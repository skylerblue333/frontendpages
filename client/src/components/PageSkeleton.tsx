import { Skeleton } from "@/components/ui/skeleton";

export function PageSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="space-y-6" aria-busy="true" aria-label="Loading page">
      <div className="space-y-3">
        <Skeleton className="h-8 w-56" />
        <Skeleton className="h-4 w-full max-w-lg" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} className="h-28 rounded-2xl" />)}
      </div>
      <div className="rounded-2xl border border-border/70 p-5">
        <div className="space-y-3">
          {Array.from({ length: rows }).map((_, index) => <Skeleton key={index} className="h-10 w-full" />)}
        </div>
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="space-y-3" aria-busy="true" aria-label="Loading table">
      {Array.from({ length: rows }).map((_, row) => (
        <div key={row} className="grid gap-3 sm:grid-cols-4">
          {Array.from({ length: columns }).map((_, column) => <Skeleton key={column} className="h-9 w-full" />)}
        </div>
      ))}
    </div>
  );
}

export default PageSkeleton;
