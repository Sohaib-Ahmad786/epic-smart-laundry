"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";
import Container from "../common/Container";

export default function MissionVision() {
  return (
    <section className="py-24 relative z-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative rounded-[3rem] p-[1px] bg-gradient-to-br from-slate-200 to-slate-100 hover:from-secondary/40 hover:to-blue-500/40 transition-colors duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-50 z-0" />
            <div className="relative h-full bg-white/90 backdrop-blur-xl p-10 lg:p-14 rounded-[3rem] z-10 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-500">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-1">
                To provide fast, convenient, and highly affordable laundry solutions without compromising on professional quality. We strive to give our customers their time back.
              </p>
              <ul className="space-y-3">
                {["Fast Service", "Unmatched Convenience", "Affordable Quality", "Professional Care"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="group relative rounded-[3rem] p-[1px] bg-gradient-to-br from-slate-200 to-slate-100 hover:from-accent/40 hover:to-emerald-500/40 transition-colors duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 opacity-50 z-0" />
            <div className="relative h-full bg-white/90 backdrop-blur-xl p-10 lg:p-14 rounded-[3rem] z-10 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-1">
                To become the most trusted and widespread smart laundry brand. We envision a future where laundry is entirely automated and effortlessly integrated into daily life.
              </p>
              <ul className="space-y-3">
                {["Trusted Nationwide Brand", "Continuous Expansion", "Tech-Driven Convenience", "Empowering Lifestyles"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
