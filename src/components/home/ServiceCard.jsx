"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { viewportOnce } from "@/lib/motion";

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 22 },
  },
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  delay = 0,
  className,
}) {
  return (
    <motion.article
      variants={cardVariants}
      className={cn(
        "relative group rounded-[2.5rem] p-[1px] overflow-hidden",
        className
      )}
    >
      {/* Animated Gradient Border */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-white/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-accent/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        aria-hidden="true"
      />

      {/* Inner Card */}
      <div className="relative h-full bg-slate-900/80 backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] flex flex-col justify-between overflow-hidden">
        {/* Hover Glow */}
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/20 transition-colors duration-500"
          aria-hidden="true"
        />

        <div>
          {/* Icon */}
          <div className="relative w-16 h-16 mb-8 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-white/5 rounded-2xl rotate-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-secondary/20 rounded-2xl -rotate-6 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 delay-75 blur-sm"
              aria-hidden="true"
            />
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl w-full h-full flex items-center justify-center shadow-2xl border border-white/10 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 z-10">
              <Icon
                className="w-8 h-8 text-secondary group-hover:text-white transition-colors duration-500"
                strokeWidth={1.5}
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
            {title}
          </h3>
          <p className="text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Feature List */}
        <ul className="space-y-3 mt-auto relative z-10" role="list">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              className="flex items-center gap-3 text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ delay: delay + idx * 0.08 + 0.2 }}
            >
              <CheckCircle2
                className="w-4 h-4 text-accent/70 group-hover:text-accent transition-colors duration-300 shrink-0"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
