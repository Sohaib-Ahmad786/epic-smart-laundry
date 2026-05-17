"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";

export default function TrackingHero() {
  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-16 overflow-hidden z-10">
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">Live Status</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 tracking-tight leading-tight"
          >
            Track Your Laundry <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-600">
              In Real Time
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
          >
            Enter your Order ID below to get live updates on your laundry's journey—from pickup to washing, ironing, and delivery back to your door.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
