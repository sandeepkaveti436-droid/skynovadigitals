"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// --- Fixed Custom Social Icons (Stable SVGs) ---
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
const TwitterIcon = () => (
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
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const RollingLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link href={href} className="group relative block overflow-hidden h-8">
      <motion.div
        whileHover={{ y: -32 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        className="flex flex-col items-center md:items-start"
      >
        <span className="text-[12px] md:text-sm font-medium text-white/40 uppercase tracking-wider h-8 flex items-center group-hover:text-[#F0B400] transition-colors whitespace-nowrap">
          {title}
        </span>
        <span className="text-[12px] md:text-sm font-medium text-white uppercase tracking-wider h-8 flex items-center whitespace-nowrap">
          {title}
        </span>
      </motion.div>
    </Link>
  );
};

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: true, // 12-hour format
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
      { name: "UI/UX Design", href: "/services" },
      { name: "Development", href: "/services" },
      { name: "AI Automation", href: "/services" },
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
    <footer className="bg-[#050505] pt-20 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      {/* --- BACKGROUND WATERMARK --- */}
      <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.02] select-none whitespace-nowrap">
        <h2 className="text-[22vw] font-black uppercase tracking-tighter text-white">
          SkyNova
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 md:mb-24">
          <div className="lg:col-span-6 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo/LOGO.png"
                alt="SkyNova Logo"
                className="h-7 md:h-8 w-auto"
              />
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                SkyNova<span className="text-[#F0B400]">Digitals</span>
              </span>
            </div>
            <p className="text-lg md:text-2xl text-white/60 font-medium leading-snug max-w-sm mb-10">
              Designing digital experiences that move businesses forward.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F0B400] mb-2">
                  Local Time (IST)
                </span>
                <span className="text-xl font-mono text-white/80 uppercase">
                  {time} <span className="text-xs opacity-40 ml-1">HYD</span>
                </span>
              </div>
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">
                  Studio Location
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  Hyderabad, India
                </span>
              </div>
            </div>
          </div>

          {/* --- LINKS GRID --- */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-4">
            <div className="space-y-6 text-center md:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
                Explore
              </h4>
              <div className="space-y-3">
                {footerLinks.explore.map((link) => (
                  <RollingLink
                    key={link.name}
                    title={link.name}
                    href={link.href}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
                Services
              </h4>
              <div className="space-y-3">
                {footerLinks.services.map((link) => (
                  <RollingLink
                    key={link.name}
                    title={link.name}
                    href={link.href}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-6 col-span-2 md:col-span-1 text-center md:text-left">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">
                Connect
              </h4>
              <div className="flex flex-row flex-wrap justify-center md:justify-start gap-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label} // Fixes Accessibility Error
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#F2B800] hover:border-[#F2B800] transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center md:items-end gap-12 text-center md:text-left">
          <div className="group cursor-pointer flex flex-col items-center md:items-start">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F0B400] mb-2">
              Business Email
            </p>
            <a
              href="mailto:skynovadigitals@gmail.com"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white border-b border-white/10 group-hover:border-[#F0B400] transition-all duration-500"
            >
              skynovadigitals@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <p className="text-[9px] font-medium text-white/80 uppercase tracking-[0.3em] leading-relaxed">
              © 2024 SkyNova Digitals. All rights reserved. <br />
              Creating digital experiences in Hyderabad, India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
