"use client";

import SkillCard from "@/components/ui/SkillCard";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.title}
              title={cat.title}
              skills={cat.skills}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
