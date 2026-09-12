"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

// --- HIGH-END COUNTER COMPONENT ---
const AnimatedMetric = ({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const springValue = useSpring(count, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(springValue, (latest) =>
    latest.toFixed(decimals),
  );

  useEffect(() => {
    if (isInView) count.set(value);
  }, [isInView, value, count]);

  return (
    // Added justify-center for mobile centering
    <span
      ref={ref}
      className="flex items-baseline justify-center md:justify-start"
    >
      <motion.span className="text-black">{displayValue}</motion.span>
      <span className="text-[#F2B800] ml-1 font-bold">{suffix}</span>
    </span>
  );
};

const results = [
  {
    value: 45,
    suffix: "%",
    label: "Engagement improvement",
    sub: "Calculated across healthcare & fintech portals.",
  },
  {
    value: 3,
    suffix: "×",
    label: "Faster user journey",
    sub: "Optimization of core conversion funnels.",
  },
  {
    value: 25,
    suffix: "+",
    label: "Digital screens designed",
    sub: "Average per high-fidelity product sprint.",
  },
  {
    value: 10,
    suffix: "+",
    label: "Industries explored",
    sub: "From SaaS infrastructure to wellness.",
  },
];

export default function Results() {
  return (
    <section className="bg-white py-16 md:py-48 px-6 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER: Centered on mobile --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-20 md:mb-24 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-10 h-[1px] bg-zinc-200" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
                Measurable Impact
              </span>
              <div className="w-10 h-[1px] bg-zinc-200 md:hidden" />
            </div>
            <h2 className="text-[32px] md:text-[64px] font-bold tracking-tighter text-black leading-none">
              Designed for <br />
              <span className="text-[#F2B800]">impact.</span>
            </h2>
          </div>
          <div className="max-w-[300px] text-center md:text-left">
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              We don&apos;t chase vanity metrics. We focus on the data that
              moves your business needle forward.
            </p>
          </div>
        </div>

        {/* --- DATA GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 md:p-12 flex flex-col items-center md:items-stretch justify-between group hover:bg-zinc-50 transition-colors duration-500 min-h-[300px] md:min-h-[320px]"
            >
              {/* Technical Indicator - Spaced on top, but centered content below */}
              <div className="w-full flex justify-between items-start mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-200 group-hover:bg-[#F2B800] transition-colors" />
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
                  Metrics_v2.0
                </span>
              </div>

              {/* The Number & Label: Centered on mobile */}
              <div className="text-center md:text-left">
                <div className="text-[48px] md:text-[64px] font-bold text-black tracking-tighter mb-2 flex items-baseline justify-center md:justify-start leading-none">
                  <AnimatedMetric value={item.value} suffix={item.suffix} />
                </div>
                <h3 className="text-[12px] md:text-sm font-bold text-black mb-4 uppercase tracking-widest">
                  {item.label}
                </h3>
              </div>

              {/* Sub-context: Centered on mobile */}
              <p className="text-zinc-400 text-xs font-medium leading-relaxed text-center md:text-left">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
