"use client";

import { motion } from "framer-motion";

export default function AboutBackground() {
  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none bg-transparent">
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zM20 0h20v20H20V0z' fill='%230F172A' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute top-[40%] left-[40%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px]"
      />
    </div>
  );
}
