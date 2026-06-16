"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Smartphone,
  Globe,
  TrendingUp,
  BarChart3,
  Bot,
  Cloud,
  ArrowUpRight,
  X,
  User,
  Phone,
  Mail,
  Check,
  MoveRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimations } from "@/src/hooks/useScrollAnimations";

const WhatWeDeliver = () => {
  const brandYellow = "#F2B800";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fadeInUp } = useScrollAnimations();
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        fadeInUp(ref, index * 0.1);
      }
    });
  }, [fadeInUp]);

  const services = [
    {
      title: "Mobile App Development",
      description:
        "Native iOS & Android apps with React Native — pixel-perfect and App Store-ready.",
      icon: <Smartphone size={20} />,
    },
    {
      title: "Website Development",
      description:
        "Fast, SEO-optimised websites and web apps built on modern frameworks.",
      icon: <Globe size={20} />,
    },
    {
      title: "Marketing Automation",
      description:
        "Email sequences, lead scoring, and multi-channel funnels that generate leads 24/7.",
      icon: <TrendingUp size={20} />,
    },
    {
      title: "Sales Automation",
      description:
        "CRM integrations, pipeline automation, and follow-up sequences engineered to close deals.",
      icon: <BarChart3 size={20} />,
    },
    {
      title: "AI Services",
      description:
        "Custom AI agents, chatbots, and ML pipelines that embed intelligence into your business.",
      icon: <Bot size={20} />,
    },
    {
      title: "Cloud & DevOps",
      description:
        "AWS, Google Cloud, Docker & Kubernetes — scalable infrastructure with CI/CD pipelines built in.",
      icon: <Cloud size={20} />,
    },
  ];

  return (
    <>
      <section className="bg-white text-black py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-16">
            <p
              style={{ color: brandYellow }}
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
            >
              What we deliver
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl leading-tight text-black">
              Everything you need,
              <br /> nothing you don't
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl font-medium">
              Full-stack software services — mobile, web, automation, and AI —
              under one roof.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#ececec] rounded-xl overflow-hidden">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) serviceRefs.current[index] = el;
                }}
                onClick={() => setIsModalOpen(true)}
                className={`p-10 group transition-all duration-500 border-[#ececec] cursor-pointer relative flex flex-col justify-between
                hover:bg-[#F2B800]
                ${index < 3 ? "md:border-b" : ""} 
                ${index % 3 !== 2 ? "md:border-r" : ""}
                border-b md:border-b-inherit last:border-b-0
              `}
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-8 border border-gray-200 group-hover:bg-white/20 group-hover:border-white transition-all duration-300">
                    <div className="text-black group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-white leading-relaxed font-medium transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* BOOK BUTTON */}
                <div className="mt-10">
                  <div className="inline-flex items-center bg-white px-5 py-2.5 rounded-md shadow-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                    <span className="text-black font-bold text-sm mr-2">
                      Book an appointment
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-black transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 z-10 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12 text-left">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-black mb-2 tracking-tight">
                    Book an appointment
                  </h2>
                  <p className="text-gray-500">
                    Transform your business with our tailored digital solutions.
                  </p>
                </div>

                <form
                  className="space-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#F2B800] outline-none transition-all"
                        />
                      </div>
                    </div>
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          placeholder="+1 (000) 000-0000"
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#F2B800] outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#F2B800] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-gray-700 uppercase tracking-widest">
                      Select Services
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "Mobile Apps",
                        "Web Development",
                        "AI Solutions",
                        "Cloud & DevOps",
                      ].map((item) => (
                        <label
                          key={item}
                          className="relative flex items-center p-4 border border-gray-100 rounded-xl bg-gray-50 cursor-pointer hover:border-[#F2B800] transition-all has-[:checked]:border-[#F2B800] has-[:checked]:bg-yellow-50/50"
                        >
                          <input type="checkbox" className="hidden peer" />
                          <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center mr-3 peer-checked:bg-[#F2B800] peer-checked:border-[#F2B800]">
                            <Check size={14} className="text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-700">
                            {item}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    style={{ backgroundColor: brandYellow }}
                    className="w-full py-5 rounded-2xl text-black font-bold text-lg shadow-xl hover:brightness-95 active:scale-[0.98] mt-4 flex items-center justify-center gap-2 transition-all"
                  >
                    Confirm Appointment <MoveRight size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatWeDeliver;
