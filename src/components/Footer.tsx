"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useScrollAnimations } from '@/src/hooks/useScrollAnimations';

const Footer = () => {
  const brandYellow = "#F2B800";
  const { fadeInUp } = useScrollAnimations();
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    columnsRef.current.forEach((ref, index) => {
      if (ref) fadeInUp(ref, index * 0.1);
    });
  }, [fadeInUp]);

  return (
    <footer style={{ backgroundColor: brandYellow }} className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          
          {/* COLUMN 1: BRAND */}
          <div ref={(el) => { if (el) columnsRef.current[0] = el; }} className="flex flex-col gap-8">
            {/* BLACK LOGO */}
            <Link href="/">
              <img 
                src="/logo/logo-white.png" // Using the black version path
                alt="Sky Nova Digitals" 
                className="h-12 w-auto object-contain brightness-0" // brightness-0 forces any color image to pure black
              />
            </Link>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-black leading-tight max-w-[280px]">
              We build software systems that grow with your business.
            </h2>
          </div>

          {/* COLUMN 2: COMPANY */}
          <div ref={(el) => { if (el) columnsRef.current[1] = el; }} className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-black uppercase tracking-widest text-sm">Company</h4>
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-gray font-medium hover:text-black transition-colors">Services</Link>
              <Link href="#" className="text-gray font-medium hover:text-black transition-colors">Solutions</Link>
              <Link href="#" className="text-gray font-medium hover:text-black transition-colors">Technologies</Link>
              <Link href="#" className="text-gray font-medium hover:text-black transition-colors">About Us</Link>
            </nav>
          </div>

          {/* COLUMN 3: SOCIAL */}
          <div ref={(el) => { if (el) columnsRef.current[2] = el; }} className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-black uppercase tracking-widest text-sm">Social</h4>
            <nav className="flex flex-col gap-4">
              <Link href="#" className="text-gray font-medium hover:text-black transition-colors">LinkedIn</Link>
              <Link href="#" className="text-gray font-medium hover:text-black transition-colors">Instagram</Link>
              <Link href="#" className="text-gray font-medium hover:text-black transition-colors">Behance</Link>
              <Link href="#" className="text-gray font-medium hover:text-black transition-colors">Dribbble</Link>
            </nav>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div ref={(el) => { if (el) columnsRef.current[3] = el; }} className="flex flex-col gap-6">
            <h4 className="text-xl font-bold text-black uppercase tracking-widest text-sm">Contact</h4>
            <div className="flex flex-col gap-4">
              <Link href="mailto:hello@skynovadigitals.com" className="text-gray font-medium hover:text-black transition-colors break-all">
                hello@skynovadigitals.com
              </Link>
              <p className="text-gray font-medium">+91 - 9392525043</p>
              <p className="text-black font-bold mt-2">
                Remote Worldwide <br /> 
                <span className="text-gray font-medium">GMT +05:30</span>
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black font-bold text-sm">
            Copyright © Sky Nova Digitals 2026
          </p>
          <p className="text-gray font-bold text-sm">
            All rights reserved.| Sandeep Kaveti
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;