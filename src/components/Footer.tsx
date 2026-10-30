"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// --- Custom Social SVG Icons ---
const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
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
    width="18"
    height="18"
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
    width="18"
    height="18"
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

const TwitterIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

// --- Rolling Text Link Animation ---
const RollingLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link href={href} className="group relative block overflow-hidden h-7">
      <motion.div
        whileHover={{ y: -28 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start"
      >
        <span className="text-xs md:text-[13px] font-medium text-neutral-400 uppercase tracking-wider h-7 flex items-center group-hover:text-[#F2B800] transition-colors whitespace-nowrap">
          {title}
        </span>
        <span className="text-xs md:text-[13px] font-bold text-white uppercase tracking-wider h-7 flex items-center whitespace-nowrap">
          {title}
        </span>
      </motion.div>
    </Link>
  );
};

export default function Footer() {
  const [time, setTime] = useState("");
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const footerLinks = {
    explore: [
      { name: "Home", href: "/" },
      { name: "Work", href: "/projects" },
      { name: "Services", href: "/services" },
      { name: "About", href: "/about" },
      { name: "Process", href: "/process" },
    ],
    services: [
      { name: "Digital Experiences", href: "/services" },
      { name: "UI/UX Design Systems", href: "/services" },
      { name: "Next.js Development", href: "/services" },
      { name: "Growth & CRO", href: "/services" },
    ],
  };

  const socials = [
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/skynovadigitals",
      label: "Follow on Instagram",
    },
    {
      icon: <YoutubeIcon />,
      href: "https://www.youtube.com/@skynovadigitals?sub_confirmation=1",
      label: "Subscribe on YouTube",
    },
    {
      icon: <LinkedinIcon />,
      href: "https://linkedin.com/company/skynovadigitals",
      label: "Connect on LinkedIn",
    },
    {
      icon: <TwitterIcon />,
      href: "https://twitter.com/skynovadigitals",
      label: "Follow on Twitter",
    },
  ];

  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-12 px-6 border-t border-white/10 overflow-hidden">
      {/* ================= 1. ANIMATED BLURRED VIDEO BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110 filter blur-[32px] opacity-25"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-dark-water-41554-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Tint & Frost Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]/70 backdrop-blur-md" />

        {/* Ambient Gold Radial Flare */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle,_rgba(242,184,0,0.12)_0%,_transparent_70%)] blur-3xl" />
      </div>

      {/* ================= 2. BACKGROUND WATERMARK TYPOGRAPHY ================= */}
      <div className="absolute bottom-[-2vw] left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.025] select-none whitespace-nowrap z-0">
        <h2 className="text-[22vw] font-black uppercase tracking-tighter text-white">
          Sky Nova
        </h2>
      </div>

      {/* ================= 3. MAIN FOOTER CONTENT ================= */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 md:mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-6 flex flex-col items-center text-center md:items-start md:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 group"
            >
              <img
                src="/logo/SND-newlogo.png"
                alt="SkyNova Logo"
                className="h-7 md:h-8 w-auto object-contain"
              />
              {/* Sky (Yellow) Nova (Orange) Digitals (Yellow) */}
              <span className="text-xl font-medium tracking-tight uppercase">
                <span className="text-[#F2B800]">Sky</span>{" "}
                <span className="text-[#FF6B00]">Nova</span>{" "}
                <span className="text-[#F2B800]">Digitals</span>
              </span>
            </Link>

            <p className="text-base md:text-xl text-neutral-400 font-light leading-relaxed max-w-sm mb-10">
              Architecting bespoke digital products and Next.js platforms
              designed to move enterprise brands forward.
            </p>

            {/* Live Clock & Studio Location */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-10 p-4 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="text-[12px] font-mono font-medium uppercase tracking-[0.25em] text-[#F2B800] mb-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2B800] animate-pulse" />
                  Local Time (IST)
                </span>
                <span className="text-lg font-mono text-white tracking-tight">
                  {time || "06:30 PM"}{" "}
                  <span className="text-xs text-neutral-500 font-sans ml-1">
                    HYD
                  </span>
                </span>
              </div>

              <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />

              <div className="flex flex-col">
                <span className="text-[12px] font-mono font-bold uppercase tracking-[0.25em] text-neutral-400 mb-1.5">
                  Studio Location
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  Hyderabad, India
                </span>
              </div>
            </div>
          </div>

          {/* Links & Socials */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-5">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-white">
                Explore
              </h4>
              <div className="space-y-2">
                {footerLinks.explore.map((link) => (
                  <RollingLink
                    key={link.name}
                    title={link.name}
                    href={link.href}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-white">
                Capabilities
              </h4>
              <div className="space-y-2">
                {footerLinks.services.map((link) => (
                  <RollingLink
                    key={link.name}
                    title={link.name}
                    href={link.href}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-5 col-span-2 sm:col-span-1">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-white">
                Network
              </h4>
              <div className="flex flex-row flex-wrap gap-2.5">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-neutral-900/80 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-[#F2B800] hover:border-[#F2B800] transition-all duration-300 shadow-sm"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="group flex flex-col items-center md:items-start">
            <span className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#F2B800] font-bold mb-1.5 flex items-center gap-1.5">
              Direct Senior Partner Inquiries
            </span>
            <a
              href="mailto:skynovadigitals@gmail.com"
              className="text-lg sm:text-2xl font-bold text-white hover:text-[#F2B800] transition-colors duration-300 inline-flex items-center gap-2 group"
            >
              <span>skynovadigitals@gmail.com</span>
              <ArrowUpRight
                size={18}
                className="text-neutral-500 group-hover:text-[#F2B800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-3">
            <div className="flex gap-6 text-[12px] font-medium uppercase text-neutral-400">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-neutral-600">•</span>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>

            <p className="text-[12px] font-mono text-neutral-500 uppercase tracking-widest leading-relaxed">
              © {currentYear} Sky Nova Digitals. Crafted for the Modern Web.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
