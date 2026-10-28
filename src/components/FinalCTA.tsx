"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
  Users2,
} from "lucide-react";
import Link from "next/link";

// --- Framer Motion Masked Text Slide ---
const SlideUpWord = ({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  return (
    <span className="inline-block overflow-hidden py-1 leading-[1.1]">
      <motion.span
        initial={{ y: "115%", opacity: 0, rotateZ: 2 }}
        whileInView={{ y: "0%", opacity: 1, rotateZ: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`inline-block ${className}`}
      >
        {text}
      </motion.span>
    </span>
  );
};

// --- Signature Viewfinder Button ---
const ViewfinderButton = ({
  text = "Start Your Project",
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
        className="relative group cursor-pointer inline-flex items-center gap-3.5 px-8 py-4 bg-[#F2B800] hover:bg-white text-black transition-colors duration-300 shadow-[0_0_35px_-5px_rgba(242,184,0,0.4)]"
      >
        {/* 4 Corner Viewfinder Crosshairs */}
        <span className="absolute -top-[3px] -left-[3px] w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-[#F2B800] group-hover:border-white transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
        <span className="absolute -top-[3px] -right-[3px] w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-[#F2B800] group-hover:border-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        <span className="absolute -bottom-[3px] -left-[3px] w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-[#F2B800] group-hover:border-white transition-all duration-300 group-hover:-translate-x-1 group-hover:translate-y-1" />
        <span className="absolute -bottom-[3px] -right-[3px] w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-[#F2B800] group-hover:border-white transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />

        <span className="text-[14px] md:text-[15px] font-bold uppercase tracking-wider text-black">
          {text}
        </span>

        <ArrowUpRight
          size={18}
          strokeWidth={2.4}
          className="text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </motion.div>
    </Link>
  );
};

export default function FinalCTA() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col justify-between bg-[#060606] text-white px-6 pt-24 pb-14 border-t border-white/10 overflow-hidden">
      {/* --- BACKGROUND LUXURY AMBIENCE (Deep Black + Radiant Yellow Glow) --- */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[950px] h-[500px] bg-[radial-gradient(ellipse_at_center,_rgba(242,184,0,0.12)_0%,_transparent_70%)] blur-3xl -z-0" />

      {/* Subtle Technical Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none -z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F2B800 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* Outer Viewfinder Frame Accents */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center items-center text-center">
        {/* --- 1. EYEBROW BADGE WITH STATUS PULSE --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 mb-8 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-white/10 shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-[#F2B800] animate-ping" />
          <span className="text-[11px] md:text-[12px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-300">
            The Final Step // Initiate Project
          </span>
        </motion.div>

        {/* --- 2. MULTI-FONT HIGH-CONVERSION HEADLINE --- */}
        <h2 className="text-[clamp(1.85rem,2.5vw,3.5rem)] font-black uppercase tracking-tight leading-[1.05] max-w-4xl mb-6">
          <span className="text-white block sm:inline-block mr-2">
            Have An Idea
          </span>
          <span className="text-white block sm:inline-block mr-2">Worth</span>
          <span
            style={{ fontFamily: "'TheSeasonsItalic', Georgia, serif" }}
            className="normal-case text-[#F2B800] font-normal tracking-normal block sm:inline-block"
          >
            Building?
          </span>
        </h2>

        {/* --- 3. SEO-OPTIMIZED DESCRIPTIVE BODY --- */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12"
        >
          We construct custom{" "}
          <strong className="text-white font-medium">
            Next.js web platforms
          </strong>
          , scalable{" "}
          <strong className="text-white font-medium">
            UI/UX design systems
          </strong>
          , and conversion-engineered architectures built to compound your brand
          valuation with zero technical bloat.
        </motion.p>

        {/* --- 4. DUAL HIGH-CONVERSION CALLS TO ACTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 w-full max-w-xl mb-16"
        >
          {/* PRIMARY: Signature Viewfinder Button */}
          <ViewfinderButton text="Start Your Project" href="/contact" />

          {/* SECONDARY: Direct Calendar Consultation Pill */}
          <Link
            href="/calendar"
            className="group flex items-center gap-3.5 px-6 py-4 rounded-none border border-white/15 bg-neutral-900/60 hover:bg-neutral-900 hover:border-[#F2B800] transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:text-[#F2B800] group-hover:border-[#F2B800] transition-colors">
              <Calendar size={15} />
            </div>

            <div className="flex flex-col items-start text-left">
              <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                2 Slots Available
              </span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-white group-hover:text-[#F2B800] transition-colors">
                Book Consultation
              </span>
            </div>
          </Link>
        </motion.div>

        {/* --- 5. ARCHITECTURAL TECHNICAL LEDGER (4-COLUMN GUARANTEES) --- */}
        <div className="w-full max-w-5xl border-t border-white/10 pt-8 mt-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {/* Value 1 */}
            <div className="flex items-start gap-3">
              <Users2 size={16} className="text-[#F2B800] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block uppercase tracking-wider">
                  Direct Senior Squad
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">
                  Zero junior outsourcing
                </span>
              </div>
            </div>

            {/* Value 2 */}
            <div className="flex items-start gap-3">
              <Zap size={16} className="text-[#F2B800] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block uppercase tracking-wider">
                  Sub-Second Speed
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">
                  Core Web Vitals 99+
                </span>
              </div>
            </div>

            {/* Value 3 */}
            <div className="flex items-start gap-3">
              <Clock size={16} className="text-[#F2B800] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-white block uppercase tracking-wider">
                  Surgical Sprints
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">
                  Production ready in weeks
                </span>
              </div>
            </div>

            {/* Value 4 */}
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={16}
                className="text-[#F2B800] shrink-0 mt-0.5"
              />
              <div>
                <span className="text-xs font-bold text-white block uppercase tracking-wider">
                  Enterprise Grade
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">
                  Clean Next.js architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
