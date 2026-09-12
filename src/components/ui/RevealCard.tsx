"use client";

import { motion } from "framer-motion";

export const revealCardVariants = {
  hidden: { opacity: 0, y: 56 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

type RevealCardProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
};

export default function RevealCard({
  children,
  className = "",
  index = 0,
}: RevealCardProps) {
  return (
    <motion.div
      custom={index}
      variants={revealCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12%" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
