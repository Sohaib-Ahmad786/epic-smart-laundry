/**
 * Centralized animation variants & utilities for Framer Motion.
 * Keeps animation behavior consistent across the entire app.
 */

// ===== Fade Up (most common) =====
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// ===== Fade In =====
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

// ===== Scale Up =====
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// ===== Slide In from Left =====
export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// ===== Slide In from Right =====
export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// ===== Stagger Container =====
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// ===== Stagger Items =====
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

// ===== Card hover (spring) =====
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -6,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// ===== Viewport defaults for consistent "once" behavior =====
export const viewportOnce = { once: true, margin: "-80px" };

// ===== Spring transition presets =====
export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const gentleSpring = {
  type: "spring",
  stiffness: 80,
  damping: 25,
};

// ===== Hover scale small =====
export const hoverScale = {
  whileHover: { scale: 1.04, transition: { duration: 0.2 } },
  whileTap: { scale: 0.98 },
};
