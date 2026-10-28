"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// --- DATA SETS (Changes when navigating) ---
const testimonialSets = [
  {
    category: "Wellness & Healthcare",
    featured: {
      quote:
        "My recovery and sleep quality improved drastically. Highly professional, disciplined, and effective digital architecture.",
      author: "Samantha Lee",
      role: "Founder, Vitality Clinic",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    },
    reviews: [
      {
        id: "r1",
        quote:
          "The structured program helped me manage stress effectively while improving my overall team productivity.",
        author: "Ali Raza",
        role: "Entrepreneur",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: "r2",
        quote:
          "The holistic approach made a real difference in my mental well-being. I feel calmer, clearer, and more in control.",
        author: "Hina Malik",
        role: "Teacher & Author",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: "r3",
        quote:
          "I struggled with sleep for years, but within a few weeks, my sleep quality improved noticeably. I wake up feeling refreshed.",
        author: "John Snow",
        role: "IT Expert",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: "r4",
        quote:
          "Within weeks, I noticed a significant improvement in my energy and stress levels. The personalized approach made all the difference.",
        author: "Kathie Corl",
        role: "Neurology Specialist",
        avatar:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
  {
    category: "SaaS & Enterprise",
    featured: {
      quote:
        "SkyNovaDigitals transformed our disjointed ideas into a digital experience that finally matched our enterprise valuation.",
      author: "Alex Rivera",
      role: "CEO, Longevity Lounge",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
    },
    reviews: [
      {
        id: "r5",
        quote:
          "A rare engineering squad that grasps commercial conversion funnels as well as high-end interactive UI design.",
        author: "Sarah Chen",
        role: "Marketing Director",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: "r6",
        quote:
          "Execution was surgically precise. Our user retention jumped by over 40% after launching the new Next.js dashboard.",
        author: "James Henderson",
        role: "Product Lead",
        avatar:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: "r7",
        quote:
          "Zero post-launch bugs, sub-second latency scores, and extreme attention to typography. Unmatched performance.",
        author: "Marcus Vance",
        role: "Cloud Architect",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      },
      {
        id: "r8",
        quote:
          "They don't build temporary one-offs. The design tokens and clean APIs they engineered scaled seamlessly with our roadmap.",
        author: "Elena Rostova",
        role: "Fintech Founder",
        avatar:
          "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
];

export default function DynamicTestimonials() {
  const [currentSet, setCurrentSet] = useState(0);

  const next = () =>
    setCurrentSet((prev) => (prev + 1) % testimonialSets.length);
  const prev = () =>
    setCurrentSet(
      (prev) => (prev - 1 + testimonialSets.length) % testimonialSets.length,
    );

  const activeData = testimonialSets[currentSet];

  return (
    <section className="bg-white text-neutral-900 py-20 md:py-16 px-6 border-t border-neutral-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ================= 1. HEADER WITH MIDDLE ALIGNMENT & CONTROLS ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 md:mb-16 pb-8 border-b border-neutral-200">
          <div>
            <div className="inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2B800] animate-pulse" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-800">
                Voice of the Partnership
              </span>
            </div>

            {/* SINGLE LINE MULTI-FONT TITLE */}
            <h2 className="text-[clamp(1.5rem,3.8vw,3.5rem)] leading-none tracking-tight whitespace-nowrap flex items-baseline gap-2 md:gap-3">
              <span className="font-black uppercase tracking-tight text-neutral-950 font-sans">
                Client Proof.
              </span>
              <span className="font-serif italic font-light text-neutral-500 lowercase text-[0.95em]">
                in their
              </span>
              <span
                style={{ fontFamily: "'TheSeasonsItalic', Georgia, serif" }}
                className="font-normal italic text-[#F2B800] tracking-normal"
              >
                Words.
              </span>
            </h2>
          </div>

          {/* Controls: Prev / Next + Category Indicator */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
              SET 0{currentSet + 1} / 0{testimonialSets.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonials"
                className="w-11 h-11 rounded-full border border-neutral-200 bg-white hover:bg-[#F2B800] hover:border-[#F2B800] hover:text-black flex items-center justify-center text-neutral-800 transition-all duration-300 shadow-2xs active:scale-95"
              >
                <ChevronLeft size={18} strokeWidth={2.2} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonials"
                className="w-11 h-11 rounded-full border border-neutral-200 bg-white hover:bg-[#F2B800] hover:border-[#F2B800] hover:text-black flex items-center justify-center text-neutral-800 transition-all duration-300 shadow-2xs active:scale-95"
              >
                <ChevronRight size={18} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= 2. EXACT IMAGE LAYOUT (ANIMATES ON CHANGE) ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSet}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch"
          >
            {/* --- LEFT: TALL FEATURED PHOTO CARD --- */}
            <div className="lg:col-span-5 relative rounded-[26px] overflow-hidden min-h-[460px] lg:min-h-full flex flex-col justify-end p-8 md:p-10 shadow-sm border border-neutral-200/60 group">
              {/* Background Image */}
              <img
                src={activeData.featured.image}
                alt={activeData.featured.author}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Foreground Content */}
              <div className="relative z-10 text-white">
                <p className="text-lg md:text-[21px] font-medium leading-snug mb-8 tracking-tight text-white/95">
                  &ldquo;{activeData.featured.quote}&rdquo;
                </p>

                {/* Author Info + Big Quote Mark */}
                <div className="flex items-center justify-between pt-4 border-t border-white/15">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeData.featured.image}
                      alt={activeData.featured.author}
                      className="w-11 h-11 rounded-full object-cover border-2 border-white/40 shadow-xs"
                    />
                    <div>
                      <h4 className="text-base font-bold text-white leading-tight">
                        {activeData.featured.author}
                      </h4>
                      <p className="text-xs text-white/70 font-normal">
                        {activeData.featured.role}
                      </p>
                    </div>
                  </div>

                  {/* Oversized Decorative Double Quote Symbol */}
                  <span className="text-6xl md:text-7xl font-serif text-white/20 select-none leading-none -mb-2">
                    &rdquo;
                  </span>
                </div>
              </div>
            </div>

            {/* --- RIGHT: 2x2 GRID OF 4 REVIEW CARDS --- */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {activeData.reviews.map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.08,
                    ease: "easeOut",
                  }}
                  className="rounded-[22px] bg-[#F2F2F2] hover:bg-[#EBEBEB] p-7 md:p-8 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* 5 Filled Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className="fill-neutral-900 text-neutral-900"
                        />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-xs md:text-[13.5px] text-neutral-700 leading-relaxed font-normal mb-6">
                      {review.quote}
                    </p>
                  </div>

                  {/* Author Avatar + Name & Role */}
                  <div className="flex items-center gap-3 pt-2">
                    <img
                      src={review.avatar}
                      alt={review.author}
                      className="w-10 h-10 rounded-full object-cover shadow-2xs border border-white"
                    />
                    <div>
                      <h5 className="text-sm font-bold text-neutral-900 leading-tight">
                        {review.author}
                      </h5>
                      <p className="text-[11px] text-neutral-500 font-normal">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ================= 3. STEP INDICATOR PILLS ================= */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {testimonialSets.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSet(idx)}
              aria-label={`Switch to testimonial set ${idx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full ${
                currentSet === idx
                  ? "w-8 bg-[#F2B800]"
                  : "w-2.5 bg-neutral-200 hover:bg-neutral-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
