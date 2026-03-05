import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

export const metadata = {
  title: "Projects | Youssef BENMOUSSA",
  description: "Selected projects: LegalAI RAG, Keebox password manager, AI Document Classifier, Laravel school management.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
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
      </div>
    </div>
  );
}
