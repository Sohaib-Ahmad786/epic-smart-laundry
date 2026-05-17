"use client";

import { motion } from "framer-motion";
import { WashingMachine, Sparkles, Shirt, Package, Truck, Zap } from "lucide-react";
import Container from "../common/Container";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: WashingMachine,
    title: "Premium Washing",
    description: "Professional fabric-safe washing using eco-friendly detergents to maintain color vibrancy.",
    features: ["Fabric Protection", "Eco-friendly Detergents", "Color Separation", "Hygienic Cleaning"],
    time: "24h Turnaround",
    price: "$29/mo"
  },
  {
    icon: Shirt,
    title: "Crisp Ironing",
    description: "Wrinkle-free premium ironing ensuring your clothes are immediately ready to wear.",
    features: ["Wrinkle-free Finish", "Steam Pressing", "Collar & Cuff Care", "Delicate Handling"],
    time: "12h - 24h",
    price: "$19/mo"
  },
  {
    icon: Sparkles,
    title: "Dry Cleaning",
    description: "Delicate dry cleaning process for your premium fabrics, suits, and special garments.",
    features: ["Stain Removal", "Premium Care", "Odor Elimination", "Safe Solvents"],
    time: "48h Turnaround",
    price: "$15/item"
  },
  {
    icon: Package,
    title: "Fold & Pack",
    description: "Neat folding and premium packaging to keep your clothes fresh and wardrobe-ready.",
    features: ["Wardrobe Ready", "Protective Packaging", "Category Sorting", "Fresh Scent"],
    time: "Included",
    price: "Free"
  },
  {
    icon: Truck,
    title: "Pickup & Delivery",
    description: "Fast doorstep pickup and delivery tailored to fit into your busy student or work schedule.",
    features: ["Doorstep Service", "Flexible Scheduling", "Real-time Tracking", "Hostel Friendly"],
    time: "Scheduled",
    price: "Free"
  },
  {
    icon: Zap,
    title: "Express Service",
    description: "In a rush? Get your laundry washed, dried, ironed, and delivered back on the very same day.",
    features: ["Same-Day Delivery", "Priority Processing", "Dedicated Rider", "Instant Support"],
    time: "12h Guarantee",
    price: "+$10/load"
  }
];

export default function ServiceGrid() {
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
            Comprehensive Fabric Care
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Everything you need to keep your wardrobe fresh, clean, and perfectly maintained.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
