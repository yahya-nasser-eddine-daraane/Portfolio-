"use client";

import { motion } from "framer-motion";

export interface TimelineItem {
  title: string;
  school: string;
  period: string;
}

interface TimelineProps {
  items: readonly TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div
        className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-white/30 to-transparent"
        aria-hidden
      />
      <ul className="space-y-6" role="list">
        {items.map((item, i) => (
          <motion.li
            key={item.period + item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.1 }}
            className="relative flex gap-6 pl-2"
          >
            <span
              className="absolute left-0 top-1.5 h-6 w-6 shrink-0 rounded-full border-2 border-white/30 bg-surface-900"
              aria-hidden
            />
            <div className="ml-8 rounded-xl border border-white/5 bg-surface-800/50 p-5 transition-colors hover:border-white/10">
              <p className="text-sm font-medium text-zinc-400">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-zinc-400">{item.school}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
