"use client";

import { motion } from "framer-motion";
import { MapPin, Building, GraduationCap, Home } from "lucide-react";
import Container from "../common/Container";

const areas = [
  { icon: MapPin, title: "T Chowk", desc: "Core delivery zone with express service." },
  { icon: MapPin, title: "Rawalpindi", desc: "Serving major residential sectors." },
  { icon: MapPin, title: "Gujar Khan", desc: "Extended coverage network." },
  { icon: GraduationCap, title: "Universities", desc: "Special focus on student campuses." },
  { icon: Building, title: "Hostels", desc: "Direct dorm-room pickups." },
  { icon: Home, title: "Residential Areas", desc: "Family-sized premium packages." }
];

export default function ServiceAreas() {
  return (
    <section className="py-24 relative z-10">
      <Container>
        <div className="bg-primary rounded-[3rem] p-10 lg:p-16 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zM20 0h20v20H20V0z\\' fill=\\'%23ffffff\\' fill-opacity=\\'0.02\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Service Coverage</h2>
              <p className="text-slate-300 text-lg">We are rapidly expanding our network to bring smart laundry solutions closer to you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-700 flex items-center justify-center mb-4 group-hover:bg-secondary/20 group-hover:text-secondary text-white transition-all duration-300">
                    <area.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-slate-400">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
