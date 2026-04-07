"use client";

import { motion } from "framer-motion";

export interface TimelineEntry {
  title: string;
  period: string;
}

export interface TimelineItem {
  school: string;
  entries: TimelineEntry[];
}

interface TimelineProps {
  items: readonly TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div
        className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent"
        aria-hidden
      />

      <ul className="space-y-8" role="list">
        {items.map((item, i) => (
          <motion.li
            key={item.school}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative pl-12"
          >
            <span
              className="absolute left-[7px] top-6 h-[18px] w-[18px] rounded-full border-2 border-[#020617] bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              aria-hidden
            />

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/50 p-6 shadow-xl backdrop-blur-md transition-all hover:border-purple-500/30 hover:bg-[#0f172a]/70">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.school}
                </h3>

                <div className="mt-6 space-y-4">
                  {item.entries.map((entry, index) => (
                    <div
                      key={entry.title + entry.period}
                      className={`flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 ${
                        index !== item.entries.length - 1
                          ? "border-b border-white/10 pb-4"
                          : ""
                      }`}
                    >
                      <p className="text-base font-semibold text-zinc-300">
                        {entry.title}
                      </p>
                      <span className="inline-block shrink-0 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-purple-300">
                        {entry.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}