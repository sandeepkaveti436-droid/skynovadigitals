"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ValueStripSection = () => {
  const brandYellow = "#F2B800";
  const targetRef = useRef(null);

  // Custom hook logic to handle responsive transform values
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Desktop: Starts at 0, moves left
  // Mobile: Starts at 24px (alignment with logo), moves left
  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["24px", "-60%"] : ["0%", "-40%"],
  );

  const corePillars = ["Strategy.", "Design.", "Technology.", "Growth."];
  const services = [
    { title: "Web Exp.", desc: "High-performance digital platforms." },
    { title: "UI/UX", desc: "Intuitive interfaces for products." },
    { title: "Branding", desc: "Cohesive visual identities." },
    { title: "Growth", desc: "Data-driven strategies." },
  ];

  const brandLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_logo_%282012%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  ];

  return (
    <section
      ref={targetRef}
      className="w-full bg-black py-16 md:py-24 lg:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="w-full">
        {/* --- POSITIONING STRIP --- */}
        <div className="mb-16 md:mb-32">
          <motion.div
            style={{ x: xTranslate }}
            className="flex whitespace-nowrap gap-x-6 md:gap-x-12 items-baseline"
          >
            {corePillars.map((pill, idx) => (
              <h2
                key={idx}
                className={`text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-none ${
                  idx % 2 === 1
                    ? "text-transparent stroke-white/20"
                    : "text-white"
                }`}
                style={
                  idx % 2 === 1
                    ? { WebkitTextStroke: "1px rgba(255,255,255,0.2)" }
                    : {}
                }
              >
                {pill}
              </h2>
            ))}
          </motion.div>
        </div>

        {/* --- SERVICES GRID & MARQUEE --- */}
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-white/10 mb-20 md:mb-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-5 md:p-10 border-white/10 group hover:bg-white/[0.02] transition-colors
                    ${index < 2 ? "border-b" : "lg:border-b-0"} 
                    ${index % 2 === 0 ? "border-r" : "lg:border-r"} 
                    ${index === 1 ? "lg:border-r" : ""}
                    ${index === 2 ? "lg:border-b-0" : ""}
                `}
              >
                <span className="text-[14px] font-medium tracking-[0.2em] text-[#F2B800] uppercase mb-4 md:mb-6 block">
                  0{index + 1}
                </span>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4 tracking-tight group-hover:text-[#F2B800] transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-[14px] md:text-[16px] leading-relaxed max-w-[150px] md:max-w-[200px]">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8 md:space-y-12">
            <p className="text-center text-[14px] md:text-[14px] font-bold uppercase tracking-[0.4em] text-[#F2B800]">
              Trusted by Forward-Thinking Teams
            </p>

            <div className="relative w-full overflow-hidden flex items-center">
              <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10" />

              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-12 md:gap-20 items-center"
              >
                {[...brandLogos, ...brandLogos].map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt="logo"
                    className="h-6 md:h-10 w-auto object-contain brightness-0 invert opacity-100 hover:opacity-100 transition-opacity flex-shrink-0"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStripSection;
