"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const brandYellow = "#F2B800";
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  const wordVariants = {
    hidden: { y: "100%" },
    visible: (i: number) => ({
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: i * 0.1 },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden bg-black"
    >
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/herobannerimages/hero-bg.png"
            alt="SkyNova Desktop"
            fill
            priority
            quality={80}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/herobannerimages/mobile-bg.png"
            alt="SkyNova Mobile"
            fill
            priority
            quality={80}
            className="object-cover opacity-80"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </motion.div>

      <div className="relative z-20 w-full max-w-[1400px] px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-[1px] bg-[#F2B800]" />
          <span className="text-[9px] md:text-xs font-bold tracking-[0.4em] uppercase text-[#F2B800]">
            Digital Transformation Studio
          </span>
          <div className="w-8 h-[1px] bg-[#F2B800]" />
        </motion.div>

        <motion.h1
          style={{ opacity: opacityText }}
          className="text-[14vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter uppercase text-white mb-10"
        >
          Turning Ideas <br />{" "}
          <span style={{ color: brandYellow }}>Into Reality</span>
        </motion.h1>

        <div className="flex flex-row items-center justify-center gap-3 md:gap-8 w-full">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-[#181C1A]/90 backdrop-blur-md px-6 py-3 rounded-[14px] border border-white/10 group-hover:bg-[#F2B800] transition-all">
              <span className="text-[10px] md:text-[14px] font-bold uppercase text-white group-hover:text-black">
                Start a Project
              </span>
            </div>
            <div className="w-[40px] h-[40px] rounded-[6px] rounded-tl-[20px] rounded-br-[20px] bg-[#F2B800] flex items-center justify-center text-black">
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
