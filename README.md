# Youssef BENMOUSSA — Portfolio 

A clean, modern, high-end developer portfolio built with Next.js (App Router), TypeScript, TailwindCSS, and Framer Motion.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS** 
- **Framer Motion** (scroll and hover animations)
- **lucide-react** (icons)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── projects/
│       └── page.tsx
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # Reusable: SectionTitle, ProjectCard, SkillCard, Timeline
│   └── sections/           # Page sections: Hero, About, Education, Skills, Projects, Certifications, Contact
└── data/
    └── portfolio.ts        # Content: site copy, projects, skills, certifications, contact, nav
```


