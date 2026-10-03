"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 5,
    name: "Digify Agency",
    category: "Web Design",
    year: "2026",
    // DOUBLE CHECK: Is it .png or .jpg? Is it all lowercase?
    image: "/herobannerimages/digify.png",
    slug: "digify-agency",
    liveUrl: "https://digify-agency.vercel.app/",
  },
  {
    id: 6,
    name: "Orvixa",
    category: "Product Design",
    year: "2026",
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

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-4">
            Selected Work.
          </h1>
          <p className="text-gray-500 text-lg">
            High-performance digital products by SkyNova.
          </p>
        </section>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group flex flex-col"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative w-full aspect-[4/2.5] overflow-hidden rounded-[24px] bg-gray-100 mb-6 block border border-gray-100"
                >
                  {/* The Image Component */}
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    priority={project.id > 4} // Loads your custom images first
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    // If image fails, this style prevents it from being a broken icon
                    style={{ backgroundColor: "#f3f4f6" }}
                  />

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm z-10">
                    <span className="text-[10px] font-bold text-black">
                      {project.year}
                    </span>
                  </div>
                </Link>

                <span className="text-[#F2B800] text-[12px] font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </span>

                <h2 className="text-xl md:text-2xl font-bold text-black group-hover:text-[#F2B800] transition-colors mb-4">
                  {project.name}
                </h2>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 group/link text-[12px] font-bold uppercase tracking-widest"
                >
                  View Study{" "}
                  <ArrowUpRight
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
