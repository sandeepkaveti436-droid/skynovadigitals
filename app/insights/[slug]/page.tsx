"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import Link from "next/link";

export default function BlogPost({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch data based on the slug.
  // For now, this is your Ultra-Premium template.

  return (
    <main className="bg-white text-black min-h-screen pt-32 pb-24 selection:bg-[#F2B800]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation Back */}
        <Link
          href="/insights"
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={14} /> Back to Insights
        </Link>

        {/* Article Header */}
        <header className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8"
          >
            How AI Automation Can Save Your Business 20+ Hours a Week.
          </motion.h1>

          <div className="flex flex-wrap items-center gap-8 border-y border-gray-100 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F2B800] flex items-center justify-center font-bold text-xs">
                SND
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest">
                  Written by
                </p>
                <p className="text-sm font-bold">SkyNova Team</p>
              </div>
            </div>
            <div className="flex items-center gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Calendar size={14} /> Oct 03, 2024
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} /> 6 Min Read
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <article className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8">
          <p className="text-xl text-black font-medium leading-relaxed">
            The landscape of business operations is shifting. No longer is AI a
            futuristic concept—it is a present-day necessity for companies
            looking to maintain a competitive edge.
          </p>

          <h2 className="text-2xl font-bold text-black tracking-tight pt-4">
            1. Identifying Repetitive Workflows
          </h2>
          <p>
            The first step in our SkyNova framework is auditing the &quot;Dead
            Time.&quot; These are the hours spent on manual data entry, client
            onboarding emails, and scheduling that could be handled by automated
            triggers.
          </p>

          <div className="bg-gray-50 p-8 rounded-[32px] border-l-4 border-[#F2B800] my-12">
            <p className="text-black italic font-medium italic">
              &quot;Automation is not about replacing people; it is about
              replacing the tasks that prevent people from doing their best
              work.&quot;
            </p>
          </div>

          <h2 className="text-2xl font-bold text-black tracking-tight pt-4">
            2. The SkyNova Solution
          </h2>
          <p>
            By integrating Next.js systems with custom AI agents, we create 24/7
            digital employees that handle your backend while you focus on
            high-level strategy.
          </p>
        </article>

        {/* CTA Section */}
        <div className="mt-24 p-12 bg-black rounded-[40px] text-white text-center">
          <h3 className="text-2xl font-bold mb-6">
            Want to automate your own business?
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#F2B800] text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px]"
          >
            Work with us <ArrowLeft className="rotate-180" size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
