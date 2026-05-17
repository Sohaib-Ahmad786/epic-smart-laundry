"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const infoCards = [
  { icon: Phone, title: "Phone Support", desc: "+92 300 1234567", sub: "Mon-Sat, 9AM-8PM" },
  { icon: Mail, title: "Email Us", desc: "hello@epic.com", sub: "We reply within 2 hours" },
  { icon: MapPin, title: "Our Location", desc: "T Chowk, Rawalpindi", sub: "Main Operations Hub" },
  { icon: Clock, title: "Working Hours", desc: "9:00 AM - 8:00 PM", sub: "Monday to Saturday" }
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {infoCards.map((card, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="relative group p-[1px] rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 group-hover:from-secondary/50 group-hover:to-blue-500/50 transition-colors duration-500" />
          <div className="relative bg-white/90 backdrop-blur-xl h-full p-6 lg:p-8 rounded-3xl border border-white flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary transition-all duration-300">
              <card.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
            <p className="text-primary font-bold text-lg mb-1">{card.desc}</p>
            <p className="text-sm text-slate-500">{card.sub}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
