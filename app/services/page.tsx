"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Zap,
  BarChart3,
  Bot,
  Shield,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Product Design",
    desc: "UI/UX design that prioritizes user psychology and brand aesthetics.",
    icon: <Smartphone className="text-[#F2B800]" />,
    details: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    title: "Web Engineering",
    desc: "High-performance, scalable web applications built with Next.js and Tailwind.",
    icon: <Globe className="text-[#F2B800]" />,
    details: ["Custom CMS", "E-commerce", "Performance Tuning"],
  },
  {
    title: "AI & Automation",
    desc: "Implementing custom AI agents and workflows to 10x your efficiency.",
    icon: <Bot className="text-[#F2B800]" />,
    details: ["AI Chatbots", "Workflow Automation", "Machine Learning"],
  },
  {
    title: "Growth Strategy",
    desc: "Data-driven marketing to scale your digital presence and revenue.",
    icon: <BarChart3 className="text-[#F2B800]" />,
    details: ["SEO", "Conversion Rate Optimization", "Paid Media"],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[9vw] font-bold tracking-tighter leading-none mb-8"
          >
            Capabilities<span className="text-[#F2B800]">.</span>
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-2xl font-medium">
            We provide a full-stack suite of digital solutions designed to take
            businesses from ambitious ideas to market leaders.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-3xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "#fafafa" }}
              className="bg-white p-12 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 border border-gray-100">
                  {s.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-500 font-medium mb-8 max-w-xs">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.details.map((d) => (
                    <span
                      key={d}
                      className="text-[10px] font-black uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full text-gray-400"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold mt-12 hover:text-[#F2B800] transition-colors">
                Enquire <ArrowUpRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
