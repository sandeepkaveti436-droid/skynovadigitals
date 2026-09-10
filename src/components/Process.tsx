"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Search, PenTool, Code2, TrendingUp } from "lucide-react";

const steps = [
  {
    id: "01",
    phase: "DISCOVERY",
    title: "Defining Logic.",
    desc: "We dive deep into your business DNA. Through stakeholder audits and user psychology mapping, we build a blueprint for success.",
    tags: ["Market Audit", "Persona Mapping", "Data Strategy"],
    icon: <Search className="w-full h-full text-[#F2B800]" />,
  },
  {
    id: "02",
    phase: "DESIGN",
    title: "Visual Systems.",
    desc: "We don't just make it look good. We build high-performance design systems that are aesthetically superior and intuitively functional.",
    tags: ["UI Architecture", "Design Systems", "Prototyping"],
    icon: <PenTool className="w-full h-full text-[#F2B800]" />,
  },
  {
    id: "03",
    phase: "DEVELOPMENT",
    title: "Clean Code.",
    desc: "Our engineers build using a modern Next.js ecosystem to ensure lightning-fast speeds and infinite scalability for your product.",
    tags: ["Next.js Core", "API Integration", "Cloud Scale"],
    icon: <Code2 className="w-full h-full text-[#F2B800]" />,
  },
  {
    id: "04",
    phase: "GROWTH",
    title: "Scaling Impact.",
    desc: "Digital products are never finished. We run A/B tests and funnel optimizations to ensure your traffic converts into revenue.",
    tags: ["Funnel Opt.", "Performance SEO", "A/B Testing"],
    icon: <TrendingUp className="w-full h-full text-[#F2B800]" />,
  },
];

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Smooth out the scroll progress for animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Transform for horizontal movement
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  // Logic to highlight labels based on scroll
  const step1Opacity = useTransform(smoothProgress, [0, 0.25], [1, 0.2]);
  const step2Opacity = useTransform(smoothProgress, [0.25, 0.5], [0.2, 1]);
  const step3Opacity = useTransform(smoothProgress, [0.5, 0.75], [0.2, 1]);
  const step4Opacity = useTransform(smoothProgress, [0.75, 1], [0.2, 1]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* --- DYNAMIC BACKGROUND TEXT --- */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
          <h1 className="text-[25vw] font-black uppercase tracking-tighter text-white">
            SKYNOVA
          </h1>
        </div>

        {/* --- HEADER --- */}
        <div className="absolute top-12 left-10 md:left-20 z-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#F2B800] animate-pulse" />
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-white/40">
              Operation: Workflow
            </span>
          </div>
          <h2 className="text-[20px] md:text-[32px] font-bold tracking-tighter text-white leading-none">
            A Methodical
            <br />
            <span className="text-white/20 italic font-light">Approach.</span>
          </h2>
        </div>

        {/* --- THE DECK (Horizontal Slide) --- */}
        <motion.div style={{ x }} className="flex">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className="relative h-screen w-screen md:w-[70vw] flex-shrink-0 flex items-center justify-center px-6 md:px-10"
            >
              <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/8] bg-white/[0.03] border border-white/5 rounded-[40px] p-8 md:p-16 backdrop-blur-3xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2B800]/5 blur-[80px] rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-white/5 rounded-full" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 h-full items-center gap-12">
                  <div className="md:col-span-5 flex flex-col items-start gap-8">
                    <span className="text-[120px] md:text-[180px] font-black text-white/5 leading-none tracking-tighter">
                      {step.id}
                    </span>
                    <div className="w-20 h-20 md:w-24 md:h-24 p-6 bg-white/[0.02] border border-white/5 rounded-3xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                      {step.icon}
                    </div>
                  </div>

                  <div className="md:col-span-7 space-y-8">
                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-[#F2B800] uppercase tracking-[0.4em]">
                        {step.phase}
                      </span>
                      <h3 className="text-[20px] md:text-[28px] font-bold text-white tracking-tighter leading-none">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/50 text-[16px] md:text-[16px] font-medium leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[12px] font-medium uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-white/40 group-hover:text-white/80 transition-all"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 right-12 hidden md:block">
                  <p className="text-[8px] font-mono text-white/10 uppercase tracking-widest leading-loose">
                    // SECURE_SYSTEMS_INITIATED <br />
                    // 0x{idx}F_NODE_STABLE
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* --- LASER PROGRESS TRACKER --- */}
        <div className="absolute bottom-12 left-10 right-10 flex flex-col gap-4">
          <div className="w-full h-[1px] bg-white/10 relative">
            <motion.div
              style={{ scaleX: smoothProgress }}
              className="absolute inset-0 h-full bg-[#F2B800] origin-left shadow-[0_0_15px_#F2B800]"
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-black text-white uppercase tracking-[0.4em]">
            <motion.span style={{ opacity: step1Opacity }}>Logic</motion.span>
            <motion.span style={{ opacity: step2Opacity }}>Visuals</motion.span>
            <motion.span style={{ opacity: step3Opacity }}>Core</motion.span>
            <motion.span style={{ opacity: step4Opacity }}>Growth</motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}
