"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import TestimonialCard from "./TestimonialCard";
import TrustBackground from "./TrustBackground";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "University Student",
    text: "EPIC Smart Laundry has been a lifesaver during exams! They pick up right from my hostel and return my clothes perfectly folded. Best service ever."
  },
  {
    name: "David Chen",
    role: "Software Engineer",
    text: "As a busy professional, I simply don't have time for laundry. The express delivery and premium dry cleaning are absolutely top-notch."
  },
  {
    name: "Emily Rodriguez",
    role: "Medical Resident",
    text: "The 24h turnaround is incredible. I never have to worry about my scrubs not being ready. Very professional and highly recommended!"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <TrustBackground />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">Loved By Everyone</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-600">Customers Say</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Don't just take our word for it. Read how we've brought convenience, speed, and premium quality to thousands of busy lives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} delay={i * 0.15} />
          ))}
        </div>
      </Container>
    </section>
  );
}
