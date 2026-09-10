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
    <span ref={ref} className="flex items-baseline">
      <motion.span>{displayValue}</motion.span>
      <span className="text-[#F2B800] ml-1">{suffix}</span>
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
    <section className="bg-[#050505] py-24 md:py-48 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-white/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                Measurable Impact
              </span>
            </div>
            <h2 className="text-[20px] md:text-[32px] font-bold tracking-tighter text-white leading-none">
              Designed for <br />
              <span className="text-[#F2B800]">impact.</span>
            </h2>
          </div>
          <div className="max-w-[300px]">
            <p className="text-white/40 text-sm font-medium leading-relaxed">
              We don&apos;t chase vanity metrics. We focus on the data that
              moves your business needle forward.
            </p>
          </div>
        </div>

        {/* --- DATA GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#050505] p-10 md:p-12 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors duration-500 min-h-[320px]"
            >
              {/* Technical Indicator */}
              <div className="flex justify-between items-start">
                <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#F2B800] transition-colors" />
                <span className="text-[9px] font-mono text-white/10 uppercase tracking-widest">
                  Metrics_v2.0
                </span>
              </div>

              {/* The Number */}
              <div>
                <div className="text-[20px] md:text-[60px] font-bold text-white tracking-tighter mb-4 flex items-baseline">
                  <AnimatedMetric value={item.value} suffix={item.suffix} />
                </div>
                <h3 className="text-[16px] md:text-lg font-medium text-white mb-4 uppercase tracking-tight">
                  {item.label}
                </h3>
              </div>

              {/* Sub-context */}
              <p className="text-white/30 text-xs font-medium leading-relaxed">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM PROOF DECOR --- */}
        <div className="mt-20 flex justify-center items-center gap-10 opacity-20">
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white/20" />
          <span className="text-[8px] font-mono uppercase tracking-[1em] whitespace-nowrap">
            Verified Outcomes Only
          </span>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </div>
    </section>
  );
}
