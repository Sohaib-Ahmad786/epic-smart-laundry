"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How does pickup and delivery work?",
    answer: "Simply book a pickup through our website or WhatsApp. Our rider will collect your laundry from your doorstep/hostel at the scheduled time. Once cleaned, we'll deliver it back to you within 24-48 hours."
  },
  {
    question: "How long does washing take?",
    answer: "Our standard turnaround time is 24 hours. If you're in a hurry, you can opt for our Express Service which guarantees delivery within 12 hours for an additional fee."
  },
  {
    question: "Is pickup free?",
    answer: "Yes! All our pricing packages include free pickup and delivery within our standard coverage areas. No hidden transportation fees."
  },
  {
    question: "Do you support hostel students?",
    answer: "Absolutely. We have specialized student packages and our riders are familiar with most major hostels and dorms in the city. Just provide your room number and block details!"
  },
  {
    question: "What payment methods are available?",
    answer: "We accept all major credit/debit cards, Apple Pay, Google Pay, and standard digital wallets. You can pay online securely when placing your order."
  },
  {
    question: "Do you offer ironing services?",
    answer: "Yes, crisp professional ironing is included in our standard washing packages. We also offer standalone ironing services if you only need your clean clothes pressed."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-white relative">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-primary mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Everything you need to know about our services.
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
