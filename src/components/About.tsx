"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// ================= UNDERLINE TO FULL ANIMATED BUTTON =================
const MorphingButton = ({
  text = "About Our Agency",
  href = "/about",
}: {
  text?: string;
  href?: string;
}) => {
  return (
    <Link href={href} className="inline-block p-1">
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        animate="rest"
        className="relative inline-flex items-center gap-3 px-6 py-3 cursor-pointer overflow-hidden rounded-[6px]"
      >
        {/* 1. Full Animated Background: Rises up from the underline on hover */}
        <motion.div
          variants={{
            rest: { scaleY: 0, opacity: 0 },
            hover: { scaleY: 1, opacity: 1 },
          }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-[#F2B800] origin-bottom rounded-[6px] -z-0"
        />

        {/* 2. Default Bottom Underline: Disappears as background fills */}
        <motion.span
          variants={{
            rest: { scaleX: 1, opacity: 1 },
            hover: { scaleX: 1, opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900 origin-left"
        />

        {/* 3. Four Corner Brackets: Snap into focus on hover */}
        <motion.span
          variants={{
            rest: { opacity: 0, scale: 0.6 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.25 }}
          className="absolute -top-[2px] -left-[2px] w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-neutral-950 pointer-events-none"
        />
        <motion.span
          variants={{
            rest: { opacity: 0, scale: 0.6 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.25 }}
          className="absolute -top-[2px] -right-[2px] w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-neutral-950 pointer-events-none"
        />
        <motion.span
          variants={{
            rest: { opacity: 0, scale: 0.6 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.25 }}
          className="absolute -bottom-[2px] -left-[2px] w-2 h-2 border-b-[1.5px] border-l-[1.5px] border-neutral-950 pointer-events-none"
        />
        <motion.span
          variants={{
            rest: { opacity: 0, scale: 0.6 },
            hover: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.25 }}
          className="absolute -bottom-[2px] -right-[2px] w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-neutral-950 pointer-events-none"
        />

        {/* 4. Text & Animated Arrow */}
        <span className="relative z-10 text-[13px] md:text-[14px] font-bold tracking-tight text-neutral-950 uppercase">
          {text}
        </span>
        <ArrowUpRight
          size={17}
          strokeWidth={2.2}
          className="relative z-10 text-neutral-950 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </motion.div>
    </Link>
  );
};

export default function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-24 px-6 border-t border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* ================= LEFT SIDE (DESKTOP): TAGLINE + HEADING + MORPHING BUTTON ================= */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2B800]" />
              <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-500">
                Performance Digital Marketing Agency
              </span>
            </div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 leading-[1.02]"
            >
              Driving Growth.
              <br />
              <span className="text-neutral-300">Scaling Brands With </span>
              <br />
              <span
                style={{ fontFamily: "'TheSeasonsItalic', serif" }}
                className="normal-case text-[#F2B800] tracking-normal font-normal pl-1 inline-block"
              >
                Precision.
              </span>
            </motion.h2>

            {/* Desktop Button: Left side below heading */}
            <div className="hidden lg:block pt-8">
              <MorphingButton text="About Our Agency" href="/about" />
            </div>
          </div>

          {/* ================= RIGHT SIDE (DESKTOP) / MIDDLE CONTENT (MOBILE) ================= */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Short Digital Marketing Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg text-neutral-900 font-medium leading-relaxed max-w-lg lg:max-w-none"
            >
              Sky Nova Digitals is a full-service growth agency. We combine data-backed{" "}
              <strong className="text-neutral-950 font-bold">SEO</strong>, high-ROI{" "}
              <strong className="text-neutral-950 font-bold">Paid Advertising</strong>, and{" "}
              <strong className="text-neutral-950 font-bold">Conversion Rate Optimization</strong>{" "}
              to turn qualified traffic into consistent revenue.
            </motion.p>

            {/* 3 Core Growth Pillars */}
            <div className="space-y-3 pt-4 border-t border-neutral-100 w-full max-w-lg lg:max-w-none">
              <div className="flex flex-col sm:flex-row items-center justify-between text-[16px] font-mono py-1.5 gap-1 border-b border-neutral-100/60 sm:border-0">
                <span className="font-bold text-neutral-900">01 / ORGANIC SEARCH</span>
                <span className="text-neutral-500">Technical SEO & Content Strategy</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between text-[16px] font-mono py-1.5 gap-1 border-b border-neutral-100/60 sm:border-0">
                <span className="font-bold text-neutral-900">02 / PAID ACQUISITION</span>
                <span className="text-neutral-500">Google & Meta Performance Ads</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between text-[16px] font-mono py-1.5 gap-1">
                <span className="font-bold text-neutral-900">03 / CONVERSION FUNNELS</span>
                <span className="text-neutral-500">CRO & High-Converting Pages</span>
              </div>
            </div>

            {/* Mobile Button: Bottom after content */}
            <div className="flex lg:hidden justify-center pt-6 w-full">
              <MorphingButton text="About Our Agency" href="/about" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}