"use client";

import { motion } from "motion/react";

export default function HandwrittenSignature() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      className="relative flex items-center pt-1"
    >
      <span className=" font-cursive text-xl md:text-xl text-[#1c1917]/90 tracking-wide select-none leading-none -rotate-4 capitalize">
        Abhishek Jaiswar
      </span>
    </motion.div>
  );
}
