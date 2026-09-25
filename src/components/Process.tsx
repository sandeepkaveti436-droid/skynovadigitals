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
    title: "Strategic Blueprint",
    desc: "We analyze your market DNA to find the 'Why' behind your project before touching a single line of code.",
    deliverables: ["Market Intelligence", "User Psychology", "Project Roadmap"],
    icon: <Search className="w-5 h-5" />,
  },
  {
    id: "02",
    phase: "DESIGN",
    title: "Visual Systems",
    desc: "Crafting high-fidelity design systems that are both aesthetically superior and intuitively functional.",
    deliverables: [
      "UI/UX Architecture",
      "Interactive Prototypes",
      "Brand Systems",
    ],
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    id: "03",
    phase: "DEVELOPMENT",
    title: "Engineering",
    desc: "Lightning-fast, clean, and scalable code using the Next.js ecosystem for market-leading performance.",
    deliverables: ["Modern Tech Stack", "Secure API Logic", "Cloud Scaling"],
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    id: "04",
    phase: "GROWTH",
    title: "Scaling Impact",
    desc: "Launch is only the beginning. We optimize funnels and SEO to turn traffic into consistent revenue.",
    deliverables: ["A/B Testing", "Conversion Funnels", "Growth SEO"],
    icon: <Rocket className="w-5 h-5" />,
  },
];

const ProcessCard = ({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94 + index * 0.01]);

  return (
    <div ref={cardRef} className="sticky top-28 md:top-36 mb-6 md:mb-10 w-full">
      <motion.div
        style={{
          scale,
          backgroundColor: index % 2 === 0 ? "#ffffff" : "#0A0A0A",
        }}
        className={`relative w-full rounded-[24px] md:rounded-[40px] border border-black/5 p-6 md:p-12 shadow-xl shadow-black/5 overflow-hidden`}
      >
        <div
          className={`absolute top-0 right-0 w-48 h-48 blur-[100px] rounded-full opacity-10 ${index % 2 === 0 ? "bg-[#F2B800]" : "bg-white"}`}
        />

        <div className="relative z-10 flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-12 items-center">
          <div className="md:col-span-4 flex flex-col items-start gap-3">
            <div
              className={`px-3 py-1 rounded-full border ${index % 2 === 0 ? "border-black/10 text-black/40" : "border-white/10 text-white/40"} text-[9px] font-black tracking-[0.3em]`}
            >
              PHASE {step.id}
            </div>
            <div
              className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center ${index % 2 === 0 ? "bg-black text-[#F2B800]" : "bg-[#F2B800] text-black"}`}
            >
              {step.icon}
            </div>
            <h3
              className={`text-2xl md:text-4xl font-bold tracking-tighter ${index % 2 === 0 ? "text-black" : "text-white"}`}
            >
              {step.title}
            </h3>
          </div>

          <div className="md:col-span-8 space-y-6">
            <p
              className={`text-sm md:text-lg leading-relaxed ${index % 2 === 0 ? "text-gray-500" : "text-gray-400"}`}
            >
              {step.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {step.deliverables.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    className={`w-4 h-4 ${index % 2 === 0 ? "text-[#F2B800]" : "text-white"}`}
                  />
                  <span
                    className={`text-[11px] font-bold uppercase tracking-widest ${index % 2 === 0 ? "text-black" : "text-white"}`}
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
      {/* --- HERO SECTION: Reduced padding and margins --- */}
      <section className="pt-6 pb-6 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-[#F2B800] text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
            The SkyNova Framework
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1] mb-4">
            A Methodical Way <br />
            <span className="text-gray-300 italic">to Build.</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto">
            A structured, 4-phase journey designed to take your digital presence
            from concept to market leader.
          </p>
        </motion.div>
      </section>

      {/* --- STACKING CARDS: Reduced bottom padding --- */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        {steps.map((step, index) => (
          <ProcessCard key={step.id} step={step} index={index} />
        ))}
      </section>

      {/* --- FINAL CTA: More compact padding --- */}
      <section className="pb-14 px-6">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          className="max-w-4xl mx-auto bg-black rounded-[32px] p-10 md:p-20 text-center text-white overflow-hidden relative group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Rocket size={200} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Ready to initiate <br /> the{" "}
            <span className="text-[#F2B800]">transformation?</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F2B800] text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 mx-auto"
          >
            Start Project <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
