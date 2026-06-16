"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

    if (hasSeenSplash) {
      setIsVisible(false);
      setShouldRender(false);
    } else {
      setShouldRender(true);
      
      // Auto-hide after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", // Slide up effect
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              filter: "blur(0px)",
              transition: { duration: 1, ease: "easeOut" } 
            }}
            className="relative"
          >
            <img 
              src="/logo/LOGO.png" 
              alt="SND Logo" 
              className="h-24 md:h-32 w-auto object-contain"
            />
            
            {/* Animated Glow behind logo */}
            <motion.div 
              animate={{ 
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-[#F2B800] blur-[60px] -z-10"
            />
          </motion.div>

          {/* Loading Progress Line */}
          <div className="mt-12 w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-[#F2B800]"
            />
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]"
          >
            Sky Nova Digitals • 2025
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;