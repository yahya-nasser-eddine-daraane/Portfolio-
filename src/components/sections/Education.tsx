"use client";

import Timeline from "@/components/ui/Timeline";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            Education <span className="text-purple-400">Path</span>
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
        </div>
        <Timeline items={education} />
      </div>
    </section>
  );
}
