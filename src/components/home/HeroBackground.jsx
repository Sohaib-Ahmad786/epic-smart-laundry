"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background" aria-hidden="true">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F172A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Static Gradient Orbs (CSS-only for performance — no JS animation overhead) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/15 blur-[120px] animate-[pulse_12s_ease-in-out_infinite_2s]" />
      <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[80px] animate-[pulse_10s_ease-in-out_infinite_4s]" />
    </div>
  );
}
