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
        className="absolute left-[9px] top-2 bottom-2 w-px bg-white/15"
        aria-hidden
      />

      <ul className="space-y-5" role="list">
        {items.map((item, i) => (
          <motion.li
            key={item.school}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="relative pl-8"
          >
            <span
              className="absolute left-0 top-1.5 h-[18px] w-[18px] rounded-full border-2 border-white/25 bg-surface-900"
              aria-hidden
            />

            <div className="rounded-lg border border-white/5 bg-surface-800/40 px-5 py-4">
              <h3 className="text-base font-semibold text-white">
                {item.school}
              </h3>

              <div className="mt-3 space-y-3">
                {item.entries.map((entry, index) => (
                  <div
                    key={entry.title + entry.period}
                    className={`flex items-start justify-between gap-4 ${
                      index !== item.entries.length - 1
                        ? "border-b border-white/5 pb-3"
                        : ""
                    }`}
                  >
                    <p className="text-sm text-zinc-300 leading-6">
                      {entry.title}
                    </p>

                    <p className="shrink-0 text-xs text-zinc-500 whitespace-nowrap">
                      {entry.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}