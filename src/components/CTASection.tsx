"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimations } from "@/src/hooks/useScrollAnimations";

const CTASection = () => {
  const brandYellow = "#F2B800";
  const { scaleInUp } = useScrollAnimations();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) scaleInUp(headingRef.current);
    if (buttonsRef.current) scaleInUp(buttonsRef.current, 0.2);
  }, [scaleInUp]);

  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-tight mb-8"
        >
          Let's build something <br />
          <span style={{ color: brandYellow }}>people will love</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
        >
          30-minute paid strategy session. We analyse your business, recommend
          the right tech, and hand you a clear quote.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          ref={buttonsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Button - Brand Yellow */}
          <button
            style={{ backgroundColor: brandYellow }}
            className="group flex items-center gap-2 px-6 py-2 rounded-[12px] text-white font-medium text-lg hover:brightness-95 transition-all shadow-lg active:scale-95"
          >
            Book a Strategy Session
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          {/* Secondary Button - Black */}
          <button className="px-8 py-2 rounded-[12px] bg-black text-white font-medium text-lg hover:bg-gray-900 transition-all active:scale-95 shadow-lg">
            View Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
