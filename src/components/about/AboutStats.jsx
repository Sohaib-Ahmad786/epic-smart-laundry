"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "24h", label: "Fast Delivery" },
  { value: "99%", label: "Satisfaction Rate" },
  { value: "5+", label: "Service Areas" }
];

export default function AboutStats() {
  return (
    <section className="py-24 relative z-10">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-slate-500 font-medium uppercase tracking-wide text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
