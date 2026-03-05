"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  stack: readonly string[];
  image: string;
  github: string;
  live?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  description,
  stack,
  image,
  github,
  live,
  index = 0,
}: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface-800/60 transition-colors hover:border-white/15 hover:bg-surface-800/80"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-surface-700">
        {!imgError ? (
          <Image
            src={image}
            alt={`${title} project screenshot`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-600 to-surface-700 text-zinc-500 text-sm">
            Project image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900/90 to-transparent" />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
            aria-label={`View ${title} on GitHub`}
          >
            <Github className="h-4 w-4" />
            View on GitHub
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
