"use client";

import { motion } from "framer-motion";
import { Info, Tag, CreditCard } from "lucide-react";

export default function OrderDetails() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl"
    >
      <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <Info className="w-5 h-5 text-secondary" />
        Order Details
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between items-center py-3 border-b border-slate-100">
          <span className="text-slate-500 font-medium">Service</span>
          <span className="text-slate-800 font-bold">Wash & Iron</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-slate-100">
          <span className="text-slate-500 font-medium">Total Items</span>
          <span className="text-slate-800 font-bold">12 Garments</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-slate-100">
          <span className="text-slate-500 font-medium">Instructions</span>
          <span className="text-slate-800 font-bold text-right max-w-[200px] truncate">No starch on shirts</span>
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-slate-400" />
            <span className="text-slate-500 font-medium">Payment Status</span>
          </div>
          <span className="text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full text-xs">Paid Online</span>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-slate-100">
        <div className="flex justify-between items-end">
          <span className="text-slate-500 font-medium">Total Amount</span>
          <span className="text-3xl font-extrabold text-primary">$29.00</span>
        </div>
      </div>
    </motion.div>
  );
}
