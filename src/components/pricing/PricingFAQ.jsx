"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import FAQItem from "../home/FAQItem";

const faqs = [
  {
    question: "Is pickup free?",
    answer: "Yes, free pickup and delivery is included in all our subscription packages within our standard coverage areas."
  },
  {
    question: "Are there hidden charges?",
    answer: "No! We believe in 100% transparent pricing. What you see on this page is exactly what you pay. Express deliveries or special items outside your plan might incur a small, clearly stated fee."
  },
  {
    question: "Can I upgrade plans?",
    answer: "Absolutely. You can upgrade, downgrade, or cancel your subscription plan at any time right from your account dashboard."
  },
  {
    question: "Do you support hostels?",
    answer: "Yes! Our 'Hostel Package' is specifically tailored for dorms. Our riders will coordinate directly with you for room pickups."
  },
  {
    question: "Is ironing included?",
    answer: "Yes, crisp, professional ironing is included in all of our primary subscription plans, ensuring your clothes are ready to wear."
  }
];

export default function PricingFAQ() {
  return (
    <section className="py-24 relative z-10 bg-slate-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-primary mb-6"
          >
            Pricing Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Got questions about how our pricing and packages work? Find answers here.
          </motion.p>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div key={index} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
               <FAQItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
