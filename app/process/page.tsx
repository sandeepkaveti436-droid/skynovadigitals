"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  LineChart,
  ArrowRight,
  Check,
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery & Analysis",
    icon: <Search className="w-5 h-5" />,
    desc: "We research your competitors and audience to build a roadmap that actually works.",
    features: ["Competitor Audit", "User Persona", "Strategic Roadmap"],
  },
  {
    num: "02",
    title: "High-End Design",
    icon: <PenTool className="w-5 h-5" />,
    desc: "We create clean, pixel-perfect interfaces that reflect your brand's premium quality.",
    features: ["UI/UX Systems", "Interactive Prototypes", "Brand Identity"],
  },
  {
    num: "03",
    title: "Modern Development",
    icon: <Code2 className="w-5 h-5" />,
    desc: "Using Next.js and AI, we build fast, secure, and scalable digital products.",
    features: ["Next.js Performance", "AI Automations", "Clean Codebase"],
  },
  {
    num: "04",
    title: "Growth & Optimization",
    icon: <LineChart className="w-5 h-5" />,
    desc: "Post-launch, we optimize speed and SEO to keep you ahead of the competition.",
    features: ["SEO Monitoring", "Conversion Testing", "Scale-up Support"],
  },
];

const ProcessCard = ({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className="relative pl-12 md:pl-24 pb-20 last:pb-0"
    >
      {/* Number Icon Circle */}
      <div className="absolute left-0 top-0 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors duration-500 group-hover:border-[#F2B800]">
        <span className="text-xs font-bold text-gray-400">{step.num}</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-50 rounded-lg text-[#F2B800]">
              {step.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black">
              {step.title}
            </h3>
          </div>

          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-lg mb-6">
            {step.desc}
          </p>

          <div className="flex flex-wrap gap-4">
            {step.features.map((feat, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-[12px] font-bold text-gray-700 bg-gray-50 px-3 py-1 rounded-full border border-gray-100"
              >
                <Check className="w-3 h-3 text-[#F2B800]" />
                {feat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProcessPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 text-center max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F2B800] mb-4 block"
        >
          Workflow
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold tracking-tighter text-black mb-6"
        >
          How we bring <br />{" "}
          <span className="text-gray-400">Sky Nova Digitals</span> value.
        </motion.h1>
        <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
          Our process is designed for transparency and high-performance results.
          From strategy to scale, we handle every detail.
        </p>
      </section>

      {/* Timeline Section */}
      <section
        className="max-w-4xl mx-auto px-6 md:px-12 relative"
        ref={containerRef}
      >
        {/* Background Static Line */}
        <div className="absolute left-5 md:left-[24px] top-0 h-full w-[1px] bg-gray-100" />

        {/* Animated Progress Line */}
        <motion.div
          className="absolute left-5 md:left-[24px] top-0 w-[2px] bg-[#F2B800] origin-top z-0"
          style={{ scaleY }}
        />

        {steps.map((step, i) => (
          <ProcessCard key={i} step={step} index={i} />
        ))}
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-black rounded-[40px] p-10 md:p-16 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
              Ready for the next <span className="text-[#F2B800]">Phase?</span>
            </h2>
            <motion.button
              whileHover={{ x: 5 }}
              className="bg-[#F2B800] text-black px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 mx-auto"
            >
              Start Project <ArrowRight size={18} />
            </motion.button>
          </div>
          {/* Subtle background glow */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#F2B800] opacity-10 blur-[100px]" />
        </div>
      </section>
    </main>
  );
}
