"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Code2,
  Rocket,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

// Custom SVG to replace missing Lucide Figma icon
const DesignIcon = () => (
  <svg
    width="24"
    height="24"
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
      "Websites, landing pages and digital platforms that turn attention into action.",
    icon: <Globe size={24} />,
    tags: ["High-Conversion", "Brand Storytelling", "3D Web"],
  },
  {
    id: "02",
    title: "Product Design",
    description:
      "UI/UX systems, SaaS products, dashboards and mobile experiences.",
    icon: <DesignIcon />,
    tags: ["Design Systems", "Prototyping", "User Research"],
  },
  {
    id: "03",
    title: "Development",
    description:
      "High-performance Next.js websites, web apps and scalable digital products.",
    icon: <Code2 size={24} />,
    tags: ["Next.js", "AI Integration", "Cloud Scale"],
  },
  {
    id: "04",
    title: "Growth & Marketing",
    description:
      "SEO, content, social media and performance-driven digital marketing.",
    icon: <Rocket size={24} />,
    tags: ["SEO Domination", "Lead Gen", "Data Analytics"],
  },
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const brandYellow = "#F2B800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between p-8 rounded-[32px] bg-white/[0.03] border border-white/10 hover:border-[#F2B800]/30 transition-all duration-500 overflow-hidden min-h-[380px]"
    >
      {/* Background Glow Effect */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#F2B800]/5 blur-[80px] rounded-full group-hover:bg-[#F2B800]/10 transition-colors duration-700" />

      <div className="relative z-10">
        {/* Icon & ID */}
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#F2B800] group-hover:text-black transition-all duration-500 shadow-xl">
            {service.icon}
          </div>
          <span className="text-[12px] font-black text-white/20 group-hover:text-[#F2B800] tracking-widest transition-colors">
            {service.id}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-[24px] font-bold text-white mb-2 tracking-tighter">
          {service.title}
        </h3>
        <p className="text-white/40 group-hover:text-white/70 text-sm leading-relaxed mb-4 transition-colors duration-500">
          {service.description}
        </p>
      </div>

      {/* Bottom Metadata & CTA */}
      <div className="relative z-10 flex flex-wrap gap-2 pt-6 border-t border-white/5 group-hover:border-[#F2B800]/20 transition-colors">
        {service.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-[9px] font-bold uppercase tracking-wider bg-white/5 px-2 py-1 rounded-md text-white/40"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover Arrow (Appears in bottom right) */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <div className="w-10 h-10 rounded-full bg-[#F2B800] flex items-center justify-center text-black shadow-[0_0_20px_rgba(242,184,0,0.4)]">
          <ArrowUpRight size={20} strokeWidth={2.5} />
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const brandYellow = "#F2B800";

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-[#F2B800]" />
              <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#F2B800]">
                Our Capabilities
              </span>
            </div>
            <h2 className="text-[20px] md:text-[32px] font-bold tracking-tighter text-white leading-none">
              Modern Solutions.
              <br />
              <span className="text-white/20 italic font-light">
                End-to-End.
              </span>
            </h2>
          </div>

          <Link href="/services">
            <motion.div
              whileHover="hover"
              className="flex items-center gap-2 cursor-pointer group scale-90 md:scale-100 origin-right"
            >
              <div className="bg-[#181C1A]/90 backdrop-blur-md px-8 py-4 rounded-[16px] border border-white/10 transition-all duration-300 group-hover:bg-[#F2B800] group-hover:border-[#F2B800]">
                <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-black">
                  Explore Services
                </span>
              </div>
              <div
                className="w-[65px] h-[54px] rounded-[6px] rounded-tl-[25px] rounded-br-[25px] flex items-center justify-center text-black relative transition-all duration-500"
                style={{ backgroundColor: brandYellow }}
              >
                <ArrowRight size={22} strokeWidth={2.5} />
              </div>
            </motion.div>
          </Link>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicePillars.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
