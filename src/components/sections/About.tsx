"use client";

import { motion } from "framer-motion";
import { aboutFacts } from "@/data/portfolio";

const aboutParagraph =
  "I enjoy building real projects that combine software engineering and AI. My work focuses on designing clear system architectures, working with data and APIs, and developing practical applications such as NLP systems and web platforms. I’m motivated by learning new technologies and improving my engineering skills through hands-on projects.";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/50 p-8 shadow-2xl backdrop-blur-xl lg:col-span-2 transition-all hover:bg-[#0f172a]/70 hover:border-cyan-500/30"
          >
            <div className="absolute -inset-1 z-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <h3 className="mb-4 font-heading text-2xl font-bold text-white">
                Who I Am
              </h3>
              <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                {aboutParagraph}
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            {aboutFacts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="group relative flex flex-1 items-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/40 p-6 backdrop-blur-md transition-all hover:border-purple-500/30 hover:bg-[#0f172a]/60"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative h-12 w-12 shrink-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-px">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#0f172a]">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 group-hover:animate-ping" />
                  </div>
                </div>
                <div className="relative z-10 min-w-0">
                  <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    {fact.label}
                  </p>
                  <p className="mt-1 truncate font-heading font-semibold text-white sm:text-lg">
                    {fact.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
