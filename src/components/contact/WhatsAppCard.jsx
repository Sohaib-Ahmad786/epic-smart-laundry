"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import Container from "../common/Container";

export default function WhatsAppCard() {
  return (
    <section className="py-24 relative z-10 px-4">
      <Container>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#25D366]/10 to-emerald-500/10 border border-[#25D366]/30 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative group shadow-2xl shadow-[#25D366]/10"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#25D366]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-[#25D366]/30 transition-colors duration-700" />
          
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 w-full md:w-auto text-center md:text-left">
            <div className="w-24 h-24 rounded-3xl bg-[#25D366] flex items-center justify-center shadow-xl shadow-[#25D366]/40 shrink-0 group-hover:scale-110 transition-transform duration-500">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">Get Instant Support</h3>
              <p className="text-lg text-slate-600 max-w-md">Our team is available on WhatsApp to answer any questions, handle urgent requests, or book immediate pickups.</p>
            </div>
          </div>

          <Link 
            href="https://wa.me/1234567890"
            target="_blank"
            className="relative z-10 w-full md:w-auto px-8 py-5 bg-[#25D366] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#25D366]/40 hover:shadow-2xl hover:shadow-[#25D366]/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 shrink-0"
          >
            Chat on WhatsApp
            <ArrowUpRight className="w-6 h-6" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
