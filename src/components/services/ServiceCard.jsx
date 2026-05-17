"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 20 }
  }
};

export default function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  time, 
  price, 
  delay = 0 
}) {
  return (
    <motion.div 
      variants={cardVariants}
      className="relative group rounded-[2.5rem] p-[1px] overflow-hidden bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 opacity-100 group-hover:from-secondary/50 group-hover:to-blue-500/50 transition-opacity duration-500 blur-[2px]" />
      
      <div className="relative h-full bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] flex flex-col overflow-hidden border border-white">
        
        {/* Glow orb inside card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/15 transition-colors duration-500" />

        <div className="mb-6 relative z-10 flex items-start justify-between">
          <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-secondary/10 transition-all duration-500">
            <Icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-500 font-medium">Starting from</div>
            <div className="text-xl font-bold text-primary">{price}</div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
          {description}
        </p>

        <div className="flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 w-fit px-3 py-1.5 rounded-lg mb-8 relative z-10">
          <Clock className="w-4 h-4" />
          {time}
        </div>

        <ul className="space-y-3 mb-8 flex-1 relative z-10">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-slate-600 text-sm font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <Link href="/book-order" className="w-full py-4 rounded-xl font-bold text-sm bg-slate-50 text-slate-700 hover:bg-primary hover:text-white transition-all duration-300 relative z-10 flex items-center justify-center gap-2 group/btn border border-slate-200 hover:border-primary">
          <span>Book This Service</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
