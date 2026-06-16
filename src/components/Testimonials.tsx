"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Quote } from "lucide-react";
import gsap from "gsap";
import { useScrollAnimations } from "@/src/hooks/useScrollAnimations";

const testimonials = [
  {
    company: "Canva",
    location: "Australia AU",
    // Fixed image URL
    logo: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
    quote:
      "Sky Nova Digitals delivered production-quality work at a pace we'd only seen from top-tier internal teams. Their AI integration was seamless.",
    author: "Growth Engineering Lead, Canva",
    project: "Rebuilt Canva's Mobile Onboarding in 6 Weeks",
  },
  {
    company: "Upwork",
    location: "San Francisco, US",
    // Fixed image URL
    logo: "https://www.vectorlogo.zone/logos/upwork/upwork-icon.svg",
    quote:
      "Working with them was a game-changer. They didn't just build a website; they optimized our entire user flow and conversion funnel.",
    author: "Product Manager, Upwork",
    project: "Conversion Rate Optimization for Enterprise",
  },
  {
    company: "Shopify",
    location: "Canada CA",
    // Added a third one for better auto-scroll visual
    logo: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
    quote:
      "The technical depth and speed of execution were beyond our expectations. They are true partners in product development.",
    author: "Senior Developer, Shopify",
    project: "Global Storefront Migration",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const quoteRef = useRef(null);
  const headerRef = useRef(null);
  const cardRef = useRef(null);
  const brandYellow = "#F2B800";
  const { fadeInUp } = useScrollAnimations();

  // --- SCROLL ANIMATIONS ---
  useEffect(() => {
    if (headerRef.current) fadeInUp(headerRef.current);
    if (cardRef.current) fadeInUp(cardRef.current, 0.2);
  }, [fadeInUp]);

  // --- AUTO SCROLLING LOGIC ---
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(interval);
  }, [current]); // Reset timer whenever slide changes manually

  // GSAP Animation Logic
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      quoteRef.current,
      { opacity: 0, filter: "blur(10px)", y: 20 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
    );
  }, [current]);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section className="bg-[#050505] text-white py-24 px-4 overflow-hidden relative">
      {/* Background Decorative "Glow" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F2B800] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <p
            style={{ color: brandYellow }}
            className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            What our clients say
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Trusted by the world's <br className="hidden md:block" /> best
            product teams
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real quotes from the engineering and growth leaders we've worked
            with.
          </p>
        </div>

        {/* Testimonial Card Container */}
        <div
          ref={cardRef}
          className="relative bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden"
        >
          <div className="relative z-10">
            {/* Header: Company Info */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2 border border-white/10">
                {/* Image tag with fixed Alt and Src */}
                <img
                  src={testimonials[current].logo}
                  alt={testimonials[current].company}
                  className="w-full h-full object-contain"
                  onError={(e) =>
                    (e.currentTarget.src = "https://via.placeholder.com/50")
                  }
                />
              </div>
              <div>
                <span className="text-lg font-bold mr-3">
                  {testimonials[current].company}
                </span>
                <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-500 border border-white/10 uppercase tracking-widest font-bold">
                  {testimonials[current].location}
                </span>
              </div>
            </div>

            {/* Quote with GSAP Target */}
            <div className="relative mb-12">
              <Quote
                style={{ color: brandYellow }}
                className="absolute -top-8 -left-6 opacity-20 w-16 h-16"
              />
              <p
                ref={quoteRef}
                className="text-2xl md:text-4xl font-medium italic leading-tight tracking-tight text-gray-100"
              >
                "{testimonials[current].quote}"
              </p>
            </div>

            {/* Footer: Author Info */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-12 border-t border-white/5">
              <div>
                <h4 className="text-xl font-bold mb-1">
                  {testimonials[current].author}
                </h4>
                <p className="text-gray-500 text-sm font-medium">
                  {testimonials[current].project}
                </p>
              </div>
              <button
                style={{ color: brandYellow }}
                className="flex items-center gap-2 font-bold hover:gap-4 transition-all duration-300"
              >
                Read Case Study <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex items-center justify-between mt-10 px-4">
          {/* Pagination Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  current === i ? "w-10" : "w-2 bg-white/20"
                }`}
                style={{ backgroundColor: current === i ? brandYellow : "" }}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Global CTA Button */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:border-white/40 transition-all group font-bold">
            View All Case Studies
            <ArrowRight
              size={20}
              style={{ color: brandYellow }}
              className="group-hover:translate-x-2 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
