"use client";

import { motion } from "framer-motion";
import { Truck, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function DeliveryProgress() {
  const progressPercent = 65; // Simulated progress
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl mb-8"
    >
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-slate-800">Overall Progress</h3>
        <span className="text-sm font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full">
          {progressPercent}% Complete
        </span>
      </div>

      <div className="relative h-4 bg-slate-100 rounded-full mb-12 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-blue-600 rounded-full"
        />
        <motion.div 
          initial={{ left: 0 }}
          animate={{ left: `calc(${progressPercent}% - 12px)` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg"
        />
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800">Rider Information</h4>
            <p className="text-sm text-slate-500 mt-1">Rider will be assigned during the delivery phase.</p>
          </div>
        </div>
        <Link href="#" className="w-full py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors opacity-50 cursor-not-allowed">
          <PhoneCall className="w-4 h-4" />
          Contact Rider (Not Available Yet)
        </Link>
      </div>

      <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-800">Delivery Address</h4>
            <p className="text-sm text-slate-600 font-medium mt-1">Room 404, Block B, NUST Hostels, Sector H-12, Islamabad</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
