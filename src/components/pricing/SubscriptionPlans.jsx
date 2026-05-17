"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import PlanCard from "./PlanCard";

const plans = [
  {
    title: "Student Package",
    description: "Perfect for students needing regular affordable laundry care.",
    price: 29,
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
    price: 59,
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
    price: 99,
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

export default function SubscriptionPlans() {
  return (
    <section className="relative py-24 z-10">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-primary mb-6"
          >
            Subscription Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Set it and forget it. Our monthly packages provide the best value.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch relative max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {plans.map((plan, index) => (
            <PlanCard 
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
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
