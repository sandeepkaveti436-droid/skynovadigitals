"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

// The 3 articles designed specifically for your SEO goals
const posts = [
  {
    id: 1,
    category: "Development",
    title: "Why Next.js is the Best Choice for Business Growth in 2024",
    excerpt:
      "Discover why top-tier brands are switching to Next.js for lightning-fast performance, superior SEO, and unmatched scalability.",
    date: "Oct 03, 2024",
    readTime: "5 min read",
    slug: "nextjs-for-business-growth",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "AI Automation",
    title: "How AI Automation Can Save Your Business 20+ Hours a Week",
    excerpt:
      "Stop wasting time on repetitive tasks. Learn how SkyNova Digitals implements AI workflows to streamline operations and boost ROI.",
    date: "Sept 28, 2024",
    readTime: "6 min read",
    slug: "ai-automation-for-business",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Performance",
    title: "The Secret to 100% Google PageSpeed Scores: A Case Study",
    excerpt:
      "We break down the technical optimizations used by the best web design agency in India to achieve perfect performance scores.",
    date: "Sept 15, 2024",
    readTime: "4 min read",
    slug: "secret-to-100-pagespeed",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function InsightsPage() {
  return (
    <main className="bg-white text-black min-h-screen pt-32 pb-24 selection:bg-[#F2B800] selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <section className="max-w-3xl mb-20 md:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4 block"
          >
            SkyNova Journal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8"
          >
            Digital <br />{" "}
            <span className="text-[#F2B800] italic">Insights.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            Expert perspectives on web engineering, AI automation, and
            strategies to help your business lead the digital market.
          </motion.p>
        </section>

        {/* --- INSIGHTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/insights/${post.slug}`}>
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] mb-8 bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                {/* Title & Excerpt */}
                <h2 className="text-2xl font-bold tracking-tighter mb-4 group-hover:text-[#F2B800] transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read Link */}
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                  Read Article{" "}
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* --- NEWSLETTER CTA --- */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 p-10 md:p-20 rounded-[48px] bg-gray-50 border border-gray-100 text-center flex flex-col items-center"
        >
          <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
            Get the edge, <br /> delivered to your inbox.
          </h3>
          <p className="text-gray-500 max-w-sm mb-10 text-sm md:text-base font-medium">
            Join 500+ founders receiving weekly insights on digital growth and
            AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:border-[#F2B800] text-sm transition-all"
            />
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-[#F2B800] hover:text-black transition-all">
              Subscribe
            </button>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
