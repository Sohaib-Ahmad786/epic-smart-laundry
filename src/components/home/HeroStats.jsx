"use client";

import { motion } from "framer-motion";
import { Star, Clock, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "500+",
    label: "Happy Customers",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Clock,
    value: "24h",
    label: "Fast Delivery",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: ShieldCheck,
    value: "99%",
    label: "Clean Guarantee",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: 0.5 },
        },
      }}
      className="flex flex-wrap items-center gap-3 sm:gap-4 mt-10 sm:mt-12"
      role="list"
      aria-label="Service highlights"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 120, damping: 18 },
            },
          }}
          whileHover={{ y: -4, scale: 1.02 }}
          className="flex items-center gap-3 p-3 pr-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200/80 transition-all cursor-default"
          role="listitem"
        >
          <div
            className={`p-2.5 rounded-xl ${stat.bg} ${stat.color}`}
            aria-hidden="true"
          >
            <stat.icon className="w-5 h-5" strokeWidth={2.5} />
          </div>
          <div>
            <p className="font-bold text-slate-900 leading-none">{stat.value}</p>
            <p className="text-xs text-slate-500 font-medium mt-1">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
