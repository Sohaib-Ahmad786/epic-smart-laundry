"use client";

import { motion } from "framer-motion";
import { Shirt, WashingMachine, Droplets, Wind, Sparkles } from "lucide-react";

export default function FloatingLaundryIcons() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block overflow-hidden">
      {/* Washer Icon */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[10%] p-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50"
      >
        <WashingMachine className="w-8 h-8 text-secondary" strokeWidth={1.5} />
      </motion.div>

      {/* Shirt Icon */}
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] right-[35%] p-3 bg-gradient-to-br from-primary to-slate-800 text-white rounded-2xl shadow-xl"
      >
        <Shirt className="w-6 h-6" strokeWidth={1.5} />
      </motion.div>

      {/* Droplets */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[25%] right-[15%] p-3 bg-white/60 backdrop-blur-sm rounded-full shadow-lg"
      >
        <Droplets className="w-5 h-5 text-secondary" strokeWidth={2} />
      </motion.div>

      {/* Sparkles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-[25%] right-[25%] text-accent"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      {/* Wind */}
      <motion.div
        animate={{ x: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[50%] right-[5%] text-slate-400"
      >
        <Wind className="w-8 h-8" />
      </motion.div>
    </div>
  );
}
