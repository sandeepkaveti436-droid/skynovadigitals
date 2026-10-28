"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowUpRight,
  Check,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: "01",
    phase: "DISCOVERY",
    title: "Blueprint",
    desc: "Market intelligence & user psychology roadmap before touching a single line of code.",
    deliverables: [
      "Market Intelligence",
      "User Psychology",
      "Architecture Roadmap",
    ],
    icon: <Search size={18} strokeWidth={2.2} />,
  },
  {
    id: "02",
    phase: "DESIGN",
    title: "Visual Systems",
    desc: "Scalable design systems & interactive prototypes engineered to turn visitors into buyers.",
    deliverables: ["Design Tokens", "Figma Prototypes", "Conversion Funnels"],
    icon: <PenTool size={18} strokeWidth={2.2} />,
  },
  {
    id: "03",
    phase: "ENGINEERING",
    title: "Edge Code",
    desc: "Ultra-fast Next.js architecture with clean, scalable API logic and sub-second load times.",
    deliverables: [
      "Next.js 15 Core",
      "Clean Headless APIs",
      "Core Web Vitals 99+",
    ],
    icon: <Code2 size={18} strokeWidth={2.2} />,
  },
  {
    id: "04",
    phase: "DEPLOYMENT",
    title: "Scale & Impact",
    desc: "Continuous conversion rate optimization, technical SEO dominance, and analytics tracking.",
    deliverables: [
      "Conversion Audits",
      "Programmatic SEO",
      "Revenue Analytics",
    ],
    icon: <Rocket size={18} strokeWidth={2.2} />,
  },
];

// --- 1. CHARACTER-BY-CHARACTER WORD TEXT ANIMATION ---
const AnimatedCharacterWord = ({
  text,
  className = "",
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  delayOffset?: number;
}) => {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden py-1 leading-[1.1]"
        >
          <motion.span
            initial={{ y: "120%", opacity: 0, rotateZ: 3 }}
            animate={{ y: "0%", opacity: 1, rotateZ: 0 }}
            transition={{
              duration: 0.65,
              delay: delayOffset + index * 0.025,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

// --- 2. GSAP 3D TILT PIPELINE CARD ---
const GsapProcessCard = ({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(glowRef.current, {
      opacity: 1,
      x: x - 120,
      y: y - 120,
      duration: 0.2,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glowRef.current) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col justify-between p-7 md:p-8 rounded-[16px] bg-white border border-neutral-200/90 hover:border-[#F2B800] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(242,184,0,0.15)] transition-colors duration-400 overflow-hidden min-h-[380px] will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Dynamic GSAP Cursor Glow */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,_rgba(242,184,0,0.18)_0%,_transparent_70%)] opacity-0 blur-xl transition-opacity duration-300 -z-0"
        />

        {/* Top Hover Yellow Line Wipe */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#F2B800] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

        <div className="relative z-10">
          {/* Card Top: Icon & Step ID */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-10 h-10 rounded-[8px] bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 group-hover:bg-[#F2B800] group-hover:text-black group-hover:border-[#F2B800] group-hover:-translate-y-0.5 transition-all duration-300 shadow-2xs">
              {step.icon}
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-[#F2B800] transition-colors" />
              <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                PHASE_0{index + 1}
              </span>
            </div>
          </div>

          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C48C00] font-bold block mb-1.5">
            {step.phase}
          </span>

          <h3 className="text-xl font-bold tracking-tight text-neutral-950 group-hover:text-black transition-colors mb-2.5">
            {step.title}
          </h3>

          <p className="text-xs md:text-sm text-neutral-600 leading-relaxed font-normal">
            {step.desc}
          </p>
        </div>

        {/* Deliverables Checklist */}
        <div className="relative z-10 pt-5 mt-6 border-t border-neutral-100">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block mb-2.5">
            Key Deliverables
          </span>
          <div className="space-y-2">
            {step.deliverables.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 group-hover:border-[#F2B800] group-hover:bg-[#F2B800] transition-colors">
                  <Check
                    size={10}
                    strokeWidth={3}
                    className="text-neutral-800 group-hover:text-black"
                  />
                </div>
                <span className="text-xs text-neutral-700 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- 3. VIEWFINDER BUTTON ---
const ViewfinderButton = ({
  text = "Start Project",
  href = "/contact",
}: {
  text?: string;
  href?: string;
}) => {
  return (
    <Link href={href} className="inline-block p-1">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group cursor-pointer inline-flex items-center gap-3 px-6 py-2.5 bg-[#F2B800] hover:bg-neutral-950 text-neutral-950 hover:text-white transition-colors duration-300 shadow-[0_2px_15px_-4px_rgba(242,184,0,0.4)]"
      >
        <span className="absolute -top-[3px] -left-[3px] w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] border-neutral-900 group-hover:border-neutral-900 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="absolute -top-[3px] -right-[3px] w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-neutral-900 group-hover:border-neutral-900 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="absolute -bottom-[3px] -left-[3px] w-2.5 h-2.5 border-b-[1.5px] border-l-[1.5px] border-neutral-900 group-hover:border-neutral-900 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
        <span className="absolute -bottom-[3px] -right-[3px] w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] border-neutral-900 group-hover:border-neutral-900 transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

        <ArrowUpRight
          size={18}
          strokeWidth={2.2}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />

        <span className="text-[14px] font-medium tracking-tight">{text}</span>
      </motion.div>
    </Link>
  );
};

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".process-reveal", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white text-neutral-900 py-20 md:py-16 px-6 border-t border-neutral-200 relative overflow-hidden"
    >
      {/* Subtle Warm Ambient Glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-[radial-gradient(ellipse_at_top,_rgba(242,184,0,0.06),transparent_70%)] blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= HEADER: MIDDLE ALIGNED WITH CHARACTER ANIMATION ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-14 md:mb-20 pb-8 border-b border-neutral-200">
          {/* Left: Eyebrow + Single Line Multi-Font Text Animation */}
          <div className="flex-1">
            <div className="process-reveal inline-flex items-center gap-2 mb-3.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2B800] animate-pulse" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-800">
                Execution Methodology
              </span>
            </div>

            <h2 className="text-[clamp(1.5rem,3.8vw,3.5rem)] leading-none tracking-tight whitespace-nowrap flex items-baseline gap-2 md:gap-3">
              <AnimatedCharacterWord
                text="How We Turn Ideas"
                className="font-black uppercase tracking-tight text-neutral-950 font-sans"
                delayOffset={0.05}
              />
              <AnimatedCharacterWord
                text="into"
                className="font-serif italic font-light text-neutral-500 lowercase text-[0.95em]"
                delayOffset={0.45}
              />
              <span
                style={{ fontFamily: "'TheSeasonsItalic', Georgia, serif" }}
                className="font-normal italic text-[#F2B800] tracking-normal inline-block"
              >
                <AnimatedCharacterWord
                  text="Reality."
                  className="font-normal italic text-[#F2B800] tracking-normal"
                  delayOffset={0.65}
                />
              </span>
            </h2>
          </div>

          {/* Right: Middle-Aligned Description + Viewfinder Button */}
          <div className="max-w-md lg:border-l lg:border-neutral-200 lg:pl-8 flex flex-col sm:flex-row lg:flex-col items-start gap-4 justify-center">
            <p className="text-neutral-600 text-xs md:text-sm leading-relaxed font-normal">
              A transparent, battle-tested sprint methodology designed to
              eliminate guesswork and scale digital products with surgical
              precision.
            </p>
            <ViewfinderButton text="Start Project" href="/contact" />
          </div>
        </div>

        {/* ================= 4-COLUMN GSAP INTERACTIVE PROCESS PIPELINE ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <GsapProcessCard key={step.id} step={step} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
