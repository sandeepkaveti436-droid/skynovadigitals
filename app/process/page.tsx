"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We dive deep into your business goals, user needs, and market gaps to define a clear roadmap.",
  },
  {
    num: "02",
    title: "Strategy & Design",
    desc: "Turning data into wireframes and wireframes into high-fidelity, world-class visual interfaces.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Our engineers build your product using modern stacks (Next.js, AI, Cloud) with clean, scalable code.",
  },
  {
    num: "04",
    title: "Optimization",
    desc: "We don't just launch and leave. We monitor, test, and iterate to ensure maximum growth.",
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-7xl md:text-[10vw] font-bold tracking-tighter leading-none text-black"
          >
            Our <span className="text-[#F2B800]">Way</span>.
          </motion.h1>
          <p className="text-gray-400 font-bold uppercase tracking-[0.5em] text-xs mt-6">
            A Methodical Approach to Excellence
          </p>
        </header>

        <div className="space-y-1">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group border-t border-gray-100 py-16 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-gray-50 transition-colors px-4"
            >
              <div className="flex items-center gap-8 md:gap-24">
                <span className="text-4xl font-light text-gray-200 group-hover:text-[#F2B800] transition-colors">
                  {step.num}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                  {step.title}
                </h2>
              </div>
              <p className="max-w-md text-gray-500 font-medium text-lg mt-6 md:mt-0">
                {step.desc}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-gray-100" />
        </div>

        <footer className="mt-32 bg-[#F2B800] p-12 rounded-[40px] flex flex-col items-center text-center">
          <h3 className="text-4xl font-black tracking-tighter mb-6 text-black">
            Ready to start the journey?
          </h3>
          <button className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Let&apos;s Build Together
          </button>
        </footer>
      </div>
    </main>
  );
}
