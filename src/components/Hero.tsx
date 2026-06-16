"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Star, X, User, Phone, Mail, Check, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimations } from "@/src/hooks/useScrollAnimations";

const Hero = () => {
  const brandOrange = "#F2B800"; // Your brand color
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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
    <>
      <section className="relative w-full pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <div className="absolute inset-0 bg-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Heading Container */}
          <div
            ref={headingRef}
            className="flex flex-col items-start space-y-0 lg:space-y-[-10px]"
          >
            <div className="flex items-center flex-wrap gap-x-4 lg:gap-x-8">
              <h1 className="text-5xl md:text-8xl lg:text-[110px] font-medium tracking-tighter text-gray-900 leading-[1.1]">
                Crafting
              </h1>

              <motion.div
                animate={floatingAnimation(4, 0) as any}
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

            <div className="flex items-center flex-wrap gap-x-4 lg:gap-x-6">
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
            {/* CTA Card - Click triggers Modal */}
            <div
              onClick={() => setIsModalOpen(true)}
              style={{ backgroundColor: brandOrange }}
              className="inline-flex items-center rounded-2xl p-4 pr-8 gap-6 w-fit shadow-xl border border-white/20 cursor-pointer hover:brightness-95 transition-all group"
            >
              <div className="flex flex-col text-gray-900">
                <button className="text-lg font-bold border-b-2 border-gray-900 leading-none pb-1 group-hover:text-black transition-colors text-left">
                  Let's talk with
                </button>
                <span className="text-lg font-bold">our team</span>
              </div>

              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <ArrowRight className="w-6 h-6 text-black" />
              </div>

              <div className="flex -space-x-3">
                <img src="/herobannerimages/girl.jpg" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="team" />
                <img src="/herobannerimages/boy.jpg" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="team" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-12">
              <div className="flex items-center gap-3">
                <img src="https://www.vectorlogo.zone/logos/behance/behance-icon.svg" className="h-10 grayscale hover:grayscale-0 transition-all opacity-80" alt="Behance" />
                <div className="flex flex-col">
                  <StarRating />
                  <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">on Behance</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://www.vectorlogo.zone/logos/upwork/upwork-ar21.svg" className="h-10 grayscale hover:grayscale-0 transition-all opacity-80" alt="Upwork" />
                <div className="flex flex-col">
                  <StarRating />
                  <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">on Upwork</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 z-10">
                <X size={20} />
              </button>

              <div className="p-8 md:p-12 text-left">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-black mb-2 tracking-tight">Let's build something great</h2>
                  <p className="text-gray-500">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#F2B800] outline-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Contact Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input type="tel" placeholder="+1 (234) 567-890" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#F2B800] outline-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="email" placeholder="john@company.com" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#F2B800] outline-none" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">Choose Services</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {["Presentation Design", "Graphic Design", "Motion Graphics", "UX/UI Design"].map((service) => (
                        <label key={service} className="relative flex items-center p-4 border border-gray-100 rounded-xl bg-gray-50 cursor-pointer hover:border-[#F2B800] transition-all has-[:checked]:border-[#F2B800] has-[:checked]:bg-yellow-50/50">
                          <input type="checkbox" className="hidden peer" />
                          <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center mr-3 peer-checked:bg-[#F2B800] peer-checked:border-[#F2B800]">
                            <Check size={14} className="text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-700">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button type="submit" style={{ backgroundColor: brandOrange }} className="w-full py-5 rounded-2xl text-black font-bold text-lg shadow-xl hover:brightness-95 active:scale-[0.98] mt-4 flex items-center justify-center gap-2 transition-all">
                    Send Proposal <MoveRight size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;