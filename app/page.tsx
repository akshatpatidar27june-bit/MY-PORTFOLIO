"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const projects = [
  { n: "01", name: "Smiley Home Restro", meta: "Restaurant experience · Mandsaur" },
  { n: "02", name: "ChefZone", meta: "Food & hospitality · Mandsaur" },
  { n: "03", name: "Arvind Dresses", meta: "E-commerce · Mandsaur" }
];

export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.35, 0.8]);

  return (
    <main ref={ref}>
      <section className="hero">
        <div className="noise" />
        <motion.div className="orb orb-a" style={{ y: orbY, scale: orbScale }} />
        <motion.div className="orb orb-b" animate={{ x: [0, 80, 0], y: [0, -50, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        <nav className="nav">
          <span className="mark">AP<span>.</span></span>
          <span className="nav-pill">PORTFOLIO · 2026</span>
          <a href="#work">Explore <ArrowDown size={15} /></a>
        </nav>

        <div className="hero-grid">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <Sparkles size={14} /> DIGITAL CREATOR · DEVELOPER
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .12 }}>
            I build <em>digital</em><br />worlds.
          </motion.h1>
          <motion.p className="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .45 }}>
            Portfolio, products, websites and learning experiences — crafted with obsessive attention to motion, detail and speed.
          </motion.p>
          <motion.a className="hero-cta" href="#work" whileHover={{ scale: 1.03 }} whileTap={{ scale: .98 }}>
            See the work <ArrowUpRight size={18} />
          </motion.a>
        </div>

        <div className="hero-bottom"><span>SCROLL TO ENTER</span><span>01 — 06</span></div>
      </section>

      <section className="statement">
        <p className="section-kicker">THE PHILOSOPHY</p>
        <h2>Not another portfolio.<br /><span>A living digital identity.</span></h2>
      </section>

      <section id="work" className="work">
        <div className="section-head"><div><p className="section-kicker">SELECTED WORK</p><h2>Built in the real world.</h2></div><span>03 PROJECTS</span></div>
        <div className="project-list">
          {projects.map((project) => (
            <motion.article key={project.n} className="project" whileHover={{ x: 12 }} transition={{ type: "spring", stiffness: 220, damping: 22 }}>
              <span>{project.n}</span><div><h3>{project.name}</h3><p>{project.meta}</p></div><ArrowUpRight />
            </motion.article>
          ))}
        </div>
      </section>

      <section className="courses">
        <div className="course-glow" />
        <p className="section-kicker">LEARN WITH ME</p>
        <h2>Want to know<br /><em>how it&apos;s built?</em></h2>
        <div className="course-grid">
          <article><span>LIVE WEBINAR</span><strong>₹199</strong><p>Learn the complete website creation process in a live session.</p><a href="/courses/webinar">Reserve a seat <ArrowUpRight size={17} /></a></article>
          <article><span>1 — ON — 1</span><strong>₹999</strong><p>Build from scratch with a personal Google Meet learning session.</p><a href="/courses/one-on-one">Explore the session <ArrowUpRight size={17} /></a></article>
        </div>
      </section>

      <footer><span>AKSHAT PATIDAR</span><span>MADE WITH INTENT · 2026</span></footer>
    </main>
  );
}