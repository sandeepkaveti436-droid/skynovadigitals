"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Code2, Rocket, ArrowUpRight } from "lucide-react";
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
    tags: ["Next.js Core", "AI Integration", "Cloud Scale"],
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

// --- Reusable Button Component ---
const ExploreButton = () => {
  const brandYellow = "#F2B800";
  return (
    <Link href="/services">
      <motion.div
        whileHover="hover"
        initial="initial"
        className="flex items-center gap-2 cursor-pointer group scale-95 md:scale-100"
      >
        <div className="bg-[#181C1A] px-6 py-2 md:px-8 md:py-4 rounded-[16px] border border-gray-800 transition-all duration-300 group-hover:bg-[#F2B800]">
          <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-black whitespace-nowrap">
            Explore Services
          </span>
        </div>
        <div
          className="w-[50px] h-[50px] md:w-[65px] md:h-[54px] rounded-[6px] rounded-tl-[25px] rounded-br-[25px] flex items-center justify-center text-black relative transition-all duration-500 shadow-sm"
          style={{ backgroundColor: brandYellow }}
        >
          <ArrowRight size={22} strokeWidth={2.5} />
        </div>
      </motion.div>
    </Link>
  );
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const brandYellow = "#F2B800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:border-[#F2B800]/40 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 overflow-hidden min-h-[380px] text-center md:text-left items-center md:items-start"
    >
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#F2B800]/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 w-full flex flex-col items-center md:items-start">
        <div className="flex justify-between items-start w-full mb-8">
          <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 group-hover:bg-[#F2B800] group-hover:text-black group-hover:border-[#F2B800] transition-all duration-500 mx-auto md:mx-0">
            {service.icon}
          </div>
          <span className="text-[12px] font-black text-gray-300 group-hover:text-[#F2B800] tracking-widest transition-colors hidden md:block">
            {service.id}
          </span>
        </div>

        <h3 className="text-[24px] font-bold text-black mb-2 tracking-tighter">
          {service.title}
        </h3>
        <p className="text-gray-500 group-hover:text-gray-700 text-sm leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 pt-6 border-t border-gray-100 group-hover:border-[#F2B800]/20 transition-colors justify-center md:justify-start">
        {service.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider bg-white border border-gray-200 px-2 py-1 rounded-md text-gray-400 group-hover:text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hidden md:block">
        <div className="w-10 h-10 rounded-full bg-[#F2B800] flex items-center justify-center text-black shadow-lg">
          <ArrowUpRight size={20} strokeWidth={2.5} />
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 gap-8">
          <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-[#F2B800]" />
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] text-[#F2B800]">
                Our Capabilities
              </span>
              <div className="w-12 h-[1px] bg-[#F2B800] md:hidden" />
            </div>
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-tighter text-black leading-tight">
              Modern Solutions.
              <br />
              <span className="text-gray-300 italic font-light">
                End-to-End.
              </span>
            </h2>
          </div>

          {/* Desktop Button Only */}
          <div className="hidden md:block">
            <ExploreButton />
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicePillars.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* --- MOBILE FOOTER BUTTON --- */}
        <div className="flex md:hidden justify-center mt-12">
          <ExploreButton />
        </div>
      </div>
    </section>
  );
}
