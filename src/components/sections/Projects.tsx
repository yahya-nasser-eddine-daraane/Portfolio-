"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

const highlights = [
  "RAG pipeline (retrieval + reranking)",
  "Secure local encryption project",
  "ML classification + metrics",
  "Full-stack Laravel platform",
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Projects" subtitle="Selected work" />
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              stack={p.stack}
              image={p.image}
              github={p.github}
              live={p.live || undefined}
              index={i}
            />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {highlights.map((h) => (
            <span
              key={h}
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-zinc-300"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
