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
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-surface-900/80 backdrop-blur-xl"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="#hero"
          onClick={() => handleNavClick("hero")}
          className="text-sm font-semibold text-white transition-colors hover:text-zinc-300"
          aria-label="Go to top"
        >
          YB
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navSections.filter(s => s.id !== "hero").map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeId === id
                    ? "text-white"
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

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={cvPath}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
            aria-label="Download CV"
          >
            <FileDown className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white md:hidden"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/5 bg-surface-900/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col px-4 py-3">
              {navSections.filter(s => s.id !== "hero").map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium ${
                      activeId === id ? "text-white" : "text-zinc-300"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li className="mt-2 border-t border-white/5 pt-2">
                <a
                  href={cvPath}
                  download
                  className="flex w-full items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-3 py-2.5 text-sm font-medium text-white"
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
