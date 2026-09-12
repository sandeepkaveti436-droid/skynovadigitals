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
    <section className="bg-white py-16 md:py-32 px-6 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        {/* --- THE STRUCTURAL GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 border-t border-black/10">
          {/* LEFT: FIXED POSITIONING HEADER - Centered on Mobile */}
          <div className="lg:col-span-4 pt-10 md:pt-12 lg:sticky lg:top-32 h-fit flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#F2B800]" />
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-black/40">
                The Partnership
              </span>
            </div>
            <h2 className="text-[30px] md:text-[48px] font-bold tracking-tighter text-black leading-[1.1]">
              More than <br className="hidden md:block" />
              an agency.
            </h2>
            <p className="mt-6 md:mt-12 text-gray-500 text-base md:text-lg max-w-xs font-medium leading-tight">
              We operate as your dedicated digital product department.
            </p>
          </div>

          {/* RIGHT: SEQUENTIAL PILLARS - Centered on Mobile */}
          <div className="lg:col-span-8">
            {pillars.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative border-b border-black/10 py-10 md:py-16 lg:pl-20 flex flex-col items-center text-center md:items-start md:text-left md:flex-row transition-all duration-500 hover:bg-gray-50/50"
              >
                {/* ID & Laser Indicator */}
                <div className="flex items-center justify-center md:justify-start gap-4 md:gap-6 min-w-[100px] mb-4 md:mb-0">
                  <span className="text-sm font-black text-black/20 group-hover:text-[#F2B800] transition-colors duration-500">
                    {item.id}
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "24px" }}
                    className="h-[1px] bg-[#F2B800] hidden md:block"
                  />
                </div>

                {/* Content */}
                <div className="max-w-2xl px-2 md:px-0">
                  <h3 className="text-[20px] md:text-[32px] font-bold text-black mb-3 md:mb-4 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-lg font-normal leading-relaxed group-hover:text-black transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>

                {/* Corner Accent - Visible only on Desktop */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                  <ArrowRight
                    className="text-[#F2B800] -rotate-45"
                    size={28}
                    strokeWidth={1.5}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM CTA: Centered on Mobile --- */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-black/10 pb-16 md:pb-20">
          <h4 className="text-black/30 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em]">
            Ready to optimize?
          </h4>

          {/* --- REFINED SMALLER BRAND BUTTON --- */}
          <div className="flex items-center gap-2 cursor-pointer group scale-90 md:scale-100">
            {/* Reduced height and padding for text capsule */}
            <div className="bg-[#181C1A] px-5 py-2 md:px-7 md:py-3 rounded-[14px] md:rounded-[16px] border border-black/5 transition-all duration-300 group-hover:bg-[#F2B800]">
              <span className="text-[12px] md:text-[14px] font-medium uppercase tracking-[0.15em] text-white group-hover:text-black whitespace-nowrap">
                Start the conversation
              </span>
            </div>

            {/* Reduced width and height for arrow squircle */}
            <div
              className="w-[48px] h-[44px] md:w-[55px] md:h-[50px] rounded-[6px] rounded-tl-[20px] md:rounded-tl-[25px] rounded-br-[20px] md:rounded-br-[25px] flex items-center justify-center text-black relative transition-all duration-500 shadow-sm"
              style={{ backgroundColor: brandYellow }}
            >
              <ArrowRight
                size={20}
                className="md:w-6 md:h-6"
                strokeWidth={2.5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
