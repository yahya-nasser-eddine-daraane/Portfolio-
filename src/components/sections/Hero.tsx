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
      className="relative pt-20 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20"
    >
      <StarsBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="order-1 text-left"
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
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl"
            >
              {site.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-3 max-w-2xl text-lg font-medium leading-snug text-zinc-100 sm:text-xl lg:text-2xl"
            >
              AI & Software Engineering
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400"
            >
              {site.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8"
            >
              <div className="grid grid-cols-2 gap-3 sm:hidden">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                  aria-label="View projects"
                >
                  Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  aria-label="Contact"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>

                <a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  aria-label="View resume"
                >
                  Resume
                </a>
              </div>

              <div className="hidden sm:flex sm:flex-row sm:flex-wrap sm:gap-3">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                  aria-label="View projects"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  aria-label="Contact"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
              </div>
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
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-400"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="order-2 flex justify-center lg:justify-end"
          >
            <div
              ref={containerRef}
              className="relative aspect-square w-full max-w-[220px] cursor-pointer select-none sm:max-w-[260px] lg:max-w-[320px] xl:max-w-[360px]"
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
                className="relative h-full w-full overflow-hidden rounded-full"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden"
                }}
                animate={{
                  rotateX: tilt.x,
                  rotateY: tilt.y,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div
                  className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-40 blur-xl"
                  style={{ transform: "translateZ(0)" }}
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.05)]" />
                <div className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-white/20 ring-offset-2 ring-offset-surface-900" />

                {!profileImgError ? (
                  <Image
                    src="/profile.jpg"
                    alt="Youssef BENMOUSSA — click for a quote"
                    fill
                    quality={100}
                    className="pointer-events-none rounded-full object-cover object-[center_18%]"
                    priority
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 360px"
                    onError={() => setProfileImgError(true)}
                    draggable={false}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-surface-700 text-zinc-400">
                    <User className="h-20 w-20 sm:h-24 sm:w-24" aria-hidden />
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>

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
                  className="relative z-10 w-full max-w-md"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-800 shadow-2xl shadow-black/50">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />

                    <div className="relative flex flex-col gap-4 p-6 sm:p-8">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <Sparkles className="h-5 w-5 shrink-0" aria-hidden />
                        <span className="text-xs font-semibold uppercase tracking-widest">
                          AI & beyond
                        </span>
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