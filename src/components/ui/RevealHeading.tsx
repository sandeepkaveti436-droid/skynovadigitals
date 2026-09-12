"use client";

import React from "react";
import { motion } from "framer-motion";

const wordVariants = {
  hidden: { y: "100%" },
  visible: (index: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.08,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  }),
};

type RevealHeadingProps = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export default function RevealHeading({
  text,
  as = "h2",
  className = "",
}: RevealHeadingProps) {
  const Heading = motion[as];

  return (
    <Heading
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom mr-[0.2em]"
        >
          <motion.span
            custom={index}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Heading>
  );
}
