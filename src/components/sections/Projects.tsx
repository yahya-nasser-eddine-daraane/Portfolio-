"use client";

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
    <section id="projects" className="scroll-mt-20 py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-white sm:text-4xl text-center">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <p className="mt-4 text-center text-zinc-400 font-medium tracking-wide">
            A selection of my technical work in AI & Web Development
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
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

        <div className="mt-16 flex flex-wrap justify-center gap-4 border-t border-white/5 pt-8">
          {highlights.map((h) => (
            <span
              key={h}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-400 backdrop-blur-sm"
            >
              • {h}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
