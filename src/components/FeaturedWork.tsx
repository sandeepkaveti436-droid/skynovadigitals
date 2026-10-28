"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Digify Agency",
    category: "Brand, Web & UI/UX",
    description:
      "A premium digital agency experience uniting brand strategy, design, and technical delivery.",
    image: "/herobannerimages/digify.png",
    slug: "digify-agency",
    liveUrl: "https://digify-agency.vercel.app/",
  },
  {
    id: "02",
    title: "Orvixa",
    category: "Freelancer & Org Management",
    description:
      "A unified work management platform for projects, teams, time, billing, and AI assistance.",
    image: "/herobannerimages/orvix.png",
    slug: "orvixa-Dashboard",
    liveUrl: "https://orvixas.vercel.app/",
  },
  {
    id: "03",
    title: "Hr Admin Intelligence",
    category: "Staff Management Platform",
    description:
      "A modern business platform designed to help teams scale effortlessly.",
    image: "/herobannerimages/hr-admin.png",
    slug: "hr-admin-intelligence",
    liveUrl: "https://hradmin-staffmanagement.vercel.app/",
  },
];

// --- Decreased Compact Version of your Original Two-Piece Button ---
const ViewAllButton = ({ isMobile = false }: { isMobile?: boolean }) => {
  const brandYellow = "#F2B800";
  return (
    <Link
      href="/projects"
      className={isMobile ? "mx-auto block" : "hidden md:block"}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-1.5 cursor-pointer group origin-center md:origin-right"
      >
        <div className="bg-[#181C1A] px-4 py-2 rounded-[10px] border border-black/5 transition-all duration-300 group-hover:bg-[#F2B800]">
          <span className="text-[14px] font-medium uppercase tracking-[0.14em] text-white group-hover:text-black whitespace-nowrap">
            View All Projects
          </span>
        </div>

        <div
          className="w-[36px] h-[33px] rounded-[4px] rounded-tl-[16px] rounded-br-[16px] flex items-center justify-center text-black transition-all duration-300 shadow-sm group-hover:brightness-95"
          style={{ backgroundColor: brandYellow }}
        >
          <ArrowRight
            size={15}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </div>
      </motion.div>
    </Link>
  );
};

// --- Minimalist Project Card ---
const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-neutral-100 mb-5 border border-neutral-200/80"
      >
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full w-full object-cover"
        />

        <div className="absolute top-3 right-3 pointer-events-none">
          <div className="w-8 h-8 rounded-[6px] bg-white/90 backdrop-blur-md border border-black/5 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300 shadow-sm">
            <ArrowUpRight size={16} strokeWidth={2.5} />
          </div>
        </div>
      </Link>

      {/* Mobile Center Alignment / Desktop Left Alignment */}
      <div className="space-y-2 text-center md:text-left flex flex-col items-center md:items-start">
        <div className="flex items-center justify-center md:justify-start gap-2.5">
          <span className="text-xs font-mono font-bold text-[#F2B800]">
            {project.id}
          </span>
          <span className="w-1 h-1 rounded-full bg-neutral-300" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#F2B800] transition-colors">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        <p className="text-neutral-500 text-xs md:text-sm leading-relaxed line-clamp-2 max-w-sm md:max-w-none mx-auto md:mx-0">
          {project.description}
        </p>

        <div className="pt-2 flex justify-center md:justify-start w-full">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-900 hover:text-[#F2B800] transition-colors group/link"
          >
            <span>Live Experience</span>
            <ArrowUpRight
              size={13}
              strokeWidth={2.5}
              className="text-[#F2B800] transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function FeaturedWork() {
  return (
    <section className="bg-white py-12 md:py-14 border-t border-neutral-100">
      {/* Fallback @font-face definition directly in the component so it works immediately */}
      <style jsx global>{`
        @font-face {
          font-family: "TheSeasonsItalic";
          src: url("/fonts/Fontspring-DEMO-theseasons-it.otf")
            format("opentype");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* ================= SECTION HEADER (Centered on mobile) ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 pb-6 border-b border-neutral-100 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-black" />
              <span className="text-[14px] font-mono font-bold uppercase tracking-[0.25em] text-black">
                Selected Work
              </span>
            </div>

            {/* HEADING USING THE-SEASONS-ITALIC */}
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-neutral-950 uppercase leading-none">
              Built For{" "}
              <span
                style={{
                  fontFamily: "'TheSeasonsItalic', serif",
                }}
                className="normal-case text-[#F2B800] tracking-normal font-normal pl-1 inline-block"
              >
                Impact.
              </span>
            </h2>
          </div>

          <ViewAllButton isMobile={false} />
        </div>

        {/* ================= 3-COLUMN PROJECT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ================= MOBILE BUTTON (Centered) ================= */}
        <div className="flex justify-center md:hidden pt-10">
          <ViewAllButton isMobile={true} />
        </div>
      </div>
    </section>
  );
}
