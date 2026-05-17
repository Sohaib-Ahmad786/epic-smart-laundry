"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "../common/Container";

export default function CTABanner() {
  return (
    <section className="py-12 lg:py-20 relative px-4">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[3rem] overflow-hidden bg-primary"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-primary to-blue-600/40 opacity-50" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 px-6 py-20 md:py-24 text-center max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/10 backdrop-blur-md mb-8 border border-white/20 shadow-xl">
              <Sparkles className="w-8 h-8 text-secondary" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Ready To Make Laundry <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Effortless?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book your first pickup today and experience the luxury of clean, fresh clothes delivered right to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link 
                href="/book-order"
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Book Your First Pickup
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/pricing"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
