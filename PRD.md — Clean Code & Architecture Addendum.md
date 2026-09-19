# Adam Portfolio

> **Apple × Neo-Brutalism — Premium Developer Portfolio**

A frontend-only personal portfolio combining Apple's minimal, editorial product-design philosophy with the raw physical interaction of Neo-Brutalism.

The website should feel:

> **Calm at first glance. Bold when interacted with.**

---

# 01. Project Overview

## Product

**Name:** Adam Portfolio

**Type:** Personal Developer Portfolio

**Architecture:** Frontend-only / Static

**Backend:** None

**Database:** None

**Deployment:** GitHub Pages / Vercel

---

# 02. Primary Goals

The portfolio must:

* Communicate who Adam is within seconds.
* Demonstrate real full-stack development experience.
* Showcase real projects.
* Demonstrate strong frontend engineering.
* Demonstrate thoughtful animation.
* Demonstrate clean code and architecture.
* Feel memorable without becoming visually noisy.
* Avoid generic AI-generated portfolio aesthetics.
* Work beautifully on desktop and mobile.

The website itself should be treated as a **product**, not simply an online resume.

---

# 03. Technology Stack

Use:

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion
Lenis
Lucide React
```

Use additional dependencies only when there is a concrete reason.

Do not install libraries simply because they are popular or convenient.

---

# 04. Creative Direction

The visual identity is a deliberate combination of:

```text
Apple
+
Editorial Design
+
Neo-Brutalism
+
Subtle Motion
```

However, these influences are NOT equal.

## Visual Ratio

```text
80% Apple-inspired minimalism
20% Neo-Brutalist personality
```

### Apple = Foundation

Apple influences:

* Typography
* Whitespace
* Composition
* Visual hierarchy
* Product storytelling
* Image presentation
* Navigation
* Motion
* Restraint

### Neo-Brutalism = Personality

Neo-Brutalism influences:

* Borders
* Hard shadows
* Buttons
* Accent colors
* Physical interactions
* Slight asymmetry
* Editorial visual tension

---

# 05. Design Philosophy

The website should feel:

* Premium
* Minimal
* Editorial
* Confident
* Technical
* Human
* Slightly playful
* Intentionally imperfect

Avoid making the website look like a generic corporate portfolio.

The design should have personality without relying on decoration.

---

# 06. Apple Design Principles

Use Apple's principles, NOT Apple's branding.

The website should emphasize:

### Whitespace

Large areas of empty space are intentional.

Do not fill empty space simply because it exists.

### Typography

Typography should carry much of the visual identity.

### Hierarchy

Every section should have one obvious visual focus.

### Storytelling

The page should progressively communicate:

```text
Who I am
    ↓
What I build
    ↓
How I work
    ↓
What I have built
    ↓
How to contact me
```

### Restraint

Use fewer elements with stronger impact.

---

# 07. Neo-Brutalist Principles

Neo-Brutalism should appear primarily through interaction.

Examples:

```text
Thin / thick black borders
Hard shadows
Physical button movement
Bold accent colors
Asymmetrical layouts
Strong typography
```

Brutalism should NOT mean:

* Messy
* Random
* Ugly
* Excessively colorful
* Excessively distorted

The interface should remain polished.

---

# 08. Anti-AI-Slop Rules

This is a critical requirement.

The website must NOT look like a generic AI-generated portfolio.

## Forbidden

Do NOT use:

* Purple-blue gradients
* Gradient blobs
* Glassmorphism everywhere
* Floating abstract blobs
* Random 3D spheres
* Random particles
* Neon cyberpunk aesthetics
* Excessive glow
* Excessive rounded cards
* Giant pill-shaped UI everywhere
* Generic SaaS dashboards
* Fake testimonials
* Fake statistics
* Fake clients
* Fake awards
* Fake achievements
* Generic stock photography
* AI-generated developer illustrations
* Excessive emojis
* Excessive decorative icons
* Random geometric decorations
* Excessive parallax
* Excessive page transitions
* Every element using fade-up
* Animation purely for showing off
* "Passionate developer" clichés
* Generic corporate buzzwords

---

# 09. Anti-Slop Design Rule

Every visual element must answer:

> **Why does this exist?**

Possible answers:

* Improves hierarchy
* Improves usability
* Communicates information
* Creates meaningful interaction
* Supports storytelling
* Establishes visual identity

If the element has no meaningful purpose:

> **Remove it.**

Prefer subtraction over decoration.

---

# 10. Content Rules

All content must be real.

Never invent:

* Companies
* Clients
* Project metrics
* Revenue
* User numbers
* Awards
* Testimonials
* Job titles
* Technologies
* Certifications

If information is unknown, use a placeholder.

Never fabricate impressive-looking numbers.

---

# 11. Copywriting Direction

Copy should feel human.

Avoid:

```text
I'm a passionate developer dedicated to creating
innovative and scalable digital experiences.
```

Prefer:

```text
I build things people actually use.
```

Or:

```text
I build web applications,
digital products,
and occasionally fight CSS.
```

Copy should be:

* Direct
* Short
* Specific
* Human
* Slightly playful where appropriate

Avoid corporate filler.

---

# 12. Color System

## Base

```text
Background
#F5F5F0

Primary
#111111

Secondary
#6B6B6B
```

## Accent Colors

```text
Electric Blue
#5B5BF7

Acid Green
#C8FF00

Soft Pink
#FF6B9D

Warm Orange
#FF7A00
```

Do not use all accent colors at once.

Use one dominant accent per context.

---

# 13. Color Ratio

Recommended:

```text
80% Neutral
20% Accent
```

Accent colors should be used intentionally for:

* CTA
* Active states
* Important information
* Tags
* Interactive elements
* Small visual highlights

Do not make the whole website colorful.

---

# 14. Typography

Typography is a primary visual element.

Hero typography should be extremely prominent.

Example:

```text
I BUILD
DIGITAL
THINGS.
```

Use responsive typography.

Recommended starting point:

```css
font-size: clamp(5rem, 15vw, 14rem);
```

Adjust based on content and viewport.

Do not blindly apply the same size everywhere.

---

# 15. Typography Hierarchy

Maintain a clear hierarchy:

```text
Display
↓
H1
↓
H2
↓
H3
↓
Body
↓
Metadata
```

Use one primary typeface with multiple weights where possible.

Avoid using many different fonts.

---

# 16. Spacing

Use a consistent spacing scale.

Suggested:

```text
4
8
12
16
24
32
48
64
96
128
160
```

Large sections should have generous vertical spacing.

Whitespace is an intentional design element.

---

# 17. Borders

Default:

```css
border: 1px solid #111;
```

Brutalist elements:

```css
border: 2px solid #111;
```

or:

```css
border: 3px solid #111;
```

Do not use thick borders everywhere.

---

# 18. Shadows

Primary Neo-Brutalist shadow:

```css
box-shadow: 8px 8px 0 #111;
```

Hover:

```css
box-shadow: 4px 4px 0 #111;
```

Active:

```css
box-shadow: 1px 1px 0 #111;
transform: translate(7px, 7px);
```

Avoid soft, oversized shadows.

---

# 19. Border Radius

Do not excessively round the interface.

Recommended:

```text
Standard UI:
8px–16px

Brutalist UI:
0px–8px

Large imagery:
0px–16px
```

Avoid:

```text
rounded-3xl
rounded-full
```

being used on everything.

---

# 20. Layout

Desktop:

```text
12-column grid
```

Mobile:

```text
4-column grid
```

Use asymmetry intentionally.

Example:

```text
┌──────────────┬────────────────────────────┐
│              │                            │
│    LABEL     │         CONTENT            │
│              │                            │
└──────────────┴────────────────────────────┘
```

Avoid using centered cards for every section.

---

# 21. Page Structure

```text
/
│
├── Navbar
├── Hero
├── About
├── Skills
├── Experience
├── Projects
├── Workflow
├── Contact
└── Footer
```

---

# 22. Navbar

Initial state should be minimal.

Example:

```text
ADAM®

WORK
ABOUT
CONTACT

●
```

After scrolling, the navbar can become a floating compact navigation.

Characteristics:

* Minimal
* Thin border
* Small hard shadow
* Slight blur if necessary
* Smooth transition
* Strong typography

Do not create a huge navigation bar.

---

# 23. Hero

The hero must communicate:

```text
WHO
WHAT
WHY
```

Suggested composition:

```text
ADAM

FULL STACK
DEVELOPER

I build web applications,
digital products,
and interactive experiences.

[ VIEW MY WORK → ]
```

The hero should feel spacious and confident.

Avoid:

* Giant profile circles
* Random illustrations
* Floating blobs
* 3D objects
* Excessive badges
* Multiple competing CTAs

---

# 24. Hero Animation

Recommended sequence:

```text
Background
    ↓
Name
    ↓
Headline
    ↓
Description
    ↓
CTA
```

Use subtle stagger.

Suggested properties:

```text
opacity
translateY
small scale
```

Do not animate every character unless the interaction genuinely benefits from it.

---

# 25. About

The About section should feel editorial.

Example:

```text
01 / ABOUT

I'M A
FULL STACK
DEVELOPER.
```

Supporting copy:

```text
I build web applications,
digital products,
and systems that solve
real problems.
```

Avoid large biography blocks.

---

# 26. Statistics

Use real information only.

Example:

```text
05+
YEARS

XX
PROJECTS

∞
STILL LEARNING
```

If the real project count is unknown, do not invent one.

---

# 27. Skills

Avoid generic card grids.

Instead use typography-driven composition.

Example:

```text
                    PHP

       Next.js                AWS

                  LARAVEL

       MySQL             JavaScript
```

Skills may have subtle interaction.

Hover can reveal contextual information.

Keep the interaction lightweight.

---

# 28. Experience

Experience should feel like a story rather than a resume table.

Example:

```text
THE JOURNEY

2022

I STARTED
BUILDING.

↓

2024

I STARTED
SHIPPING.

↓

2026

I BUILD
FULL SYSTEMS.
```

Use scroll progression where appropriate.

Do not over-animate the timeline.

---

# 29. Projects

Projects are the primary showcase.

Each project should feel like a product launch.

Example:

```text
01

TIXENTRA

EVENT
PLATFORM
```

Followed by a dominant project image.

Project presentation:

```text
Project title
Category
Screenshot
Short description
Technology
Links
```

Project imagery should dominate over decorative UI.

---

# 30. Project Content

Each project should answer:

```text
What is it?
What problem does it solve?
What did I build?
What technologies were used?
```

Keep descriptions concise.

Example:

```text
TIXENTRA

An event platform for discovering events,
managing tickets, and handling payments.

Built with Laravel, MySQL and Midtrans.
```

---

# 31. Project Data

Use static TypeScript data.

Example:

```ts
export const projects: Project[] = [
  {
    id: 1,
    title: "TIXENTRA",
    category: "Event Platform",
    description:
      "Event management and ticketing platform.",
    image: "/projects/tixentra.webp",
    stack: [
      "Laravel",
      "MySQL",
      "Midtrans",
    ],
    github: "#",
    demo: "#",
  },
];
```

Do not create a backend for static portfolio content.

---

# 32. Project Interaction

On hover:

```text
Image
→ scale slightly

Title
→ move slightly

Arrow
→ reveal

Cursor
→ change state
```

Interaction should feel physical.

Avoid flashy effects.

---

# 33. Project Detail

Projects may use:

* Modal
* Dynamic route
* Shared layout transition

Preferred experience:

```text
Project
   ↓
Image expands
   ↓
Transition
   ↓
Project details
```

The transition should feel like opening a product.

---

# 34. Brutalist Buttons

Example:

```text
┌───────────────────────────┐
│ VIEW MY WORK         →    │
└───────────────────────────┘
█████████████████████████████
```

Characteristics:

* Strong typography
* Black border
* Hard shadow
* Minimal radius
* Physical hover state

Hover:

```text
translate(4px, 4px)
shadow decreases
```

Active:

```text
translate(7px, 7px)
shadow almost disappears
```

---

# 35. Custom Cursor

Desktop only.

Default:

```text
●
```

Hover link:

```text
VIEW
```

Hover project:

```text
OPEN ↗
```

Hover CTA:

```text
CLICK
```

The cursor must never interfere with usability.

Disable on mobile.

---

# 36. Lenis

Lenis is responsible for smooth scrolling.

Architecture:

```text
User
 ↓
Lenis
 ↓
Scroll Position
 ↓
Framer Motion
 ↓
UI Response
```

Initialize Lenis once globally.

Do not initialize Lenis inside multiple sections.

---

# 37. Framer Motion

Framer Motion is for meaningful motion.

Good use cases:

* Hero entrance
* Section reveals
* Project transitions
* Shared layout animation
* Navigation transitions
* Modal animation
* Scroll-driven interaction

Bad use cases:

* Every paragraph
* Every card
* Every icon
* Every `<div>`
* Random infinite animations

---

# 38. Motion Philosophy

Every animation must answer:

> **Why is this moving?**

Valid reasons:

* Establish hierarchy
* Show state
* Guide attention
* Communicate navigation
* Create physical interaction
* Connect visual states

If there is no good answer:

> Remove the animation.

---

# 39. Animation Variety

Do not use:

```text
fade-up
fade-up
fade-up
fade-up
fade-up
```

for the entire website.

Suggested:

### Hero

Staggered entrance.

### About

Typography reveal.

### Skills

Subtle movement.

### Experience

Scroll storytelling.

### Projects

Image scale + title movement.

### Contact

Minimal reveal.

---

# 40. Reduced Motion

Support:

```css
@media (prefers-reduced-motion: reduce) {
  /* Reduce or disable non-essential animation */
}
```

The website must remain fully usable without animation.

---

# 41. Responsive Design

## Desktop

Enable:

* Custom cursor
* Large typography
* Project hover
* Full motion
* Editorial layouts

## Tablet

Reduce:

* Parallax
* Floating elements
* Motion intensity

## Mobile

Prioritize:

* Readability
* Touch interaction
* Performance
* Typography

Disable:

* Custom cursor
* Heavy parallax
* Expensive effects

---

# 42. Accessibility

Required:

* Semantic HTML
* Correct heading hierarchy
* Keyboard navigation
* Visible focus states
* Accessible buttons
* Accessible links
* Image alt text
* Appropriate ARIA labels
* Reduced motion support
* Sufficient contrast

Never rely solely on animation or color to communicate information.

---

# 43. Clean Code & Architecture

Clean code is mandatory.

The codebase should be:

```text
Simple
↓
Readable
↓
Predictable
↓
Maintainable
```

The goal is NOT maximum abstraction.

The goal is:

> **Maximum clarity with minimum complexity.**

---

# 44. Architecture Principles

Follow:

* Separation of concerns
* Single responsibility
* Low coupling
* High cohesion
* Composition over inheritance
* Explicit data flow
* Strong typing
* Minimal global state

---

# 45. Recommended Architecture

```text
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Workflow.tsx
│   │   └── Contact.tsx
│   │
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   └── ProjectTags.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionLabel.tsx
│   │   └── Tag.tsx
│   │
│   ├── motion/
│   │   ├── FadeIn.tsx
│   │   ├── Reveal.tsx
│   │   └── MotionWrapper.tsx
│   │
│   └── interaction/
│       └── Cursor.tsx
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
│
├── hooks/
│   ├── useMousePosition.ts
│   └── useMediaQuery.ts
│
├── lib/
│   ├── utils.ts
│   └── constants.ts
│
└── types/
    └── index.ts
```

Do not create additional architectural layers unless there is a real need.

---

# 46. Page Composition

`page.tsx` should primarily compose sections.

Example:

```tsx
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Workflow />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
```

Avoid putting large implementation logic into `page.tsx`.

---

# 47. Component Responsibility

Each component must have a clear responsibility.

Bad:

```text
Projects.tsx
```

containing:

* Project data
* Modal state
* Cursor implementation
* Animation system
* Global navigation
* Unrelated utilities

Good:

```text
Projects
├── ProjectCard
├── ProjectModal
└── projects.ts
```

---

# 48. Reusable Components

Create reusable components when:

1. They are reused.
2. They represent a meaningful UI concept.
3. They improve maintainability.
4. They contain meaningful interaction logic.

Examples:

```text
Button
Tag
SectionLabel
ProjectCard
ProjectModal
```

Do not create abstractions just because something could theoretically be reused.

---

# 49. No Component Explosion

Avoid structures like:

```text
Card
CardWrapper
CardContainer
CardContent
CardText
CardTitle
CardHover
CardAnimation
```

when one component is sufficient.

Prefer:

```tsx
<ProjectCard />
```

---

# 50. Data Separation

Static content belongs in:

```text
src/data/
```

Examples:

```text
projects.ts
skills.ts
experience.ts
```

Components should consume data rather than hardcoding large content structures.

---

# 51. TypeScript

TypeScript must be used properly.

Avoid:

```ts
any
```

unless absolutely unavoidable.

Prefer explicit types.

Example:

```ts
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  stack: string[];
  github?: string;
  demo?: string;
}
```

---

# 52. Props

Props should be:

* Explicit
* Minimal
* Typed
* Predictable

Good:

```ts
interface ProjectCardProps {
  project: Project;
}
```

Avoid passing unrelated global state through many layers.

---

# 53. State Management

Do not install global state libraries unless genuinely required.

Prefer:

```text
React local state
+
URL state when appropriate
+
Composition
```

Do NOT introduce Redux/Zustand simply because they are familiar.

This project does not require global state architecture.

---

# 54. Hooks

Custom hooks should encapsulate reusable behavior.

Good:

```text
useMousePosition()
useMediaQuery()
```

Bad:

```text
useEverything()
usePortfolio()
usePageLogic()
```

Avoid hooks that hide huge amounts of unrelated logic.

---

# 55. Utility Functions

Utilities should be:

* Small
* Pure where possible
* Predictable
* Reusable

Examples:

```text
cn()
clamp()
formatDate()
```

Do not create utility functions for trivial one-off operations.

---

# 56. Constants

Shared constants may live in:

```text
src/lib/constants.ts
```

Example:

```ts
export const SITE_NAME = "Adam";

export const NAV_ITEMS = [
  "Work",
  "About",
  "Contact",
];
```

Avoid scattered magic values.

---

# 57. Magic Numbers

Avoid unexplained values.

Bad:

```ts
x: 47
y: 83
duration: 0.734
```

If a value has semantic meaning, name it.

Example:

```ts
const HERO_ANIMATION_DURATION = 0.6;
```

Do not extract every number into a constant.

---

# 58. Client Components

Use `"use client"` only when necessary.

Client components are appropriate for:

* Framer Motion
* Lenis
* Browser APIs
* Mouse interaction
* Interactive state
* Modal logic

Do not make the entire application a Client Component.

---

# 59. Server Components

Prefer Server Components by default.

The application should remain as server-rendered as practical.

Only move a component to the client when browser-side behavior requires it.

---

# 60. Animation Architecture

Animation code should remain readable.

Shared animation patterns may live in:

```text
components/motion/
```

Example:

```tsx
<FadeIn>
  <Section />
</FadeIn>
```

But do not wrap every element with generic animation components.

Use abstractions only when they improve consistency.

---

# 61. Lenis Architecture

Lenis must have one responsibility:

> Global smooth scrolling.

Do not let individual sections create independent Lenis instances.

Do not duplicate scroll-engine logic.

---

# 62. Cursor Architecture

Custom cursor logic should be isolated.

```text
components/
└── interaction/
    └── Cursor.tsx
```

Cursor responsibilities:

* Track pointer
* Detect interaction state
* Render cursor state

Cursor should not contain project-specific business logic.

---

# 63. No Premature Abstraction

Before creating an abstraction, ask:

> Is this actually reused?

If no:

> Keep it local.

Readable duplication is sometimes better than unnecessary abstraction.

---

# 64. No Over-Engineering

This is a static portfolio.

Do NOT introduce:

* Repository patterns
* Service layers
* Dependency injection
* API clients
* Event buses
* Complex state machines
* CMS
* Database
* Authentication
* Admin dashboard

unless the requirements genuinely change.

Architecture must remain proportional to the product.

---

# 65. KISS

Follow:

> **Keep It Simple.**

When two solutions work equally well:

> Choose the simpler one.

Prefer:

```text
CSS
```

over JavaScript when CSS is sufficient.

Prefer:

```text
local state
```

over global state when possible.

Prefer:

```text
simple component
```

over unnecessary abstraction.

---

# 66. YAGNI

Follow:

> **You Aren't Gonna Need It.**

Do not build features before they are needed.

This project does not need:

```text
CMS
API
Authentication
Database
Admin
```

---

# 67. DRY

Avoid meaningful duplication.

However:

> Do not abstract every repeated line.

The goal is to reduce meaningful duplication while maintaining readability.

---

# 68. File Size

As a guideline:

```text
Most UI components:
< 150 lines
```

This is not an absolute rule.

If a component grows too large, split it by responsibility.

Do not split components artificially just to meet a line count.

---

# 69. Naming

Components:

```text
PascalCase
```

Examples:

```text
ProjectCard.tsx
Navbar.tsx
Hero.tsx
```

Hooks:

```text
camelCase
```

Examples:

```text
useMousePosition.ts
useMediaQuery.ts
```

Data:

```text
camelCase
```

Examples:

```text
projects.ts
skills.ts
experience.ts
```

---

# 70. Boolean Prop Explosion

Avoid:

```tsx
<Component
  isLarge
  isDark
  isAnimated
  isBrutalist
  hasShadow
  hasBorder
  hasArrow
/>
```

This usually means the component has too many responsibilities.

Prefer:

* meaningful variants
* composition
* separate components

---

# 71. Prop Drilling

Avoid deeply passing unrelated props through many layers.

Bad:

```text
Page
 ↓
Section
 ↓
Wrapper
 ↓
Container
 ↓
Card
 ↓
Button
```

when each layer exists only to pass props.

Prefer:

* local ownership
* composition
* direct data flow
* minimal context where genuinely necessary

---

# 72. Comments

Comments should explain **why**, not **what**.

Bad:

```ts
// Set opacity to zero
opacity: 0
```

Good:

```ts
// Prevent cursor flash before hydration completes.
opacity: 0
```

Avoid unnecessary comments.

---

# 73. Dead Code

Do not leave:

* Unused imports
* Unused components
* Unused variables
* Commented-out implementations
* Debugging code
* `console.log()` statements

The repository should remain clean.

---

# 74. Dependency Rules

Before adding a dependency:

1. What problem does it solve?
2. Can existing dependencies solve it?
3. Can native CSS solve it?
4. Is it worth the bundle cost?
5. Does it materially improve the product?

If unclear:

> Do not install it.

---

# 75. Performance

Target:

```text
Lighthouse Performance > 90
```

Requirements:

* Use `next/image`
* Optimize project screenshots
* Prefer WebP/AVIF
* Lazy-load non-critical images
* Avoid unnecessary client components
* Avoid unnecessary JavaScript
* Dynamically import expensive components
* Reduce effects on mobile
* Avoid layout shift

Do not sacrifice performance for visual effects.

---

# 76. SEO

Include:

* Page title
* Meta description
* Open Graph metadata
* Twitter/X metadata
* Canonical URL
* Favicon
* Semantic HTML

Example:

```text
Title:
Adam — Full Stack Developer

Description:
Full Stack Developer building web applications,
digital products, and interactive experiences.
```

---

# 77. Asset Rules

Use real project screenshots whenever possible.

Preferred:

```text
/public/projects/tixentra.webp
/public/projects/photobooth.webp
/public/projects/medical-platform.webp
```

Avoid:

* AI-generated fake screenshots
* Generic laptop mockups
* Generic stock developer imagery

Real work is the visual identity.

---

# 78. Development Strategy

Do NOT implement the entire website in one generation.

Build incrementally.

## Phase 1

Project foundation.

## Phase 2

Design system.

## Phase 3

Lenis.

## Phase 4

Navbar.

## Phase 5

Hero.

## Phase 6

Review Hero.

## Phase 7

About.

## Phase 8

Skills.

## Phase 9

Experience.

## Phase 10

Projects.

## Phase 11

Contact.

## Phase 12

Interactions.

## Phase 13

Responsive optimization.

## Phase 14

Accessibility.

## Phase 15

Performance.

## Phase 16

SEO.

## Phase 17

Deployment.

---

# 79. AI Coding Agent Rules

When using Codex or another coding agent:

## Rule 1 — Do Not Build Everything

Never start with:

```text
Build the entire portfolio.
```

Instead:

```text
Implement the Hero section according to PRD.md.

Do not modify unrelated sections.
```

---

## Rule 2 — PRD Is the Source of Truth

Follow the existing PRD before introducing new design decisions.

Do not invent visual patterns without a reason.

---

## Rule 3 — Reuse Existing Architecture

Before creating a new component or pattern:

> Check whether the existing architecture already solves the problem.

If yes:

> Reuse it.

If no:

> Introduce the smallest clean solution.

---

## Rule 4 — Do Not Rewrite Working Code

Do not rewrite unrelated components simply because another implementation is possible.

Modify only what is necessary.

---

## Rule 5 — No Unnecessary Dependencies

Do not install packages without explaining why they are necessary.

---

## Rule 6 — No Unnecessary Visual Effects

Do not add:

* gradients
* blobs
* particles
* 3D objects
* glows
* excessive animations

unless explicitly required by the design.

---

## Rule 7 — Prefer Removing

If the interface feels too busy:

> Remove elements before adding more styling.

---

# 80. AI Code Review Prompt

After implementing a section, review it using:

```text
Review this implementation as a senior product designer
and senior frontend engineer.

Focus on:

1. AI-generated design patterns
2. Unnecessary visual elements
3. Excessive animations
4. Typography hierarchy
5. Spacing
6. Visual consistency
7. Accessibility
8. Performance
9. Component complexity
10. Mobile behavior
11. Clean code
12. Architecture

Be critical.

Do NOT recommend adding more effects by default.

Prefer removing unnecessary elements.

The goal is to make the design feel intentional,
human-designed, restrained, maintainable,
and production-quality.
```

---

# 81. Quality Gate

Before considering a section complete:

## Design

```text
[ ] Visual hierarchy is obvious
[ ] Typography feels intentional
[ ] Whitespace is sufficient
[ ] Apple foundation is maintained
[ ] Neo-Brutalist accents are controlled
[ ] No unnecessary decoration
```

## Content

```text
[ ] Content is real
[ ] Copy is specific
[ ] No fake metrics
[ ] No generic filler
```

## Animation

```text
[ ] Animation has a purpose
[ ] Motion is not excessive
[ ] No repetitive fade-up everywhere
[ ] Reduced motion works
```

## Engineering

```text
[ ] Component has one clear responsibility
[ ] Types are explicit
[ ] No unnecessary any
[ ] No unnecessary state
[ ] No unnecessary dependency
[ ] No dead code
[ ] No debug logs
[ ] Architecture remains simple
```

---

# 82. Git Strategy

Use meaningful commits.

```text
feat: initialize portfolio
feat: add design system
feat: add lenis smooth scrolling
feat: build navbar
feat: build hero
feat: add about section
feat: add skills section
feat: add experience timeline
feat: build project showcase
feat: add project interactions
feat: build contact section
feat: add custom cursor
perf: optimize project assets
a11y: improve keyboard navigation
docs: improve README
```

Avoid one giant commit containing the entire application.

---

# 83. README

The repository README should include:

```text
Project overview
Tech stack
Features
Architecture
Design philosophy
Installation
Development
Build
Deployment
Screenshots
```

Include a short explanation of the Apple × Neo-Brutalism concept.

---

# 84. Definition of Done

## Design

```text
[ ] Apple-inspired foundation
[ ] Neo-Brutalist personality
[ ] Consistent typography
[ ] Consistent spacing
[ ] Controlled colors
[ ] Intentional asymmetry
[ ] No AI-slop patterns
```

## Experience

```text
[ ] Smooth scrolling
[ ] Meaningful motion
[ ] Interactive projects
[ ] Physical button interactions
[ ] Custom cursor desktop
[ ] Responsive mobile experience
```

## Engineering

```text
[ ] Next.js
[ ] TypeScript
[ ] Tailwind
[ ] Framer Motion
[ ] Lenis
[ ] Clean architecture
[ ] Clean components
[ ] Strong typing
[ ] Static data architecture
```

## Quality

```text
[ ] SEO
[ ] Accessibility
[ ] Reduced motion
[ ] Lighthouse Performance > 90
[ ] No console errors
[ ] No hydration errors
[ ] Mobile tested
[ ] Desktop tested
```

## Deployment

```text
[ ] GitHub repository
[ ] README
[ ] Project screenshots
[ ] Live deployment
[ ] Mobile verification
```

---

# 85. Final Design Test

Before shipping:

### Test 1

> If all animations were disabled, would this still be a good website?

If no:

> The design relies too heavily on motion.

---

### Test 2

> If all Neo-Brutalist elements were removed, would the Apple-inspired foundation still work?

If no:

> The brutalist styling is carrying too much of the design.

---

### Test 3

> If 20% of the visual elements were removed, would the website become better?

If yes:

> Remove them.

---

### Test 4

> Does this look like something a human designer intentionally created?

If no:

> Simplify.

---

# 86. Final Creative Direction

The final website should feel like:

```text
Apple
    +
Editorial Design
    +
Neo-Brutalist Interaction
    +
Real Developer Projects
    +
Subtle Motion
    +
Clean Engineering
```

Not:

```text
AI Portfolio
    +
Gradient
    +
Glassmorphism
    +
3D Blob
    +
Particles
    +
50 Animations
    +
Generic Copy
```

---

# 87. Final Product Principle

> **Make it feel designed, not generated.**

The website should demonstrate two things simultaneously:

### Design maturity

The ability to know:

> what to add.

And more importantly:

> **what NOT to add.**

### Engineering maturity

The ability to write:

> simple, maintainable, predictable code.

Not the most complicated architecture.

---

# 88. One-Line Concept

> **A cinematic Apple-inspired developer portfolio with a controlled Neo-Brutalist personality, meaningful motion, real project storytelling, and production-quality frontend architecture.**
