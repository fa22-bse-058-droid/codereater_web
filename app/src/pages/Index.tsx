"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router";

const projects = [
  { id: 1, title: "Nebula", category: "Web Design", industry: "Technology", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" },
  { id: 2, title: "Vertex", category: "Development", industry: "Finance", image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80" },
  { id: 3, title: "Prism", category: "Branding", industry: "Creative", image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80" },
  { id: 4, title: "Cipher", category: "App Design", industry: "Security", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80" },
  { id: 5, title: "Flux", category: "Motion", industry: "Entertainment", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" },
];

export default function Index() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-[#050505] pt-24 pb-20">
      {/* Hero heading */}
      <div className="px-6 md:px-10 pt-12 pb-8 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="flex items-baseline gap-4"
        >
          <h1
            className="text-[12vw] md:text-[10vw] leading-none text-white"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            Index
          </h1>
          <span className="text-[3vw] md:text-[2vw] text-white/30" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
            (05)
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4"
        >
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </div>

      {/* Project list */}
      <div className="divide-y divide-white/10">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Link
              to="/"
              className="group flex items-center justify-between px-6 md:px-10 py-5 md:py-6 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-6 md:gap-12 flex-1">
                <span
                  className="text-xl md:text-2xl lg:text-3xl text-white group-hover:translate-x-2 transition-transform duration-500"
                  style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.02em" }}
                >
                  {project.title}
                </span>
                <span className="hidden md:block text-[11px] tracking-[0.1em] text-white/40 uppercase font-light">
                  {project.category}
                </span>
              </div>

              <div className="flex items-center gap-8 md:gap-16">
                <span className="hidden lg:block text-[11px] tracking-[0.1em] text-white/40 uppercase font-light">
                  {project.industry}
                </span>
                <span className="text-[11px] tracking-[0.15em] text-white/30 font-light">
                  ({String(i + 1).padStart(2, "0")})
                </span>
              </div>
            </Link>

            {/* Hover image */}
            <AnimatePresence>
              {hoveredId === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-10 pb-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[project.image, project.image, project.image, project.image].map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05, duration: 0.4 }}
                          className="aspect-video rounded-sm overflow-hidden"
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
