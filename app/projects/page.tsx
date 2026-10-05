"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- Project Data ---
const projects = [
  {
    id: 1,
    name: "Digify Agency",
    category: "Web Design",
    year: "2024",
    image: "/herobannerimages/digify.png",
    slug: "digify-agency",
    liveUrl: "https://digify-agency.vercel.app/",
  },
  {
    id: 2,
    name: "Orvixa",
    category: "Product Design",
    year: "2024",
    image: "/herobannerimages/orvix.png",
    slug: "orvixa-Dashboard",
    liveUrl: "https://orvixas.vercel.app/",
  },
  {
    id: 3,
    name: "Hr Admin Intelligence",
    category: "Staff Management",
    year: "2023",
    image: "/herobannerimages/hr-admin.png",
    slug: "hr-admin-intelligence",
    liveUrl: "https://hradmin-staffmanagement.vercel.app/",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "Web Design",
    "Product Design",
    "Staff Management",
  ];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-[#F2B800] selection:text-black">
      <div className="max-w-[1440px] mx-auto">
        {/* --- HEADER --- */}
        <section className="mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4 block">
            Selected Works
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-6">
            Built for{" "}
            <span className="text-gray-300 italic font-light">Impact.</span>
          </h1>
        </section>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative w-full aspect-[16/10] overflow-hidden rounded-[32px] bg-gray-100 mb-8 block border border-gray-100 shadow-sm"
                >
                  <Image
                    src={project.image}
                    alt={project.name || "SkyNova Digital Project"}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm z-10">
                    <span className="text-[10px] font-bold text-black">
                      {project.year}
                    </span>
                  </div>
                </Link>

                <div className="flex flex-col flex-grow">
                  <span className="text-[#F2B800] text-[11px] font-black uppercase tracking-[0.2em] mb-3">
                    {project.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-black group-hover:text-[#F2B800] transition-colors mb-4 tracking-tight">
                    {project.name}
                  </h2>

                  <div className="flex items-center gap-6 mt-auto">
                    {/* FIXED: Added aria-label for accessibility */}
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`View case study for ${project.name}`}
                      className="inline-flex items-center gap-2 group/link"
                    >
                      <span className="text-[12px] font-bold uppercase tracking-widest border-b-2 border-black group-hover/link:border-[#F2B800] transition-all pb-0.5">
                        View Study
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                      />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit live website for ${project.name}`}
                        className="text-gray-400 hover:text-black transition-colors flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest"
                      >
                        <Globe size={14} /> Live Site
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
