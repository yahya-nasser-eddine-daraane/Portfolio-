"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import SkillCard from "@/components/ui/SkillCard";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Skills" subtitle="Technologies & tools" />
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
