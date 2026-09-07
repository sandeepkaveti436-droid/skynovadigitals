"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const brandYellow = "#F2B800";
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  const testimonialAvatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
  ];

  const wordVariants = {
    hidden: { y: "100%" },
    visible: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        delay: i * 0.1,
      },
    }),
  };

  const line1 = "Turning Ideas";
  const line2 = "Into Reality";

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* --- BACKGROUND --- */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-black/20" />
        <img
          src="/herobannerimages/hero-bg.png"
          alt="SkyNova"
          className="h-full w-full object-cover object-center opacity-80"
        />
      </motion.div>

      {/* --- CONTENT --- */}
      <div className="relative z-20 w-full max-w-[1400px] px-4 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-12 h-[1px] bg-[#F2B800]" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-[#F2B800]">
            Digital Transformation Studio
          </span>
          <div className="w-12 h-[1px] bg-[#F2B800]" />
        </motion.div>

        {/* Headline with Split Animation */}
        <motion.h1
          style={{ opacity: opacityText }}
          className="text-[12vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter uppercase text-white mb-12"
        >
          <span className="block overflow-hidden">
            {line1.split(" ").map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span
            className="block overflow-hidden"
            style={{ color: brandYellow }}
          >
            {line2.split(" ").map((word, i) => (
              <motion.span
                key={i}
                custom={i + 2}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* --- UPDATED BUTTON GROUP: Side by Side on Mobile --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-row items-center justify-center gap-2 md:gap-8 w-full"
        >
          {/* START A PROJECT BUTTON */}
          <div className="flex items-center gap-1 md:gap-2 cursor-pointer group scale-[0.85] md:scale-100 origin-right md:origin-center">
            <div className="bg-[#181C1A]/90 backdrop-blur-md px-4 md:px-10 py-3 rounded-[16px] border border-white/10 transition-all duration-300 group-hover:bg-[#F2B800] group-hover:border-[#F2B800]">
              <span className="text-[11px] md:text-[14px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-white group-hover:text-black whitespace-nowrap">
                Start a Project
              </span>
            </div>
            <div
              className="w-[45px] md:w-[65px] h-[42px] rounded-[6px] rounded-tl-[25px] md:rounded-tl-[30px] rounded-br-[25px] md:rounded-br-[30px] flex items-center justify-center text-black relative transition-all duration-500"
              style={{ backgroundColor: brandYellow }}
            >
              <ArrowRight
                size={20}
                className="md:w-6 md:h-6"
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* WATCH SHOWREEL BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 md:gap-4 px-3 md:px-6 py-2 rounded-[18px] bg-black/40 backdrop-blur-md border border-white/10 text-white font-bold uppercase tracking-widest text-[9px] md:text-[11px] hover:bg-black/60 transition-all group scale-[0.85] md:scale-100 origin-left md:origin-center"
          >
            <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#F2B800] group-hover:border-[#F2B800] group-hover:text-black transition-all duration-300">
              <Play
                size={12}
                className="md:w-4 md:h-4 ml-0.5"
                fill="currentColor"
              />
            </span>
            <span className="whitespace-nowrap">Showreel</span>
          </motion.button>
        </motion.div>
      </div>

      {/* --- FLOATING INFO CARD --- */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-12 z-30 hidden lg:block"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-5 rounded-[32px] max-sm shadow-2xl">
          <p className="text-white/80 text-[15px] leading-[1.4] mb-6">
            <span style={{ color: brandYellow }} className="font-bold">
              SkyNova Digitals
            </span>{" "}
            is a high-performance studio <br /> creating websites and products
            for <br /> businesses ready to stand out <br /> in the digital age.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {testimonialAvatars.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  className="w-10 h-10 rounded-full border-2 border-black object-cover shadow-lg"
                  alt="avatar"
                />
              ))}
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
                Trusted by 60+ Brands
              </span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#F2B800]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/20">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#F2B800] to-transparent" />
      </motion.div>
    </section>
  );
}
