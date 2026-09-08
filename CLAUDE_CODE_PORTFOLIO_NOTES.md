# Claude Code Developer Portfolio — Architecture & Implementation Guide

This project is a production-grade, accessible developer portfolio built with **Next.js 16 (App Router + Turbopack)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. It was designed based on the modern, dark aesthetic seen on top Dribbble engineering portfolios, with real, non-generic data analyzed from GitHub profile [`kab5DeR4`](https://github.com/kab5DeR4) (**Roshan Nale**).

---

## 🏗️ Architecture & Component Boundaries

The project is structured with strict separation of concerns between data, UI layout, presentation components, and dynamic case-study routing:

```
portfolio-website/
├── public/
│   ├── profile.png             # Profile avatar
│   └── resume.pdf              # Downloadable resume
├── src/
│   ├── app/
│   │   ├── case-study/
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # SSG dynamic case-study route
│   │   ├── globals.css         # Tailwind v4 theme, obsidian bg, bento utilities
│   │   ├── layout.tsx          # Root layout with SEO, OpenGraph & JSON-LD
│   │   └── page.tsx            # Main single-page scroll entrypoint
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Glass floating pill + accessible mobile drawer
│   │   │   └── Footer.tsx      # Sitemap, social links, back-to-top trigger
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx # Typing role switcher, terminal inspection tabs
│   │   │   ├── AboutSection.tsx# Bio, current role, stats & philosophy
│   │   │   ├── SkillsSection.tsx# Categorical icon grids (no progress bars)
│   │   │   ├── ProjectsSection.tsx # Reusable ProjectCard, mockups, outcomes
│   │   │   ├── OpenSourceSection.tsx# Simulated 52-week heatmap & notable repos
│   │   │   ├── BlogSection.tsx # Technical articles with reading modal
│   │   │   ├── ExperienceSection.tsx# Vertical timeline with glowing nodes
│   │   │   └── ContactSection.tsx # Inbound inquiry form & 1-click email copy
│   │   └── ui/
│   │       └── Icons.tsx       # Reusable SVG brand & category icons
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth for all portfolio data
│   └── lib/
│       └── utils.ts            # clsx & tailwind-merge helper
```

---

## 🛠️ Reusable Component System

### 1. Master Data Source (`src/data/portfolioData.ts`)
All developer info, skills, projects, case studies, articles, and timeline entries are declared in TypeScript interfaces:
- `personalInfo`: Name, bio, handle, social links, stats, fun facts.
- `skillsData`: Categories (Languages, Frontend, Backend, Databases, DevOps, Security) with badges and icons.
- `projectsData`: Full case-study schemas including problem statements, technical constraints, ASCII architecture flow, code snippets, and measurable outcomes.
- `openSourceContributions`: Repositories, stars, technologies, and community impact.
- `technicalArticles`: Essays and write-ups with interactive reading modal contents.
- `experienceTimeline`: Work history and milestone progression.

### 2. Project Card & Dynamic Case Studies
- **`ProjectCard`** (`src/components/sections/ProjectsSection.tsx`):
  - Top visual mockup frame with status pills and tags.
  - Title, description, key measurable outcome, tech stack tags.
  - Direct links to GitHub repository, live demo URL, and deep-dive case-study route.
  - Smooth hover elevation (`-translate-y-1.5`) and subtle glow shadow.
- **Dynamic Case Study Routing** (`src/app/case-study/[slug]/page.tsx`):
  - Uses `generateStaticParams()` to pre-render every case study at build time (SSG).
  - Compatible with Next.js 16 / React 19 (`params: Promise<{ slug: string }>`).
  - Contains architecture diagrams, constraint analysis, production code snippets, and benchmark metrics.

### 3. Accessible Responsive Design
- **Breakpoints**: Mobile (`<640px`), Tablet (`640px–1024px`), Desktop (`>1024px`).
- **Keyboard Navigation**: All interactive elements have focus outlines, ARIA roles, and accessible labels.
- **Hamburger Menu**: Mobile drawer with `AnimatePresence` and backdrop blur.

---

## ⚡ Image Optimization & Performance

1. **Next.js `<Image />`**: Used in `AboutSection` with `fill` and responsive container dimensions to prevent Cumulative Layout Shift (CLS).
2. **Inline Vector Icons**: Custom SVG icons in `src/components/ui/Icons.tsx` avoid bundling heavyweight icon packs.
3. **Hardware-Accelerated Animation**: Framer Motion transforms (`y`, `opacity`) run on GPU composited layers without triggering DOM reflows.

---

## 🔍 SEO & Metadata Setup

Configured in `src/app/layout.tsx`:
- Primary title, meta description, and keywords targeting "Developer Portfolio", "Full-Stack Developer", and "Claude Code Portfolio".
- OpenGraph (`og:title`, `og:description`, `og:image`) and Twitter Card metadata.
- **JSON-LD Schema**: Embedded `Person` and `WebSite` structured data for search engine rich snippets.

---

## 🚀 Deployment Instructions

### Deploying to Vercel
1. Push the repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete developer portfolio with case studies"
   git push origin main
   ```
2. Import the project on [Vercel](https://vercel.com/new).
3. Framework preset is automatically detected as **Next.js**.
4. Click **Deploy**. Build output: Static HTML (SSG) with zero server overhead.

### Local Development
```bash
npm run dev     # Starts development server at http://localhost:3000
npm run build   # Verifies static generation & compiles production bundle
npm run start   # Runs production server locally
```
