"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const brandYellow = "#F2B800";

  return (
    <section className="bg-[#050505] py-4 md:py-2 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* --- TOP STATUS INDICATOR --- */}
        <div className="flex items-center gap-3 mb-16 md:mb-24">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2B800] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F2B800]"></span>
          </span>
          <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white/30">
            Based in the Digital Ether — Scaling Globally
          </span>
        </div>

        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* LEFT: MASSIVE HEADLINE */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[28px] md:text-[42px] lg:text-[72px] font-bold tracking-tighter text-white leading-[1.85]"
            >
              Small team.
              <br />
              <span className="text-white/20">Big digital </span>
              <br />
              <span className="italic font-light">thinking.</span>
            </motion.h2>
          </div>

          {/* RIGHT: NARRATIVE CONTENT */}
          <div className="lg:col-span-5 pt-4 md:pt-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-10"
            >
              <p className="text-[20px] md:text-[24px] text-white/80 leading-snug font-medium">
                SkyNovaDigitals brings together design, technology and marketing
                to help ambitious brands build better digital experiences.
              </p>

              <div className="space-y-6">
                <p className="text-white/40 text-[16px] md:text-[18px] leading-relaxed">
                  We combine strategic thinking with hands-on execution—giving
                  businesses the quality of a premium studio without the
                  unnecessary complexity of a large agency.
                </p>

                {/* BRAND PILL TAGS */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {["Strategy", "Design", "Code"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* REFINED CTA */}
              <div className="pt-10">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-6"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#F2B800] transition-colors duration-500">
                      <ArrowRight
                        className="text-white group-hover:text-[#F2B800] transition-colors duration-500"
                        size={24}
                      />
                    </div>
                    {/* Rotating Text/Circle Decor */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-[-8px] border border-dashed border-white/5 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F2B800] mb-1">
                      Get to know us
                    </span>
                    <span className="text-xl font-bold text-white border-b border-white/10 pb-1 group-hover:border-[#F2B800] transition-all">
                      More About Us
                    </span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- BOTTOM DECOR LINE --- */}
        <div className="mt-32 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
