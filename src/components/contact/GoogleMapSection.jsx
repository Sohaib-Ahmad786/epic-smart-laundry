"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import Container from "../common/Container";

export default function GoogleMapSection() {
  return (
    <section className="py-24 relative z-10">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-primary mb-6"
          >
            Our Service Area
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            We proudly serve T Chowk, Rawalpindi, Gujar Khan, and surrounding university campuses and hostels.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-xl h-[500px]"
        >
          {/* Mock Map Placeholder for premium look without iframe overhead until needed */}
          <div className="absolute inset-0 bg-slate-200/50 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M54.627 0l.83.83-54.627 54.627-.83-.83L54.627 0zM29.83 0l.83.83-29.83 29.83-.83-.83L29.83 0zm54.627 29.83l.83.83-29.83 29.83-.83-.83 29.83-29.83z\\' fill=\\'%23CBD5E1\\' fill-opacity=\\'0.4\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')]">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100 to-transparent" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary/20 rounded-full animate-ping" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-secondary/40 rounded-full flex items-center justify-center shadow-2xl">
            <MapPin className="w-8 h-8 text-secondary drop-shadow-lg" />
          </div>

          <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Navigation className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 leading-tight">Operations Hub</h4>
                <p className="text-xs text-slate-500 mt-1">T Chowk, Rawalpindi</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 font-medium">Covering 15km radius including all major university hostels.</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
