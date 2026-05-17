"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import Container from "../common/Container";

export default function WhatsAppBanner() {
  return (
    <section className="pb-20 relative px-4">
      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#25D366]/10 to-emerald-500/10 border border-[#25D366]/20 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#25D366]/20 transition-colors duration-500" />
          
          <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
            <div className="w-16 h-16 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 shrink-0">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">Need Quick Support?</h3>
              <p className="text-slate-600">Our team is available on WhatsApp to answer any questions.</p>
            </div>
          </div>

          <Link 
            href="https://wa.me/1234567890"
            target="_blank"
            className="relative z-10 w-full md:w-auto px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Chat on WhatsApp
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
