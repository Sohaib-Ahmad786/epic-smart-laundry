"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Wallet, Clock } from "lucide-react";
import Container from "../common/Container";

const benefits = [
  { icon: Truck, title: "Free Pickup", desc: "No extra charges for doorstep collection." },
  { icon: Clock, title: "Fast Delivery", desc: "Get your fresh clothes back in 24 hours." },
  { icon: ShieldCheck, title: "Fabric Care", desc: "Professional treatment for delicate items." },
  { icon: Wallet, title: "Student Friendly", desc: "Affordable pricing designed for you." }
];

export default function BookingBenefits() {
  return (
    <section className="py-24 relative z-10 bg-slate-50 border-t border-slate-200">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white text-secondary transition-colors duration-300">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
