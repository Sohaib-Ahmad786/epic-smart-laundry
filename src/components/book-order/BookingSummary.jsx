"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Truck, ShieldCheck, Tag } from "lucide-react";

export default function BookingSummary({ formData }) {
  // Compute pricing
  const basePrice = formData.plan === 'student' ? 29 : formData.plan === 'hostel' ? 59 : formData.plan === 'employee' ? 99 : 0;
  const isOneTime = formData.plan === 'onetime' || !formData.plan;
  
  return (
    <div className="bg-gradient-to-br from-slate-900 to-primary rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl sticky top-24">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <h3 className="text-2xl font-bold text-white mb-6 relative z-10 flex items-center gap-2">
        Order Summary
      </h3>
      
      <div className="space-y-6 relative z-10">
        <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
          <div className="flex justify-between items-start mb-2">
            <span className="text-slate-300 font-medium text-sm">Service Type</span>
            <span className="text-white font-bold text-right text-sm">{formData.service ? formData.service.replace('-', ' ') : "Not Selected"}</span>
          </div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-slate-300 font-medium text-sm">Plan</span>
            <span className="text-white font-bold text-right uppercase tracking-wide text-xs">{formData.plan ? formData.plan.replace('-', ' ') : "Not Selected"}</span>
          </div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-slate-300 font-medium text-sm">Date</span>
            <span className="text-white font-bold text-right text-sm">{formData.date || "Not Selected"}</span>
          </div>
          <div className="flex justify-between items-start">
            <span className="text-slate-300 font-medium text-sm">Time</span>
            <span className="text-white font-bold text-right text-sm">{formData.time || "Not Selected"}</span>
          </div>
        </div>

        <ul className="space-y-3">
          {[
            { icon: Clock, text: formData.service === 'express' ? "12h Express Turnaround" : "24h-48h Turnaround" },
            { icon: Truck, text: "Free Doorstep Pickup" },
            { icon: ShieldCheck, text: "Premium Fabric Care" }
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
              <item.icon className="w-4 h-4 text-secondary shrink-0" />
              {item.text}
            </li>
          ))}
        </ul>
        
        <div className="pt-6 border-t border-white/10">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-slate-400 text-sm font-medium mb-1">Estimated Total</p>
              <div className="flex items-center gap-1 text-slate-400 text-xs">
                <Tag className="w-3 h-3" />
                <span>Pricing is indicative</span>
              </div>
            </div>
            <div className="text-right">
              {isOneTime ? (
                <span className="text-2xl font-extrabold text-white">Pay Per Item</span>
              ) : (
                <>
                  <span className="text-4xl font-extrabold text-white">${basePrice || 0}</span>
                  <span className="text-slate-400 text-sm font-medium ml-1">/mo</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
