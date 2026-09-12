"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Longevity Lounge",
    category: "Healthcare / Wellness",
    description:
      "Premium healthcare experience designed around trust and conversion.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
  },
  {
    id: "02",
    title: "Omega Hospitals",
    category: "Digital Experience",
    description:
      "Reimagining healthcare journeys through intuitive digital design.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800",
  },
  {
    id: "03",
    title: "Orvixa Intelligence",
    category: "SaaS / AI Product",
    description:
      "A modern business platform designed to help teams scale effortlessly.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  },
];

const ViewAllButton = ({ isMobile = false }) => {
  const brandYellow = "#F2B800";
  return (
    <Link href="/projects" className={isMobile ? "mx-auto" : "hidden md:block"}>
      <motion.div
        whileHover="hover"
        initial="initial"
        className="flex items-center gap-2 cursor-pointer group scale-95 md:scale-100 origin-center md:origin-right"
      >
        <div className="bg-[#181C1A] px-6 py-2 rounded-[16px] border border-black/5 transition-all duration-300 group-hover:bg-[#F2B800]">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-black whitespace-nowrap">
            View All Projects
          </span>
        </div>
        <div
          className="w-[50px] h-[45px] rounded-[6px] rounded-tl-[25px] rounded-br-[25px] flex items-center justify-center text-black relative transition-all duration-500 shadow-lg"
          style={{ backgroundColor: brandYellow }}
        >
          <ArrowRight size={20} strokeWidth={2.5} />
        </div>
      </motion.div>
    </Link>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const brandYellow = "#F2B800";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col"
    >
      <Link
        href={`/projects/${project.id}`}
        className="relative aspect-[4/2.5] overflow-hidden rounded-2xl bg-gray-100 mb-6 border border-gray-100"
      >
        <motion.img
          src={project.image}
          alt={project.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-black/5 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300 shadow-sm">
            <ArrowUpRight size={20} />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="w-12 h-8 rounded-tl-2xl rounded-br-2xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: brandYellow }}
          >
            <ArrowUpRight size={18} className="text-black" />
          </div>
        </div>
      </Link>

      <div className="space-y-2 px-1 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-3">
          <span className="text-[14px] font-black text-[#F2B800] uppercase tracking-widest">
            {project.id}
          </span>
          <div className="w-4 h-[1px] bg-black/10" />
          <span className="text-[14px] font-bold text-black/40 uppercase tracking-widest">
            {project.category}
          </span>
        </div>
        <h3 className="text-[20px] font-bold text-black tracking-tight group-hover:text-[#F2B800] transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-[90%] mx-auto md:mx-0">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function FeaturedWork() {
  return (
    <section className="bg-white py-12 md:py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- HEADER: Centered on Mobile --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 gap-10">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-[#F2B800] text-[10px] font-black uppercase tracking-[0.4em] flex items-center justify-center md:justify-start gap-3">
              <span className="w-8 h-[1px] bg-[#F2B800]" /> SELECTED WORK
            </p>
            <h2 className="text-[28px] md:text-[48px] font-bold tracking-tighter text-black leading-tight">
              Built for{" "}
              <span className="italic font-light text-gray-300">Impact.</span>
            </h2>
          </div>

          <ViewAllButton isMobile={false} />
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 mb-16 md:mb-14">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* --- MOBILE FOOTER BUTTON --- */}
        <div className="flex md:hidden pt-4">
          <ViewAllButton isMobile={true} />
        </div>
      </div>
    </section>
  );
}
