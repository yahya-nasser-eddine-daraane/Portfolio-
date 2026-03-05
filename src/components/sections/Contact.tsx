"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Copy, Check, Terminal } from "lucide-react";
import { contact } from "@/data/portfolio";

function CopyableChip({
  label,
  value,
  href,
  icon: Icon,
  ariaLabel,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ElementType;
  ariaLabel: string;
}) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [value]);

  const content = (
    <>
      <Icon className="h-5 w-5 shrink-0 text-zinc-400" />
      <span className="text-sm font-medium text-zinc-200">{label}</span>
      {copied ? (
        <Check className="h-4 w-4 shrink-0 text-white" aria-hidden />
      ) : (
        <Copy className="h-4 w-4 shrink-0 text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-surface-800/60 px-4 py-3 transition-all hover:border-white/20 hover:bg-surface-800/80"
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={copy}
        className="group flex w-full items-center gap-3 rounded-xl border border-white/10 bg-surface-800/60 px-4 py-3 text-left transition-all hover:border-white/20 hover:bg-surface-800/80"
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}

export default function Contact() {
  const [mainCopied, setMainCopied] = useState(false);
  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(contact.email);
    setMainCopied(true);
    setTimeout(() => setMainCopied(false), 2500);
  }, []);

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-400">
            <Terminal className="h-3.5 w-3.5" aria-hidden />
            <span>connect</span>
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Let&apos;s build something
          </h2>
          <p className="mt-3 text-zinc-400">
            Open for internships and collaboration. Reach out—I usually reply within a day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          <button
            type="button"
            onClick={copyEmail}
            className="group mx-auto flex w-full max-w-md items-center justify-center gap-3 rounded-2xl border-2 border-white/25 bg-white/10 px-6 py-4 text-left transition-all hover:border-white/40 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Copy email address"
          >
            <Mail className="h-6 w-6 shrink-0 text-zinc-400" />
            <span className="text-lg font-semibold text-white">
              {mainCopied ? "Copied to clipboard" : contact.email}
            </span>
            {!mainCopied && (
              <Copy className="h-5 w-5 shrink-0 text-zinc-400 transition-colors group-hover:text-white" />
            )}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          <CopyableChip
            label={contact.email}
            value={contact.email}
            icon={Mail}
            ariaLabel="Copy email"
          />
          <CopyableChip
            label={contact.phone}
            value={contact.phone}
            icon={Phone}
            ariaLabel="Copy phone number"
          />
          <CopyableChip
            label="GitHub"
            value={contact.github}
            href={contact.githubUrl}
            icon={Github}
            ariaLabel="Open GitHub profile"
          />
          <CopyableChip
            label="LinkedIn"
            value="LinkedIn"
            href={contact.linkedInUrl}
            icon={Linkedin}
            ariaLabel="Open LinkedIn profile"
          />
        </motion.div>
      </div>
    </section>
  );
}
