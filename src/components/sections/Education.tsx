"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Timeline from "@/components/ui/Timeline";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-3">
        <SectionTitle title="Education" subtitle="Academic background" />
        <Timeline items={education} />
      </div>
    </section>
  );
}
