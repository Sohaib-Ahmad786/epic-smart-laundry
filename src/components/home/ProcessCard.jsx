"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 22 },
  },
};

export default function ProcessCard({
  icon: Icon,
  step,
  title,
  description,
  isLast,
}) {
  return (
    <div className="relative flex flex-col items-center flex-1" role="listitem">
      <motion.div variants={cardVariants} className="relative z-10 w-full group">
        <div className="relative p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-secondary/15 transition-all duration-500 overflow-hidden hover:-translate-y-2 flex flex-col items-center text-center h-full">
          {/* Card Gradient Hover Background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            aria-hidden="true"
          />

          {/* Step Number Badge */}
          <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:text-secondary group-hover:bg-secondary/10 transition-colors duration-300">
            {step}
          </div>

          {/* Icon Container */}
          <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-secondary/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-blue-500/10 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500 delay-75"
              aria-hidden="true"
            />
            <div className="relative bg-white rounded-2xl w-full h-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 z-10">
              <Icon className="w-10 h-10 text-secondary" strokeWidth={1.5} />
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
            {description}
          </p>
        </div>
      </motion.div>

      {/* Connecting Flow Line */}
      {!isLast && (
        <div
          className="hidden lg:block absolute top-1/2 left-[calc(50%+4rem)] w-[calc(100%-8rem)] -translate-y-1/2 z-0 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            className="w-full h-8"
            preserveAspectRatio="none"
            viewBox="0 0 100 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0 12 C 30 12, 70 12, 100 12"
              stroke="url(#process-gradient)"
              strokeWidth="3"
              strokeDasharray="4 4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <defs>
              <linearGradient
                id="process-gradient"
                x1="0"
                y1="12"
                x2="100"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#38BDF8" stopOpacity="0" />
                <stop offset="0.5" stopColor="#38BDF8" />
                <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Animated Flowing Dot */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_2px_rgba(56,189,248,0.5)]"
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
    </div>
  );
}
