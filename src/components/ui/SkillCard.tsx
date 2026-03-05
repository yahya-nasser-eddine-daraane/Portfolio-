"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  skills: readonly string[];
  index?: number;
}

export default function SkillCard({ title, skills, index = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="rounded-xl border border-white/5 bg-surface-800/50 p-5 transition-colors hover:border-white/10 hover:bg-surface-800/70"
    >
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
