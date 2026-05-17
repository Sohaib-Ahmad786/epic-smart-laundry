"use client";

import { motion } from "framer-motion";
import { WashingMachine, Sparkles, Shirt, Package, Truck } from "lucide-react";
import Container from "../common/Container";
import ServicesBackground from "./ServicesBackground";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: WashingMachine,
    title: "Premium Washing",
    description: "Professional fabric-safe washing using eco-friendly detergents to maintain color vibrancy and fabric softness.",
    features: ["Fabric Protection", "Eco-friendly Detergents", "Color Separation", "Gentle Wash Cycles"],
    className: "lg:col-span-2 md:col-span-1"
  },
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description: "Premium dry cleaning care for your delicate fabrics, suits, and special garments.",
    features: ["Stain Removal", "Delicate Care", "Odor Elimination", "Premium Finish"],
    className: "lg:col-span-2 md:col-span-1"
  },
  {
    icon: Shirt,
    title: "Crisp Ironing",
    description: "Neat ironing with a wrinkle-free finish, ensuring your clothes are ready to wear immediately.",
    features: ["Wrinkle-free Finish", "Steam Pressing", "Collar & Cuff Care", "Perfect Creases"],
    className: "lg:col-span-2 md:col-span-1"
  },
  {
    icon: Package,
    title: "Fold & Pack",
    description: "Organized folding and premium packaging to keep your clothes fresh and wardrobe-ready.",
    features: ["Wardrobe Ready", "Protective Packaging", "Sorted by Category", "Fresh Scent"],
    className: "lg:col-span-3 md:col-span-1"
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    description: "Fast doorstep pickup and delivery tailored to your busy schedule.",
    features: ["Doorstep Service", "24h Turnaround", "Flexible Scheduling", "Real-time Tracking"],
    className: "lg:col-span-3 md:col-span-2"
  }
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-primary">
      <ServicesBackground />
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-bold text-white tracking-wide uppercase">Our Services</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Premium Laundry Services <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Designed For Busy Lives
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            From everyday washing to premium dry cleaning, we handle it all with professional care. Enjoy affordable pricing, student convenience, and fast pickup & delivery.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              className={service.className}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
