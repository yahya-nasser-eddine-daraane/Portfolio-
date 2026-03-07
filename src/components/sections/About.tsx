"use client";

import { motion } from "framer-motion";
import { aboutFacts } from "@/data/portfolio";

const aboutParagraph =
  "I enjoy building real projects that combine software engineering and AI. My work focuses on designing clear system architectures, working with data and APIs, and developing practical applications such as NLP systems and web platforms. I’m motivated by learning new technologies and improving my engineering skills through hands-on projects.";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/5 bg-surface-800/40 p-8 sm:p-10"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">About</h2>
          <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
            {aboutParagraph}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {aboutFacts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="rounded-xl border border-white/5 bg-surface-700/50 p-4"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  {fact.label}
                </p>
                <p className="mt-1 font-medium text-white">{fact.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
