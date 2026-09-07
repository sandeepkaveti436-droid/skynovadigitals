"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// --- PROJECT DATA ---
const projects = [
  {
    id: 1,
    name: "Longevity Lounge",
    category: "Web Design",
    year: "2024",
    description:
      "A premium healthcare portal designed to bridge the gap between complex data and human trust.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053",
    slug: "longevity-lounge",
  },
  {
    id: 2,
    name: "Omega Ecosystem",
    category: "UI/UX",
    year: "2024",
    description:
      "Reimagining hospital management through an intuitive, multi-platform design system.",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070",
    slug: "omega-ecosystem",
  },
  {
    id: 3,
    name: "Orvixa Intelligence",
    category: "Development",
    year: "2023",
    description:
      "Full-stack development of an AI-driven SaaS platform for global business logistics.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    slug: "orvixa",
  },
  {
    id: 4,
    name: "Nova Brand Identity",
    category: "Branding",
    year: "2024",
    description:
      "A complete visual overhaul for a modern fintech startup entering the European market.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    slug: "nova-brand",
  },
  {
    id: 5,
    name: "Growth Catalyst",
    category: "Digital Growth",
    year: "2023",
    description:
      "Scale-focused performance marketing and SEO engine for a leading e-commerce brand.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    slug: "growth-catalyst",
  },
];

const categories = [
  "All",
  "Web Design",
  "UI/UX",
  "Development",
  "Branding",
  "Digital Growth",
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const brandYellow = "#F2B800";

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* --- HERO SECTION --- */}
        <section className="mb-24">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-[8vw] font-bold tracking-tighter leading-[0.9] text-black mb-8"
          >
            Work that speaks <br />
            <span className="text-gray-200 italic font-light">for itself.</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-xl md:text-2xl max-w-2xl font-medium leading-tight"
          >
            A selection of digital experiences, products and brands we&apos;ve
            designed and built for ambitious businesses.
          </motion.p>
        </section>

        {/* --- FILTER BAR --- */}
        <section className="mb-16 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                  filter === cat
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-gray-400 border-gray-100 hover:border-black hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* --- PROJECTS GRID --- */}
        <section className="grid grid-cols-1 gap-24 lg:gap-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                {/* Image Container (Large Visual Card) */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="block relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-[32px] bg-gray-100 mb-8"
                >
                  <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 1 }}
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Floating Year Tag */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                    <span className="text-[10px] font-black text-black uppercase tracking-widest">
                      {project.year}
                    </span>
                  </div>
                </Link>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-4">
                    <span className="text-[#F2B800] text-[10px] font-black uppercase tracking-[0.3em] block mb-2">
                      {project.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black group-hover:translate-x-2 transition-transform duration-500">
                      {project.name}
                    </h2>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-gray-500 text-lg font-medium leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="md:col-span-3 flex md:justify-end pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-3 group/link"
                    >
                      <span className="text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 group-hover/link:text-[#F2B800] group-hover/link:border-[#F2B800] transition-colors">
                        View Case Study
                      </span>
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover/link:bg-[#F2B800] group-hover/link:text-black group-hover/link:rotate-45 transition-all duration-300">
                        <ArrowUpRight size={20} />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}
