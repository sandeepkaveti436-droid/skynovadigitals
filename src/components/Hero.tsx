"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion"; // Added motion
import { useScrollAnimations } from "@/src/hooks/useScrollAnimations";

const Hero = () => {
  const brandOrange = "#F2B800"; // Your brand color
  const { fadeInUp, fadeInLeft } = useScrollAnimations();
  const headingRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fadeInLeft(headingRef.current);
    fadeInUp(subtextRef.current, 0.2);
    fadeInUp(ctaRef.current, 0.4);
  }, [fadeInLeft, fadeInUp]);

  const StarRating = () => (
    <div className="flex gap-0.5 mb-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} fill={brandOrange} stroke={brandOrange} />
      ))}
    </div>
  );

  // Animation variants for the floating effect
  const floatingAnimation = (duration: number, delay: number): any => ({
    y: ["0%", "-10%", "0%"],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      delay: delay,
    },
  });

  return (
    <section className="relative w-full pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={headingRef}
          className="flex flex-col items-start space-y-0 lg:space-y-[-10px]"
        >
          {/* Row 1 */}
          <div className="flex items-center flex-wrap gap-x-4 lg:gap-x-8">
            <h1 className="text-5xl md:text-8xl lg:text-[110px] font-medium tracking-tighter text-gray-900 leading-[1.1]">
              Crafting
            </h1>

            {/* ANIMATED IMAGE 1 */}
            {/* Row 1 Image */}
            <motion.div
              animate={floatingAnimation(4, 0) as any} // Explicitly cast as 'any' to stop the TS error
              className="w-24 h-16 md:w-44 md:h-28 relative rotate-[-5deg] mt-4"
            >
              <img
                src="/herobannerimages/img-1.jpg"
                alt="Presentation Graphic"
                className="w-full h-full object-cover rounded-2xl shadow-lg border-2 border-white"
              />
            </motion.div>

            <h1 className="text-5xl md:text-8xl lg:text-[110px] font-medium tracking-tighter text-gray-900 leading-[1.1]">
              Presentations
            </h1>
          </div>

          {/* Row 2 */}
          <div className="flex items-center flex-wrap gap-x-4 lg:gap-x-6">
            {/* ANIMATED IMAGE 2 (Logo Icon) */}
            {/* Row 2 Image 1 (Logo) */}
            <motion.div
              animate={floatingAnimation(3.5, 0.5) as any}
              className="w-12 h-12 md:w-24 md:h-24"
            >
              <img
                src="/logo/snd-with-frame-yellow.png"
                alt="Logo Icon"
                className="w-full h-full object-contain"
              />
            </motion.div>

            <h1 className="text-5xl md:text-8xl lg:text-[110px] font-medium tracking-tighter text-gray-900 leading-[1.1]">
              That Deliver
            </h1>
            <h1
              style={{ color: brandOrange }}
              className="text-5xl md:text-8xl lg:text-[110px] font-medium tracking-tighter leading-[1.1]"
            >
              Impact
            </h1>

            {/* ANIMATED IMAGE 3 (Growth Graphic) */}
            {/* Row 2 Image 2 (Growth) */}
            <motion.div
              animate={floatingAnimation(4.5, 0.2) as any}
              className="w-20 h-20 md:w-32 md:h-32 mt-4"
            >
              <img
                src="/herobannerimages/growth.png"
                alt="Impact Graphic"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>

        <div ref={subtextRef} className="mt-10 max-w-xl">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
            Let your pitch speak for itself with expertly designed presentations
            that inspire confidence.
          </p>
        </div>

        <div
          ref={ctaRef}
          className="mt-16 flex flex-col lg:flex-row lg:items-center justify-between gap-12"
        >
          <div
            style={{ backgroundColor: brandOrange }}
            className="inline-flex items-center rounded-2xl p-4 pr-8 gap-6 w-fit shadow-xl border border-white/20"
          >
            <div className="flex flex-col text-gray-900">
              <button className="text-lg font-bold border-b-2 border-gray-900 leading-none pb-1 hover:text-black transition-colors text-left">
                Let's talk with
              </button>
              <span className="text-lg font-bold">our team</span>
            </div>

            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
              <ArrowRight className="w-6 h-6 text-black" />
            </div>

            <div className="flex -space-x-3">
              <img
                src="/herobannerimages/girl.jpg"
                className="w-12 h-12 rounded-full border-2 border-white object-cover bg-gray-200"
                alt="team member"
              />
              <img
                src="/herobannerimages/boy.jpg"
                className="w-12 h-12 rounded-full border-2 border-white object-cover bg-gray-200"
                alt="team member"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-12">
            <div className="flex items-center gap-3">
              <img
                src="https://www.vectorlogo.zone/logos/behance/behance-icon.svg"
                className="h-10 grayscale hover:grayscale-0 transition-all opacity-80"
                alt="Behance"
              />
              <div className="flex flex-col">
                <StarRating />
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                  on Behance
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg"
                className="h-10 grayscale hover:grayscale-0 transition-all opacity-80"
                alt="Upwork"
              />
              <div className="flex flex-col">
                <StarRating />
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                  on Upwork
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
