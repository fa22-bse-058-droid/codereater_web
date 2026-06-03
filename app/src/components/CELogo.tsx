"use client";

import { motion, type Variants } from "framer-motion";

interface CELogoProps {
  className?: string;
  animate?: boolean;
  size?: number;
}

/* ── path draw ── */
const drawVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.2, ease: "easeInOut" },
      opacity: { duration: 0.3 },
    },
  },
};

/* ── staggered container ── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export default function CELogo({ className = "", animate = true, size = 200 }: CELogoProps) {
  const h = size * 0.65;
  const s = size * 0.095; /* slim stroke */

  return (
    <motion.svg
      width={size}
      height={h}
      viewBox="0 0 240 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      variants={animate ? containerVariants : undefined}
      initial={animate ? "hidden" : undefined}
      animate={animate ? "visible" : undefined}
    >
      {/* C outer arc */}
      <motion.path
        d="M120 14C66 14 22 54 22 78C22 102 66 142 120 142"
        stroke="white"
        strokeWidth={s}
        strokeLinecap="round"
        fill="none"
        variants={animate ? drawVariants : undefined}
      />

      {/* C inner arc */}
      <motion.path
        d="M120 42C82 42 54 62 54 78C54 94 82 114 120 114"
        stroke="white"
        strokeWidth={s}
        strokeLinecap="round"
        fill="none"
        variants={animate ? drawVariants : undefined}
      />

      {/* Shared vertical spine (C's right edge = E's left edge) */}
      <motion.line
        x1={120}
        y1={14}
        x2={120}
        y2={142}
        stroke="white"
        strokeWidth={s}
        strokeLinecap="round"
        variants={animate ? drawVariants : undefined}
      />

      {/* E top bar */}
      <motion.line
        x1={120}
        y1={14}
        x2={218}
        y2={14}
        stroke="white"
        strokeWidth={s}
        strokeLinecap="round"
        variants={animate ? drawVariants : undefined}
      />

      {/* E middle bar */}
      <motion.line
        x1={120}
        y1={78}
        x2={218}
        y2={78}
        stroke="white"
        strokeWidth={s}
        strokeLinecap="round"
        variants={animate ? drawVariants : undefined}
      />

      {/* E bottom bar */}
      <motion.line
        x1={120}
        y1={142}
        x2={218}
        y2={142}
        stroke="white"
        strokeWidth={s}
        strokeLinecap="round"
        variants={animate ? drawVariants : undefined}
      />
    </motion.svg>
  );
}
