"use client";

import React, { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ArrowUpRight, Globe, Code2, Rocket } from "lucide-react";
import Link from "next/link";

// Custom Design Icon
const DesignIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m8 11.5 3 3 5-5" />
  </svg>
);

const servicePillars = [
  {
    id: "01",
    title: "Digital Experiences",
    description:
      "Websites, landing pages, and digital platforms engineered to turn attention into active clients.",
    icon: <Globe size={19} />,
    tags: ["High-Conversion", "Storytelling", "3D Web"],
  },
  {
    id: "02",
    title: "Product Design",
    description:
      "Scalable UI/UX systems, SaaS platforms, design tokens, and high-fidelity interactive prototypes.",
    icon: <DesignIcon />,
    tags: ["Design Systems", "Prototyping", "User Research"],
  },
  {
    id: "03",
    title: "Development",
    description:
      "Ultra-fast Next.js architecture, edge deployments, and clean APIs built for scale.",
    icon: <Code2 size={19} />,
    tags: ["Next.js Core", "AI Integration", "Cloud Scale"],
  },
  {
    id: "04",
    title: "Growth & Marketing",
    description:
      "Performance SEO, conversion rate optimization, and data-backed acquisition systems.",
    icon: <Rocket size={19} />,
    tags: ["Technical SEO", "Lead Gen", "Analytics"],
  },
];

// --- Text Slide Word Animation Variants ---
const titleContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    y: "120%",
    opacity: 0,
    rotateZ: 2,
  },
  visible: {
    y: "0%",
    opacity: 1,
    rotateZ: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Word helper component with masked overflow
const SlideWord = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className="inline-block overflow-hidden py-1 leading-[1.1]">
    <motion.span
      variants={wordVariants}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  </span>
);

// --- Viewfinder Corner-Bracket Button (Dark Variant) ---
const ViewfinderButton = ({
  text = "Explore Services",
  href = "/services",
}: {
  text?: string;
  href?: string;
}) => {
  return (
    <Link href={href} className="inline-block p-1">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative group cursor-pointer inline-flex items-center gap-3 px-6 py-2.5 bg-[#F2B800] hover:bg-white text-black transition-colors duration-300 shadow-[0_0_20px_-5px_rgba(242,184,0,0.3)]"
      >
        {/* 4 Corner Crosshairs */}
        <span className="absolute -top-[3px] -left-[3px] w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] border-[#F2B800] group-hover:border-white transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="absolute -top-[3px] -right-[3px] w-2.5 h-2.5 border-t-[1.5px] border-r-[1.5px] border-[#F2B800] group-hover:border-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        <span className="absolute -bottom-[3px] -left-[3px] w-2.5 h-2.5 border-b-[1.5px] border-l-[1.5px] border-[#F2B800] group-hover:border-white transition-all duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
        <span className="absolute -bottom-[3px] -right-[3px] w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] border-[#F2B800] group-hover:border-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />

        {/* Left Arrow */}
        <ArrowUpRight
          size={18}
          strokeWidth={2.2}
          className="text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />

        {/* Text */}
        <span className="text-[14px] font-medium tracking-tight text-black">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};

// --- GSAP Card Component (Dark Edition) ---
const PremiumServiceCard = ({
  service,
  index,
}: {
  service: (typeof servicePillars)[0];
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

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(glowRef.current, {
      opacity: 1,
      x: x - 130,
      y: y - 130,
      duration: 0.2,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glowRef.current) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    gsap.to(glowRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative flex flex-col justify-between p-7 rounded-[18px] bg-gradient-to-b from-neutral-900/90 via-neutral-900/40 to-neutral-950/90 border border-white/10 hover:border-[#F2B800]/50 shadow-[0_4px_30px_-5px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_-12px_rgba(242,184,0,0.12)] transition-colors duration-500 overflow-hidden min-h-[350px] will-change-transform backdrop-blur-sm"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Cursor Glow */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle,_rgba(242,184,0,0.22)_0%,_transparent_70%)] opacity-0 blur-xl transition-opacity duration-300 -z-0"
        />

        {/* Top Hover Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#F2B800]/0 to-transparent group-hover:via-[#F2B800] transition-all duration-700" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="w-11 h-11 rounded-[9px] bg-neutral-950 border border-white/10 flex items-center justify-center text-neutral-300 group-hover:bg-[#F2B800] group-hover:text-black group-hover:border-[#F2B800] group-hover:-translate-y-0.5 transition-all duration-300 shadow-inner">
              {service.icon}
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-[#F2B800] transition-colors" />
              <span className="text-[11px] font-mono font-bold text-neutral-400 group-hover:text-white transition-colors">
                {service.id}
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#F2B800] transition-colors mb-2.5">
            {service.title}
          </h3>

          <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-normal">
            {service.description}
          </p>
        </div>

        <div className="relative z-10 pt-5 mt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5 max-w-[80%]">
            {service.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase tracking-wider bg-neutral-950/80 border border-white/10 px-2 py-0.5 rounded-[6px] text-neutral-400 group-hover:border-[#F2B800]/30 group-hover:text-neutral-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="w-7 h-7 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-[#F2B800] group-hover:text-black group-hover:border-[#F2B800] transition-all duration-300">
            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section className="bg-[#070707] text-white py-16 md:py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Ambience Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_top,_rgba(242,184,0,0.07),transparent_70%)] blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* ================= 1. CENTERED SINGLE-LINE HEADER WITH SLIDING WORDS ================= */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 md:mb-18 pb-6 border-b border-white/10">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-neutral-900/90 border border-white/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F2B800] animate-pulse" />
            <span className="text-[11px] md:text-[12px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-300">
              Our Capabilities
            </span>
          </motion.div>

          {/* Masked Slide Word Animated Headline */}
          <motion.h2
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[clamp(1.25rem,3.3vw,2.9rem)] font-black tracking-tight leading-none whitespace-nowrap flex items-baseline justify-center gap-2 md:gap-3.5"
          >
            <SlideWord className="text-white uppercase font-black tracking-tight">
              Modern
            </SlideWord>

            <SlideWord className="text-white uppercase font-black tracking-tight">
              Solutions.
            </SlideWord>

            <span className="normal-case text-[#F2B800] tracking-normal font-normal inline-flex items-baseline gap-1">
              <SlideWord>
                <span style={{ fontFamily: "'TheSeasonsItalic', serif" }}>
                  End
                </span>
              </SlideWord>

              <SlideWord>
                <span
                  style={{ fontFamily: "Georgia, serif" }}
                  className="text-[#F2B800] font-light"
                >
                  -
                </span>
              </SlideWord>

              <SlideWord>
                <span style={{ fontFamily: "'TheSeasonsItalic', serif" }}>
                  to
                </span>
              </SlideWord>

              <SlideWord>
                <span
                  style={{ fontFamily: "Georgia, serif" }}
                  className="text-[#F2B800] font-light"
                >
                  -
                </span>
              </SlideWord>

              <SlideWord>
                <span style={{ fontFamily: "'TheSeasonsItalic', serif" }}>
                  End.
                </span>
              </SlideWord>
            </span>
          </motion.h2>
        </div>

        {/* ================= 2. 4-COLUMN CARDS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicePillars.map((service, index) => (
            <PremiumServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* ================= 3. VIEWFINDER BUTTON ================= */}
        <div className="flex justify-center mt-12 md:mt-16">
          <ViewfinderButton text="Explore Services" href="/services" />
        </div>
      </div>
    </section>
  );
}
