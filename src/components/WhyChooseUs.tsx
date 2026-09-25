"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, ShieldCheck, TrendingUp } from "lucide-react";

const pillars = [
  {
    id: "01",
    title: "Strategy First",
    desc: "We dive into your business logic before we touch a single pixel. Our design decisions are backed by data and market positioning.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    id: "02",
    title: "Design That Performs",
    desc: "Aesthetics are a given. We focus on conversion, user psychology, and frictionless journeys that turn visitors into advocates.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: "03",
    title: "Built for Speed",
    desc: "We use a cutting-edge tech stack to ensure your site loads in milliseconds. Performance is not a feature; it is a foundation.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    id: "04",
    title: "Built to Grow",
    desc: "We don't build one-offs. We create scalable digital systems that evolve alongside your company's roadmap.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

export default function WhyChooseUs() {
  const brandYellow = "#F2B800";

  return (
    <section className="bg-white py-24 md:py-40 px-6 overflow-hidden relative">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F2B800]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-10 h-[1px] bg-[#F2B800]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">
                The Partnership
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black leading-[0.9]">
              More than <span className="text-gray-300 italic">an agency.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-[280px] leading-relaxed border-l border-gray-100 pl-6">
            We operate as your dedicated digital product department, scaling
            your vision with precision.
          </p>
        </div>

        {/* --- INTERACTIVE BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {pillars.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-gray-50/50 border border-gray-100 p-8 rounded-[32px] overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-[#F2B800]/10"
            >
              {/* Corner Accent Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#F2B800]/10 blur-2xl rounded-full group-hover:bg-[#F2B800]/20 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-50 flex items-center justify-center text-black mb-12 group-hover:bg-[#F2B800] group-hover:scale-110 transition-all duration-500">
                  {item.icon}
                </div>

                <div className="mb-4 flex items-center gap-3">
                  <span className="text-[10px] font-black text-[#F2B800] opacity-50">
                    {item.id}
                  </span>
                  <h3 className="text-xl font-bold text-black tracking-tight group-hover:text-[#F2B800] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- REFINED ACTION BAR --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 md:mt-32 p-8 md:p-12 rounded-[40px] bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
        >
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:rotate-12 transition-transform duration-700">
            <Target size={200} />
          </div>

          <div className="text-center md:text-left relative z-10">
            <h4 className="text-2xl md:text-3xl font-bold tracking-tighter mb-2">
              Ready to redefine your{" "}
              <span className="text-[#F2B800]">standards?</span>
            </h4>
            <p className="text-gray-400 text-sm font-medium tracking-wide">
              Let&apos;s build a digital presence that actually converts.
            </p>
          </div>

          {/* BRAND BUTTON */}
          <div className="flex items-center gap-2 cursor-pointer group/btn relative z-10">
            <div className="bg-[#F2B800] px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-white flex items-center gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-black">
                Start Project
              </span>
              <ArrowRight
                size={18}
                className="text-black group-hover/btn:translate-x-1 transition-transform"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
