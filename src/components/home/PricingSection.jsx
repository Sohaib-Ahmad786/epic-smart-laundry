"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import PricingBackground from "./PricingBackground";
import PricingToggle from "./PricingToggle";
import PricingCard from "./PricingCard";

const plans = [
  {
    title: "Student Package",
    description: "Perfect for students needing regular affordable laundry care.",
    monthlyPrice: 29,
    premiumPrice: 49,
    features: [
      "Weekly Pickup & Delivery",
      "Fast Washing & Drying",
      "Basic Ironing Included",
      "Student-focused Pricing",
      "24h Turnaround"
    ],
    isPopular: false
  },
  {
    title: "Hostel Package",
    description: "Designed for larger loads and shared living convenience.",
    monthlyPrice: 59,
    premiumPrice: 89,
    features: [
      "Multiple Pickups Weekly",
      "High Capacity Loads",
      "Priority Service",
      "Fabric Care Protection",
      "Hostel Convenience"
    ],
    isPopular: true
  },
  {
    title: "Employee Package",
    description: "Premium care for professionals who value their time.",
    monthlyPrice: 99,
    premiumPrice: 149,
    features: [
      "Express Doorstep Delivery",
      "Premium Dry Cleaning",
      "Professional Crisp Ironing",
      "Garment Protection",
      "Priority Support"
    ],
    isPopular: false
  }
];

export default function PricingSection() {
  const [isPremium, setIsPremium] = useState(false);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <PricingBackground />
      
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">Transparent Pricing</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight"
          >
            Affordable Plans For <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-600">
              Every Lifestyle
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Flexible laundry subscriptions tailored to your needs. Enjoy professional service quality, student-friendly pricing, and total convenience.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <PricingToggle isPremium={isPremium} setIsPremium={setIsPremium} />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch relative mt-8 lg:mt-12 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {plans.map((plan, index) => (
            <PricingCard 
              key={index}
              title={plan.title}
              description={plan.description}
              price={isPremium ? plan.premiumPrice : plan.monthlyPrice}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
