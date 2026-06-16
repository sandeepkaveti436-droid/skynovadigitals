"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { Star } from "lucide-react";
import { useScrollAnimations } from "@/src/hooks/useScrollAnimations";

// --- FIXED SUB-COMPONENT FOR ROLLING ANIMATION ---
const RollingNumber = ({ value }: { value: string }) => {
  // 1. Logic to separate the part that "rolls" from the suffix
  // e.g. "4.8/5" -> roll: 4.8, suffix: /5
  // e.g. "5K+" -> roll: 5, suffix: K+
  const numberPart = value.match(/^[\d.]+/)?.[0] || "0";
  const suffixPart = value.replace(/^[\d.]+/, "");

  const isDecimal = numberPart.includes(".");
  const targetNumber = parseFloat(numberPart);

  const count = useMotionValue(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      count.set(targetNumber);
    }
  }, [isInView, targetNumber, count]);

  const springValue = useSpring(count, {
    stiffness: 30,
    damping: 15,
    restDelta: 0.01,
  });

  const displayValue = useTransform(springValue, (latest) =>
    isDecimal ? latest.toFixed(1) : Math.round(latest).toString(),
  );

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{displayValue}</motion.span>
      <span className="text-white">{suffixPart}</span>
    </span>
  );
};

const StatsSection = () => {
  const brandYellow = "#F2B800";
  const { fadeInLeft, fadeInRight } = useScrollAnimations();
  const headerLeftRef = useRef<HTMLDivElement>(null);
  const headerRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerLeftRef.current) fadeInLeft(headerLeftRef.current);
    if (headerRightRef.current) fadeInRight(headerRightRef.current);
  }, [fadeInLeft, fadeInRight]);

  const stats = [
    { number: "5K+", label: "Project Completed" },
    { number: "10+", label: "Years in Business" },
    { number: "40+", label: "Members Teams" },
    { number: "4.8/5", label: "Average Rating" },
  ];

  // Professional Grayscale Placeholder Logos
  const brandLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_logo_%282012%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  ];

  return (
    <section className="w-full bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div ref={headerLeftRef}>
            <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tighter leading-tight max-w-xl">
              <span style={{ color: brandYellow }}>Since 2013</span>, we've been
              customizing visual presentations
            </h2>
          </div>
          <div ref={headerRightRef} className="lg:pl-20 space-y-6">
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              Crafting impactful, tailored presentations that engage, persuade,
              and build trust.
            </p>

            {/* Trustpilot Badge */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-[#00b67a] font-bold">
                <Star size={18} fill="#00b67a" stroke="none" />
                <span>Trustpilot</span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-sm"
                  >
                    <Star size={12} fill="white" stroke="none" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-white mt-1 font-semibold">
                TrustScore 4.8 | 347 reviews
              </p>
            </div>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-100 pt-16 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-6xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                <RollingNumber value={stat.number} />
              </div>
              <p className="text-white text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* INFINITE LOGO MARQUEE */}
        <div className="relative w-full overflow-hidden">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap gap-8"
            >
              {/* Combine logos twice for infinite loop */}
              {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, i) => (
                <div
                  key={i}
                  className="w-56 h-32 bg-[#f9f9f9] rounded-2xl flex items-center justify-center p-10 flex-shrink-0"
                >
                  <img
                    src={logo}
                    alt="Brand logo"
                    className="max-w-full max-h-full object-contain grayscale opacity-40 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
