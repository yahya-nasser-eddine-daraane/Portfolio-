"use client";

import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

const certificates = [
  {
    title: "Using Python to Access Web Data",
    org: "University of Michigan",
    image: "/certificates/michigan.png",
    link: "#",
  },
  {
    title: "The Unix Workbench",
    org: "Johns Hopkins University",
    image: "/certificates/johns-hopkins.jpeg",
    link: "#",
  },
  {
    title: "Introduction à la programmation orientée objet (C++)",
    org: "EPFL",
    image: "/certificates/EPFL.png",
    link: "https://www.coursera.org/account/accomplishments/",
  },
];

export default function Certifications() {
  const items = [...certificates, ...certificates];

  return (
    <section id="certifications" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="Certifications"
          subtitle="Courses & credentials"
        />

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black to-transparent" />

          <div className="flex w-max animate-marquee gap-6">
            {items.map((cert, i) => (
              <a
                key={`${cert.title}-${i}`}
                href={cert.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-[420px] items-center gap-5 rounded-2xl border border-white/10 bg-surface-800/50 p-6 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-surface-800/70"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white">
                  <Image
                    src={cert.image}
                    alt={cert.org}
                    fill
                    className="object-contain p-2"
                    sizes="80px"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                    {cert.org}
                  </p>
                  <h3 className="mt-2 line-clamp-2 text-xl font-semibold text-white transition-colors group-hover:text-zinc-100">
                    {cert.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}