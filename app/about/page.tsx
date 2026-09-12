"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Rocket } from "lucide-react";
import RevealHeading from "@/src/components/ui/RevealHeading";

export default function AboutPage() {
  const brandYellow = "#F2B800";

  return (
    <main className="bg-white text-black min-h-screen pt-24 md:pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* --- STATUS INDICATOR --- */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-10 md:mb-12">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2B800] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F2B800]"></span>
          </span>
          <span className="text-[12px] font-black uppercase tracking-[0.4em] text-gray-400">
            Status: Currently Innovating
          </span>
        </div>

        {/* --- HERO SECTION --- */}
        <header className="flex flex-col items-center md:items-start text-center md:text-left">
          <RevealHeading
            as="h1"
            text="We are SkyNova. A boutique studio turning visionary ideas into high-performance products."
            className="text-[32px] md:text-6xl font-bold tracking-tighter leading-tight mb-12 md:mb-20"
          />
        </header>

        {/* --- PHILOSOPHY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-32">
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F2B800] mb-4">
              Our Philosophy
            </p>
            <RevealHeading
              text="Design is not just how it looks, but how it works."
              className="text-[24px] md:text-3xl font-bold tracking-tight leading-tight"
            />
          </div>
          <div className="md:col-span-8 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
            <p className="text-[20px] md:text-xl text-gray-600 leading-relaxed font-medium">
              Founded on the principle of digital excellence, SkyNova Digitals
              was born to help ambitious companies navigate the complex world of
              modern technology.
            </p>
            <p className="text-[18px] md:text-lg text-gray-500 leading-relaxed">
              We don't just build websites; we engineer digital experiences that
              move businesses forward. Our team consists of multidisciplinary
              experts in design, engineering, and growth strategy.
            </p>

            {/* Stats */}
            <div className="w-full pt-12 grid grid-cols-2 gap-8 border-t border-gray-100">
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-black mb-1">
                  60+
                </p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Projects Delivered
                </p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-black mb-1">
                  12+
                </p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  Industry Sectors
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- STRATEGIC PILLARS (Mission, Vision, Passion) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-32">
          {/* Mission */}
          <div className="p-8 md:p-10 bg-gray-50 rounded-[32px] border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left group hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:bg-[#F2B800] group-hover:text-white transition-colors">
              <Target size={24} />
            </div>
            <h3 className="text-[20px] font-bold mb-4 uppercase tracking-tighter">
              Our Mission
            </h3>
            <p className="text-gray-500 leading-relaxed text-[16px]">
              To bridge the gap between technical complexity and human
              intuition, creating digital tools that empower businesses to scale
              effortlessly.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 md:p-10 bg-gray-50 rounded-[32px] border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left group hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:bg-[#F2B800] group-hover:text-white transition-colors">
              <Eye size={24} />
            </div>
            <h3 className="text-[20px] font-bold mb-4 uppercase tracking-tighter">
              Our Vision
            </h3>
            <p className="text-gray-500 leading-relaxed text-[16px]">
              To become the global standard for boutique digital engineering,
              where every line of code and every pixel serves a strategic
              business purpose.
            </p>
          </div>

          {/* Passion */}
          <div className="p-8 md:p-10 bg-gray-50 rounded-[32px] border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left group hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:bg-[#F2B800] group-hover:text-white transition-colors">
              <Heart size={24} />
            </div>
            <h3 className="text-[20px] font-bold mb-4 uppercase tracking-tighter">
              Our Passion
            </h3>
            <p className="text-gray-500 leading-relaxed text-[16px]">
              We are obsessed with performance. From sub-second load times to
              frictionless user journeys, we live for the details that define
              quality.
            </p>
          </div>
        </div>

        {/* --- FINAL STATEMENT --- */}
        <div className="bg-[#F2B800] p-10 md:p-20 rounded-[40px] text-center">
          <Rocket className="mx-auto mb-8 text-black" size={40} />
          <h2 className="text-[18px] md:text-[32px] font-bold text-black tracking-tighter mb-6">
            Small team. Massive impact.
          </h2>
          <p className="text-black/70 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            We maintain a small, highly specialized team to ensure that every
            project gets the dedicated attention it deserves from our core
            experts.
          </p>
          <button className="bg-black text-white px-10 py-2.5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all">
            Start a Journey with Us
          </button>
        </div>
      </div>
    </main>
  );
}
