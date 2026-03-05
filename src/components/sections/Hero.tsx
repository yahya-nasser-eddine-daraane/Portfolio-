"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, User, X, Sparkles } from "lucide-react";
import { site } from "@/data/portfolio";

const AI_QUOTES = [
  { text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke" },
  { text: "AI is the new electricity.", author: "Andrew Ng" },
  { text: "What we want is a machine that can learn from experience.", author: "Alan Turing" },
  { text: "The question of whether a computer can think is no more interesting than whether a submarine can swim.", author: "Edsger W. Dijkstra" },
  { text: "Machine intelligence is the last invention that humanity will ever need to make.", author: "Nick Bostrom" },
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
      className="relative pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 lg:flex-1"
          >
            <span
              className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
              aria-label="Availability"
            >
              {site.statusBadge}
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {site.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-2 text-lg text-zinc-300 sm:text-xl"
            >
              {site.headline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-4 max-w-xl text-zinc-400 leading-relaxed"
            >
              {site.about}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                aria-label="View projects"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                aria-label="Contact"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {site.heroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-400"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div
              ref={containerRef}
              className="relative shrink-0 w-[min(100%,320px)] aspect-square sm:w-80 lg:w-96 cursor-pointer select-none touch-none"
              style={{ perspective: "1000px" }}
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
              onKeyDown={(e) => e.key === "Enter" && handlePhotoClick()}
              role="button"
              tabIndex={0}
              aria-label="Click to reveal an AI quote"
            >
              <motion.div
                className="relative h-full w-full rounded-full overflow-hidden"
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Outer glow + ring */}
                <div
                  className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-40 blur-xl pointer-events-none"
                  aria-hidden
                />
                <div className="absolute inset-0 rounded-full border-2 border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.05)] pointer-events-none" />
                <div className="absolute inset-0 rounded-full ring-2 ring-white/20 ring-offset-2 ring-offset-surface-900 pointer-events-none" />
                {!profileImgError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Youssef BENMOUSSA — click for a quote"
                    fill
                    className="rounded-full object-cover object-[center_18%] pointer-events-none"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 384px"
                    unoptimized
                    onError={() => setProfileImgError(true)}
                    draggable={false}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-surface-700 text-zinc-400">
                    <User className="h-28 w-28 sm:h-32 sm:w-32" aria-hidden />
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Quote overlay */}
          <AnimatePresence>
            {showQuote && (
              <motion.div
                key="quote-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
              >
                <div
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                  onClick={() => setShowQuote(false)}
                  aria-hidden
                />
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label="AI quote"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative z-10 w-full max-w-md p-0"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-800 shadow-2xl shadow-black/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
                    <div className="relative flex flex-col gap-4 p-6 sm:p-8">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <Sparkles className="h-5 w-5 shrink-0" aria-hidden />
                        <span className="text-xs font-semibold uppercase tracking-widest">AI & beyond</span>
                      </div>
                      <blockquote className="text-lg font-medium leading-relaxed text-white sm:text-xl">
                        &ldquo;{AI_QUOTES[quoteIndex].text}&rdquo;
                      </blockquote>
                      <cite className="not-italic text-sm text-zinc-400 before:content-['—\00a0']">
                        {AI_QUOTES[quoteIndex].author}
                      </cite>
                      <button
                        type="button"
                        onClick={() => setShowQuote(false)}
                        className="absolute right-3 top-3 rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                        aria-label="Close quote"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
