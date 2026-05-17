"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

/**
 * Reusable scroll reveal wrapper.
 * Wraps any content in a motion.div that animates when entering the viewport.
 */
export default function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.5,
  className = "",
  as = "div",
  ...props
}) {
  const MotionComponent = motion[as] || motion.div;
  const selectedVariant = variants[animation] || variants.fadeUp;

  return (
    <MotionComponent
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
