"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-md flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-14 h-14 rounded-full border-[3px] border-slate-200 border-t-secondary animate-spin-smooth" />
          <div
            className="absolute inset-0 w-14 h-14 rounded-full border-[3px] border-transparent border-b-accent/40 animate-spin-smooth"
            style={{
              animationDirection: "reverse",
              animationDuration: "1.2s",
            }}
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-slate-700 mb-1">
            EPIC Smart Laundry
          </p>
          <p className="text-xs text-slate-400 animate-pulse">Loading...</p>
        </div>
      </div>
    </div>
  );
}
