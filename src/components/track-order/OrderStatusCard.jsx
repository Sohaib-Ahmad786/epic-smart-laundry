"use client";

import { motion } from "framer-motion";
import { Package, Calendar, Clock, MapPin } from "lucide-react";

export default function OrderStatusCard({ orderId }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-primary to-slate-900 rounded-[2rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden mb-8 border border-slate-800"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-slate-700 pb-8">
        <div>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h2 className="text-3xl font-extrabold tracking-tight">{orderId || "ORD-847291"}</h2>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              Washing In Progress
            </span>
          </div>
          <p className="text-slate-400 flex items-center gap-2">
            <Package className="w-4 h-4" />
            Hostel Package (15kg Load)
          </p>
        </div>
        <div className="text-left md:text-right">
          <p className="text-slate-400 text-sm font-medium mb-1">Estimated Delivery</p>
          <p className="text-2xl font-bold text-secondary">Tomorrow, 4:00 PM</p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Customer</p>
          <p className="font-medium text-slate-200">John Doe</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Pickup Date</p>
          <p className="font-medium text-slate-200 flex items-center gap-1"><Calendar className="w-4 h-4" /> Oct 24, 2026</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Delivery Time</p>
          <p className="font-medium text-slate-200 flex items-center gap-1"><Clock className="w-4 h-4" /> 4:00 PM - 8:00 PM</p>
        </div>
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">Destination</p>
          <p className="font-medium text-slate-200 flex items-center gap-1"><MapPin className="w-4 h-4" /> NUST Hostel</p>
        </div>
      </div>
    </motion.div>
  );
}
