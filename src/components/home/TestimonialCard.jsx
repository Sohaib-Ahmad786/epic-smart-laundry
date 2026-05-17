"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialCard({ name, role, text, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group p-[1px] rounded-[2rem] overflow-hidden bg-white hover:-translate-y-2 transition-all duration-500"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 opacity-100 group-hover:from-secondary/50 group-hover:to-blue-500/50 transition-colors duration-500 blur-[2px]"
        aria-hidden="true"
      />

      <div className="relative h-full p-8 rounded-[2rem] bg-white/90 backdrop-blur-xl flex flex-col justify-between">
        <div>
          <div className="flex gap-1 mb-6" role="img" aria-label="5 out of 5 stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <blockquote className="text-slate-600 leading-relaxed mb-8 font-medium">
            &ldquo;{text}&rdquo;
          </blockquote>
        </div>

        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-slate-800 flex items-center justify-center text-white font-bold text-lg shadow-inner"
            aria-hidden="true"
          >
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-slate-900">{name}</h4>
            <p className="text-sm text-slate-500">{role}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
