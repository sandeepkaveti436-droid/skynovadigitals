"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Send,
  Zap,
  ShieldCheck,
  BarChart3,
  Globe2,
  ChevronDown,
} from "lucide-react";

// --- Fixed Custom Social Icons ---
const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon
      points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
      fill="currentColor"
    />
  </svg>
);

const reasons = [
  {
    icon: <Zap className="w-5 h-5 text-[#F2B800]" />,
    title: "Unmatched Speed",
    desc: "We deploy high-performance products at the speed of thought.",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-[#F2B800]" />,
    title: "ROI-First Growth",
    desc: "Every design choice is engineered to drive revenue and growth.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#F2B800]" />,
    title: "Direct Access",
    desc: "No middlemen. Work directly with the experts building your future.",
  },
  {
    icon: <Globe2 className="w-5 h-5 text-[#F2B800]" />,
    title: "Global Standards",
    desc: "We use the latest tech stacks to ensure your brand leads the market.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white text-black min-h-screen pt-32 md:pt-40 pb-24 selection:bg-[#F2B800] selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- HERO SECTION --- */}
        <div className="max-w-3xl mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4 block"
          >
            Connect with SkyNova
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8"
          >
            Ready to scale <br />
            <span className="text-[#F2B800] italic">your vision?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed max-w-xl"
          >
            We are currently accepting new projects. Reach out and let&apos;s
            build something that makes a difference.
          </motion.p>
        </div>

        {/* --- WHY US SECTION --- */}
        <section className="mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 hover:border-[#F2B800] transition-all duration-500"
              >
                <div className="mb-4">{reason.icon}</div>
                <h3 className="font-bold text-lg mb-2 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* --- FORM SECTION --- */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm shadow-gray-200/50">
              {submitted ? (
                <div className="py-20 text-center">
                  <div className="w-16 h-16 bg-[#F2B800] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Inquiry Received.</h2>
                  <p className="text-gray-500 text-sm">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[10px] font-black uppercase tracking-widest text-[#F2B800]"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors text-sm text-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors text-sm text-black"
                      />
                    </div>
                  </div>

                  {/* PROJECT TYPE DROPDOWN */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Project Type
                    </label>
                    <div className="relative group">
                      <select
                        required
                        defaultValue=""
                        className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors text-sm cursor-pointer appearance-none text-black pr-10"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="web">Web Design & Development</option>
                        <option value="ai">AI Automation Solutions</option>
                        <option value="seo">Growth & SEO Strategy</option>
                        <option value="design">UI/UX Product Design</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown
                          size={18}
                          className="text-black group-hover:text-[#F2B800] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Your Vision
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your project goals..."
                      className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors text-sm resize-none text-black"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-black text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3"
                  >
                    Send Proposal <Send size={14} />
                  </motion.button>
                </form>
              )}
            </div>
          </div>

          {/* --- CONTACT & SOCIALS --- */}
          <div className="lg:col-span-5 flex flex-col justify-between py-4">
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 text-gray-400">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                    Direct Contact
                  </h4>
                  <p className="text-lg font-bold text-black">
                    skynovadigitals@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 text-gray-400">
                  <ArrowRight size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                    Consultation
                  </h4>
                  <p className="text-lg font-bold text-black">
                    Book a free 15-min discovery call.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-100 mt-12">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
                Social Growth
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/skynovadigitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#F2B800] transition-all"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.youtube.com/@skynovadigitals?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#F2B800] transition-all"
                >
                  <YoutubeIcon />
                </a>
                <a
                  href="https://linkedin.com/company/skynovadigitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#F2B800] transition-all"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
