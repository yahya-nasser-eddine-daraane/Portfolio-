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

  const iconBase = "h-5 w-5 text-cyan-400";
  const getIcon = () => {
    if (normalizedTitle.includes("LANGAGES") || normalizedTitle.includes("PROGRAMMING")) return <Braces className={iconBase} />;
    if (normalizedTitle.includes("API") || normalizedTitle.includes("BACKEND")) return <Server className={iconBase} />;
    if (normalizedTitle.includes("ARTIFICIELLE") || normalizedTitle.includes("AI")) return <Brain className={iconBase} />;
    if (normalizedTitle.includes("WEB")) return <Code2 className={iconBase} />;
    if (normalizedTitle.includes("BASE") || normalizedTitle.includes("DATA")) return <Database className={iconBase} />;
    return <Terminal className={iconBase} />;
  };

  const isLarge = index === 0 || index === 2; // Make some cards span more columns in bento grid

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/40 p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-[#0f172a]/70 hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)] ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
    >
      <div className="absolute -inset-2 z-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#020617] to-[#0f172a] shadow-inner border border-white/5 group-hover:border-cyan-500/30 transition-colors">
            {getIcon()}
          </div>
          <h3 className="font-heading text-lg font-bold tracking-wider text-white">
            {title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 group-hover:border-cyan-500/20 group-hover:bg-cyan-500/10 group-hover:text-cyan-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}