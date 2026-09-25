"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import { ArrowRight } from "lucide-react";

// --- Custom Social Icons (Keep these as they are) ---
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
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // 2. Get current path

  // 3. Logic: If NOT on home page OR if scrolled, use the dark/opaque theme
  const isHomePage = pathname === "/";
  const useDarkTheme = isScrolled || !isHomePage;

  const brandYellow = "#F2B800";

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/projects" },
    { name: "Process", href: "/process" },
  ];

  const socials = [
    { icon: <InstagramIcon />, href: "https://instagram.com" },
    { icon: <LinkedinIcon />, href: "https://linkedin.com" },
    { icon: <TwitterIcon />, href: "https://twitter.com" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 md:py-8 flex justify-between items-center md:items-start pointer-events-none">
        {/* --- MOBILE: COMBINED PILL --- */}
        <motion.div
          animate={{
            backgroundColor:
              useDarkTheme || isMobileMenuOpen
                ? "rgba(255, 255, 255, 0.98)"
                : "rgba(255, 255, 255, 0.08)",
            border:
              useDarkTheme || isMobileMenuOpen
                ? "1px solid rgba(0,0,0,0.1)"
                : "1px solid rgba(255,255,255,0.1)",
          }}
          className="md:hidden flex justify-between items-center w-full pointer-events-auto px-4 py-2.5 rounded-2xl backdrop-blur-xl transition-all duration-500"
        >
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo/LOGO.png" alt="SND" className="h-8 w-auto" />
          </Link>
          <div
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col gap-1.5 cursor-pointer p-2"
          >
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
              }
              className={`w-6 h-0.5 ${useDarkTheme || isMobileMenuOpen ? "bg-black" : "bg-[#F2B800]"}`}
            />
            <motion.span
              animate={
                isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }
              }
              className={`w-6 h-0.5 ${useDarkTheme || isMobileMenuOpen ? "bg-black" : "bg-[#F2B800]"}`}
            />
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
              }
              className={`w-6 h-0.5 ${useDarkTheme || isMobileMenuOpen ? "bg-black" : "bg-[#F2B800]"}`}
            />
          </div>
        </motion.div>

        {/* --- DESKTOP: LOGO PILL --- */}
        <motion.div
          animate={{
            backgroundColor: useDarkTheme
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(255, 255, 255, 0.08)",
            border: useDarkTheme
              ? "1px solid rgba(0,0,0,0.1)"
              : "1px solid rgba(255,255,255,0.1)",
          }}
          className="hidden md:flex pointer-events-auto px-4 py-2.5 rounded-2xl items-center gap-3 backdrop-blur-md transition-all duration-500"
        >
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo/LOGO.png" alt="SND" className="h-9 w-auto" />
            <span
              className={`text-sm font-black tracking-tighter uppercase transition-colors ${useDarkTheme ? "text-black" : "text-[#F2B800]"}`}
            >
              Sky Nova Digitals
            </span>
          </Link>
        </motion.div>

        {/* --- DESKTOP: NAV LINKS PILL --- */}
        <motion.div
          animate={{
            backgroundColor: useDarkTheme
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(255, 255, 255, 0.05)",
            border: useDarkTheme
              ? "1px solid rgba(0,0,0,0.1)"
              : "1px solid rgba(255,255,255,0.1)",
          }}
          className="hidden md:flex pointer-events-auto gap-1 backdrop-blur-md p-1.5 rounded-[20px] transition-all duration-500"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-5 py-2 text-[12px] font-medium uppercase tracking-widest transition-colors ${
                useDarkTheme
                  ? "text-black/50 hover:text-black"
                  : "text-white/50 hover:text-[#F2B800]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`px-6 py-2 text-[12px] font-medium uppercase tracking-widest rounded-[14px] shadow-xl transition-all ${
              useDarkTheme
                ? "bg-[#F2B800] text-black hover:bg-black hover:text-white"
                : "bg-[#F2B800] text-black hover:bg-white"
            }`}
          >
            Work With Us
          </Link>
        </motion.div>
      </nav>

      {/* --- MOBILE OVERLAY (Keep existing code) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[90] bg-white pt-32 px-10 flex flex-col justify-between pb-12 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-black/30 mb-4">
                Menu
              </p>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[20px] font-medium tracking-tighter text-black hover:text-[#F2B800] transition-colors "
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 group mt-10"
              >
                <div className="bg-[#F2B800] flex-grow px-6 py-3 rounded-[16px] border border-black/5 text-white text-[14px] font-bold uppercase tracking-[0.1em] flex items-center justify-center">
                  Work With Us
                </div>
                <div
                  className="w-[60px] h-[45px] rounded-[8px] rounded-tl-[28px] rounded-br-[28px] flex items-center justify-center text-black"
                  style={{ backgroundColor: brandYellow }}
                >
                  <ArrowRight size={22} strokeWidth={2.5} />
                </div>
              </Link>
            </div>
            <div className="flex flex-col gap-6 pt-8 border-t border-black/5">
              <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-black/30">
                Connect
              </p>
              <div className="flex gap-4">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-[18px] border border-black/5 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
