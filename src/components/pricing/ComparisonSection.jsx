"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import Container from "../common/Container";

const features = [
  { name: "Pickup Frequency", plans: ["1x / Week", "3x / Week", "Daily"] },
  { name: "Delivery Speed", plans: ["48 Hours", "24 Hours", "12 Hours"] },
  { name: "Ironing Included", plans: [true, true, true] },
  { name: "Dry Cleaning", plans: [false, false, true] },
  { name: "Support Priority", plans: ["Standard", "High", "Highest"] },
  { name: "Express Service", plans: [false, true, true] },
  { name: "Laundry Capacity", plans: ["5 kg", "15 kg", "Unlimited"] }
];

export default function ComparisonSection() {
  return (
    <section className="py-24 relative z-10 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-primary mb-6"
          >
            Compare All Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Find exactly what is included in every package to select the one that fits your life perfectly.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="py-6 px-6 font-semibold text-slate-400 uppercase text-xs tracking-wider w-1/4">Features</th>
                <th className="py-6 px-6 font-bold text-slate-800 text-lg text-center w-1/4">Student</th>
                <th className="py-6 px-6 font-bold text-secondary text-xl text-center w-1/4 relative">
                  <div className="absolute top-0 inset-x-0 h-1 bg-secondary rounded-t-xl" />
                  Hostel
                </th>
                <th className="py-6 px-6 font-bold text-slate-800 text-lg text-center w-1/4">Employee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {features.map((feature, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors duration-300">
                  <td className="py-5 px-6 font-medium text-slate-700">{feature.name}</td>
                  
                  {feature.plans.map((val, i) => (
                    <td key={i} className={`py-5 px-6 text-center ${i === 1 ? 'bg-blue-50/30' : ''}`}>
                      {typeof val === 'boolean' ? (
                        val ? (
                          <div className="mx-auto w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                        ) : (
                          <div className="mx-auto w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                            <Minus className="w-4 h-4 text-slate-400" />
                          </div>
                        )
                      ) : (
                        <span className="text-slate-600 font-medium">{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-8"></td>
                <td className="py-8 px-6 text-center">
                  <span className="block text-2xl font-bold text-primary mb-4">$29<span className="text-sm text-slate-500 font-normal">/mo</span></span>
                </td>
                <td className="py-8 px-6 text-center bg-blue-50/30 rounded-b-xl border-b-4 border-secondary">
                  <span className="block text-2xl font-bold text-secondary mb-4">$59<span className="text-sm text-slate-500 font-normal">/mo</span></span>
                </td>
                <td className="py-8 px-6 text-center">
                  <span className="block text-2xl font-bold text-primary mb-4">$99<span className="text-sm text-slate-500 font-normal">/mo</span></span>
                </td>
              </tr>
            </tfoot>
          </table>
        </motion.div>
      </Container>
    </section>
  );
}
