"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 }
  }
};

export default function PlanCard({ 
  title, 
  description, 
  price, 
  features, 
  isPopular, 
  delay = 0 
}) {
  return (
    <motion.div 
      variants={cardVariants}
      className={cn(
        "relative group flex flex-col w-full max-w-sm mx-auto lg:max-w-none transition-all duration-500 h-full",
        isPopular ? "lg:scale-105 z-10" : "z-0"
      )}
    >
      {isPopular && (
        <div className="absolute -top-5 inset-x-0 flex justify-center z-20">
          <div className="bg-gradient-to-r from-secondary to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-secondary/30 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Most Popular
          </div>
        </div>
      )}

      {/* Card Border / Glow Effect */}
      <div className={cn(
        "absolute inset-0 rounded-[2.5rem] transition-all duration-500",
        isPopular 
          ? "bg-gradient-to-br from-secondary/50 via-blue-500/50 to-primary/50 opacity-100 blur-sm shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)]" 
          : "bg-gradient-to-br from-slate-200 to-slate-100 opacity-100 group-hover:from-secondary/30 group-hover:to-blue-500/30 blur-[2px]"
      )} />

      {/* Inner Card content */}
      <div className={cn(
        "relative h-full bg-white/85 backdrop-blur-xl rounded-[2.5rem] flex flex-col overflow-hidden border border-white transition-colors duration-500",
        isPopular ? "p-8 lg:px-8 lg:py-10 bg-white/95" : "p-8"
      )}>
        
        {isPopular && (
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        )}

        <div className="mb-8 relative z-10">
          <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-sm text-slate-500 mb-6 h-10">{description}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl lg:text-5xl font-extrabold text-primary">${price}</span>
            <span className="text-slate-500 font-medium">/mo</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8 flex-1 relative z-10">
          {features.map((feature, i) => (
             <li key={i} className="flex items-start gap-3">
               <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
               <span className="text-slate-600 text-sm font-medium">{feature}</span>
             </li>
          ))}
        </ul>

        <Link href="/book-order" className={cn(
          "w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 relative z-10 flex items-center justify-center gap-2 group/btn",
          isPopular 
            ? "bg-primary text-white shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1" 
            : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:-translate-y-1"
        )}>
          <span>Choose Plan</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
