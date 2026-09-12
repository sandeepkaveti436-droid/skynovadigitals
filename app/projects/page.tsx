"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import RevealHeading from "@/src/components/ui/RevealHeading";

// --- PROJECT DATA (Added more to show the 4-column grid) ---
const projects = [
  {
    id: 5,
    name: "Digify Agency",
    category: "Web Design",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    slug: "digify-agency",
    liveUrl: "https://digify-agency.vercel.app/",
  },
  {
    id: 6,
    name: "Orvixa Workspace",
    category: "Product Design",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    slug: "orvixa-workspace",
    liveUrl: "https://orvixas.vercel.app/",
  },
  {
    id: 1,
    name: "Longevity Lounge",
    category: "Web Design",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800",
    slug: "longevity-lounge",
  },
  {
    id: 2,
    name: "Omega Ecosystem",
    category: "UI/UX",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800",
    slug: "omega-ecosystem",
  },
  {
    id: 3,
    name: "Orvixa Intelligence",
    category: "Development",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    slug: "orvixa",
  },
  {
    id: 4,
    name: "Nova Brand",
    category: "Branding",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    slug: "nova-brand",
  },
];

const categories = [
  "All",
  "Web Design",
  "Product Design",
  "UI/UX",
  "Development",
  "Branding",
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* --- HERO SECTION --- */}
        <section className="mb-12 flex flex-col items-center md:items-start text-center md:text-left">
          <RevealHeading
            as="h1"
            text="Work that speaks for itself."
            className="text-[32px] font-bold tracking-tight text-black mb-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[24px] text-gray-500 max-w-2xl font-light leading-snug"
          >
            A selection of digital experiences designed for ambitious
            businesses.
          </motion.p>
        </section>

        {/* --- FILTER BAR --- */}
        <section className="mb-12 md:mb-16 w-full flex justify-center md:justify-start">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[14px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                  filter === cat
                    ? "bg-black text-white border-black shadow-md"
                    : "bg-gray-50 text-gray-400 border-gray-100 hover:border-black hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* --- PROJECTS GRID: 4 COLUMNS ON DESKTOP --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col items-center md:items-start text-center md:text-left"
              >
                {/* Visual Card - Fixed Aspect for 4-col balance */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative w-full aspect-[4/5] overflow-hidden rounded-[20px] bg-gray-100 mb-6 block"
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-2.5 py-1 rounded-full shadow-sm">
                    <span className="text-[12px] font-bold text-black">
                      {project.year}
                    </span>
                  </div>
                </Link>

                {/* Metadata - 14px */}
                <span className="text-[#F2B800] text-[14px] font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </span>

                {/* Project Title - 24px */}
                <h2 className="text-[24px] font-bold text-black group-hover:text-[#F2B800] transition-colors mb-4 leading-tight">
                  {project.name}
                </h2>

                {/* CTA Link - 14px */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 group/link mt-auto"
                >
                  <span className="text-[14px] font-bold uppercase tracking-widest border-b border-black pb-0.5">
                    View Study
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </Link>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-[12px] font-bold uppercase tracking-widest text-[#F2B800] hover:text-black transition-colors"
                >
                  Live Experience <ArrowUpRight size={14} />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- BOTTOM CTA --- */}
        <section className="mt-32 bg-[#F2B800] p-12 rounded-[32px] flex flex-col items-center text-center">
          <h2 className="text-[28px] font-bold text-black tracking-tight mb-6">
            Ready to start your project?
          </h2>
          <button className="bg-black text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[14px] hover:scale-105 transition-all flex items-center gap-3">
            Work with us <ChevronRight size={18} />
          </button>
        </section>
      </div>
    </main>
  );
}
