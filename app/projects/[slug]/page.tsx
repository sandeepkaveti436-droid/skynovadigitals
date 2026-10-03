"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Zap,
  Layout,
  Code,
  Search,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// 1. Define specific data for your projects
const projectData: Record<
  string,
  {
    name: string;
    link: string;
    image: string;
    efficiency: string;
    growth: string;
    tags: string[];
  }
> = {
  "digify-agency": {
    name: "Digify Agency",
    link: "https://digify-agency.vercel.app/",
    image: "/herobannerimages/digify.png", // Make sure to add this image to your public folder
    efficiency: "98%",
    growth: "+40%",
    tags: ["Digital Strategy", "Next.js", "Performance"],
  },
  "orvixa-workspace": {
    name: "Orvixa Workspace",
    link: "https://orvixas.vercel.app/",
    image: "/herobannerimages/orvix.png",
    efficiency: "95%",
    growth: "+25%",
    tags: ["SaaS", "Productivity", "UI/UX"],
  },
};

export default function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Get specific data or use fallback
  const project = projectData[slug] || {
    name: slug.split("-").join(" "),
    link: "https://hradmin-staffmanagement.vercel.app/",
    image: "/herobannerimages/hr-admin.png",
    efficiency: "99%",
    growth: "+35%",
    tags: ["Strategy", "Design", "Development"],
  };

  return (
    <main className="bg-white text-black min-h-screen pt-32 pb-24 selection:bg-[#F2B800]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Work
        </Link>

        {/* --- PROJECT HERO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
          <div className="lg:col-span-8">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[#F2B800] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block"
            >
              Case Study
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] uppercase"
            >
              {project.name} <br />{" "}
              <span className="text-gray-300 italic font-light">
                Digital Evolution.
              </span>
            </motion.h1>
          </div>
          <div className="lg:col-span-4 pb-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-gray-100 text-[10px] font-bold uppercase tracking-widest bg-gray-50/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- MAIN DISPLAY IMAGE (Now Dynamic) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] w-full rounded-[32px] md:rounded-[48px] overflow-hidden bg-gray-100 mb-24 border border-gray-100 shadow-2xl shadow-gray-200/50"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-fill"
            priority
          />
        </motion.div>

        {/* --- PROJECT DETAILS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-7 space-y-12">
            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">
                The Challenge
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                Scaling a brand in the digital age requires more than just a
                website. Our task for {project.name} was to engineer a
                high-performance system that converts traffic into revenue.
              </p>
            </section>

            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">
                The Solution
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                By implementing a custom Next.js architecture and AI-driven
                workflows, SkyNova Digitals optimized the user journey,
                resulting in significant improvements in load speed and customer
                engagement.
              </p>
            </section>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gray-50 rounded-[40px] p-10 border border-gray-100">
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    Performance
                  </p>
                  <p className="text-4xl font-bold text-[#F2B800]">
                    {project.efficiency}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    Conversion
                  </p>
                  <p className="text-4xl font-bold text-[#F2B800]">
                    {project.growth}
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <span className="font-bold text-lg group-hover:text-[#F2B800] transition-colors">
                    Visit Project
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center group-hover:bg-[#F2B800] group-hover:text-black transition-all">
                    <ExternalLink size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ... Rest of your component (Tools & CTA) stays the same ... */}

        {/* --- TOOLS USED --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Search />,
              title: "Audit",
              desc: "User behavior and market audit.",
            },
            {
              icon: <Layout />,
              title: "Design",
              desc: "Premium UI/UX System build.",
            },
            {
              icon: <Code />,
              title: "Code",
              desc: "Next.js & AI Integration core.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-[32px] border border-gray-100 bg-white hover:border-[#F2B800] transition-colors"
            >
              <div className="text-[#F2B800] mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* --- FINAL CTA --- */}
        <section className="bg-black rounded-[48px] p-12 md:p-24 text-center text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Zap size={200} />
          </div>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-8 relative z-10">
            Create your <br />{" "}
            <span className="text-[#F2B800]">Masterpiece.</span>
          </h2>
          <Link
            href="/contact"
            className="relative z-10 bg-[#F2B800] text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] inline-flex items-center gap-3"
          >
            Work with us <ArrowLeft className="rotate-180" size={16} />
          </Link>
        </section>
      </div>
    </main>
  );
}
