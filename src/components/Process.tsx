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

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

  const step1Opacity = useTransform(smoothProgress, [0, 0.25], [1, 0.2]);
  const step2Opacity = useTransform(smoothProgress, [0.25, 0.5], [0.2, 1]);
  const step3Opacity = useTransform(smoothProgress, [0.5, 0.75], [0.2, 1]);
  const step4Opacity = useTransform(smoothProgress, [0.75, 1], [0.2, 1]);

  return (
    <>
      {/* --- DESKTOP VIEW (Horizontal Deck) --- */}
      <section
        ref={targetRef}
        className="hidden md:block relative h-[400vh] bg-white border-t border-gray-100"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <h1 className="text-[25vw] font-black uppercase tracking-tighter text-black">
              SKYNOVA
            </h1>
          </div>

          <div className="absolute top-12 left-20 z-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#F2B800] animate-pulse" />
              <span className="text-[12px] font-black uppercase tracking-[0.5em] text-black/40">
                Operation: Workflow
              </span>
            </div>
            <h2 className="text-[42px] font-bold tracking-tighter text-black leading-none">
              A Methodical
              <br />
              <span className="text-black/20 italic font-light">Approach.</span>
            </h2>
          </div>

          <motion.div style={{ x }} className="flex">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className="relative h-screen w-[70vw] flex-shrink-0 flex items-center justify-center px-20"
              >
                <div className="relative w-full max-w-5xl aspect-[18/8] bg-[#F9F9F9] border border-black/[0.05] rounded-[40px] p-16 shadow-sm overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2B800]/5 blur-[80px] rounded-full" />
                  <div className="relative z-10 grid grid-cols-12 h-full items-center gap-12">
                    <div className="col-span-5 flex flex-col items-start gap-8">
                      <span className="text-[180px] font-black text-black/[0.04] leading-none tracking-tighter">
                        {step.id}
                      </span>
                      <div className="w-24 h-24 p-6 bg-white border border-black/5 rounded-3xl shadow-sm group-hover:scale-110 transition-all duration-700">
                        {step.icon}
                      </div>
                    </div>
                    <div className="col-span-7 space-y-8">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black text-[#F2B800] uppercase tracking-[0.4em]">
                          {step.phase}
                        </span>
                        <h3 className="text-[56px] font-bold text-black tracking-tighter leading-none">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-[18px] font-medium leading-relaxed max-w-lg">
                        {step.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[12px] font-bold uppercase tracking-widest px-4 py-2 bg-white border border-black/[0.05] rounded-full text-black/50 group-hover:text-black group-hover:border-[#F2B800]/30 transition-all"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="absolute bottom-12 left-10 right-10 flex flex-col gap-4">
            <div className="w-full h-[1px] bg-black/10 relative">
              <motion.div
                style={{ scaleX: smoothProgress }}
                className="absolute inset-0 h-full bg-[#F2B800] origin-left shadow-[0_0_15px_rgba(242,184,0,0.4)]"
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-black text-black uppercase tracking-[0.4em]">
              <motion.span style={{ opacity: step1Opacity }}>Logic</motion.span>
              <motion.span style={{ opacity: step2Opacity }}>
                Visuals
              </motion.span>
              <motion.span style={{ opacity: step3Opacity }}>Core</motion.span>
              <motion.span style={{ opacity: step4Opacity }}>
                Growth
              </motion.span>
            </div>
          </div>
        </div>
      </section>

      {/* --- MOBILE VIEW (Vertical Cards) --- */}
      {/* Reduced py-20 to py-12 to remove extra space */}
      <section className="md:hidden bg-white py-12 px-6 border-t border-gray-100 flex flex-col items-center">
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#F2B800] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
              Operation: Workflow
            </span>
          </div>
        </div>
        <h2 className="text-3xl font-bold tracking-tighter text-black leading-none text-center mb-8">
          A Methodical
          <br />
          <span className="text-black/20 italic font-light">Approach.</span>
        </h2>

        {/* Space between cards reduced to space-y-4 */}
        <div className="space-y-4 w-full max-w-md">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              /* Reduced p-8 to p-6 for tighter fit */
              className="bg-[#F9F9F9] border border-black/[0.05] rounded-[24px] p-6 relative overflow-hidden flex flex-col items-center text-center"
            >
              {/* Mobile ID Watermark moved slightly for better centering */}
              <span className="absolute -top-2 -right-2 text-[60px] font-black text-black/[0.03] leading-none">
                {step.id}
              </span>

              <div className="relative z-10 w-full flex flex-col items-center">
                {/* Centered Icon */}
                <div className="w-12 h-12 p-3 bg-white border border-black/5 rounded-2xl shadow-sm mb-4 mx-auto">
                  {step.icon}
                </div>
                
                <span className="text-[9px] font-black text-[#F2B800] uppercase tracking-[0.4em] block mb-2">
                  {step.phase}
                </span>
                <h3 className="text-xl font-bold text-black mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {step.desc}
                </p>
                
                {/* Centered Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white border border-black/[0.05] rounded-full text-black/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}