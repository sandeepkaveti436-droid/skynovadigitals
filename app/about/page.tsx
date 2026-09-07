"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2B800] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F2B800]"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
            Status: Currently Innovating
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-6xl md:text-[7vw] font-medium tracking-tighter leading-[0.9] mb-24"
        >
          We are{" "}
          <span className="italic font-light text-white/30">SkyNova</span>. A
          boutique studio turning{" "}
          <span className="text-[#F2B800]">visionary</span> ideas into
          high-performance products.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F2B800] mb-6">
              Our Philosophy
            </p>
            <h2 className="text-3xl font-bold tracking-tight">
              Design is not just how it looks, but how it works.
            </h2>
          </div>
          <div className="md:col-span-8 text-xl text-white/50 leading-relaxed space-y-8 font-medium">
            <p>
              Founded on the principle of digital excellence, SkyNova Digitals
              was born to help ambitious companies navigate the complex world of
              modern technology.
            </p>
            <p>
              We don't just build websites; we engineer digital experiences that
              move businesses forward. Our team consists of multidisciplinary
              experts in design, engineering, and growth strategy.
            </p>
            <div className="pt-12 grid grid-cols-2 gap-12 border-t border-white/10">
              <div>
                <p className="text-4xl font-bold text-white mb-2">60+</p>
                <p className="text-xs uppercase tracking-widest text-white/30">
                  Projects Delivered
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">12</p>
                <p className="text-xs uppercase tracking-widest text-white/30">
                  Global Awards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
