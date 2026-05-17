"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Package, Search, Bell, FileText } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const iconMap = {
  orders: Package,
  search: Search,
  notifications: Bell,
  form: FileText,
};

export default function EmptyState({
  icon = "orders",
  title = "Nothing here yet",
  description = "No data to display at the moment.",
  ctaText,
  ctaHref,
  className = "",
}) {
  const Icon = iconMap[icon] || Package;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className={`flex flex-col items-center justify-center text-center py-16 px-6 ${className}`}
    >
      {/* Animated Icon Container */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative mb-8"
      >
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200/50 flex items-center justify-center shadow-lg shadow-slate-100/50">
          <Icon className="w-10 h-10 text-slate-400" strokeWidth={1.5} />
        </div>
        {/* Decorative dots */}
        <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-secondary/20 animate-pulse" />
        <div className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-accent/20 animate-pulse delay-500" />
      </motion.div>

      <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
        {description}
      </p>

      {ctaText && ctaHref && (
        <Link
          href={ctaHref}
          className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </motion.div>
  );
}
