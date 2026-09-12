"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Globe,
  BarChart3,
  Bot,
  ArrowUpRight,
  ChevronRight,
  X,
  Mail,
  User,
  MessageSquare,
  Layers,
  ChevronDown,
} from "lucide-react";
import RevealHeading from "@/src/components/ui/RevealHeading";

const services = [
  {
    title: "Product Design",
    desc: "UI/UX design that prioritizes psychology and aesthetics.",
    icon: <Smartphone className="text-[#F2B800]" />,
    details: ["User Research", "Systems", "Prototyping"],
    media:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000",
  },
  {
    title: "Web Engineering",
    desc: "Scalable web apps built with modern tech for ultimate speed.",
    icon: <Globe className="text-[#F2B800]" />,
    details: ["Next.js", "CMS", "API Logic"],
    media:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000",
  },
  {
    title: "AI & Automation",
    desc: "Intelligent workflows to 10x your operational efficiency.",
    icon: <Bot className="text-[#F2B800]" />,
    details: ["AI Agents", "Chatbots", "Automation"],
    media:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1000",
  },
  {
    title: "Growth Strategy",
    desc: "Data-driven marketing to maximize your recurring revenue.",
    icon: <BarChart3 className="text-[#F2B800]" />,
    details: ["SEO", "Paid Media", "CRO"],
    media:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
  },
];

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  return (
    <main className="bg-white min-h-screen pt-24 md:pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* --- PAGE HEADER (H1: 32px, Para: 24px) --- */}
        <header className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <RevealHeading
            as="h1"
            text="Capabilities."
            className="text-[32px] font-bold tracking-tight text-black mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[24px] text-gray-500 max-w-2xl font-light leading-snug"
          >
            A full-stack suite of digital solutions designed to take businesses
            from ideas to market leaders.
          </motion.p>
        </header>

        {/* --- SECTION TITLE (H2: 24-28px) --- */}
        <div className="mb-12 border-b border-gray-100 pb-8 flex justify-center md:justify-start">
          <RevealHeading
            text="Our Core Services"
            className="text-[24px] md:text-[28px] font-bold text-black uppercase tracking-widest"
          />
        </div>

        {/* --- SERVICES GRID (4 COLUMNS ON DESKTOP) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start text-center md:text-left group border border-gray-100 p-6 rounded-[24px] hover:shadow-2xl transition-all duration-500 bg-gray-50/30"
            >
              {/* Image Container (Portrait aspect for 4-col balance) */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[18px] bg-gray-100 mb-6">
                <img
                  src={s.media}
                  alt={s.title}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-md">
                  {s.icon}
                </div>
              </div>

              {/* Text Content (H3: 20px) */}
              <div className="flex flex-col flex-grow items-center md:items-start w-full">
                <span className="text-[#F2B800] font-bold text-[12px] uppercase tracking-widest mb-2">
                  Service 0{i + 1}
                </span>

                <h3 className="text-[20px] font-bold mb-3 text-black group-hover:text-[#F2B800] transition-colors">
                  {s.title}
                </h3>

                <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
                  {s.desc}
                </p>

                <button
                  onClick={() => openModal(s.title)}
                  className="mt-auto flex items-center gap-2 text-[13px] font-black uppercase tracking-widest group/btn border-b-2 border-transparent hover:border-[#F2B800] transition-all"
                >
                  Get Started
                  <ArrowUpRight
                    size={14}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER CTA (H2: 24-28px) --- */}
        <section className="mt-32 bg-[#F2B800] p-10 md:p-16 rounded-[32px] flex flex-col items-center text-center">
          <h2 className="text-[24px] md:text-[32px] font-bold text-black tracking-tight mb-8">
            Have an idea worth building?
          </h2>
          <button
            onClick={() => openModal("General Inquiry")}
            className="bg-black text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[14px] hover:scale-105 transition-transform shadow-xl flex items-center gap-3"
          >
            Work with Us <ChevronRight size={18} />
          </button>
        </section>
      </div>

      {/* --- CONTACT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="relative w-full max-w-xl bg-white rounded-[24px] p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="mb-8">
                <h2 className="text-[24px] font-bold text-black mb-2">
                  Let's get started
                </h2>
                <p className="text-gray-500 text-sm">
                  Tell us about your project.
                </p>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-gray-400">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={16}
                    />
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#F2B800] outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-gray-400">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={16}
                    />
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#F2B800] outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-gray-400">
                    Required Service
                  </label>
                  <div className="relative">
                    <Layers
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={16}
                    />
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full pl-11 pr-10 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#F2B800] outline-none transition-all appearance-none text-gray-700 text-sm font-medium"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Design">Product Design</option>
                      <option value="Web Engineering">Web Engineering</option>
                      <option value="AI & Automation">AI & Automation</option>
                      <option value="Growth Strategy">Growth Strategy</option>
                    </select>
                    <ChevronDown
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={16}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-gray-400">
                    Project Details
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-4 top-4 text-gray-300"
                      size={16}
                    />
                    <textarea
                      placeholder="Tell us more..."
                      rows={3}
                      className="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#F2B800] outline-none transition-all text-sm resize-none"
                    />
                  </div>
                </div>
                <button className="w-full py-4 bg-[#F2B800] text-black font-black uppercase tracking-[0.1em] rounded-xl shadow-lg hover:brightness-95 transition-all mt-2 text-[14px]">
                  Send Proposal
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
