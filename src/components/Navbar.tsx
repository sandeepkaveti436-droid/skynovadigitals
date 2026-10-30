"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

// --- Social Icons ---
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

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// --- Motion Rolling Text Link Component (Desktop) ---
const MotionNavLink = ({
  name,
  href,
  isActive,
  useDarkTheme,
}: {
  name: string;
  href: string;
  isActive: boolean;
  useDarkTheme: boolean;
}) => {
  return (
    <Link href={href} className="relative py-1 overflow-hidden group block">
      <motion.div
        initial="initial"
        whileHover="hovered"
        className="relative flex flex-col justify-center"
      >
        {/* Top Text (Moves Up on Hover) */}
        <motion.span
          variants={{
            initial: { y: 0, opacity: 1 },
            hovered: { y: "-120%", opacity: 0 },
          }}
          transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
          className={`text-[13px] font-semibold uppercase tracking-wider block ${
            isActive
              ? "text-[#F2B800]"
              : useDarkTheme
                ? "text-neutral-600"
                : "text-white/80"
          }`}
        >
          {name}
        </motion.span>

        {/* Bottom Text (Slides In from Below on Hover) */}
        <motion.span
          variants={{
            initial: { y: "120%", opacity: 0 },
            hovered: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.28, ease: [0.33, 1, 0.68, 1] }}
          className="absolute top-0 left-0 text-[13px] font-semibold uppercase tracking-wider text-[#F2B800] block"
        >
          {name}
        </motion.span>
      </motion.div>

      {/* Active Underline Indicator */}
      {isActive && (
        <motion.div
          layoutId="activeUnderline"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F2B800] rounded-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const useDarkTheme = isScrolled || !isHomePage;

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/projects" },
    { name: "Process", href: "/process" },
  ];

  const socials = [
    {
      icon: <InstagramIcon />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    { icon: <LinkedinIcon />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <XIcon />, href: "https://x.com", label: "X" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ================= DESKTOP & DEFAULT HEADER ================= */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          useDarkTheme
            ? "bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
            : "bg-transparent border-b border-transparent shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between md:grid md:grid-cols-3">
          {/* LOGO */}
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                src="/logo/SND-newlogo.png"
                alt="Sky Nova Digitals Logo"
                className="h-8 md:h-9 w-auto"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <MotionNavLink
                key={link.name}
                name={link.name}
                href={link.href}
                isActive={pathname === link.href}
                useDarkTheme={useDarkTheme}
              />
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center justify-end">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-[6px] bg-[#F2B800] text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#F2B800]/25 overflow-hidden"
              >
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
                <span className="relative z-10">Work With Us</span>
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="md:hidden flex items-center">
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              aria-label="Open navigation"
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 rounded-lg transition-colors ${
                useDarkTheme
                  ? "text-neutral-900 hover:bg-neutral-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Menu size={28} />
            </motion.button>
          </div>
        </div>
      </header>

      {/* ================= TALLER FLOATING CARD POPUP ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden">
            {/* Dark Frosted Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Popup Card (Taller height with h-[84dvh] & generous spacing) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-sm h-[94dvh] max-h-[820px] bg-white rounded-[28px] shadow-2xl p-6 sm:p-7 z-10 border border-neutral-100 flex flex-col justify-between"
            >
              {/* 1. Header: Logo & Close Button */}
              <div className="flex items-center justify-between pb-5 border-b border-neutral-100 shrink-0">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center"
                >
                  <img
                    src="/logo/SND-newlogo.png"
                    alt="Sky Nova Digitals Logo"
                    className="h-8 w-auto"
                  />
                </Link>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* 2. Body: Navigation Links & CTA (Spaced evenly) */}
              <div className="flex-1 flex flex-col justify-center py-4 space-y-6 overflow-y-auto">
                <span className="text-[14px] font-mono uppercase tracking-[0.25em] text-neutral-400 block font-semibold">
                  Menu
                </span>

                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx, duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-[22px] font-medium tracking-tight transition-colors ${
                          pathname === link.href
                            ? "text-[#F2B800]"
                            : "text-neutral-900 hover:text-[#F2B800]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Work With Us Button */}
                <div className="pt-2">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#F2B800] text-black font-medium uppercase tracking-wider text-xs shadow-md shadow-[#F2B800]/25 active:scale-[0.98] transition-transform"
                  >
                    <span>Work With Us</span>
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>

              {/* 3. Footer: Connect & Socials */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between shrink-0">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                  Connect
                </span>
                <div className="flex items-center gap-2.5">
                  {socials.map((social, i) => (
                    <motion.a
                      key={i}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-[#F2B800] hover:border-[#F2B800] hover:text-black transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
