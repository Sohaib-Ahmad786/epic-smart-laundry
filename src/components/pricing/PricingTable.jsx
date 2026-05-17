"use client";

import { motion } from "framer-motion";
import { Shirt, Scissors, Briefcase, Home, Sparkles, Layers, Package } from "lucide-react";

const items = [
  { name: "Shirt / T-Shirt", icon: Shirt, service: "Wash & Iron", time: "24h", price: "$2.00" },
  { name: "Pant / Trouser", icon: Scissors, service: "Wash & Iron", time: "24h", price: "$2.50" },
  { name: "Shalwar Kameez", icon: Layers, service: "Wash & Iron", time: "24h", price: "$4.00" },
  { name: "Coat / Blazer", icon: Briefcase, service: "Dry Clean", time: "48h", price: "$8.00" },
  { name: "Bedsheet (Single)", icon: Home, service: "Wash & Fold", time: "24h", price: "$3.50" },
  { name: "Blanket (Heavy)", icon: Package, service: "Deep Clean", time: "48h", price: "$12.00" },
  { name: "Hoodie / Sweater", icon: Sparkles, service: "Wash & Iron", time: "24h", price: "$4.50" },
];

export default function PricingTable() {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="py-5 px-6 font-semibold text-slate-600 uppercase text-sm tracking-wider">Garment Item</th>
              <th className="py-5 px-6 font-semibold text-slate-600 uppercase text-sm tracking-wider">Service Type</th>
              <th className="py-5 px-6 font-semibold text-slate-600 uppercase text-sm tracking-wider hidden sm:table-cell">Turnaround</th>
              <th className="py-5 px-6 font-semibold text-slate-600 uppercase text-sm tracking-wider text-right">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {items.map((item, idx) => (
              <motion.tr 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="hover:bg-blue-50/50 transition-colors duration-300 group"
              >
                <td className="py-5 px-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-secondary/20 group-hover:text-secondary transition-colors duration-300 shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-800">{item.name}</span>
                  </div>
                </td>
                <td className="py-5 px-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium whitespace-nowrap">
                    {item.service}
                  </span>
                </td>
                <td className="py-5 px-6 text-slate-500 font-medium hidden sm:table-cell">{item.time}</td>
                <td className="py-5 px-6 text-right font-extrabold text-primary text-lg">{item.price}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
