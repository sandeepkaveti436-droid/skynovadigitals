"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const BlurSplitText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <motion.h2 className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden mr-[0.2em] py-1 md:py-2"
        >
          <motion.span
            initial={{ y: "100%", filter: "blur(12px)", opacity: 0 }}
            whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
};

export default function FinalCTA() {
  const brandYellow = "#F0B400";

  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center bg-white px-6 py-20 overflow-hidden border-t border-zinc-100">
      {/* --- BACKGROUND ELEMENTS --- */}
      

      {/* Darker grid for white background contrast */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
        {/* --- EYEBROW --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8 md:mb-12"
        >
          <div className="w-8 h-[1px] bg-[#F0B400]/50" />
          <span className="text-[14px] font-black uppercase tracking-[0.4em] text-[#F0B400]">
            The Final Step
          </span>
          <div className="w-8 h-[1px] bg-[#F0B400]/50" />
        </motion.div>

        {/* --- HEADLINE (Updated to Black) --- */}
        <BlurSplitText
          text="Have an idea worth building?"
          className="text-[24px] sm:text-[32px] md:text-[32px] lg:text-[36px] font-bold tracking-tighter text-black leading-[1.1] md:leading-[1.0] mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-[16px] sm:text-[18px] md:text-[22px] font-medium text-zinc-500 tracking-tight mb-12 md:mb-20 max-w-xl mx-auto"
        >
          Let&apos;s turn it into something people remember.
        </motion.p>

        {/* --- BUTTON GROUP --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 w-full">
          {/* PRIMARY BUTTON (Kept dark for high-end boutique contrast) */}
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.div
              whileHover="hover"
              initial="initial"
              className="flex items-center justify-center gap-2 cursor-pointer group"
            >
              <div className="bg-[#181C1A] px-6 md:px-10 py-4 md:py-3 rounded-[16px] md:rounded-[20px] border border-zinc-800 transition-all duration-300 group-hover:bg-[#F0B400]">
                <span className="text-[12px] md:text-[14px] font-medium uppercase tracking-[0.15em] text-white group-hover:text-black whitespace-nowrap">
                  Start Your Project
                </span>
              </div>
              <div
                className="w-[50px] h-[50px] md:w-[65px] md:h-[45px] rounded-[6px] rounded-tl-[25px] md:rounded-tl-[20px] rounded-br-[25px] md:rounded-br-[20px] flex items-center justify-center text-black relative transition-all duration-500 shadow-xl"
                style={{ backgroundColor: brandYellow }}
              >
                <ArrowRight
                  size={24}
                  className="md:w-7 md:h-7"
                  strokeWidth={2.5}
                />
              </div>
            </motion.div>
          </Link>

          {/* SECONDARY LINK (Inverted for white bg) */}
          <Link
            href="/calendar"
            className="group flex items-center gap-4 text-zinc-400 hover:text-black transition-colors duration-500"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:border-[#F0B400] transition-colors">
              <Calendar
                size={18}
                className="group-hover:text-[#F0B400] transition-colors"
              />
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-[9px] font-black uppercase tracking-widest text-[#F0B400]">
                Or skip the email
              </span>
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest border-b border-zinc-200 group-hover:border-[#F0B400] transition-all">
                Book a Consultation
              </span>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
