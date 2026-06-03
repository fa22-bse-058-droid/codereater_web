"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

/* ───── projects ───── */
const projects = [
  {
    id: 1,
    title: "Nebula",
    category: "Web Design",
    industry: "Technology",
    year: "2025",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&q=80",
  },
  {
    id: 2,
    title: "Vertex",
    category: "Development",
    industry: "Finance",
    year: "2025",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1920&q=80",
  },
  {
    id: 3,
    title: "Prism",
    category: "Branding",
    industry: "Creative",
    year: "2024",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1920&q=80",
  },
  {
    id: 4,
    title: "CAREERAI",
    category: "AI PLATFORM",
    industry: "CAREER TECH",
    year: "2024",
    image: "https://github.com/user-attachments/assets/c601a074-9257-48b7-b51e-79c8e07b5592",
    link: "https://rizwanali1321-career-ai.hf.space/",
  },
  {
    id: 5,
    title: "Flux",
    category: "Motion",
    industry: "Entertainment",
    year: "2024",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80",
  },
];

/* ───── page ───── */
export default function Featured() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % projects.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + projects.length) % projects.length);
  }, []);

  /* keyboard nav */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const project = projects[current];

  const slideVariants = {
    enter: (dir: number) => ({ scale: 1.08, opacity: 0, x: dir > 0 ? "5%" : "-5%" }),
    center: { scale: 1, opacity: 1, x: 0 },
    exit: (dir: number) => ({ scale: 0.98, opacity: 0, x: dir > 0 ? "-5%" : "5%" }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={project.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Top info bar */}
      <div className="absolute top-20 left-0 right-0 px-6 md:px-10 flex items-start justify-between z-10 pointer-events-none">
        <div />
        <div className="text-right">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-light">
            {project.category}
          </p>
          <p className="text-[10px] tracking-[0.15em] text-white/30 font-light mt-1">
            {project.industry}
          </p>
        </div>
      </div>

      {/* Center dots counter */}
      <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`text-[10px] tracking-[0.15em] transition-all duration-500 font-light ${
              i === current ? "text-white" : "text-white/30 hover:text-white/60"
            }`}
          >
            ({String(i + 1).padStart(2, "0")})
          </button>
        ))}
      </div>

      {/* Project title */}
      <div className="absolute bottom-16 left-6 md:left-10 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <h1
              className="text-[18vw] md:text-[14vw] leading-[0.85] text-white tracking-tight"
              style={{ fontFamily: '"Bebas Neue", sans-serif' }}
            >
              {project.title}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-16 right-6 md:right-10 z-10 flex items-center gap-5">
        <button
          onClick={goPrev}
          className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors font-light group"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
          Prev
        </button>
        <div className="w-[1px] h-3 bg-white/20" />
        <button
          onClick={goNext}
          className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors font-light group"
        >
          Next
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Number indicator */}
      <div className="absolute bottom-16 left-6 md:left-10 z-10">
        <span className="text-[10px] tracking-[0.15em] text-white/40 font-light">
          ({String(current + 1).padStart(2, "0")})
        </span>
      </div>

      {/* View project link */}
      <div className="absolute bottom-24 right-6 md:right-10 z-10 hidden md:block">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors font-light group"
          >
            View Project
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        ) : (
          <button className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors font-light group">
            View Project
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}
      </div>

      {/* Grid lines decoration */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-white/5" />
        <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-white/5" />
      </div>
    </section>
  );
}
