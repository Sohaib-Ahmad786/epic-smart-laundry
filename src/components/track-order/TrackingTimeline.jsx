"use client";

import { motion } from "framer-motion";
import { Check, ClipboardList, CalendarClock, PackageOpen, WashingMachine, Shirt, Truck, PackageCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Order Received", desc: "We have received your order details.", time: "Oct 24, 09:00 AM", status: "completed", icon: ClipboardList },
  { id: 2, title: "Pickup Scheduled", desc: "Rider assigned for pickup.", time: "Oct 24, 11:30 AM", status: "completed", icon: CalendarClock },
  { id: 3, title: "Laundry Collected", desc: "Your items are safely with us.", time: "Oct 24, 02:15 PM", status: "completed", icon: PackageOpen },
  { id: 4, title: "Washing In Progress", desc: "Garments are being cleaned.", time: "Oct 25, 08:00 AM", status: "active", icon: WashingMachine },
  { id: 5, title: "Ironing & Packaging", desc: "Pressing and folding garments.", time: "Pending", status: "upcoming", icon: Shirt },
  { id: 6, title: "Out For Delivery", desc: "Rider is on the way to you.", time: "Pending", status: "upcoming", icon: Truck },
  { id: 7, title: "Delivered", desc: "Laundry delivered successfully.", time: "Pending", status: "upcoming", icon: PackageCheck }
];

export default function TrackingTimeline() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl relative overflow-hidden h-full"
    >
      <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
        Tracking History
      </h3>
      
      <div className="relative pl-4 md:pl-0">
        {/* Vertical line connecting steps */}
        <div className="absolute left-[27px] md:left-[35px] top-4 bottom-4 w-1 bg-slate-100 rounded-full" />
        {/* Active progress line */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "50%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-[27px] md:left-[35px] top-4 w-1 bg-gradient-to-b from-secondary to-blue-600 rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]" 
        />
        
        <div className="space-y-8 relative">
          {steps.map((step, idx) => (
            <div key={step.id} className="flex gap-6 items-start group">
              <div className="relative z-10 flex-shrink-0">
                <div className={cn(
                  "w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-colors duration-500",
                  step.status === "completed" ? "bg-secondary text-white" : 
                  step.status === "active" ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] animate-pulse border-blue-100" : 
                  "bg-slate-100 text-slate-400"
                )}>
                  {step.status === "completed" ? <Check className="w-5 h-5 md:w-6 md:h-6" /> : <step.icon className="w-5 h-5 md:w-6 md:h-6" />}
                </div>
              </div>
              
              <div className={cn(
                "pt-1 md:pt-3 transition-opacity duration-300",
                step.status === "upcoming" ? "opacity-50" : "opacity-100"
              )}>
                <h4 className={cn(
                  "text-lg font-bold mb-1",
                  step.status === "active" ? "text-blue-600" : "text-slate-800"
                )}>{step.title}</h4>
                <p className="text-slate-500 text-sm mb-1">{step.desc}</p>
                <p className="text-slate-400 text-xs font-medium">{step.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
