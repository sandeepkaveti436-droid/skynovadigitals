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
    <section className="bg-white py-16 md:py-24 px-6 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* --- FIXED HEADER PILL: Perfectly Centered on Mobile --- */}
        <div className="w-full flex justify-center md:justify-start mb-12 md:mb-20">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-2 h-2 rounded-full bg-[#F2B800] shrink-0" />
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-400 whitespace-nowrap">
              Voice of the Partnership
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center w-full">
          {/* LEFT COLUMN: Title & Navigation */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-tighter text-black leading-[1.0] mb-8">
              What our <br className="hidden md:block" />
              <span className="text-gray-300 italic font-light">
                clients say.
              </span>
            </h2>

            {/* NAV BUTTONS */}
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-[#F2B800] hover:text-black hover:border-[#F2B800] transition-all duration-500 group"
              >
                <ChevronLeft
                  size={22}
                  className="group-active:scale-75 transition-transform"
                />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-[#F2B800] hover:text-black hover:border-[#F2B800] transition-all duration-500 group"
              >
                <ChevronRight
                  size={22}
                  className="group-active:scale-75 transition-transform"
                />
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: The Quote Stage */}
          <div className="lg:col-span-8 relative flex flex-col items-center md:items-start w-full min-h-[480px] md:min-h-[400px] mt-10 md:mt-0">
            {/* Background Decorative Quote Mark (Fixed Centering) */}
            <div className="absolute top-[-30px] md:top-[-40px] left-1/2 -translate-x-1/2 md:left-[-30px] md:translate-x-0 opacity-[0.06] pointer-events-none z-0">
              <Quote size={180} className="text-black" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full flex flex-col items-center md:items-start text-center md:text-left"
              >
                {/* Main Quote */}
                <p className="text-[22px] sm:text-[30px] md:text-[40px] lg:text-[46px] font-medium tracking-tight text-gray-800 leading-[1.3] md:leading-tight mb-12">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>

                {/* Attribution Row */}
                <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-10 border-t border-gray-100 pt-10">
                  {/* Author Name & Role */}
                  <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-[22px] md:text-[28px] font-bold text-black mb-1">
                      {testimonials[current].author}
                    </h3>
                    <p className="text-[#F2B800] text-sm font-bold uppercase tracking-widest">
                      {testimonials[current].role}
                    </p>
                  </div>

                  {/* Metadata Tag */}
                  <div className="flex flex-col items-center md:items-end">
                    <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] mb-3">
                      Project Origin
                    </p>
                    <div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg">
                      <span className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                        {testimonials[current].stats}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
