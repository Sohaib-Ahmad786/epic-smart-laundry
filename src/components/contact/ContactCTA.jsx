"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../common/Container";

export default function ContactCTA() {
  return (
    <section className="py-24 relative z-10 px-4 bg-slate-50">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[3rem] overflow-hidden bg-white border border-slate-200 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/50" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 px-6 py-20 md:py-24 text-center max-w-4xl mx-auto flex flex-col items-center">
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
              Ready To Schedule <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-600">Your Laundry Pickup?</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the luxury of clean, fresh clothes delivered right to your doorstep. Don't waste another weekend doing laundry.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link 
                href="/book-order"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Book Pickup Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
