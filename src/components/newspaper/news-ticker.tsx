"use client";

import { motion } from "motion/react";

interface TickerProps {
  items?: string[];
}

const defaultItems = [
  "BREAKING: Scalable Multi-Tenant Operations Platform Shipped in Production",
  "SPECIAL DISPATCH: Full Stack Engineering & AI Integration Specialist Available for Hire",
  "TECH REPORT: 99.9% Uptime Achieved Across Microservices Architectures",
  "MUMBAI EDITION: Real-time Collaborative Chat Powered by Modern Web Technologies",
  "PRESS WIRE: Node.js & React 19 Best Practices Published",
];

export default function NewsTicker({ items = defaultItems }: TickerProps) {
  const tickerText = items.join("  •  ");

  return (
    <div className="w-full bg-[#b91c1c] text-white font-mono text-xs py-2 px-3 flex items-center overflow-hidden shadow-inner my-2 border-y border-[#881337]">
      <div className="bg-[#881337] px-2.5 py-1 mr-3 text-[10px] font-black tracking-widest shrink-0 uppercase flex items-center space-x-1.5 shadow">
        <span className="w-2 h-2 rounded-full bg-red-300 animate-pulse" />
        <span>BREAKING DISPATCH</span>
      </div>

      <div className="overflow-hidden whitespace-nowrap w-full">
        <motion.div
          className="inline-block whitespace-nowrap text-[11px] tracking-wider font-semibold"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          <span className="pr-12">{tickerText}</span>
          <span className="pr-12">{tickerText}</span>
        </motion.div>
      </div>
    </div>
  );
}
