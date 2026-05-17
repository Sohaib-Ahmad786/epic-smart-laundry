"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle2 } from "lucide-react";
import Container from "../common/Container";

export default function BusinessHours() {
  return (
    <section className="py-24 relative z-10 bg-white">
      <Container>
        <div className="bg-primary rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                We're Here When <br />
                <span className="text-secondary">You Need Us</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Our operations run 6 days a week to ensure your clothes are perfectly cleaned and delivered right on schedule.
              </p>
              <ul className="space-y-4">
                {["Monday - Saturday Operations", "Morning & Evening Pickup Slots", "Sunday Closed for Maintenance"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-secondary" />
                Operating Hours
              </h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-slate-300 font-medium">Standard Processing</span>
                  <span className="text-white font-bold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-slate-300 font-medium">Customer Support</span>
                  <span className="text-white font-bold">8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-medium">Express Service</span>
                  <span className="text-accent font-bold">24/7 Priority</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
