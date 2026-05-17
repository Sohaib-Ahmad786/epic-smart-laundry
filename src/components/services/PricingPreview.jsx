"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "../common/Container";

export default function PricingPreview() {
  return (
    <section className="py-24 relative z-10">
      <Container>
        <div className="bg-gradient-to-br from-slate-900 to-primary rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
          
          <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="flex-1 text-white">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-extrabold mb-6"
              >
                Simple, Transparent <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Pricing Plans</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg"
              >
                Whether you're a student looking for affordable weekly washes or a professional needing premium dry cleaning, we have a package for you.
              </motion.p>
              
              <motion.ul 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4 mb-10"
              >
                {["No hidden fees", "Cancel anytime", "Free pickup & delivery included"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link 
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-slate-100 transition-colors shadow-xl hover:-translate-y-1 group"
                >
                  View All Packages
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] relative"
            >
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="bg-secondary text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">Most Popular</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Hostel Package</h3>
              <div className="text-center mb-8">
                <span className="text-5xl font-extrabold text-white">$59</span>
                <span className="text-slate-400">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {["3 Pickups per week", "Wash & Iron", "24h Turnaround", "Priority Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/book-order" className="block w-full py-3 text-center bg-secondary hover:bg-blue-500 text-white font-bold rounded-xl transition-colors">
                Select Package
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
