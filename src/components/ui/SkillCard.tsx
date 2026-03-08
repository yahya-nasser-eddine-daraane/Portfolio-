"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Terminal,
  Server,
  Braces,
} from "lucide-react";

interface SkillCardProps {
  title: string;
  skills: readonly string[];
  index?: number;
}

export default function SkillCard({
  title,
  skills,
  index = 0,
}: SkillCardProps) {
  const normalizedTitle = title.trim().toUpperCase();

  const iconMap: Record<string, React.ReactNode> = {
    "PROGRAMMING LANGUAGES": <Braces className="h-4 w-4" />,
    "BACKEND & APIS": <Server className="h-4 w-4" />,
    "AI / DATA": <Brain className="h-4 w-4" />,
    "WEB DEVELOPMENT": <Code2 className="h-4 w-4" />,
    DATABASES: <Database className="h-4 w-4" />,
    "TOOLS & SYSTEMS": <Terminal className="h-4 w-4" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
className="group rounded-2xl bg-white/[0.02] p-4 sm:p-5 transition-all duration-300
shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_18px_rgba(255,255,255,0.08)]
hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_0_28px_rgba(255,255,255,0.12)]"
    >
      <div className="mb-4 flex items-center gap-2.5 text-zinc-300">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400">
          {iconMap[normalizedTitle]}
        </div>

        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-200 group-hover:border-white/15"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}