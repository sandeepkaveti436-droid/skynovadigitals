"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SkyNovaDigitals transformed our ideas into a digital experience that finally felt like our brand.",
    author: "Alex Rivera",
    role: "Founder, Longevity Lounge",
    stats: "Project: Brand Identity & Portal",
  },
  {
    quote:
      "A rare team that understands both business logic and high-end design. They didn't just build a site; they built a growth tool.",
    author: "Sarah Chen",
    role: "Marketing Director, Orvixa",
    stats: "Project: SaaS UI/UX Strategy",
  },
  {
    quote:
      "Execution was flawless. Our user retention increased significantly after the launch of the new dashboard architecture.",
    author: "James Henderson",
    role: "CEO, Omega Health",
    stats: "Project: Enterprise App Dev",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const brandYellow = "#F2B800";

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section className="bg-[#050505] py-4 md:py-6 px-6 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex items-center gap-4 mb-16 md:mb-16">
          <div className="w-1.5 h-1.5 rounded-full bg-[#F2B800]" />
          <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white/40">
            Voice of the Partnership
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* LEFT: STATIC TITLE */}
          <div className="lg:col-span-4">
            <h2 className="text-[20px] md:text-[32px] font-bold tracking-tighter text-white leading-[0.9]">
              What our <br />
              <span className="text-white/20 italic font-light">
                clients say.
              </span>
            </h2>

            {/* NAVIGATION CONTROLS */}
            <div className="flex gap-4 mt-12">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#F2B800] hover:text-black hover:border-[#F2B800] transition-all duration-500 group"
              >
                <ChevronLeft
                  size={24}
                  className="group-active:scale-75 transition-transform"
                />
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#F2B800] hover:text-black hover:border-[#F2B800] transition-all duration-500 group"
              >
                <ChevronRight
                  size={24}
                  className="group-active:scale-75 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* RIGHT: DYNAMIC QUOTE STAGE */}
          <div className="lg:col-span-8 relative min-h-[400px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                {/* Large Quote */}
                <p className="text-[24px] md:text-[40px] lg:text-[48px] font-medium tracking-tight text-white/90 leading-tight">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                {/* Attribution & Metadata */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-10">
                  <div>
                    <h3 className="text-[20px] md:text-[28px] font-bold text-white mb-1">
                      {testimonials[current].author}
                    </h3>
                    <p className="text-[#F2B800] text-sm font-bold uppercase tracking-widest">
                      {testimonials[current].role}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] mb-2">
                      Technical Metadata
                    </p>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                      {testimonials[current].stats}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Background Decorative Quote Mark */}
            <div className="absolute top-[-40px] left-[-20px] opacity-[0.03] pointer-events-none">
              <Quote size={200} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
