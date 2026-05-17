"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ButtonSpinner } from "../common/LoadingSpinner";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const inputClasses =
    "w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 hover:border-slate-300 transition-all text-slate-800 text-sm placeholder:text-slate-400";

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-slate-100 relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"
        aria-hidden="true"
      />

      <h3 className="text-2xl font-bold text-primary mb-2 relative z-10">
        Send us a message
      </h3>
      <p className="text-slate-500 mb-8 relative z-10">
        We&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="John Doe"
              autoComplete="name"
              className={inputClasses}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-phone" className="text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              placeholder="+92 300 0000000"
              autoComplete="tel"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="john@example.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-subject" className="text-sm font-medium text-slate-700">
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            required
            placeholder="How can we help?"
            className={inputClasses}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            placeholder="Tell us about your needs..."
            className={`${inputClasses} resize-none`}
          />
        </div>

        <button
          disabled={status === "submitting" || status === "success"}
          type="submit"
          className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
        >
          {status === "idle" && (
            <>
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
          {status === "submitting" && (
            <>
              <ButtonSpinner />
              Sending...
            </>
          )}
          {status === "success" && (
            <>
              <CheckCircle2 className="w-5 h-5 text-accent" />
              Message Sent!
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
