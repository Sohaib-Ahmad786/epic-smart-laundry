import { cn } from "@/lib/utils";

/**
 * Base Skeleton primitive with shimmer effect.
 */
export function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("rounded-xl skeleton-shimmer", className)}
      aria-hidden="true"
      {...props}
    />
  );
}

/**
 * Card skeleton loader
 */
export function CardSkeleton({ className }) {
  return (
    <div className={cn("rounded-3xl border border-slate-100 bg-white/60 backdrop-blur-sm p-6 space-y-4", className)}>
      <Skeleton className="h-12 w-12 rounded-2xl" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-8 w-20 rounded-full" />
        <Skeleton className="h-8 w-24 rounded-full" />
      </div>
    </div>
  );
}

/**
 * Form skeleton loader
 */
export function FormSkeleton({ fields = 4, className }) {
  return (
    <div className={cn("rounded-3xl border border-slate-100 bg-white/60 backdrop-blur-sm p-8 space-y-6", className)}>
      {Array.from({ length: fields }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
      ))}
      <Skeleton className="h-12 w-full rounded-xl mt-4" />
    </div>
  );
}

/**
 * Table skeleton loader
 */
export function TableSkeleton({ rows = 5, cols = 4, className }) {
  return (
    <div className={cn("rounded-3xl border border-slate-100 bg-white/60 backdrop-blur-sm overflow-hidden", className)}>
      {/* Header */}
      <div className="flex gap-4 p-4 border-b border-slate-100 bg-slate-50/50">
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-4 flex-1" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, row) => (
        <div key={row} className="flex gap-4 p-4 border-b border-slate-50 last:border-0">
          {Array.from({ length: cols }).map((_, col) => (
            <Skeleton key={col} className="h-4 flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
}

/**
 * Hero section skeleton
 */
export function HeroSkeleton({ className }) {
  return (
    <div className={cn("pt-32 pb-20 px-4", className)}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Skeleton className="h-8 w-48 rounded-full" />
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-14 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-14 w-40 rounded-2xl" />
            <Skeleton className="h-14 w-40 rounded-2xl" />
          </div>
        </div>
        <Skeleton className="h-[400px] w-full rounded-[3rem] hidden lg:block" />
      </div>
    </div>
  );
}
