"use client";

import { motion } from "framer-motion";
import { CalendarDays, ShoppingBag, WashingMachine, PackageCheck, Truck } from "lucide-react";
import Container from "../common/Container";

const steps = [
  { icon: CalendarDays, title: "Schedule Pickup", desc: "Choose a time that works for you." },
  { icon: ShoppingBag, title: "Collection", desc: "We collect right from your door." },
  { icon: WashingMachine, title: "Professional Cleaning", desc: "Washed with premium care." },
  { icon: PackageCheck, title: "Packaging", desc: "Neatly folded and packed." },
  { icon: Truck, title: "Delivery", desc: "Fresh clothes returned to you." }
];

export default function ProcessExplanation() {
  return (
    <section className="py-24 bg-white relative z-10 overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-primary mb-6"
          >
            How The Magic Happens
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-100 rounded-full">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-blue-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Mobile connecting line */}
                {idx !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-24 left-1/2 w-1 h-16 bg-gradient-to-b from-secondary to-transparent -translate-x-1/2 z-0" />
                )}
                
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center relative z-10 mb-6 group-hover:border-secondary transition-colors duration-500 shadow-xl">
                  <div className="absolute inset-0 bg-secondary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <step.icon className="w-10 h-10 text-slate-700 group-hover:text-secondary transition-colors duration-500 relative z-10" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-lg">
                    {idx + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
