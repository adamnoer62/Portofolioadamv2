# Adam — Full Stack Developer Portfolio

A frontend-only, static personal portfolio for Adam. No backend, no database — Next.js exports pure HTML/CSS/JS suitable for any static host.

## Design philosophy — Apple × Neo-Brutalism

The visual direction blends two influences on purpose, not evenly:

- **Apple (≈80%)** — the foundation. Restrained neutral colors, oversized confident typography, generous whitespace, and calm, purposeful motion.
- **Neo-Brutalism (≈20%)** — the personality. Hard-edged shadows, a black-border physical CTA button, one acid-green accent used sparingly, and slight intentional asymmetry.

The result should feel **calm at first glance, bold when interacted with** — never a generic gradient-and-glassmorphism "AI portfolio" look.

## Tech stack

- Next.js (App Router) + React + strict TypeScript
- Tailwind CSS utilities (no Preflight, to coexist with hand-written CSS)
- Framer Motion for entrance and scroll-reveal motion
- Lenis for global smooth scrolling
- Lucide React for functional icons

## Features

- Minimal navbar, oversized Hero headline, staggered entrance motion
- Editorial About section (identity statement + short supporting copy, no biography block)
- Typography-driven Skills cloud with a lightweight hover-reveal note per skill
- Experience presented as a connected story, not a resume table
- Filterable project grid of 12 real client and product projects, with physical hover states (image scale, title shift, arrow reveal) and an accessible native `<dialog>` for project detail
- Minimal-reveal Contact section
- Custom desktop cursor that labels its target (`VIEW` / `OPEN ↗` / `CLICK`), automatically disabled on touch devices
- Full reduced-motion support: smooth scrolling and all entrance/reveal motion are disabled under `prefers-reduced-motion`

## Architecture

The page (`src/app/page.tsx`) composes server-rendered sections by default; a component only becomes a client component when it needs the browser (motion, scroll, mouse tracking, dialog state).

- **Motion** — `src/components/motion/SmoothScroll.tsx` owns the single global Lenis instance and pauses it while a dialog is open. Section entrance/reveal animation lives inside each section (Hero, About, Contact) using the same pattern: `useInView` + `useAnimate`, guarded by `useReducedMotion`, animating `data-*-reveal` markers so content stays visible if JavaScript never loads.
- **Cursor** — `src/components/interaction/Cursor.tsx` is isolated, single-responsibility (track pointer, read the nearest `data-cursor` attribute, render the matching state) and carries no page-specific logic. It's loaded via `next/dynamic` so its code never blocks the initial page load, and it no-ops on coarse/touch pointers.
- **Projects** — `Projects.tsx` (client, filter + selection state) renders `ProjectCard` (server) and lazily loads `ProjectModal` (client, native `<dialog>`) only once a project is selected.
- **Data** — all content lives as static typed data in `src/data/*`, imported directly by the sections that need it. No CMS, no runtime fetches.

Typography uses a local Arial/Helvetica stack (no external font requests). Project screenshots are real, served via `next/image` with `images.unoptimized` (required for static export) from `public/projects/`.

## Personalize

- `src/data/profile.ts` — name, intro, about copy, email, LinkedIn, nav links, workflow steps.
- `src/data/projects.ts` — real projects: client, category, description, stack, year, and `image` path (place the file in `public/projects/`). `demo`/`github` are optional per project.
- `src/data/skills.ts` — skills and their one-line contextual notes.
- `src/data/experience.ts` — work history entries: period, title, company, one-line detail.
- `src/app/layout.tsx` — page title, description, and Open Graph/Twitter metadata.
- `src/app/globals.css` — colors, spacing, typography, responsive rules.

Experience, Skills, Projects, contact email/LinkedIn, and the "5+ years" stat in About are all real, sourced from Adam's CV and portfolio deck. No client results, metrics, or screenshots have been invented.

## Installation & development

```sh
npm install
npm run dev
```

Visit http://localhost:3000.

```sh
npm run typecheck
npm run lint
npm run build
```

## Build

`npm run build` produces a static export in `out/` (see `next.config.ts`, `output: "export"`) — no Node server required at runtime.

## Deployment

The static `out/` directory can be served by any static host. Two options fit the stack directly:

- **Vercel** — import the repository; the default Next.js build settings work as-is.
- **GitHub Pages** — push `out/` to the `gh-pages` branch (or serve it via a GitHub Actions workflow) after `npm run build`.

Metadata (`src/app/layout.tsx`) already points `metadataBase`/canonical at `https://portofolioadam.xyz`. Update it if the real production domain changes.

## Screenshots

No screenshots are committed to the repo yet. To capture current-state screenshots locally:

```sh
npm run build
npm run test:e2e
```

The Playwright suite writes viewport screenshots to `test-results/` as part of its checks.

## Manual checks

- Check layouts at 375px, 768px, and desktop widths.
- Switch all four project filters and open each project.
- Use keyboard navigation to open a project; verify Tab stays inside the dialog, Escape closes it, and focus returns to the card.
- Hover a skill word, a nav link, and a project card — confirm the custom cursor labels each correctly, and that it's absent on a touch device.
- Check section navigation, the skip link, and back-to-top link.
- Enable reduced motion and verify that scrolling and all entrance/reveal motion are disabled.
- Configure an email address and confirm the contact link uses the intended address.

## PRD migration status

Phases 1–16 of the PRD's incremental development strategy are complete: foundation, design system, Lenis, Navbar, Hero, About, Skills, Experience, Projects, Contact, custom cursor, responsive pass, accessibility pass, performance pass, and SEO metadata.

Still open, and deliberately not done automatically:

- **Phase 17, deployment** — creating/pushing to a Git remote and standing up live hosting requires your accounts and a go-ahead; nothing has been pushed anywhere.

Browser regression checks: run `npm run build`, then `npm run test:e2e`. Tests use installed Google Chrome and a temporary Python static server on port 3100 to validate the production export independently of your development server.
