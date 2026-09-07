"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Longevity Lounge",
    category: "Healthcare / Wellness",
    description:
      "Premium healthcare experience designed around trust, clarity and conversion.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
    tags: ["UI/UX", "Branding"],
  },
  {
    id: "02",
    title: "Omega Hospitals",
    category: "Healthcare / Digital",
    description:
      "Reimagining healthcare journeys through intuitive digital experiences.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070",
    tags: ["System Design", "Enterprise"],
  },
  {
    id: "03",
    title: "Orvixa",
    category: "SaaS / Product Design",
    description:
      "A modern business platform designed to help teams work, organize and scale.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    tags: ["Product", "Next.js"],
  },
];

const FeaturedWork = () => {
  const brandYellow = "#F2B800";

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F2B800] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
                Case Studies
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-medium tracking-tighter text-white leading-[0.8]">
              Selected <br />
              <span className="text-white/20 italic font-light">Works.</span>
            </h2>
          </div>
          <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] max-w-[280px] leading-relaxed hidden md:block">
            We deliver digital products that look exceptional and perform
            flawlessly.
          </p>
        </div>
      </div>

      {/* --- STACKING CARDS CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12 md:space-y-0">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="md:sticky top-28 mb-12 md:mb-32" // top-28 gives room for your navbar
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                // Subtle scale down for desktop stacking
                marginTop: `${index * 20}px`,
              }}
              className="relative w-full bg-[#111] rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/5 shadow-2xl flex flex-col md:flex-row min-h-[500px]"
            >
              {/* Image Section (Responsive) */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent md:hidden" />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-black text-black bg-[#F2B800] px-3 py-1 rounded-full uppercase">
                      Project {project.id}
                    </span>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold text-white/30 border border-white/10 px-2 py-1 rounded-md uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-md">
                    {project.description}
                  </p>
                </div>

                <Link
                  href="#"
                  className="group inline-flex items-center gap-4 text-white"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#F2B800] group-hover:border-[#F2B800] group-hover:text-black transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-[#F2B800]">
                      Case Study
                    </span>
                    <span className="text-sm font-bold border-b border-white/10 pb-1">
                      View details
                    </span>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* --- ALL PROJECTS CTA --- */}
      <div className="mt-20 flex justify-center px-6">
        <Link
          href="/work"
          className="group relative flex items-center gap-6 px-10 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#F2B800]/50 transition-all overflow-hidden"
        >
          <div className="relative z-10 flex flex-col">
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[#F2B800] mb-1">
              Portfolio
            </span>
            <span className="text-xl font-bold text-white">
              Explore all projects
            </span>
          </div>
          <div className="relative z-10 w-12 h-12 rounded-xl bg-[#F2B800] flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-500">
            <Plus size={24} />
          </div>
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-[#F2B800]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedWork;
