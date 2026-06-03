"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CELogo from "./CELogo";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  /* progress counter */
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          /* start exit sequence */
          setTimeout(() => setExiting(true), 300);
          setTimeout(() => onComplete(), 1400);
          return 100;
        }
        return prev + 1.8;
      });
    }, 35);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[999] bg-[#050505] text-white overflow-hidden flex flex-col"
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* ── corner labels ── */}
          <div className="absolute top-5 left-6 text-[10px] tracking-[0.25em] uppercase text-white/30 font-light">
            001 / 100
          </div>
          <div className="absolute top-5 right-6 text-[10px] tracking-[0.25em] uppercase text-white/30 font-light">
            Creative Developer
          </div>
          <div className="absolute bottom-5 left-6 text-[10px] tracking-[0.25em] uppercase text-white/30 font-light">
            Portfolio
          </div>
          <div className="absolute bottom-5 right-6 text-[10px] tracking-[0.25em] uppercase text-white/30 font-light">
            &copy; 2026
          </div>

          {/* ── center logo ── */}
          <div className="flex-1 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              <CELogo size={240} animate={true} />
            </motion.div>
          </div>

          {/* ── bottom progress bar ── */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10">
            <motion.div
              className="h-full bg-white/50"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
