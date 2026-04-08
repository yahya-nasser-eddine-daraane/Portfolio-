export const site = {
  name: "Yahya Nasser Eddine Daraane",
  headline: "Future Ingénieur en Informatique | Intelligence Artificielle & Développement Logiciel",
  about:
    "Étudiant ingénieur en Informatique et Réseaux à l'EMSI Marrakech, passionné par le développement logiciel et l'intelligence artificielle. Intéressé par la conception d'applications intelligentes et l'exploitation des données. Curieux, autonome et doté d'un bon esprit d'analyse ainsi que d'un sens du travail en équipe et de résolution des problèmes, je suis actuellement à la recherche d'un stage en intelligence artificielle ou en développement Full Stack à partir du 1er juillet 2026.",
  heroChips: ["Python", "C++", "Laravel", "RAG", "LLMs", "FastAPI"],
  statusBadge: "Open for Internship — July 2026",
} as const;

export const aboutFacts = [
  { label: "Location", value: "Morocco" },
  { label: "Availability", value: "Internship July 2026" },
  { label: "Focus", value: "Artificial Intelligence • Software Development" },
] as const;

export const education = [
  {
    school: "École Marocaine des Sciences de l'Ingénieur (EMSI) - Marrakech",
    entries: [
      {
        title: "Cycle d’ingénieur en Informatique et Réseaux",
        period: "2025 — Présent",
      },
      {
        title: "Classes préparatoires",
        period: "2023 — 2025",
      },
    ],
  },
  {
    school: "Ghandi High School",
    entries: [
      {
        title: "Baccalauréat en Science Physique",
        period: "2022 — 2023",
      },
    ],
  },
];

export const skillCategories = [
  {
    title: "Langages de programmation",
    skills: ["Python", "C++", "C", "Java"],
  },
  {
    title: "Web Development",
    skills: ["PHP", "Laravel", "HTML", "CSS"],
  },
  {
    title: "Intelligence Artificielle",
    skills: ["NLP", "RAG", "LLMs", "Vector Embeddings", "Semantic Search"],
  },
  {
    title: "API & Backend",
    skills: ["FastAPI", "REST APIs", "Integration (OpenWeather)"],
  },
  {
    title: "Bases de données",
    skills: ["Oracle", "MySQL", "SQL Server", "SQLite"],
  },
  {
    title: "Outils & Conception",
    skills: ["Git", "Linux", "Merise", "UML"],
  },
  {
    title: "Langues",
    skills: ["Anglais (Courant)", "Français (Courant)", "Arabe (Maternelle)"],
  },
] as const;

export const projects = [
  {
    id: "legalai",
    title: "Legal AI Assistant (RAG-based)",
    description: "Plateforme IA d'assistance juridique spécialisée dans le droit du travail marocain qui combine l'intelligence artificielle, la recherche sémantique et les textes de loi pour répondre efficacement aux questions juridiques des utilisateurs.",
    stack: ["Python", "FastAPI", "NLP", "RAG", "LLM", "ChromaDB"],
    image: "/projects/lawAI.png",
    github: "https://github.com/yahya-nasser-eddine-daraane",
    live: "",
    highlight: "Full RAG & NLP pipeline",
  },
  {
    id: "keebox",
    title: "KeeBox",
    description: "Développement d'un gestionnaire de mots de passe sécurisé en C++ avec SQLCipher (AES-256) pour le chiffrement des données locales, offrant une gestion sécurisée des accès et une interface native multi-plateforme.",
    stack: ["C++", "Qt", "SQLCipher"],
    image: "/projects/Keebox.png",
    github: "https://github.com/yahya-nasser-eddine-daraane",
    live: "",
    highlight: "AES-256 Local Encryption",
  },
  {
    id: "cookbook",
    title: "COOKBOOK",
    description: "Plateforme interactive de partage de recettes. Back-end sécurisé, et web app avec assistant IA intelligent capable de suggérer automatiquement des recettes et des ingrédients adaptés.",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML/CSS"],
    image: "/projects/COOKBOOK.png",
    github: "https://github.com/yahya-nasser-eddine-daraane",
    live: "",
    highlight: "AI-Powered Recipe App",
  },
  {
    id: "chibichat",
    title: "ChibiChat",
    description: "Application de messagerie instantanée sur réseau local permettant l'échange de messages texte en temps réel, historique des conversations et assistant IA de traduction automatique pour faciliter les échanges multilingues.",
    stack: ["Java", "SQL Server", "LLM"],
    image: "/projects/chibichat.png",
    github: "https://github.com/yahya-nasser-eddine-daraane",
    live: "",
    highlight: "Real-time AI Chat",
  },
] as const;

export const certifications = [
  {
    title: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Johns Hopkins University (Coursera)",
    date: "",
    topic: "Web Development",
    link: "",
    image:"/certificates/johns-hopkins.jpeg"
  },
  {
    title: "The Arduino Platform and C Programming",
    issuer: "University of California, Irvine (Coursera)",
    date: "",
    topic: "C & Arduino",
    link: "",
    image:"/certificates/michigan.png"
  },
  {
    title: "Interactivity with JavaScript",
    issuer: "University of Michigan (Coursera)",
    date: "",
    topic: "JavaScript",
    link: "",
    image:"/certificates/michigan.png"
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan (Coursera)",
    date: "",
    topic: "Python",
    link: "",
    image:"/certificates/michigan.png"
  },
  {
    title: "The Unix Workbench",
    issuer: "Johns Hopkins University (Coursera)",
    date: "",
    topic: "Unix",
    link: "",
    image:"/certificates/johns-hopkins.jpeg"
  },
  {
    title: "Software Eng: Software Design and Project Management",
    issuer: "The Hong Kong University of Science and Technology",
    date: "",
    topic: "Software Engineering",
    link: "",
    image:"/certificates/EPFL.png"
  },
  {
    title: "Introduction à la programmation orientée objet (en C++)",
    issuer: "École Polytechnique Fédérale de Lausanne",
    date: "",
    topic: "C++",
    link: "",
    image:"/certificates/EPFL.png"
  },
  {
    title: "AI for Everyone",
    issuer: "DeepLearning.AI (Coursera)",
    date: "",
    topic: "AI",
    link: "",
    image:"/certificates/michigan.png"
  }
] as const;

export const contact = {
  email: "yahyadaraan@gmail.com",
  phone: "+212 632647612",
  github: "yahya-nasser-eddine-daraane",
  githubUrl: "https://github.com/yahya-nasser-eddine-daraane",
  linkedInUrl: "https://www.linkedin.com/in/yahya-nasser-eddine-daraane-4ab459361/",
  linkedIn : "Yahya Nasser Eddine Daraane"
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
