"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { contact, site } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-900/50 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={contact.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="#hero" className="text-zinc-500 hover:text-zinc-300">
            Home
          </Link>
          <Link href="#contact" className="text-zinc-500 hover:text-zinc-300">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
