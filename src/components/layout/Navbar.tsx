"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { navSections, cvPath } from "@/data/portfolio";

export default function Navbar() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setActiveId(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-4 right-4 z-50 flex justify-center md:top-6"
    >
      <nav
        className="flex w-full max-w-max items-center justify-between gap-4 rounded-full border border-white/10 bg-[#020617]/50 px-4 py-2 opacity-95 shadow-xl shadow-black/20 backdrop-blur-xl"
        aria-label="Main navigation"
      >
        <Link
          href="#hero"
          onClick={() => handleNavClick("hero")}
          className="px-2 text-sm font-heading font-bold uppercase tracking-wider text-white transition-colors hover:text-cyan-400"
          aria-label="Go to top"
        >
          YND
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-1 sm:flex">
          {navSections.filter(s => s.id !== "hero").map(({ id, label }) => (
            <li key={id} className="relative">
              {activeId === id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 z-0 rounded-full bg-white/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <button
                onClick={() => handleNavClick(id)}
                className={`relative z-10 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeId === id
                    ? "text-cyan-400"
                    : "text-zinc-400 hover:text-white"
                }`}
                aria-current={activeId === id ? "true" : undefined}
                aria-label={`Go to ${label} section`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Download CV */}
        <div className="hidden sm:block pl-2 border-l border-white/10">
          <a
            href={cvPath}
            download
            className="group flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-400 transition-all hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            aria-label="Download CV"
          >
            <FileDown className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="rounded-full p-2 text-zinc-400 hover:bg-white/10 hover:text-white sm:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 top-[110%] overflow-hidden rounded-3xl border border-white/10 bg-[#020617]/95 p-4 shadow-2xl backdrop-blur-xl sm:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navSections.filter(s => s.id !== "hero").map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold uppercase tracking-wider transition-colors ${
                      activeId === id ? "bg-white/10 text-cyan-400" : "text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-white/10">
                <a
                  href={cvPath}
                  download
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500/20 px-4 py-3 text-sm font-bold uppercase tracking-wider text-cyan-400"
                >
                  <FileDown className="h-4 w-4" />
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
