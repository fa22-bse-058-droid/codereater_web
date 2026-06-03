"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router";
import { ArrowUpRight, X, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import CELogo from "./CELogo";

/* ───── time hook ───── */
function useLiveTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const pk = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);
      setTime(pk);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ───── menu overlay ───── */
function MenuOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const location = useLocation();
  const items = [
    { label: "Featured", count: "(05)", path: "/" },
    { label: "Index", count: "(05)", path: "/work" },
    { label: "About", count: "", path: "/about" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] bg-[#050505] flex flex-col"
        >
          {/* Menu header */}
          <div className="flex items-center justify-between px-6 md:px-10 py-5">
            <Link to="/" onClick={onClose} className="flex items-center gap-3">
              <CELogo size={36} animate={false} />
            </Link>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Menu links */}
          <div className="flex-1 flex flex-col items-start justify-center px-6 md:px-10 gap-2">
            {items.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`group flex items-baseline gap-3 text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-tight transition-colors ${
                      isActive ? "text-white" : "text-white/40 hover:text-white/70"
                    }`}
                    style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                  >
                    {item.label}
                    {item.count && (
                      <span className="text-[0.35em] text-white/30 align-super">{item.count}</span>
                    )}
                    <ArrowUpRight
                      size={24}
                      className="opacity-0 group-hover:opacity-100 transition-opacity translate-y-1"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Menu footer */}
          <div className="flex items-center justify-between px-6 md:px-10 py-6 border-t border-white/10">
            <div className="flex items-center gap-6">
              <a href="#" className="text-[11px] tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase flex items-center gap-1">
                <Linkedin size={13} /> Linkedin
              </a>
              <a href="#" className="text-[11px] tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase flex items-center gap-1">
                <Github size={13} /> GitHub
              </a>
              <a href="#" className="text-[11px] tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase flex items-center gap-1">
                <Twitter size={13} /> Twitter
              </a>
              <a href="#" className="text-[11px] tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase flex items-center gap-1">
                <Instagram size={13} /> Instagram
              </a>
            </div>
            <a
              href="mailto:hello@codeeater.dev"
              className="text-[11px] tracking-[0.15em] text-white/40 hover:text-white transition-colors"
            >
              hello@codeeater.dev
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ───── layout ───── */
export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const time = useLiveTime();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isFeatured = location.pathname === "/";

  return (
    <div className="relative min-h-screen bg-[#050505] text-white">
      {/* ═══ HEADER ═══ */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled && !isFeatured ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5" : ""
        }`}
      >
        <div className="flex items-start justify-between px-4 md:px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 mt-0.5">
            <CELogo size={scrolled ? 32 : 38} animate={false} />
          </Link>

          {/* Center nav */}
          <nav className="hidden md:flex items-start gap-6 absolute left-1/2 -translate-x-1/2 top-4">
            <Link
              to="/"
              className={`text-[11px] tracking-[0.1em] uppercase transition-colors ${
                isFeatured ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              Featured <span className="text-white/30">(05)</span>
            </Link>
            <Link
              to="/work"
              className={`text-[11px] tracking-[0.1em] uppercase transition-colors ${
                location.pathname === "/work" ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              Index <span className="text-white/30">(05)</span>
            </Link>
            <Link
              to="/about"
              className={`text-[11px] tracking-[0.1em] uppercase transition-colors ${
                location.pathname === "/about" ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              About
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-start gap-4 md:gap-8">
            <div className="hidden lg:block text-[11px] tracking-[0.05em] text-white/50 text-right leading-relaxed">
              <a href="mailto:hello@codeeater.dev" className="hover:text-white transition-colors block">
                hello@codeeater.dev
              </a>
            </div>
            <div className="hidden md:block text-[11px] tracking-[0.05em] text-white/50 text-right">
              Creative Developer
            </div>
            <div className="flex items-center gap-1.5 text-[11px] tracking-[0.05em] text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {time} (PKT)
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="w-9 h-9 rounded-full border border-white/20 flex flex-col items-center justify-center gap-[3px] hover:border-white/40 transition-colors ml-1"
            >
              <span className="w-3 h-[1px] bg-white/60" />
              <span className="w-3 h-[1px] bg-white/60" />
              <span className="w-3 h-[1px] bg-white/60" />
            </button>
          </div>
        </div>
      </header>

      {/* ═══ MENU OVERLAY ═══ */}
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ═══ MAIN CONTENT ═══ */}
      <main>{children}</main>

      {/* ═══ FOOTER BAR ═══ */}
      <footer className="fixed bottom-0 left-0 right-0 z-[100] pointer-events-none">
        <div className="flex items-end justify-between px-4 md:px-6 py-4">
          <div className="text-[10px] tracking-[0.15em] text-white/40 uppercase">
            Portfolio &copy;2026
          </div>
          <div className="flex items-center gap-5 pointer-events-auto">
            <a href="#" className="text-[10px] tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase flex items-center gap-1">
              <Linkedin size={11} /> Linkedin
            </a>
            <a href="#" className="text-[10px] tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase flex items-center gap-1">
              <Instagram size={11} /> Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
