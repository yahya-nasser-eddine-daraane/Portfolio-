"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionTitle({ title, subtitle, id }: SectionTitleProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="mb-10 text-center"
    >
      <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-zinc-400 sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
