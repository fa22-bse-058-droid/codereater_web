"use client";

import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowDown, ArrowUp } from "lucide-react";
import CELogo from "../components/CELogo";

const easeCustom: [number, number, number, number] = [0.76, 0, 0.24, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: easeCustom },
  }),
};

const principles = [
  {
    num: "01",
    title: "Room to discover and play",
    text: "A strong process leaves space for a little chaos, where we pause, question what we know, and try new directions. Insight and experience guide the work, but some of the best ideas appear when we don't force the path.",
  },
  {
    num: "02",
    title: "Work is a partnership",
    text: "The work shouldn't feel like a dramatic \"big reveal\" at the end of the process. We align early, talk openly, and build things together as we go. The best results come from shared ownership and ongoing conversation.",
  },
  {
    num: "03",
    title: "Let's be kind, but honest",
    text: "Great work grows in a space where openness feels safe, where feedback is thoughtful, direct, and grounded. When people can speak freely, trust becomes a natural part of the process.",
  },
];

const clientsLeft = [
  "Google", "Microsoft", "Spotify", "Airbnb", "Stripe",
  "Figma", "Vercel", "Notion", "Framer", "Linear",
];

const clientsRight = [
  "Netflix", "Meta", "Apple", "Amazon", "Uber",
  "Slack", "Discord", "Twitch", "Shopify", "Canva",
];

const awards = [
  { year: "2021", award: "Silver Creative Circle", project: "Editorial — Nebula" },
  { year: "2023", award: "Shortlist Creative Circle", project: "Corporate Identity — Vertex" },
  { year: "2023", award: "Shortlist Creative Circle", project: "Corporate Identity — Prism" },
  { year: "2023", award: "Shortlist Creative Circle", project: "Small Business Identity — Cipher" },
  { year: "2023", award: "Shortlist Creative Circle", project: "Packaging — Flux" },
  { year: "2023", award: "Red Dot Award Winner", project: "Corporate Identity — Nebula" },
  { year: "2023", award: "Red Dot Award Winner", project: "Corporate Identity — Vertex" },
  { year: "2024", award: "Webby Awards Nominee", project: "Cultural Blog — Prism" },
  { year: "2024", award: "Shortlist Creative Circle", project: "Experimental / Digital — Cipher" },
  { year: "2024", award: "Shortlist Creative Circle", project: "Small Business Identity — Flux" },
  { year: "2025", award: "Shortlist Creative Circle", project: "Small Business Identity — Nebula" },
  { year: "2025", award: "Gold Creative Circle", project: "Company Websites — Vertex" },
  { year: "2025", award: "Gold Creative Circle", project: "Craft / Website Design — Prism" },
  { year: "2025", award: "Gold Lovie Award", project: "Aesthetic — Flux" },
];

export default function About() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="bg-[#050505] pt-24">
      {/* ═══ HERO ═══ */}
      <div className="min-h-[90vh] flex flex-col justify-center px-6 md:px-10 pb-20 border-b border-white/10">
        <motion.p
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-light mb-8"
        >
          About
        </motion.p>

        <motion.div custom={0.2} variants={fadeUp} initial="hidden" animate="visible">
          <h1
            className="text-[12vw] md:text-[8vw] leading-[0.95] text-white"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            Hello,
            <br />
            I&apos;m <span className="text-white/60">Faisal</span>
          </h1>
        </motion.div>

        <motion.p
          custom={0.4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 text-[11px] tracking-[0.15em] text-white/40 font-light max-w-md"
        >
          Take a deep dive into my life of code &amp; creativity
        </motion.p>

        <motion.div
          custom={0.6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex items-center gap-2 text-[11px] tracking-[0.15em] text-white/30 font-light"
        >
          <ArrowDown size={14} className="animate-bounce" />
          Scroll
        </motion.div>

        <motion.p
          custom={0.8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 text-xl md:text-2xl lg:text-3xl leading-[1.4] text-white/70 font-light max-w-3xl"
        >
          A <span className="text-white">digital-first</span> creative developer specializing in
          strategic visual communication and story-driven digital experiences.
        </motion.p>
      </div>

      {/* ═══ BIO ═══ */}
      <div className="px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-16 md:gap-24 border-b border-white/10">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-light mb-6">
            About
          </p>
          <h2
            className="text-[6vw] md:text-[3.5vw] leading-[1.1] text-white"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            Hello, I&apos;m Faisal a Lahore-based creative developer creating story-driven,
            digital-first experiences.
          </h2>
        </motion.div>

        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 text-[15px] md:text-[16px] leading-[1.8] text-white/60 font-light"
        >
          <p>
            My background is rooted in web development and digital design, and that combination
            still shapes how I think today. It gives me a practical understanding of how a product
            needs to live, move, and perform in a constantly evolving digital world.
          </p>
          <p>
            I believe the era of fixed, one-directional web experiences is long gone. Where websites
            once expressed themselves through a handful of static pages, they now need the freedom
            to adapt and evolve without losing themselves.
          </p>
          <p>
            A digital experience can be strategic, expressive, quiet, loud, emotional or simply
            helpful, depending entirely on the moment and the audience. That&apos;s why I&apos;m drawn to
            projects built around a strong core, supported by a flexible system that can shift,
            adapt, and feel as personal as the people they speak to.
          </p>
          <p>
            I love collaborating with people and brands who are curious, thoughtful, and ready to
            challenge what exists, to build digital products that grow, adapt, and stay relevant
            over time.
          </p>

          <a
            href="mailto:hrcodeeater@gmail.com"
            className="inline-block mt-4 text-[13px] tracking-[0.1em] text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white/50 pb-1"
          >
            Feel free to reach out to discuss your project: hrcodeeater@gmail.com
          </a>
        </motion.div>
      </div>

      {/* ═══ BIO ═══ */}
      <div className="px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-16 md:gap-24 border-b border-white/10">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-light mb-6">
            About
          </p>
          <h2
            className="text-[6vw] md:text-[3.5vw] leading-[1.1] text-white"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            Hello, I&apos;m Ishna Zaka, a Lahore-based Full-Stack Developer building AI-powered
            systems that scale.
          </h2>
        </motion.div>

        <motion.div
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 text-[15px] md:text-[16px] leading-[1.8] text-white/60 font-light"
        >
          <p>
            My foundation is in software engineering, and that background shapes everything I
            build. I don&apos;t just write code — I architect systems that are fast, intelligent,
            and built to solve real problems.
          </p>
          <p>
            From AI-powered career platforms to real-time data scrapers, I work across the full
            stack using FastAPI, React, Django, and modern cloud infrastructure. Every project I
            take on has one goal — make it work in the real world, not just in theory.
          </p>
          <p>
            I&apos;m drawn to problems that others overlook — the messy, complex, high-impact kind.
            That&apos;s where the most meaningful systems get built.
          </p>

          <a
            href="mailto:ishnazaka65@gmail.com"
            className="inline-block mt-4 text-[13px] tracking-[0.1em] text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white/50 pb-1"
          >
            Feel free to reach out to discuss your project: ishnazaka65@gmail.com
          </a>
        </motion.div>
      </div>

      {/* ═══ PRINCIPLES ═══ */}
      <div className="border-b border-white/10 divide-y divide-white/10">
        {principles.map((p, i) => (
          <motion.div
            key={p.num}
            custom={i * 0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="px-6 md:px-10 py-12 md:py-16 grid grid-cols-12 gap-6 md:gap-10"
          >
            <div className="col-span-2 md:col-span-1">
              <span className="text-[11px] tracking-[0.15em] text-white/30 font-light">
                ({p.num})
              </span>
            </div>
            <div className="col-span-10 md:col-span-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-light">
                Principle
              </span>
            </div>
            <div className="col-span-12 md:col-span-8">
              <p className="text-lg md:text-xl lg:text-2xl leading-[1.5] text-white/80 font-light">
                <span className="text-white font-normal">{p.title}:</span> {p.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ═══ CLIENT HIGHLIGHTS ═══ */}
      <div className="px-6 md:px-10 py-24 md:py-32 border-b border-white/10 grid md:grid-cols-12 gap-10">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-4"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-light mb-6">
            Client Highlights
          </p>
          <h3
            className="text-[4vw] md:text-[2vw] leading-[1.2] text-white"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            Trusted by industry leaders
          </h3>
        </motion.div>

        <motion.div
          custom={0.15}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-4 space-y-3"
        >
          {clientsLeft.map((client) => (
            <p key={client} className="text-[14px] tracking-[0.05em] text-white/50 font-light">
              {client}
            </p>
          ))}
        </motion.div>

        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-4 space-y-3"
        >
          {clientsRight.map((client) => (
            <p key={client} className="text-[14px] tracking-[0.05em] text-white/50 font-light">
              {client}
            </p>
          ))}
        </motion.div>
      </div>

      {/* ═══ RECOGNITION ═══ */}
      <div className="px-6 md:px-10 py-24 md:py-32 border-b border-white/10">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-light mb-10"
        >
          Recognition
        </motion.p>

        <div className="divide-y divide-white/10">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              custom={i * 0.03}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-12 gap-4 py-4 items-baseline"
            >
              <span className="col-span-2 md:col-span-1 text-[12px] tracking-[0.1em] text-white/40 font-light">
                {award.year}
              </span>
              <span className="col-span-5 md:col-span-4 text-[13px] tracking-[0.05em] text-white/70 font-light">
                {award.award}
              </span>
              <span className="col-span-5 md:col-span-7 text-[12px] tracking-[0.05em] text-white/40 font-light text-right md:text-left">
                {award.project}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══ FOOTER ═══ */}
      <div className="px-6 md:px-10 pt-16 pb-28">
        <div className="flex items-start justify-between mb-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-[11px] tracking-[0.15em] text-white/50 hover:text-white transition-colors uppercase">
              Featured <span className="text-white/30">(5)</span>
            </Link>
            <Link to="/work" className="text-[11px] tracking-[0.15em] text-white/50 hover:text-white transition-colors uppercase">
              Index <span className="text-white/30">(5)</span>
            </Link>
            <span className="text-[11px] tracking-[0.15em] text-white uppercase">About</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[11px] tracking-[0.15em] text-white/40 hover:text-white transition-colors uppercase font-light group"
          >
            Back to top
            <ArrowUp size={13} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CELogo size={140} animate={false} />
        </motion.div>
      </div>
    </section>
  );
}
