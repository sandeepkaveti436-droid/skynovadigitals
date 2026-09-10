"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    id: "01",
    title: "Strategy First",
    desc: "We dive into your business logic before we touch a single pixel. Our design decisions are backed by data and market positioning.",
  },
  {
    id: "02",
    title: "Design That Performs",
    desc: "Aesthetics are a given. We focus on conversion, user psychology, and frictionless journeys that turn visitors into advocates.",
  },
  {
    id: "03",
    title: "Built for Speed",
    desc: "We use a cutting-edge tech stack to ensure your site loads in milliseconds. Performance is not a feature; it is a foundation.",
  },
  {
    id: "04",
    title: "Built to Grow",
    desc: "We don't build one-offs. We create scalable digital systems that evolve alongside your company's roadmap.",
  },
];

export default function WhyChooseUs() {
  const brandYellow = "#F2B800";

  return (
    <section className="bg-[#050505] py-24 md:py-30 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* --- THE STRUCTURAL GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 border-t border-white/10">
          {/* LEFT: FIXED POSITIONING HEADER */}
          <div className="lg:col-span-4 pt-12 lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#F2B800]" />
              <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white/40">
                The Partnership
              </span>
            </div>
            <h2 className="text-[28px] md:text-[42px] font-bold tracking-tighter text-white leading-[0.9]">
              More than <br />
              an agency.
            </h2>
            <p className="mt-12 text-white/40 text-lg max-w-xs font-medium leading-tight">
              We operate as your dedicated digital product department.
            </p>
          </div>

          {/* RIGHT: SEQUENTIAL PILLARS */}
          <div className="lg:col-span-8">
            {pillars.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative border-b border-white/10 py-12 md:py-14 lg:pl-20 flex flex-col md:flex-row items-start gap-8 md:gap-24 transition-all duration-500 hover:bg-white/[0.01]"
              >
                {/* ID & Laser Indicator */}
                <div className="flex items-center gap-6 min-w-[100px]">
                  <span className="text-sm font-black text-white/20 group-hover:text-[#F2B800] transition-colors duration-500">
                    {item.id}
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "24px" }}
                    className="h-[1px] bg-[#F2B800] hidden md:block"
                  />
                </div>

                {/* Content */}
                <div className="max-w-2xl">
                  <h3 className="text-[20px] md:text-[28px] font-bold text-white mb-6 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-[18px] md:text-[18px] font-regular leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight
                    className="text-[#F2B800] -rotate-45"
                    size={32}
                    strokeWidth={1}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-20">
          <h4 className="text-white/20 text-sm font-bold uppercase tracking-[0.3em]">
            Ready to optimize?
          </h4>

          {/* --- REPLACED WITH BRAND BUTTON DESIGN --- */}
          <div className="flex items-center gap-2 cursor-pointer group">
            {/* Text Capsule */}
            <div className="bg-[#181C1A]/90 backdrop-blur-md px-8 py-4 rounded-[16px] border border-white/10 transition-all duration-300 group-hover:bg-[#F2B800] group-hover:border-[#F2B800]">
              <span className="text-[14px] md:text-[14px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-black whitespace-nowrap">
                Start the conversation
              </span>
            </div>
            {/* Arrow Squircle */}
            <div
              className="w-[55px] h-[50px] rounded-[6px] rounded-tl-[25px] rounded-br-[25px] flex items-center justify-center text-black relative transition-all duration-500"
              style={{ backgroundColor: brandYellow }}
            >
              <ArrowRight size={24} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
