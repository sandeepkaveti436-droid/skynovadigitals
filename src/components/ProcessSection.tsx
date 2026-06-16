"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Clock, Zap, ShieldCheck } from "lucide-react";
import { useScrollAnimations } from "@/src/hooks/useScrollAnimations";

const ProcessSection = () => {
  const brandYellow = "#F2B800";
  const { fadeInUp } = useScrollAnimations();
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (headerRef.current) fadeInUp(headerRef.current);
    stepsRef.current.forEach((ref, index) => {
      if (ref) fadeInUp(ref, index * 0.15);
    });
  }, [fadeInUp]);

  const steps = [
    {
      id: "01",
      title: "Discovery Call",
      description:
        "A free 60-min session to map out goals, market, and technical scope.",
      icon: <Clock size={24} />, // Icon size set to 24px
    },
    {
      id: "02",
      title: "Design & Build",
      description:
        "Agile sprints with weekly demos — you always know what's shipping next.",
      icon: <Zap size={24} />, // Icon size set to 24px
    },
    {
      id: "03",
      title: "Launch & Scale",
      description:
        "Deploy, monitor, and improve — we stay with you well past launch.",
      icon: <ShieldCheck size={24} />, // Icon size set to 24px
    },
  ];

  return (
    <section className="bg-white text-black py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p
            style={{ color: brandYellow }}
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Idea to launch in three steps
          </h2>
        </motion.div>

        {/* Steps Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* CONNECTING LINES */}
          {/* Desktop: Horizontal Dashed Line - Centered at 20px (half of 40px box) */}
          <div className="hidden lg:block absolute top-5 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-gray-200 z-0" />

          {/* Mobile: Vertical Dashed Line */}
          <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-gray-200 -translate-x-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                ref={(el) => {
                  if (el) stepsRef.current[index] = el;
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {/* Icon Container - 40px Box */}
                <div className="relative mb-6 bg-white px-4">
                  <div
                    className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                    style={{ width: "40px", height: "40px" }} // Exactly 40px
                  >
                    <div style={{ color: brandYellow }}>{step.icon}</div>
                  </div>
                </div>

                {/* Step ID - 12px Text */}
                <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Step {step.id}
                </span>

                {/* Text Content */}
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm max-w-[250px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
