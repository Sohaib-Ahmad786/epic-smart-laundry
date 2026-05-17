"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function SectionHeader({
  badge,
  badgeColor = "blue",
  title,
  titleHighlight,
  description,
  dark = false,
  className = "",
}) {
  const badgeStyles = {
    blue: "bg-blue-50 border-blue-100 text-blue-700",
    dark: "bg-white/5 border-white/10 text-white backdrop-blur-md",
    green: "bg-emerald-50 border-emerald-100 text-emerald-700",
    amber: "bg-amber-50 border-amber-100 text-amber-700",
  };

  const dotColors = {
    blue: "bg-secondary",
    dark: "bg-accent",
    green: "bg-accent",
    amber: "bg-amber-400",
  };

  return (
    <div className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 ${className}`}>
      {badge && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${badgeStyles[badgeColor]}`}
        >
          <span
            className={`w-2 h-2 rounded-full animate-pulse ${dotColors[badgeColor]}`}
            aria-hidden="true"
          />
          <span className="text-sm font-bold tracking-wide uppercase">
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={viewportOnce}
        className={`text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold mb-6 tracking-tight leading-[1.15] ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}{" "}
        {titleHighlight && (
          <>
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-600">
              {titleHighlight}
            </span>
          </>
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={viewportOnce}
          className={`text-lg leading-relaxed max-w-2xl mx-auto ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
