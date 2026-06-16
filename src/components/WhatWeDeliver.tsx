"use client";

import React, { useEffect, useRef } from "react";
import {
  Smartphone,
  Globe,
  TrendingUp,
  BarChart3,
  Bot,
  Cloud,
  ArrowUpRight,
} from "lucide-react";
import { useScrollAnimations } from "@/src/hooks/useScrollAnimations";

const WhatWeDeliver = () => {
  const brandYellow = "#F2B800";
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

              {/* BOOK NOW BUTTON - "Start a Project" Model */}
              <div className="mt-10">
                <div className="inline-flex items-center bg-white px-5 py-2.5 rounded-md shadow-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <span className="text-black font-bold text-sm mr-2">
                    Book Now
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
  );
};

export default WhatWeDeliver;
