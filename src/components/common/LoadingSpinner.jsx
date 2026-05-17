"use client";

import { cn } from "@/lib/utils";

export default function LoadingSpinner({
  size = "md",
  className = "",
  label = "Loading...",
}) {
  const sizeMap = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-10 h-10 border-[3px]",
    xl: "w-14 h-14 border-4",
  };

  return (
    <div className={cn("inline-flex items-center justify-center", className)} role="status" aria-label={label}>
      <div
        className={cn(
          "rounded-full border-slate-200 border-t-secondary animate-spin-smooth",
          sizeMap[size]
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

/**
 * Full page loading overlay
 */
export function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] bg-white/80 backdrop-blur-md flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-[3px] border-slate-200 border-t-secondary animate-spin-smooth" />
          <div className="absolute inset-0 w-12 h-12 rounded-full border-[3px] border-transparent border-b-accent/40 animate-spin-smooth" style={{ animationDirection: "reverse", animationDuration: "1.2s" }} />
        </div>
        <p className="text-sm font-medium text-slate-500 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

/**
 * Button loading state
 */
export function ButtonSpinner({ className = "" }) {
  return (
    <div
      className={cn(
        "w-4 h-4 rounded-full border-2 border-current/30 border-t-current animate-spin-smooth",
        className
      )}
      role="status"
      aria-label="Submitting"
    >
      <span className="sr-only">Loading</span>
    </div>
  );
}
