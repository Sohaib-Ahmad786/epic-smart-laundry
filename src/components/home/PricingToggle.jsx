"use client";

import { motion } from "framer-motion";

export default function PricingToggle({ isPremium, setIsPremium }) {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="relative flex items-center p-1 bg-slate-200/50 backdrop-blur-md rounded-full border border-slate-200 shadow-inner">
        <button
          onClick={() => setIsPremium(false)}
          className={`relative w-32 py-2.5 text-sm font-semibold rounded-full z-10 transition-colors duration-300 ${!isPremium ? 'text-primary' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsPremium(true)}
          className={`relative w-32 py-2.5 text-sm font-semibold rounded-full z-10 transition-colors duration-300 ${isPremium ? 'text-white' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Premium
        </button>
        <motion.div
          className={`absolute w-32 h-[calc(100%-8px)] top-1 rounded-full shadow-md ${isPremium ? 'bg-gradient-to-r from-primary to-slate-800' : 'bg-white'}`}
          initial={false}
          animate={{ x: isPremium ? 128 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      </div>
    </div>
  );
}
