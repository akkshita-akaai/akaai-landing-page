"use client";
import { motion } from "motion/react";

export function TextReveal({ children, className = "" }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
