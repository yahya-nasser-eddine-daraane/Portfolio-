"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle title="Certifications" subtitle="Courses & credentials" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.title + cert.date}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex flex-col rounded-xl border border-white/5 bg-surface-800/50 p-5 transition-colors hover:border-white/10"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                {cert.topic}
              </span>
              <h3 className="mt-2 font-semibold text-white">{cert.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{cert.issuer}</p>
              <p className="mt-1 text-xs text-zinc-500">{cert.date}</p>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white hover:underline"
                aria-label={`View ${cert.title} certificate`}
              >
                View certificate
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
