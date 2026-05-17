"use client";

import { motion } from "framer-motion";
import { Sparkles, History, Building2 } from "lucide-react";
import Container from "../common/Container";

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">Our Story</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-8 tracking-tight leading-tight"
          >
            Reinventing Laundry <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-600">
              For Modern Lifestyles
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            We're building the future of smart laundry services. By combining technology, professional fabric care, and unparalleled convenience, we make laundry stress-free for students and busy professionals.
          </motion.p>
        </div>

        {/* Hero Visuals / Floating Elements */}
        <div className="relative mt-16 max-w-5xl mx-auto h-[400px] rounded-[3rem] bg-gradient-to-br from-slate-900 to-primary p-[1px] overflow-hidden hidden md:block shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 blur-[120px] rounded-full" />
          
          <div className="relative h-full rounded-[3rem] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/10">
            {/* Animated floating cards */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[10%] top-[20%] bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl"
            >
              <History className="w-10 h-10 text-secondary mb-4" />
              <div className="text-white font-bold text-xl mb-1">Founded 2024</div>
              <div className="text-slate-400 text-sm">Born out of necessity</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-[10%] bottom-[20%] bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl"
            >
              <Building2 className="w-10 h-10 text-accent mb-4" />
              <div className="text-white font-bold text-xl mb-1">Expanding Fast</div>
              <div className="text-slate-400 text-sm">Multiple service areas</div>
            </motion.div>

            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="w-48 h-48 rounded-full bg-gradient-to-tr from-secondary to-blue-500 shadow-[0_0_80px_rgba(56,189,248,0.5)] flex items-center justify-center relative"
            >
              <Sparkles className="w-20 h-20 text-white" />
              <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-[spin_10s_linear_infinite]" />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
