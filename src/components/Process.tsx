"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    id: "01",
    phase: "DISCOVERY",
    title: "The Strategic Blueprint",
    desc: "We don't start with code; we start with logic. We dive into your market DNA to find the 'Why' behind your project.",
    deliverables: ["Market Intelligence", "User Psychology", "Project Roadmap"],
    icon: <Search className="w-6 h-6" />,
    color: "#F2B800",
  },
  {
    id: "02",
    phase: "DESIGN",
    title: "Superior Visual Systems",
    desc: "Crafting aesthetics that convert. We build high-fidelity design systems that are both beautiful and intuitively functional.",
    deliverables: [
      "UI/UX Architecture",
      "Interactive Prototypes",
      "Brand Systems",
    ],
    icon: <PenTool className="w-6 h-6" />,
    color: "#000000",
  },
  {
    id: "03",
    phase: "DEVELOPMENT",
    title: "Engineering Excellence",
    desc: "Lightning-fast, clean, and scalable. We use the Next.js ecosystem to ensure your product leads the market in performance.",
    deliverables: ["Modern Tech Stack", "Secure API Logic", "Cloud Scaling"],
    icon: <Code2 className="w-6 h-6" />,
    color: "#F2B800",
  },
  {
    id: "04",
    phase: "GROWTH",
    title: "Scaling Your Impact",
    desc: "Launch is only the beginning. We optimize funnels and run performance SEO to turn your traffic into consistent revenue.",
    deliverables: ["A/B Testing", "Conversion Funnels", "Growth SEO"],
    icon: <Rocket className="w-6 h-6" />,
    color: "#000000",
  },
];

const ProcessCard = ({
  step,
  index,
  total,
}: {
  step: (typeof steps)[0];
  index: number;
  total: number;
}) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  // This creates the "Stacking" effect: Cards scale down slightly as the next one comes over
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9 + index * 0.02]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 mb-12 md:mb-24 w-full"
    >
      <motion.div
        style={{
          scale,
          opacity,
          backgroundColor: index % 2 === 0 ? "#ffffff" : "#0A0A0A",
        }}
        className={`relative w-full rounded-[32px] md:rounded-[48px] border border-black/5 p-8 md:p-16 shadow-2xl shadow-black/5 overflow-hidden`}
      >
        {/* Background Accent */}
        <div
          className={`absolute top-0 right-0 w-64 h-64 blur-[120px] rounded-full opacity-10 ${index % 2 === 0 ? "bg-[#F2B800]" : "bg-white"}`}
        />

        <div className="relative z-10 flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Phase Number */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <div
              className={`px-4 py-1 rounded-full border ${index % 2 === 0 ? "border-black/10 text-black/40" : "border-white/10 text-white/40"} text-[10px] font-black tracking-[0.3em]`}
            >
              PHASE {step.id}
            </div>
            <div
              className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center ${index % 2 === 0 ? "bg-black text-[#F2B800]" : "bg-[#F2B800] text-black"}`}
            >
              {step.icon}
            </div>
            <h3
              className={`text-3xl md:text-5xl font-bold tracking-tighter ${index % 2 === 0 ? "text-black" : "text-white"}`}
            >
              {step.title}
            </h3>
          </div>

          {/* Description & Deliverables */}
          <div className="md:col-span-8 space-y-8">
            <p
              className={`text-lg md:text-xl leading-relaxed ${index % 2 === 0 ? "text-gray-500" : "text-gray-400"}`}
            >
              {step.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {step.deliverables.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className={`w-5 h-5 ${index % 2 === 0 ? "text-[#F2B800]" : "text-white"}`}
                  />
                  <span
                    className={`text-sm font-bold uppercase tracking-widest ${index % 2 === 0 ? "text-black" : "text-white"}`}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Process() {
  return (
    <main className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-[#F2B800] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
            The SkyNova Framework
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">
            A Methodical Way <br />
            <span className="text-gray-300 italic">to Build.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto">
            A structured, 4-phase journey designed to take your digital presence
            from concept to market leader.
          </p>
        </motion.div>
      </section>

      {/* --- STACKING CARDS SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        {steps.map((step, index) => (
          <ProcessCard
            key={step.id}
            step={step}
            index={index}
            total={steps.length}
          />
        ))}
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="pb-32 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-5xl mx-auto bg-black rounded-[40px] p-12 md:p-24 text-center text-white overflow-hidden relative group"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
            <Rocket size={300} />
          </div>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-8">
            Ready to initiate <br /> the{" "}
            <span className="text-[#F2B800]">transformation?</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F2B800] text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center gap-3 mx-auto"
          >
            Start Project <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
