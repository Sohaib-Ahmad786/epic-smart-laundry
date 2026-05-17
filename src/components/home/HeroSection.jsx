"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Star } from "lucide-react";
import Container from "../common/Container";
import HeroBackground from "./HeroBackground";
import HeroStats from "./HeroStats";
import FloatingLaundryIcons from "./FloatingLaundryIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden selection:bg-secondary/30"
      aria-label="Hero section"
    >
      <HeroBackground />
      <FloatingLaundryIcons />

      <Container className="relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              <span className="text-sm font-semibold text-slate-700">
                Premium Laundry Service
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary mb-6 leading-[1.08]"
            >
              Smart Laundry <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-600">
                Pickup & Delivery
              </span>
              <br /> For Busy Students
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed"
            >
              Skip the laundry room. We pick up from your hostel or home, wash,
              iron, and deliver back within 24 hours. Reclaim your time with our
              modern, student-focused service.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
            >
              <Link
                href="/book-order"
                className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                <span>Book Pickup Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border border-slate-200 hover:border-accent hover:text-accent shadow-sm hover:shadow-md hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>WhatsApp Us</span>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {["Free Pickup", "Same Day Delivery", "Affordable Pricing"].map(
                (badge, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-accent"
                      aria-hidden="true"
                    />
                    {badge}
                  </div>
                )
              )}
            </motion.div>

            <HeroStats />
          </div>

          {/* Right Visuals */}
          <div className="relative hidden lg:block h-[600px] w-full" aria-hidden="true">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Main Visual Glass Card */}
              <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-gradient-to-br from-white/60 to-white/10 backdrop-blur-2xl border border-white/50 shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent" />

                {/* Abstract Machine Design */}
                <div className="relative w-64 h-64 rounded-[2rem] bg-white shadow-inner border-[8px] border-slate-50 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border-4 border-slate-100 flex items-center justify-center overflow-hidden relative bg-slate-50">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-[-50%] bg-gradient-to-tr from-secondary/40 via-blue-400/20 to-transparent opacity-50"
                    />
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-blue-500 shadow-lg shadow-secondary/30 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Machine Controls */}
                  <div className="absolute top-4 right-4 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-slate-200" />
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-8 top-20 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 w-48"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Order Ready
                    </p>
                    <p className="text-xs text-slate-500">Out for delivery</p>
                  </div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div className="bg-accent h-1.5 rounded-full w-full" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -left-12 bottom-32 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 w-52"
              >
                <div className="flex items-start gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px]">
                      👤
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px]">
                      👤
                    </div>
                  </div>
                  <div>
                    <div className="flex text-amber-400 mb-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs font-medium text-slate-600">
                      &quot;Best laundry service for students!&quot;
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
