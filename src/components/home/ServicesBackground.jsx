"use client";

import { motion } from "framer-motion";

export default function ServicesBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
      {/* Dark Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20zM20 0h20v20H20V0z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[120px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.05, 0.2, 0.05],
          x: [0, -100, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full bg-accent/20 blur-[150px]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary opacity-80" />
    </div>
  );
}
