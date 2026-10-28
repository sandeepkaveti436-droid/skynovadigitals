"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Activity } from "lucide-react";

// --- 1. INDEPENDENT ROLLING DIGIT (CHARACTER-BY-CHARACTER) ---
const RollingDigit = ({
  digit,
  delay,
  isInView,
}: {
  digit: number;
  delay: number;
  isInView: boolean;
}) => {
  return (
    <span className="inline-block h-[1.08em] overflow-hidden leading-none relative">
      <motion.span
        initial={{ y: "0%" }}
        animate={isInView ? { y: `-${digit * 10}%` } : { y: "0%" }}
        transition={{
          duration: 1.6,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="inline-flex flex-col"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span
            key={num}
            className="h-[1.08em] flex items-center justify-center leading-none select-none"
          >
            {num}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

// --- 2. MULTI-CHARACTER NUMBER TICKER ---
const CharacterAnimatedNumber = ({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) => {
  const digits = String(value).split("");

  return (
    <span className="inline-flex items-baseline leading-none">
      {/* Individual Digits */}
      {digits.map((char, i) => (
        <RollingDigit
          key={i}
          digit={parseInt(char, 10)}
          delay={0.15 + i * 0.12}
          isInView={isInView}
        />
      ))}

      {/* Suffix Animated Character */}
      <span className="inline-block overflow-hidden leading-none ml-1">
        <motion.span
          initial={{ y: "100%", opacity: 0 }}
          animate={
            isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }
          }
          transition={{
            duration: 0.8,
            delay: 0.15 + digits.length * 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block text-[#F2B800] font-bold"
        >
          {suffix}
        </motion.span>
      </span>
    </span>
  );
};

// --- 3. CHARACTER-BY-CHARACTER WORD TEXT ANIMATION ---
const AnimatedCharacterWord = ({
  text,
  className = "",
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  delayOffset?: number;
}) => {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden py-1 leading-[1.1]"
        >
          <motion.span
            initial={{ y: "120%", opacity: 0, rotateZ: 3 }}
            animate={{ y: "0%", opacity: 1, rotateZ: 0 }}
            transition={{
              duration: 0.7,
              delay: delayOffset + index * 0.03,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const metrics = [
  {
    id: "01",
    tag: "CONVERSION",
    value: 45,
    suffix: "%",
    label: "Engagement Lift",
    context: "Calculated across mission-critical healthcare & fintech portals.",
    highlight: "+12.4% MoM Avg",
  },
  {
    id: "02",
    tag: "EFFICIENCY",
    value: 3,
    suffix: "×",
    label: "Faster Journey",
    context: "Frictionless checkout and behavioral conversion funnels.",
    highlight: "Sub-Second TTFB",
  },
  {
    id: "03",
    tag: "VELOCITY",
    value: 25,
    suffix: "+",
    label: "Screens Shipped",
    context: "Average per modular high-fidelity product design sprint.",
    highlight: "Production Ready",
  },
  {
    id: "04",
    tag: "VERSATILITY",
    value: 10,
    suffix: "+",
    label: "Industries Scaled",
    context: "From edge SaaS infrastructure to consumer wellness apps.",
    highlight: "Global Reach",
  },
];

// --- 4. INDIVIDUAL METRIC CARD WITH DYNAMIC HOVER ---
const MetricCard = ({
  item,
  index,
}: {
  item: (typeof metrics)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-8 md:p-10 flex flex-col justify-between min-h-[330px] cursor-pointer overflow-hidden transition-colors duration-400 select-none ${
        isHovered ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >
      {/* Top Animated Gold Accent Bar on Hover */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-[3px] bg-[#F2B800] origin-left z-10"
      />

      {/* Top Metadata */}
      <div className="flex items-center justify-between mb-8 z-10 w-full">
        <motion.span
          animate={{ color: isHovered ? "#ffffff" : "#a3a3a3" }}
          transition={{ duration: 0.25 }}
          className="text-[11px] font-mono font-semibold"
        >
          ({item.id} // {item.tag})
        </motion.span>
        <motion.div
          animate={{
            backgroundColor: isHovered ? "#F2B800" : "#d4d4d4",
            scale: isHovered ? 1.25 : 1,
          }}
          transition={{ duration: 0.25 }}
          className="w-1.5 h-1.5 rounded-full"
        />
      </div>

      {/* Metric Characters & Label: Centered on Mobile, Left-aligned on sm+ */}
      <div className="my-auto z-10 w-full text-center sm:text-left">
        <div className="text-[52px] md:text-[68px] font-black tracking-tighter leading-none mb-3 flex items-baseline justify-center sm:justify-start">
          <motion.div
            animate={{ color: isHovered ? "#F2B800" : "#0a0a0a" }}
            transition={{ duration: 0.25 }}
          >
            <CharacterAnimatedNumber
              value={item.value}
              suffix={item.suffix}
              isInView={isInView}
            />
          </motion.div>
        </div>

        {/* Text Label: Centered on Mobile */}
        <motion.h3
          animate={{ color: isHovered ? "#ffffff" : "#0a0a0a" }}
          transition={{ duration: 0.25 }}
          className="text-sm font-bold uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5"
        >
          <span>{item.label}</span>
          <motion.div
            animate={{
              x: isHovered ? 2 : 0,
              y: isHovered ? -2 : 0,
              color: isHovered ? "#F2B800" : "#a3a3a3",
            }}
            transition={{ duration: 0.25 }}
          >
            <ArrowUpRight size={14} />
          </motion.div>
        </motion.h3>
      </div>

      {/* Context Description & Highlight Pill: Centered on Mobile */}
      <motion.div
        animate={{
          borderTopColor: isHovered ? "rgba(255,255,255,0.12)" : "#e5e5e5",
        }}
        transition={{ duration: 0.25 }}
        className="pt-6 mt-6 border-t z-10 w-full text-center sm:text-left"
      >
        <motion.p
          animate={{
            color: isHovered ? "rgba(255,255,255,0.85)" : "#737373",
          }}
          transition={{ duration: 0.25 }}
          className="text-xs leading-relaxed mb-3 font-normal text-center sm:text-left"
        >
          {item.context}
        </motion.p>

        {/* Highlight Badge Pill Container Centered on Mobile */}
        <div className="flex justify-center sm:justify-start">
          <motion.span
            animate={{
              backgroundColor: isHovered ? "rgba(255,255,255,0.12)" : "#f5f5f5",
              borderColor: isHovered ? "rgba(255,255,255,0.2)" : "#e5e5e5",
              color: isHovered ? "#ffffff" : "#525252",
            }}
            transition={{ duration: 0.25 }}
            className="inline-block text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded border"
          >
            {item.highlight}
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Results() {
  return (
    <section className="bg-white text-neutral-900 py-14 md:py-32 px-6 border-t border-neutral-200 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(242,184,0,0.06),transparent_70%)] blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= 1. HEADER: CENTERED ON MOBILE, MIDDLE-ALIGNED ON DESKTOP ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-14 md:mb-20 pb-8 border-b border-neutral-200">
          {/* Left: Eyebrow + Character-Animated Headline (Centered on mobile) */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2B800] animate-pulse" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-800">
                Measurable Impact
              </span>
            </div>

            {/* SINGLE LINE: CHARACTER-BY-CHARACTER ANIMATION (Flex-centered on mobile) */}
            <h2 className="text-[clamp(1.5rem,3.8vw,3.5rem)] leading-none tracking-tight flex flex-wrap sm:flex-nowrap justify-center lg:justify-start items-baseline gap-2 md:gap-3">
              <AnimatedCharacterWord
                text="Proven Results."
                className="font-black uppercase tracking-tight text-neutral-950 font-sans"
                delayOffset={0.05}
              />
              <AnimatedCharacterWord
                text="by the"
                className="font-serif italic font-light text-neutral-500 lowercase text-[0.95em]"
                delayOffset={0.4}
              />
              <span
                style={{ fontFamily: "'TheSeasonsItalic', Georgia, serif" }}
                className="font-normal italic text-[#F2B800] tracking-normal inline-block"
              >
                <AnimatedCharacterWord
                  text="Numbers."
                  className="font-normal italic text-[#F2B800] tracking-normal"
                  delayOffset={0.65}
                />
              </span>
            </h2>
          </div>

          {/* Right: Description (Centered on mobile, border-left on desktop) */}
          <div className="max-w-md lg:border-l lg:border-neutral-200 lg:pl-8 flex items-center justify-center lg:justify-start text-center lg:text-left w-full">
            <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-normal">
              We don&apos;t chase vanity metrics or superficial traffic. We
              engineer resilient digital platforms designed to accelerate your
              revenue and compound enterprise valuation.
            </p>
          </div>
        </div>

        {/* ================= 2. ARCHITECTURAL MATRIX ================= */}
        <div className="p-1">
          <div className="relative bg-neutral-200 border border-neutral-300">
            {/* 4 Precision Viewfinder Corner Crosshairs */}
            <span className="absolute -top-[4px] -left-[4px] w-4 h-4 border-t-2 border-l-2 border-neutral-900 z-20" />
            <span className="absolute -top-[4px] -right-[4px] w-4 h-4 border-t-2 border-r-2 border-neutral-900 z-20" />
            <span className="absolute -bottom-[4px] -left-[4px] w-4 h-4 border-b-2 border-l-2 border-neutral-900 z-20" />
            <span className="absolute -bottom-[4px] -right-[4px] w-4 h-4 border-b-2 border-r-2 border-neutral-900 z-20" />

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
              {metrics.map((item, index) => (
                <MetricCard key={item.id} item={item} index={index} />
              ))}
            </div>

            {/* Bottom Verification Bar: Centered on mobile */}
            <div className="px-6 py-3.5 bg-neutral-100 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-[11px] font-mono text-neutral-500 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Activity size={13} className="text-[#F2B800] shrink-0" />
                <span>
                  BENCHMARK DATA COMPILED ACROSS 40+ NEXT.JS DEPLOYMENTS
                </span>
              </div>
              <span className="text-neutral-400 uppercase tracking-widest text-[10px]">
                AUDITED QUARTERLY // ZERO ESTIMATES
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
