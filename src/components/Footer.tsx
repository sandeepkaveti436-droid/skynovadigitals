"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const RollingLink = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link href={href} className="group relative block overflow-hidden h-8">
      {" "}
      {/* Increased height from h-6 to h-8 */}
      <motion.div
        whileHover={{ y: -32 }} // Increased from -24 to -32 to match new height
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        className="flex flex-col items-center md:items-start"
      >
        {/* Added whitespace-nowrap and matched height h-8 */}
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
  const brandYellow = "#F0B400";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Updated to India Standard Time
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: false,
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
      { name: "Insights", href: "/insights" },
    ],
    services: [
      { name: "Digital Experiences", href: "/services" },
      { name: "UI/UX Design", href: "/services" },
      { name: "Development", href: "/services" },
      { name: "Growth & Marketing", href: "/services" },
    ],
    connect: [
      { name: "LinkedIn", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Behance", href: "#" },
      { name: "Dribbble", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#050505] pt-20 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
      {/* --- BACKGROUND WATERMARK --- */}
      <div className="absolute bottom-[-2%] left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.02] select-none whitespace-nowrap">
        <h2 className="text-[22vw] font-black uppercase tracking-tighter text-white">
          SkyNova
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- TOP BRAND SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 md:mb-24">
          <div className="lg:col-span-6 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo/LOGO.png"
                alt="SkyNova"
                className="h-7 md:h-8 w-auto"
              />
              <span className="text-xl font-black tracking-tighter text-white uppercase">
                SkyNova<span className="text-[#F0B400]">Digitals</span>
              </span>
            </div>
            <p className="text-lg md:text-2xl text-white/60 font-medium leading-snug max-w-sm mb-10">
              Designing digital experiences that move businesses forward.
            </p>

            {/* Metadata: Time & Location */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-12">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F0B400] mb-2">
                  Local Time (IST)
                </span>
                <span className="text-xl font-mono text-white/80">
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
              <div className="w-[1px] h-10 bg-white/10 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">
                  System Status
                </span>
                <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Studio Operational
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
              <div className="flex flex-row md:flex-col justify-center md:justify-start gap-6 md:gap-3">
                {footerLinks.connect.map((link) => (
                  <RollingLink
                    key={link.name}
                    title={link.name}
                    href={link.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- CONTACT & BOTTOM BAR --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center md:items-end gap-12 text-center md:text-left">
          <div className="group cursor-pointer flex flex-col items-center md:items-start">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F0B400] mb-2">
              Business Email
            </p>
            <p className="text-[10px] font-medium text-white/80 uppercase tracking-[0.2em] mb-3 max-w-[250px]">
              Reach out for collaborations, inquiries, or just to say hi!
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
              digital experiences in Hyderabad, India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
