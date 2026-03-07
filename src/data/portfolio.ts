export const site = {
  name: "Youssef BENMOUSSA",
  headline: "Third-Year Engineering Student | AI & Software Engineering",
  about:
    "Third-year Computer Engineering & Networks student interested in artificial intelligence and software development. I build practical projects involving NLP, semantic search, and API-based systems. Currently seeking a software or AI internship starting July 2026.",
  heroChips: ["Python", "FastAPI", "Laravel", "RAG", "ChromaDB", "MySQL", "Git/Linux"],
  statusBadge: "Open for Internship — July 2026",
} as const;

export const aboutFacts = [
  { label: "Location", value: "Morocco" },
  { label: "Availability", value: "Internship July 2026" },
  { label: "Focus", value: "Artificial Intelligence • Software Development" },
] as const;

export const education = [
  {
    title: "Engineering Cycle – Computer Engineering & Networks",
    school: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
    period: "2025 — PRESENT",
  },
  {
    title: "Preparatory Classes for Engineering Studies",
    school: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
    period: "2023 — 2025",
  },
  {
    title: "Faculté des Sciences et Techniques de Marrakech",
    school: "Math, Informatique, Physique et Chimie (MIPC)",
    period: "2023 — 2024",
  },
  {
    title: "Baccalauréat Science Physique",
    school: "Rahali El Farouq High School",
    period: "2021 — 2022",
  },
] as const;

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "PHP"],
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "REST APIs", "Laravel"],
  },
  {
    title: "AI / Data",
    skills: [
      "NLP",
      "Embeddings",
      "RAG Architecture",
      "LLM Integration (API / Open-source)",
      "Vector Search",
      "Reranking (Bi-Encoder / Cross-Encoder)",
      "TF-IDF",
      "Scikit-learn",
    ],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "TailwindCSS", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "ChromaDB", "SQLite" , "SQL Server"],
  },
  {
    title: "Tools & Systems",
    skills: ["Git", "GitHub", "Linux"],
  },
] as const;

export const projects = [
  {
    id: "legalai",
    title: "LegalAI (RAG Assistant)",
    description:
      "Legal assistant built with a full RAG pipeline: chunking legal texts, generating embeddings, semantic retrieval in ChromaDB, and reranking with Bi-Encoder/Cross-Encoder before producing contextual answers via an LLM.",
    stack: ["Python", "FastAPI", "ChromaDB", "sentence-transformers", "RAG", "NLP"],
    image: "/projects/project-1.webp",
    github: "https://github.com/BENMOUSSA-Youssef",
    live: "",
    highlight: "RAG pipeline (retrieval + reranking)",
  },
  {
    id: "keebox",
    title: "Keebox (Password Manager)",
    description:
      "Secure password manager in C++ with local encryption (AES-256) and controlled access, designed with a clean desktop interface and structured storage.",
    stack: ["C++", "Qt", "SQLCipher", "Security"],
    image: "/projects/project-2.png",
    github: "https://github.com/BENMOUSSA-Youssef",
    live: "",
    highlight: "Secure local encryption project",
  },
  {
    id: "doc-classifier",
    title: "AI Document Classifier",
    description:
      "NLP classifier that categorizes documents (e.g., contracts, regulations). Includes preprocessing, TF-IDF vectorization, model training (Logistic Regression / SVM), and evaluation (accuracy, F1-score).",
    stack: ["Python", "Scikit-learn", "NLP", "TF-IDF"],
    image: "/projects/project-3.webp",
    github: "https://github.com/BENMOUSSA-Youssef",
    live: "",
    highlight: "ML classification + metrics",
  },
  {
    id: "school-mgmt",
    title: "School Management System (Laravel)",
    description:
      "Academic platform built with Laravel featuring role-based access, secure authentication, and automated grade calculations with a clean admin experience.",
    stack: ["Laravel", "PHP", "MySQL", "Blade"],
    image: "/projects/project-4.jpg",
    github: "https://github.com/BENMOUSSA-Youssef",
    live: "",
    highlight: "Full-stack Laravel platform",
  },
] as const;

export const certifications = [
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan (Coursera)",
    date: "Jan 27, 2026",
    topic: "Python",
    url: "/certificates/Python.pdf",
  },
  {
    title: "The Unix Workbench",
    issuer: "Johns Hopkins University (Coursera)",
    date: "Oct 24, 2025",
    topic: "Unix",
    url: "/certificates/Unix.pdf",
  },
  {
    title: "Introduction à la programmation orientée objet (en C++)",
    issuer: "EPFL (Coursera)",
    date: "Nov 11, 2025",
    topic: "C++",
    url: "/certificates/C++.pdf",
  },
] as const;

export const contact = {
  email: "youssefbenmoussa.work@gmail.com",
  phone: "+212 665-449333",
  github: "BENMOUSSA-Youssef",
  githubUrl: "https://github.com/BENMOUSSA-Youssef",
  linkedInUrl: "https://www.linkedin.com/in/youssefbenmoussa/",
} as const;

export const navSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export const cvPath = "/CV.pdf";
