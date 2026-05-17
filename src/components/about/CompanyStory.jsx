"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";
import Container from "../common/Container";

export default function CompanyStory() {
  return (
    <section className="py-24 relative z-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-2">
              <Info className="w-4 h-4 text-secondary" />
              <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">How It Started</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              From Dorm Room Struggles <br />
              <span className="text-secondary">To Smart Solutions</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                EPIC Smart Laundry was born out of a simple observation: students and busy professionals spend far too much time stressing over laundry instead of focusing on their goals, studies, and careers.
              </p>
              <p>
                We saw packed hostel washing machines, ruined expensive garments, and weekends wasted sorting clothes. We knew there had to be a better, more efficient way to handle everyday laundry tasks.
              </p>
              <p>
                Today, we're proud to offer a premium, tech-enabled laundry service that seamlessly fits into the modern lifestyle. With just a few clicks, your laundry is picked up, professionally cleaned, and delivered right back to your door.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 w-full relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-[3rem] bg-gradient-to-br from-slate-200 to-slate-100 relative overflow-hidden shadow-2xl p-8 flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 blur-[80px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/30 blur-[80px] rounded-full" />
              
              <div className="relative z-20 text-white pb-4">
                <h3 className="text-2xl font-bold mb-2">Built For You</h3>
                <p className="text-slate-200">Making life simpler, one load of laundry at a time.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
