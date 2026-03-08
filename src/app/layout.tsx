import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Youssef BENMOUSSA | AI & Software Engineering",
  description:
    "Third-year Computer Engineering student focused on AI and software engineering. REST APIs, RAG pipelines, NLP. Seeking internship July 2026.",
  keywords: [
    "Youssef BENMOUSSA",
    "AI",
    "Software Engineering",
    "Python",
    "Laravel",
    "RAG",
    "NLP",
    "Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Youssef BENMOUSSA" }],
  openGraph: {
    title: "Youssef BENMOUSSA | AI & Software Engineering",
    description:
      "Third-year Computer Engineering student. AI, software engineering, RAG, NLP. Seeking internship July 2026.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-surface-900 text-zinc-100`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
