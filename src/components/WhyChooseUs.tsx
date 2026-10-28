"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Zap,
  Target,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    id: "01",
    title: "Strategy First",
    desc: "We dive deep into your business logic before touching a single pixel. Every design decision is backed by market data, user psychology, and competitive positioning.",
    category: "Discovery & Blueprint",
    icon: <Target size={20} strokeWidth={1.8} />,
  },
  {
    id: "02",
    title: "Design That Performs",
    desc: "Aesthetics are a baseline. We engineer frictionless conversion funnels and behavioral UI architectures that turn passive visitors into loyal brand advocates.",
    category: "Interface & Experience",
    icon: <Zap size={20} strokeWidth={1.8} />,
  },
  {
    id: "03",
    title: "Built for Speed",
    desc: "Engineered on modern Next.js edge infrastructure to achieve near-zero latency. Sub-second load times and flawless technical SEO are our non-negotiable standards.",
    category: "Edge Architecture",
    icon: <ShieldCheck size={20} strokeWidth={1.8} />,
  },
  {
    id: "04",
    title: "Built to Scale",
    desc: "We avoid fragile one-offs. We architect scalable design tokens, clean headless codebases, and modular systems built to grow alongside your valuation.",
    category: "Scalable Systems",
    icon: <TrendingUp size={20} strokeWidth={1.8} />,
  },
];

// --- Dedicated Framer Motion Row Component ---
const MotionLedgerRow = ({
  item,
  index,
}: {
  item: (typeof pillars)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative border-b border-neutral-200 px-4 md:px-8 py-7 md:py-8 overflow-hidden cursor-pointer select-none"
    >
      {/* Yellow Sliding Background Curtain */}
      <motion.div
        aria-hidden="true"
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-[#F2B800] pointer-events-none z-0"
      />

      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
        {/* Column 1: Index + Category (3 Cols) */}
        <div className="md:col-span-3 flex items-center gap-3">
          <motion.span
            animate={{
              color: isHovered ? "rgba(255,255,255,0.85)" : "#a3a3a3",
            }}
            transition={{ duration: 0.25 }}
            className="text-xs md:text-sm font-mono font-medium"
          >
            ({item.id} / 04)
          </motion.span>

          <motion.span
            animate={{
              color: isHovered ? "rgba(255,255,255,0.85)" : "#737373",
            }}
            transition={{ duration: 0.25 }}
            className="text-[10px] md:text-[11px] font-mono uppercase tracking-widest"
          >
            {item.category}
          </motion.span>
        </div>

        {/* Column 2: Icon + Title (4 Cols) */}
        <div className="md:col-span-4 flex items-center gap-3.5">
          <motion.div
            animate={{
              backgroundColor: isHovered ? "#0a0a0a" : "#f5f5f5",
              color: isHovered ? "#ffffff" : "#404040",
            }}
            transition={{ duration: 0.25 }}
            className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
          >
            {item.icon}
          </motion.div>

          <motion.h3
            animate={{
              color: isHovered ? "#ffffff" : "#0a0a0a",
              x: isHovered ? 4 : 0,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-lg md:text-xl font-bold tracking-tight"
          >
            {item.title}
          </motion.h3>
        </div>

        {/* Column 3: Description Paragraph (4 Cols) */}
        <div className="md:col-span-4">
          <motion.p
            animate={{
              color: isHovered ? "rgba(255,255,255,0.95)" : "#737373",
            }}
            transition={{ duration: 0.25 }}
            className="text-xs md:text-sm leading-relaxed font-normal"
          >
            {item.desc}
          </motion.p>
        </div>

        {/* Column 4: Interactive Arrow Indicator (1 Col) */}
        <div className="md:col-span-1 hidden md:flex justify-end">
          <motion.div
            animate={{
              backgroundColor: isHovered ? "#0a0a0a" : "transparent",
              borderColor: isHovered ? "#0a0a0a" : "#d4d4d4",
              color: isHovered ? "#ffffff" : "#a3a3a3",
            }}
            transition={{ duration: 0.25 }}
            className="w-8 h-8 rounded-full border flex items-center justify-center"
          >
            <motion.div
              animate={{
                x: isHovered ? 2 : 0,
                y: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ArrowUpRight size={15} strokeWidth={2.2} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Viewfinder Button Model ---
const ViewfinderButton = ({
  text = "Start Project",
  href = "/contact",
}: {
  text?: string;
  href?: string;
}) => {
  return (
    <Link href={href} className="inline-block p-1">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group cursor-pointer inline-flex items-center gap-3 px-6 py-2.5 bg-[#F2B800] hover:bg-neutral-900 text-neutral-950 hover:text-white transition-colors duration-300"
      >
        <span className="absolute -top-[3px] -left-[3px] w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] border-neutral-900 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="absolute -top-[3px] -right-[3px] w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-neutral-900 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="absolute -bottom-[3px] -left-[3px] w-2.5 h-2.5 border-b-[1.5px] border-l-[1.5px] border-neutral-900 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
        <span className="absolute -bottom-[3px] -right-[3px] w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] border-neutral-900 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

        <ArrowUpRight
          size={18}
          strokeWidth={2.2}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />

        <span className="text-[14px] font-medium tracking-tight">{text}</span>
      </motion.div>
    </Link>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white text-neutral-900 py-16 md:py-24 px-6 border-t border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER SECTION: MIDDLE-ALIGNED ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 md:mb-16 pb-8 border-b border-neutral-200">
          {/* Left: Eyebrow + Single-line Multi-font Headline */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2B800]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-800">
                The Partnership Protocol
              </span>
            </div>

            <h2 className="text-[clamp(1.5rem,3.8vw,3.5rem)] leading-none tracking-tight whitespace-nowrap flex items-baseline gap-2 md:gap-3">
              <span className="font-black uppercase tracking-tight text-neutral-950 font-sans">
                More Than
              </span>
              <span className="font-serif italic font-light text-neutral-500 lowercase text-[0.95em]">
                an
              </span>
              <span
                style={{ fontFamily: "'TheSeasonsItalic', Georgia, serif" }}
                className="font-normal italic text-[#F2B800] tracking-normal"
              >
                Agency.
              </span>
            </h2>
          </div>

          {/* Right: Middle-Aligned Description */}
          <div className="max-w-md lg:border-l lg:border-neutral-200 lg:pl-8 flex items-center">
            <p className="text-neutral-500 text-xs md:text-sm leading-relaxed font-normal">
              We eliminate the bloated layers of traditional agencies. Operating
              as your embedded digital product division, we build with extreme
              speed, discipline, and measurable accountability.
            </p>
          </div>
        </div>

        {/* ================= CONTINUOUS MOTION LEDGER (NO CARDS) ================= */}
        <div className="border-t border-neutral-200">
          {pillars.map((item, index) => (
            <MotionLedgerRow key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* ================= VIEWFINDER-DESIGN ENGAGEMENT PROTOCOL CARD ================= */}
        <div className="mt-16 md:mt-24 p-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-[#F5F2EB] border border-neutral-300/80 p-8 md:p-12 transition-all duration-300"
          >
            {/* 4 Oversized Viewfinder Corner Brackets */}
            <span className="absolute -top-[4px] -left-[4px] w-4 h-4 border-t-2 border-l-2 border-neutral-900 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            <span className="absolute -top-[4px] -right-[4px] w-4 h-4 border-t-2 border-r-2 border-neutral-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <span className="absolute -bottom-[4px] -left-[4px] w-4 h-4 border-b-2 border-l-2 border-neutral-900 transition-transform duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
            <span className="absolute -bottom-[4px] -right-[4px] w-4 h-4 border-b-2 border-r-2 border-neutral-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />

            {/* Inner Content Grid */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2B800]" />
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-800 font-bold">
                    Engagement Protocol
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 mb-2">
                  Ready to redefine your digital presence?
                </h4>
                <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-normal">
                  We accept a strictly limited roster of partners per quarter to
                  guarantee direct senior partner execution, speed, and
                  continuous strategic growth on every sprint.
                </p>
              </div>

              {/* Viewfinder Button Action */}
              <div className="shrink-0">
                <ViewfinderButton text="Start Project" href="/contact" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
