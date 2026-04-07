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
  
  // 3D Tilt State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Max tilt is 8 degrees
    setTilt({ x: (y / rect.height) * -16, y: (x / rect.width) * 16 });
  };
  
  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-pointer"
      style={{ perspective: 1200 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/80 shadow-2xl backdrop-blur-xl transition-colors group-hover:border-cyan-500/50"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <div 
          className="relative aspect-[16/10] w-full overflow-hidden bg-[#020617]"
          style={{ transform: "translateZ(30px)" }}
        >
          {!imgError ? (
            <Image
              src={image}
              alt={`${title} project screenshot`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#020617] text-zinc-600 text-sm font-bold uppercase tracking-widest">
              No Preview
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-50" />
        </div>
        
        <div className="flex flex-col flex-1 p-6 relative z-10 sm:p-8" style={{ transform: "translateZ(40px)" }}>
          <h3 className="font-heading text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
            {title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-zinc-300">
            {description}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2 flex-1 items-start">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-zinc-300 transition-colors group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 group-hover:text-cyan-200"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-8 flex flex-wrap gap-3" style={{ transform: "translateZ(20px)" }}>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold tracking-wide text-zinc-300 transition-all hover:bg-white/10 hover:text-white hover:border-white/20 active:scale-95"
              aria-label={`View ${title} on GitHub`}
            >
              <Github className="h-4 w-4" />
              Source
            </a>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm font-bold tracking-wide text-cyan-400 transition-all hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95"
                aria-label={`View ${title} live demo`}
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
