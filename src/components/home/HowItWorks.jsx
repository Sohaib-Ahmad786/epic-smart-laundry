"use client";

import { motion } from "framer-motion";
import { CalendarDays, WashingMachine, PackageCheck } from "lucide-react";
import Container from "../common/Container";
import ProcessBackground from "./ProcessBackground";
import ProcessCard from "./ProcessCard";

const steps = [
  {
    icon: CalendarDays,
    title: "Book Pickup",
    description: "Schedule a convenient pickup time directly from your hostel or home. We fit into your busy student schedule.",
  },
  {
    icon: WashingMachine,
    title: "We Wash",
    description: "Your clothes are sorted, professionally washed, dried, and perfectly ironed by our experienced laundry experts.",
  },
  {
    icon: PackageCheck,
    title: "We Deliver",
    description: "Fresh, clean, and neatly folded clothes are delivered straight to your door within 24 hours.",
  }
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <ProcessBackground />
      
      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">Simple Process</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight"
          >
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-600">EPIC Smart Laundry</span> Works
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Experience premium laundry service in three simple steps. Enjoy fast pickups, professional cleaning, and quick doorstep delivery.
          </motion.p>
        </div>

        <motion.div 
          className="flex flex-col lg:flex-row gap-8 lg:gap-4 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {steps.map((step, index) => (
            <ProcessCard 
              key={index}
              step={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
              delay={index * 0.2}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
