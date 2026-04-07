"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, User, X, Sparkles } from "lucide-react";
import { site } from "@/data/portfolio";
import { StarsBackground } from "@/components/ui/StarsBackground";

const AI_QUOTES = [
  {
    text: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
  {
    text: "AI is the new electricity.",
    author: "Andrew Ng",
  },
  {
    text: "What we want is a machine that can learn from experience.",
    author: "Alan Turing",
  },
  {
    text: "The question of whether a computer can think is no more interesting than whether a submarine can swim.",
    author: "Edsger W. Dijkstra",
  },
  {
    text: "Machine intelligence is the last invention that humanity will ever need to make.",
    author: "Nick Bostrom",
  },
];

const TILT_MAX = 12;

export default function Hero() {
  const [profileImgError, setProfileImgError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showQuote, setShowQuote] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number, clientY: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (clientX - centerX) / (rect.width / 2);
    const percentY = (clientY - centerY) / (rect.height / 2);

    setTilt({
      x: percentY * -TILT_MAX,
      y: percentX * TILT_MAX,
    });
  }, []);

  const handleLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const handlePhotoClick = useCallback(() => {
    setQuoteIndex((i) => (i + 1) % AI_QUOTES.length);
    setShowQuote(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-32 lg:pb-20"
    >
      <StarsBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center justify-between gap-12 lg:flex-row lg:gap-8">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400 backdrop-blur-md"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {site.statusBadge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-heading text-5xl font-black uppercase tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                {site.name.split(' ')[0]}
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-5xl text-zinc-400 mt-2">
                {site.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-xl font-heading font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 sm:text-2xl lg:text-3xl"
            >
              AI & Software Engineering
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 mx-auto lg:mx-0"
            >
              {site.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Link
                href="#projects"
                className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-8 py-4 font-bold text-black transition-transform hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 transition-opacity group-hover:opacity-20" />
                View Projects
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#contact"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
              >
                <Mail className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-white" />
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-2"
            >
              {site.heroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-lg border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-300 backdrop-blur-sm transition-colors hover:bg-purple-500/10 hover:border-purple-500/40"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 100 }}
            className="relative flex-shrink-0"
          >
            <motion.div
              ref={containerRef}
              className="relative aspect-square w-[280px] sm:w-[320px] lg:w-[420px] cursor-pointer select-none group"
              style={{ perspective: "1000px" }}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
              onMouseLeave={handleLeave}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                if (touch) handleMove(touch.clientX, touch.clientY);
              }}
              onTouchMove={(e) => {
                const touch = e.touches[0];
                if (touch) handleMove(touch.clientX, touch.clientY);
              }}
              onTouchEnd={handleLeave}
              onClick={handlePhotoClick}
            >
              <motion.div
                className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f172a]/50 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]"
                style={{
                  transformStyle: "preserve-3d",
                  WebkitBackfaceVisibility: "hidden",
                }}
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {!profileImgError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Yahya Nasser Eddine Daraane"
                    fill
                    quality={100}
                    className="pointer-events-none object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 420px"
                    onError={() => setProfileImgError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
                    <User className="h-24 w-24" />
                  </div>
                )}
                
                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 mix-blend-overlay pointer-events-none" />
              </motion.div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute -inset-10 -z-10 animate-pulse-slow rounded-[3rem] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl opacity-50" />
          </motion.div>

          {/* Quote Modal */}
          <AnimatePresence>
            {showQuote && (
              <motion.div
                key="quote-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowQuote(false)} />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  className="relative z-10 w-full max-w-lg rounded-3xl border border-white/10 bg-[#0f172a]/95 p-8 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3 text-cyan-400 mb-6">
                    <Sparkles className="h-6 w-6" />
                    <span className="font-heading text-sm font-bold uppercase tracking-widest">
                      AI & Beyond
                    </span>
                  </div>
                  <blockquote className="font-heading text-2xl font-medium leading-snug text-white">
                    "{AI_QUOTES[quoteIndex].text}"
                  </blockquote>
                  <cite className="mt-6 block font-bold text-zinc-500 uppercase tracking-wider text-sm">
                    — {AI_QUOTES[quoteIndex].author}
                  </cite>
                  <button
                    onClick={() => setShowQuote(false)}
                    className="absolute right-6 top-6 text-zinc-500 hover:text-white transition-colors"
                    aria-label="Close quote"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}