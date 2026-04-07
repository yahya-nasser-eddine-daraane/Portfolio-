import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yahya Nasser Eddine Daraane | AI & Software Engineering",
  description:
    "Third-year Computer Engineering student focused on AI and software engineering. REST APIs, RAG pipelines, NLP. Seeking internship July 2026.",
  keywords: [
    "Yahya Nasser Eddine Daraane",
    "AI",
    "Software Engineering",
    "Python",
    "Laravel",
    "RAG",
    "NLP",
    "Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Yahya Nasser Eddine Daraane" }],
  openGraph: {
    title: "Yahya Nasser Eddine Daraane | AI & Software Engineering",
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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#020617] text-zinc-100 selection:bg-cyan-500/30`}>
        <div className="fixed inset-0 z-[-1] min-h-screen bg-[#020617] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
