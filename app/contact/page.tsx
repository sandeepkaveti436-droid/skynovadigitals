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
  Phone,
  Clock,
  Lock,
} from "lucide-react";

// --- Custom Social Icons ---
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
    title: "14-Day Rapid MVP Sprints",
    desc: "We don't spend months in meetings. We build, ship, and test revenue-ready digital products with ruthless speed.",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-[#F2B800]" />,
    title: "Guaranteed ROI Focus",
    desc: "Every button, interaction, and line of code is engineered with one clear objective: maximizing your conversion rate and pipeline.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#F2B800]" />,
    title: "Zero Agency Bloat",
    desc: "No juniors or account handlers playing telephone. You collaborate directly with principal architects and founders.",
  },
  {
    icon: <Globe2 className="w-5 h-5 text-[#F2B800]" />,
    title: "Enterprise Grade Stack",
    desc: "Built exclusively with Next.js, TypeScript, and modern headless infrastructure that scales to millions without breaking.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xppwvwkr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Error submitting form. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white text-black min-h-screen pt-32 md:pt-40 pb-24 selection:bg-[#F2B800] selection:text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- MAIN GRID: PERSUASIVE CONTENT (LEFT) & BOOKING FORM (RIGHT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-32">
          {/* ================= LEFT SIDE: PERSUASIVE COPY ================= */}
          <div className="lg:col-span-6 lg:sticky lg:top-36 space-y-10">
            <div>
              {/* Eyebrow with Yellow Dot */}
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F2B800] animate-pulse" />
                <span className="text-[11px] sm:text-[12px] font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase">
                  Contract Inquiries & Project Discovery
                </span>
              </div>

              {/* Exact Brand Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-black tracking-tight leading-[0.95] select-none"
              >
                <span className="block text-black uppercase">
                  Driving Growth.
                </span>

                <span className="block text-neutral-300 uppercase mt-1">
                  Scaling Brands With
                </span>

                <span
                  style={{ fontFamily: "'TheSeasonsItalic', serif" }}
                  className="block text-[#F2B800] normal-case italic font-normal tracking-tight text-6xl sm:text-7xl md:text-8xl mt-1"
                >
                  Precision.
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 max-w-lg mt-8 text-neutral-600"
              >
                <p className="text-base md:text-lg leading-relaxed font-normal">
                  Stop burning capital on generic agencies and broken promises.
                  We partner with ambitious founders, funded startups, and
                  enterprise brands to build{" "}
                  <strong className="text-black font-semibold">
                    bespoke digital systems that dominate their category
                  </strong>
                  .
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Book your discovery session today. We assess your product
                  roadmap, deliver a transparent architectural quote, and map
                  out a concrete go-to-market execution plan.
                </p>
              </motion.div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-neutral-700 bg-neutral-50 px-3.5 py-2.5 rounded-xl border border-neutral-200/50">
                <Lock size={14} className="text-[#F2B800]" />
                <span>100% Confidential (Strict NDA)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-neutral-700 bg-neutral-50 px-3.5 py-2.5 rounded-xl border border-neutral-200/50">
                <Clock size={14} className="text-[#F2B800]" />
                <span>Response in &lt; 12 Hours</span>
              </div>
            </div>

            {/* Quick Contact & Discovery Call Info */}
            <div className="space-y-4 pt-4 border-t border-neutral-100">
              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-200/60 text-neutral-600">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                    Direct Partner Desk
                  </h4>
                  <a
                    href="mailto:skynovadigitals@gmail.com"
                    className="text-sm md:text-base font-bold text-black hover:text-[#F2B800] transition-colors"
                  >
                    skynovadigitals@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-11 h-11 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-200/60 text-neutral-600">
                  <ArrowRight size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                    Confidential Discovery Call
                  </h4>
                  <p className="text-sm md:text-base font-bold text-black">
                    1-on-1 Strategy session with Senior Product Lead
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4">
                Verified Channels
              </h4>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/skynovadigitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-all"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="https://www.youtube.com/@skynovadigitals?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-all"
                >
                  <YoutubeIcon />
                </a>

                <a
                  href="https://linkedin.com/company/skynovadigitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-all"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: MANDATORY FORM WITH EXTENDED SERVICES ================= */}
          <div className="lg:col-span-6">
            <div className="bg-neutral-50/90 rounded-[36px] p-8 md:p-12 border border-neutral-200/80 shadow-xl shadow-black/[0.02]">
              <div className="mb-8">
                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#F2B800] bg-black px-3 py-1 rounded-full mb-3">
                  Priority Client Intake
                </span>
                <h3 className="text-3xl font-black tracking-tight text-black mb-2 uppercase">
                  Book Your Project Consultation
                </h3>
                <p className="text-xs text-neutral-500 uppercase tracking-widest font-mono">
                  All fields marked with an asterisk (
                  <span className="text-[#F2B800] font-bold">*</span>) are
                  strictly required.
                </p>
              </div>

              {submitted ? (
                <div className="py-20 text-center">
                  <div className="w-16 h-16 bg-[#F2B800] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#F2B800]/30">
                    <CheckCircle2 size={32} className="text-black" />
                  </div>
                  <h2
                    style={{ fontFamily: "'TheSeasonsItalic', serif" }}
                    className="text-4xl font-normal mb-2 text-black"
                  >
                    Contract Brief Received.
                  </h2>
                  <p className="text-neutral-600 text-sm max-w-sm mx-auto mb-2">
                    Our Senior Lead is reviewing your specifications. Expect a
                    direct callback and calendar invite within 12 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[11px] font-black uppercase tracking-widest text-[#F2B800] hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* FULL NAME (MANDATORY) */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 flex items-center justify-between">
                      <span>
                        Full Name <span className="text-[#F2B800]">*</span>
                      </span>
                      <span className="text-[9px] font-mono text-neutral-400 font-normal">
                        REQUIRED
                      </span>
                    </label>
                    <input
                      required
                      name="Full Name"
                      type="text"
                      placeholder="e.g. Alexander Vance"
                      className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors text-sm text-black placeholder:text-neutral-400"
                    />
                  </div>

                  {/* EMAIL & PHONE (MANDATORY) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* EMAIL */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 flex items-center justify-between">
                        <span>
                          Work Email <span className="text-[#F2B800]">*</span>
                        </span>
                        <span className="text-[9px] font-mono text-neutral-400 font-normal">
                          REQUIRED
                        </span>
                      </label>
                      <input
                        required
                        name="Email"
                        type="email"
                        placeholder="alex@company.com"
                        className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors text-sm text-black placeholder:text-neutral-400"
                      />
                    </div>

                    {/* PHONE NUMBER */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 flex items-center justify-between">
                        <span>
                          Phone / WhatsApp{" "}
                          <span className="text-[#F2B800]">*</span>
                        </span>
                        <span className="text-[9px] font-mono text-neutral-400 font-normal">
                          REQUIRED
                        </span>
                      </label>
                      <div className="relative">
                        <input
                          required
                          name="Phone Number"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors text-sm text-black placeholder:text-neutral-400"
                        />
                        <Phone
                          size={14}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SERVICE REQUIREMENTS DROPDOWN */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500 flex items-center justify-between">
                      <span>
                        Service Requirement{" "}
                        <span className="text-[#F2B800]">*</span>
                      </span>
                      <span className="text-[9px] font-mono text-neutral-400 font-normal">
                        REQUIRED
                      </span>
                    </label>
                    <div className="relative group">
                      <select
                        required
                        name="Project Service"
                        defaultValue=""
                        className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors text-sm cursor-pointer appearance-none text-black pr-10 font-medium"
                      >
                        <option value="" disabled>
                          Select the solution your brand requires
                        </option>
                        <option value="High-Performance Next.js Web Application">
                          High-Performance Next.js Web Application
                        </option>
                        <option value="Custom SaaS Platform & Web App Development">
                          Custom SaaS Platform & Web App Development
                        </option>
                        <option value="Bespoke UI/UX Product Design & Design Systems">
                          Bespoke UI/UX Product Design & Design Systems
                        </option>
                        <option value="AI Automation & Custom Workflow Pipelines">
                          AI Automation & Custom Workflow Pipelines
                        </option>
                        <option value="Performance Digital Marketing (Paid Ads / Meta / Google)">
                          Performance Digital Marketing (Paid Ads / Meta /
                          Google)
                        </option>
                        <option value="SEO Architecture & Organic Market Dominance">
                          SEO Architecture & Organic Market Dominance
                        </option>
                        <option value="Conversion Rate Optimization (CRO) & Funnel Sprints">
                          Conversion Rate Optimization (CRO) & Funnel Sprints
                        </option>
                        <option value="Enterprise Brand Identity & Visual Positioning">
                          Enterprise Brand Identity & Visual Positioning
                        </option>
                        <option value="Dedicated Monthly Engineering & Growth Retainer">
                          Dedicated Monthly Engineering & Growth Retainer
                        </option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown
                          size={18}
                          className="text-black group-hover:text-[#F2B800] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ESTIMATED BUDGET QUALIFIER */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">
                      Estimated Project Budget
                    </label>
                    <div className="relative group">
                      <select
                        name="Estimated Budget"
                        defaultValue=""
                        className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors text-sm cursor-pointer appearance-none text-black pr-10 font-medium"
                      >
                        <option value="" disabled>
                          Select estimated budget allocation
                        </option>
                        <option value="$1,500 – $3,000 (Starter / Sprint)">
                          $1,500 – $3,000 (Starter / Sprint)
                        </option>
                        <option value="$3,000 – $7,500 (Growth Platform)">
                          $3,000 – $7,500 (Growth Platform)
                        </option>
                        <option value="$7,500 – $15,000+ (Full Enterprise Solution)">
                          $7,500 – $15,000+ (Full Enterprise Solution)
                        </option>
                        <option value="Monthly Retainer ($2,000+/mo)">
                          Monthly Retainer ($2,000+/mo)
                        </option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown
                          size={18}
                          className="text-black group-hover:text-[#F2B800] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* PROJECT VISION */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-neutral-500">
                      Project Scope & Goals
                    </label>
                    <textarea
                      name="Project Goals & Timeline"
                      rows={3}
                      placeholder="Share current challenges, target launch timeline, and primary business objectives..."
                      className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors text-sm resize-none text-black placeholder:text-neutral-400"
                    />
                  </div>

                  {/* SUBMISSION CTA */}
                  <motion.button
                    disabled={loading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full bg-[#fc4c00] text-white hover:bg-[#F2B800] hover:text-black transition-all duration-300 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[12px] flex items-center justify-center gap-3 shadow-lg shadow-black/10 cursor-pointer ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading
                      ? "Registering Brief..."
                      : "Lock In Your Discovery Session"}{" "}
                    <Send size={15} />
                  </motion.button>

                  <p className="text-[11px] font-mono text-center text-neutral-400 pt-1">
                    Strict NDA guaranteed. We never share client briefs with
                    third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: WHY BRANDS CHOOSE SKYNOVA OVER OTHER AGENCIES --- */}
        <section className="pt-20 border-t border-neutral-100">
          <div className="max-w-3xl mb-14">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#F2B800] block mb-2">
              The SkyNova Competitive Advantage
            </span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-black leading-tight">
              Why high-growth brands award contracts to{" "}
              <span
                style={{ fontFamily: "'TheSeasonsItalic', serif" }}
                className="text-[#F2B800] font-normal normal-case italic text-4xl sm:text-5xl"
              >
                SkyNova Digitals.
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-neutral-50/60 border border-neutral-200/70 hover:border-[#F2B800] hover:bg-white hover:shadow-xl hover:shadow-black/[0.03] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6">
                  {reason.icon}
                </div>
                <h3 className="font-black text-lg mb-2 tracking-tight text-black uppercase">
                  {reason.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-normal">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
