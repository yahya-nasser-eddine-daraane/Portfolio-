"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  const items: any[] = [...certifications, ...certifications];

  return (
    <section id="certifications" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            My <span className="text-cyan-400">Certifications</span>
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#020617] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#020617] to-transparent" />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused] py-4">
              {items.map((cert, i) => (
                <motion.a
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: i * 0.3 } }
                  }}
                  key={`${cert.title}-${i}`}
                  href={cert.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-w-[280px] sm:min-w-[360px] lg:min-w-[420px] items-center gap-5 rounded-3xl border border-white/10 bg-[#0f172a]/40 p-4 sm:p-5 lg:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-[#0f172a]/70 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]"
                >
                  <div className="relative h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center p-3 shadow-inner group-hover:border-cyan-500/30 transition-colors">
                    <Image
                      src={cert.image}
                      alt={cert.issuer || cert.title}
                      fill
                      className="object-contain drop-shadow-md"
                      sizes="80px"
                      unoptimized
                    />
                  </div>
  
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-cyan-400 transition-colors truncate">
                      {cert.issuer}
                    </p>
                    <h3 className="mt-2 text-base sm:text-lg lg:text-xl font-heading font-bold text-white transition-colors group-hover:text-white line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}