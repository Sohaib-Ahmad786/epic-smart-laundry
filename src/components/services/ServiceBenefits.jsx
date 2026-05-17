"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Wallet, ThumbsUp } from "lucide-react";
import Container from "../common/Container";

const benefits = [
  { icon: Clock, title: "Save Time", desc: "Reclaim hours of your week. We handle the laundry, you handle life." },
  { icon: ShieldCheck, title: "Premium Care", desc: "Expert handling ensures your garments last longer and look better." },
  { icon: Wallet, title: "Affordable", desc: "Cost-effective packages designed specifically for students and workers." },
  { icon: ThumbsUp, title: "Total Convenience", desc: "App-based booking, doorstep delivery, and complete peace of mind." }
];

export default function ServiceBenefits() {
  return (
    <section className="py-24 relative z-10 bg-slate-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-primary mb-6"
          >
            Why Choose Us?
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white text-secondary transition-colors duration-300">
                <b.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{b.title}</h3>
              <p className="text-slate-600 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
