"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const brandYellow = "#F2B800";

  return (
    <section className="bg-white py-16 md:py-24 px-6 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        {/* --- TOP STATUS INDICATOR: Centered on mobile --- */}
        <div className="flex items-center justify-center md:justify-start gap-3 mb-16 md:mb-24">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2B800] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F2B800]"></span>
          </span>
          <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-400 text-center">
            Based in the Digital Ether — Scaling Globally
          </span>
        </div>

        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* LEFT: MASSIVE HEADLINE: Centered on mobile */}
          <div className="lg:col-span-7 flex flex-col items-center md:items-start">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[32px] md:text-[56px] lg:text-[84px] font-bold tracking-tighter text-black leading-[1.1] text-center md:text-left"
            >
              Small team.
              <br />
              <span className="text-gray-300">Big digital </span>
              <br />
              <span className="italic font-light">thinking.</span>
            </motion.h2>
          </div>

          {/* RIGHT: NARRATIVE CONTENT: Centered on mobile */}
          <div className="lg:col-span-5 pt-4 md:pt-10 flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 md:space-y-10 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <p className="text-[18px] md:text-[26px] text-gray-800 leading-snug font-medium max-w-md md:max-w-none">
                SkyNovaDigitals brings together design, technology and marketing
                to help ambitious brands build better digital experiences.
              </p>

              <div className="space-y-6 flex flex-col items-center md:items-start">
                <p className="text-gray-500 text-[15px] md:text-[18px] leading-relaxed max-w-sm md:max-w-md">
                  We combine strategic thinking with hands-on execution—giving
                  businesses the quality of a premium studio without the
                  unnecessary complexity of a large agency.
                </p>

                {/* BRAND PILL TAGS: Centered on mobile */}
                <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
                  {["Strategy", "Design", "Code"].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 border border-black/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-gray-50/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* REFINED CTA: Centered on mobile */}
              <div className="pt-6 md:pt-8 w-full flex justify-center md:justify-start">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-5 md:gap-6 text-left"
                >
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black transition-all duration-500">
                      <ArrowRight className="text-black group-hover:text-white transition-colors duration-500 w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-[-8px] md:inset-[-10px] border border-dashed border-black/5 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F2B800] mb-0.5">
                      Get to know us
                    </span>
                    <span className="text-lg md:text-xl font-bold text-black border-b border-black/10 pb-1 group-hover:border-[#F2B800] transition-all">
                      More About Us
                    </span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- BOTTOM DECOR LINE --- */}
        <div className="mt-24 md:mt-32 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      </div>
    </section>
  );
}
