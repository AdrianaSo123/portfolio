# SPEC DOC — Adriana So Portfolio (MVP)

**Version:** 1.3
**Status:** Ready for implementation (project content pending — see Section 11)
**Owner:** Adriana So

---

## 1. Purpose

Build a minimal, professional portfolio website for Adriana So. The site must communicate her identity as an AI systems builder to a technical recruiter in under 60 seconds.

**Primary audience:** Technical recruiters and hiring managers

**Primary content focus:** AI systems work

**Secondary content focus:** Real-world case studies

**Design principle:** Clarity over complexity. Every element must earn its place.

---

## 2. Tech Stack

| Concern | Decision |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS v3 |
| Language | TypeScript |
| Deployment | Vercel |
| Node version | 18+ |

No other dependencies are required. Do not introduce additional libraries without a documented reason.

---

## 3. File Structure

```
/app
  /layout.tsx          ← root layout (navbar + footer wrapper)
  /page.tsx            ← Home (/)
  /favicon.ico         ← place favicon here (Next.js 14 App Router convention)
  /systems/page.tsx    ← Systems (/systems)
  /case-studies/page.tsx ← Case Studies (/case-studies)
  /contact/page.tsx    ← Contact (/contact)
/components
  /Navbar.tsx
  /Card.tsx
  /Button.tsx
/data
  /projects.ts         ← all hardcoded content (required, not optional)
/public
  /resume.pdf          ← placeholder; owner to replace with real file
```

Do not create files or directories beyond this structure without explicit justification.

---

## 4. Routes

Exactly four routes. No additional routes.

| Route | Page |
|---|---|
| `/` | Home |
| `/systems` | Systems |
| `/case-studies` | Case Studies |
| `/contact` | Contact |

All routes are static. No dynamic segments. No catch-all routes.

---

## 5. Global Layout

### 5.1 Container

Every page shares one root layout. The layout enforces:

* Max width: `1100px` (use `max-w-[1100px]`)
* Horizontal centering: `mx-auto`
* Horizontal padding: `px-6` on all screen sizes
* Vertical section padding: see Section 13 for responsive values

### 5.2 Navbar

The navbar is sticky (`position: sticky`, `top: 0`), full-width, white background, with a `1px` bottom border in `#e5e7eb` (Tailwind `border-gray-200`). Add `z-10` to ensure it renders above scrolling content.

**Left side:** Text link "Adriana So" — navigates to `/`

**Right side:** Three text links in this order:
1. Systems → `/systems`
2. Case Studies → `/case-studies`
3. Contact → `/contact`

**Active state:** The link matching the current route is underlined.

**Mobile behavior:** On screens narrower than `768px` (Tailwind `md` breakpoint), collapse the right-side links into a hamburger menu. The hamburger opens a full-width dropdown showing the three links stacked vertically.

**Height:** `64px`

### 5.3 Footer

A minimal footer at the bottom of every page:

* Content: `© 2026 Adriana So`
* Alignment: centered
* Padding: `py-6`
* Font size: `text-sm`
* Color: `text-gray-400`

---

## 6. Home Page (`/`)

Three sections, rendered in order, separated by consistent spacing (see Section 13 for responsive values: `py-10` on mobile, `py-12` on desktop).

### 6.1 Hero Section

| Field | Value |
|---|---|
| Name | Adriana So |
| Headline line 1 | AI Systems + Product Thinker |
| Headline line 2 | Building structured, real-world workflows with AI |
| Subtext items | NJIT Senior · Wakefern UX Intern · AI pipelines, agents, structured systems |

**Name** renders at `text-sm`, muted (`text-gray-500`), above the headline.

**Headline** renders at `text-4xl font-bold` on desktop, `text-3xl` on mobile. Each line on its own line.

**Subtext** renders as a single line of dot-separated items at `text-gray-500`.

**Buttons** — two buttons, side by side on desktop, stacked full-width on mobile:
* Primary (solid): label "View Systems" → `/systems`
* Secondary (outline): label "View Case Studies" → `/case-studies`

### 6.2 Systems Preview Section

**Heading:** "Systems" — `text-2xl font-semibold`

Display exactly the same project entries defined in `/data/projects.ts` under `systems`. Render as a row of cards (2–3 cards). Each card shows:

* Project title
* One-line description (use the `summary` field from the data file)
* Entire card is clickable → navigates to `/systems`

Implement click behavior by wrapping the card in a Next.js `<Link href="/systems" className="block">`. The `block` class is required so the entire card area is clickable, not just the text. Do not use `onClick` or a router hook. No `"use client"` required.

No "Read more" link. No per-project deep-link. The card is a navigation trigger only.

### 6.3 Case Studies Preview Section

**Heading:** "Case Studies" — `text-2xl font-semibold`

Display exactly the same project entries defined in `/data/projects.ts` under `caseStudies`. Render as a row of cards (1–2 cards). Each card shows:

* Project title
* Short description (use the `summary` field)
* Entire card is clickable → navigates to `/case-studies`

Same card component as Section 6.2. Same `<Link href="/case-studies" className="block">` wrapping pattern. Same navigation behavior.

---

## 7. Systems Page (`/systems`)

**Page heading:** "Systems" — `text-3xl font-bold`

**Subheading:** "AI pipelines, agents, and structured workflows." — `text-gray-500`

Render each project from `/data/projects.ts → systems[]` as a full-width project block, separated by a `1px` horizontal rule (`border-gray-200`).

### 7.1 Project Block Structure

Each block renders the following fields in order:

1. **Title** — `text-2xl font-semibold`
2. **Description** — prose paragraph, 2–3 sentences, `text-gray-700`
3. **Why it was built** — labeled `"Why I built this"`, 1–2 sentences, `text-gray-600`
4. **How it works** — labeled `"How it works"`, rendered as an ordered list (`<ol>`), each item is one step
5. **Key decisions** — labeled `"Key decisions"`, rendered as an unordered list (`<ul>`), each item is one design decision

No images. No external links. No expand/collapse behavior.

---

## 8. Case Studies Page (`/case-studies`)

**Page heading:** "Case Studies" — `text-3xl font-bold`

**Subheading:** "Real-world product and systems work." — `text-gray-500`

Render each project from `/data/projects.ts → caseStudies[]` as a full-width case study block, separated by a `1px` horizontal rule.

### 8.1 Case Study Block Structure

Each block renders the following fields in order:

1. **Title** — `text-2xl font-semibold`
2. **Context** — labeled `"Context"`, 1–2 sentences, `text-gray-700`
3. **Problem** — labeled `"Problem"`, 1–2 sentences, `text-gray-700`
4. **What I did** — labeled `"What I did"`, rendered as an unordered list (`<ul>`), each bullet is one concrete action
5. **Outcome** — labeled `"Outcome"`, 1–2 sentences, `text-gray-700`

No images. No external links. No expand/collapse behavior.

---

## 9. Contact Page (`/contact`)

**Page heading:** "Contact" — `text-3xl font-bold`

Three items, stacked vertically, centered on the page:

| Item | Behavior |
|---|---|
| Email | Renders as `<a href="mailto:hello@adrianaso.com">hello@adrianaso.com</a>` |
| LinkedIn | Renders as `<a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>` — **owner must replace `#` with actual LinkedIn URL before deploy** |
| Resume | Renders as `<a href="/resume.pdf" download>Download Resume</a>` — file must exist at `/public/resume.pdf` |

All three links use the same visual treatment: accent color, underline on hover.

No form. No server action. No email-sending logic.

---

## 10. Data File (`/data/projects.ts`)

All site content is sourced from this single file. No content is hardcoded directly in page components.

### 10.1 TypeScript Types

```ts
export type SystemProject = {
  id: string;
  title: string;
  summary: string;          // 1 sentence — used on home page cards
  description: string;      // 2–3 sentences — used on systems page
  whyBuilt: string;         // 1–2 sentences
  howItWorks: string[];     // ordered steps
  keyDecisions: string[];   // design choices
};

export type CaseStudy = {
  id: string;
  title: string;
  summary: string;          // 1 sentence — used on home page cards
  context: string;          // 1–2 sentences
  problem: string;          // 1–2 sentences
  whatIDid: string[];       // bullet points of concrete actions
  outcome: string;          // 1–2 sentences
};

export const systems: SystemProject[] = [
  // ⚠️ OWNER TO FILL IN — see Section 11
];

export const caseStudies: CaseStudy[] = [
  // ⚠️ OWNER TO FILL IN — see Section 11
];
```

Do not invent content. Leave the arrays empty and render a `"Content coming soon"` state if no entries exist.

---

## 11. Content Placeholders (Owner Action Required)

The following items require Adriana So to supply content before the site is complete:

| # | Item | Location | Status |
|---|---|---|---|
| 1 | Systems project entries (2–3) | `/data/projects.ts → systems[]` | ⚠️ Pending |
| 2 | Case study entries (1–2) | `/data/projects.ts → caseStudies[]` | ⚠️ Pending |
| 3 | LinkedIn URL (replace `#` placeholder) | `/app/contact/page.tsx` | ⚠️ Pending |
| 4 | Resume PDF | `/public/resume.pdf` | ⚠️ Pending |

The site must compile and render correctly with empty arrays. Empty states must be visible and non-broken, not blank white pages.

---

## 12. Styling Specification

### 12.1 Color Palette

| Role | Value | Tailwind class |
|---|---|---|
| Background | `#ffffff` | `bg-white` |
| Primary text | `#111827` | `text-gray-900` |
| Secondary text | `#6b7280` | `text-gray-500` |
| Muted text | `#9ca3af` | `text-gray-400` |
| Border | `#e5e7eb` | `border-gray-200` |
| Accent | `#2563eb` | `text-blue-600` / `bg-blue-600` |

No other colors. No gradients. No shadows heavier than `shadow-sm`.

### 12.2 Typography

| Element | Classes |
|---|---|
| Page heading | `text-3xl font-bold text-gray-900` |
| Section heading | `text-2xl font-semibold text-gray-900` |
| Card title | `text-lg font-semibold text-gray-900` |
| Body text | `text-base text-gray-700` |
| Muted / meta text | `text-sm text-gray-500` |

Font: `Inter` via `next/font/google`. Fallback: `sans-serif`.

### 12.3 Card Component

```
border border-gray-200 rounded-lg p-6 cursor-pointer
hover:border-blue-600 transition-colors duration-150
```

No box shadow on default state. `border-blue-600` on hover only. No scale transform. No other animation.

### 12.4 Button Component

Two variants, both using the same base size (`px-5 py-2.5 rounded-md text-sm font-medium`):

**Primary (solid):**
```
bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150
```

**Secondary (outline):**
```
border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-150
```

No disabled state required for MVP.

---

## 13. Responsiveness

All layout decisions use Tailwind breakpoints. Mobile is the default; desktop styles are applied at `md:` (768px+).

| Concern | Mobile (default) | Desktop (`md:`) |
|---|---|---|
| Card grid | `grid-cols-1` | `grid-cols-2` or `grid-cols-3` |
| Hero buttons | `flex-col w-full` | `flex-row w-auto` |
| Navbar links | Hidden, hamburger menu | Inline row |
| Section padding | `py-10` | `py-12` |

---

## 14. SEO (Required — not optional)

Each page must include a `<title>` and `<meta name="description">` using Next.js `generateMetadata` or the static `metadata` export.

| Page | Title | Description |
|---|---|---|
| Home | `Adriana So — AI Systems + Product Thinker` | `Portfolio of Adriana So: AI pipelines, agents, and product case studies.` |
| Systems | `Systems — Adriana So` | `AI systems and pipelines built by Adriana So.` |
| Case Studies | `Case Studies — Adriana So` | `Real-world product and UX case studies by Adriana So.` |
| Contact | `Contact — Adriana So` | `Get in touch with Adriana So.` |

---

## 15. Non-Goals

Do not build any of the following. If a requirement below appears to conflict with a feature request, the non-goal wins.

* Authentication of any kind
* Admin panel or CMS
* Blog or long-form writing section
* Interactive chat interface
* Database or server-side data fetching
* Third-party analytics scripts
* Animations beyond `transition-colors duration-150` on hover states
* Per-project detail pages (`/systems/[id]`, `/case-studies/[id]`)

---

## 16. Acceptance Criteria

The implementation is complete when every criterion below is true. Each criterion is binary — it either passes or fails.

| # | Criterion |
|---|---|
| 1 | All four routes (`/`, `/systems`, `/case-studies`, `/contact`) render without a runtime error |
| 2 | `next build` completes with zero errors and zero TypeScript errors |
| 3 | The navbar appears on all four pages with correct active-link state |
| 4 | Clicking "Adriana So" in the navbar navigates to `/` |
| 5 | Home page renders hero, systems preview, and case studies preview sections in order |
| 6 | Systems page renders all entries from `/data/projects.ts → systems[]` |
| 7 | Case Studies page renders all entries from `/data/projects.ts → caseStudies[]` |
| 8 | Contact page renders email, LinkedIn, and resume download links |
| 9 | Empty `systems[]` and `caseStudies[]` arrays produce a visible "coming soon" state, not a blank section |
| 10 | On a 375px viewport, no content overflows horizontally |
| 11 | On a 375px viewport, the hamburger menu opens and all nav links are reachable |
| 12 | On a 375px viewport, hero buttons are full-width and stacked vertically |
| 13 | Card hover state applies the specified border color change |
| 14 | All four pages have correct `<title>` tags as defined in Section 14 |
| 15 | `vercel build` (or `next build`) produces a deployable output with no warnings about missing environment variables |

---

## 17. Build Order

Work in this order. Do not begin a step until the previous step passes its acceptance criteria.

1. **Scaffold** — Initialize Next.js 14 with TypeScript and Tailwind. Confirm `next dev` runs.
2. **Data file** — Create `/data/projects.ts` with empty arrays and the correct types.
3. **Shared components** — Build `Navbar`, `Card`, and `Button` components in isolation.
4. **Root layout** — Wire `Navbar` and `Footer` into `/app/layout.tsx`. Confirm they appear on all pages.
5. **Home page** — Build all three sections sourcing from the data file.
6. **Systems page** — Build the project block list. Verify empty state.
7. **Case Studies page** — Build the case study block list. Verify empty state.
8. **Contact page** — Build the three-link layout.
9. **SEO** — Add `metadata` exports to all four pages.
10. **Responsiveness pass** — Verify all 15 acceptance criteria at 375px.
11. **Build verification** — Run `next build`. Fix all errors and type errors.

---

## 18. Constraints

* Do not use `any` in TypeScript.
* Do not use inline styles. All styling via Tailwind classes.
* Do not use `useEffect` or client-side data fetching. All content is static.
* Do not add `"use client"` to page components unless strictly required. The one permitted exception is `Navbar.tsx`, which requires `useState` for the hamburger toggle. All four page files (`page.tsx`) must remain server components.
* Do not add `console.log` statements.
* Every component file must have a single named export. No default exports.

---

## Final Instruction

Follow the build order. Do not skip steps. Do not add features. Do not make assumptions about content — leave placeholders where content is marked pending. The goal is a clean, deployable site that passes all 15 acceptance criteria.

---

## 20. Design Reference — Acid League Analysis

**Added in v1.4.** The following design analysis was drawn from reviewing the Acid League website (acidleague.com) and informs the updated styling specification in Section 12.

---

### What Acid League does well (and what we're adopting)

**1. Editorial headline treatment**
Acid League uses a large serif display font for hero headlines ("ACV Reimagined") paired with tight, clean sans-serif for body text and navigation. This creates a high-contrast typographic hierarchy that reads as premium and intentional. We adopt this by pairing `Playfair Display` (serif) for `h1` page headings with `Inter` (sans-serif) for everything else.

**2. Uppercase tracking labels**
A small uppercase label ("LIVING TONICS") appears above the hero headline, using `tracking-widest text-xs`. This device signals category and slows the reader down before the headline lands. We adopt this as a "role label" above the hero headline on the home page.

**3. Pill-shaped outline button**
The "Shop Now" CTA uses a `rounded-full` outline pill — black border, black text, no fill — that feels minimal and intentional rather than aggressive. We replace the blue solid/outline button system with this pill approach. Primary: `rounded-full border border-gray-900 text-gray-900`. Hover: subtle background fill (`bg-gray-900 text-white`).

**4. Neutral monochrome palette**
No blue. No accent color. The palette is strictly black, white, and warm gray. This communicates confidence — the content doesn't need color to compete for attention. We replace `blue-600` as the accent with `gray-900` (near-black) throughout.

**5. Generous whitespace**
Sections breathe. Vertical rhythm is slow and deliberate. We increase section padding from `py-10/py-12` to `py-16/py-20`.

**6. Clean horizontal rules as section dividers**
Acid League uses thin `1px` horizontal rules sparingly to divide content regions. Already implemented in project/case study blocks — we reinforce this pattern.

---

### What we're NOT adopting

- **Centered navbar brand name** — Acid League centers "Acid League" in the navbar. For a portfolio with fewer nav items, left-aligned name + right-aligned links reads better and is conventional on personal sites.
- **Split hero layout with photography** — The 50/50 image split works for a product. For text-first portfolio content, a full-width text hero with generous padding is cleaner.
- **Announcement bar** — Not applicable for a portfolio.
- **Dark mode / color scheme switching** — Out of scope per Section 15.

---

### Updated color palette (replaces Section 12.1)

| Role | Value | Tailwind class |
|---|---|---|
| Background | `#ffffff` | `bg-white` |
| Primary text | `#0f0f0f` | `text-gray-950` (or `text-[#0f0f0f]`) |
| Secondary text | `#6b7280` | `text-gray-500` |
| Muted text | `#9ca3af` | `text-gray-400` |
| Border | `#e5e5e5` | `border-neutral-200` |
| Accent / CTA | `#0f0f0f` | `text-gray-950` / `border-gray-950` |
| Label (uppercase) | `#6b7280` | `text-gray-500` |

No blue. No gradients. No color other than black, white, and gray.

---

### Updated typography (replaces Section 12.2)

| Element | Font | Classes |
|---|---|---|
| Hero `h1` | Playfair Display (serif) | `font-serif text-4xl md:text-6xl font-bold text-[#0f0f0f] leading-tight` |
| Page heading `h1` | Playfair Display (serif) | `font-serif text-3xl md:text-4xl font-bold text-[#0f0f0f]` |
| Section heading `h2` | Inter (sans) | `text-xs font-medium uppercase tracking-widest text-gray-500` |
| Card title | Inter (sans) | `text-base font-semibold text-[#0f0f0f]` |
| Body text | Inter (sans) | `text-base text-gray-700 leading-relaxed` |
| Label (above headline) | Inter (sans) | `text-xs uppercase tracking-widest text-gray-500` |
| Muted / meta | Inter (sans) | `text-sm text-gray-400` |

Load `Playfair Display` via `next/font/google` alongside `Inter`. Apply `font-serif` class via a CSS variable.

---

### Updated button spec (replaces Section 12.4)

Single style. No solid/outline distinction — both variants use the pill outline approach, differentiated by fill on hover only.

**Base classes (both variants):**
```
px-6 py-3 rounded-full border border-[#0f0f0f] text-sm font-medium
text-[#0f0f0f] hover:bg-[#0f0f0f] hover:text-white
transition-colors duration-150 text-center
```

The `variant` prop is kept for potential future differentiation but both render identically for now.

---

### Updated card spec (replaces Section 12.3)

Remove the colored border hover. Cards become more minimal — hover is a subtle background shift only.

```
border border-neutral-200 rounded-lg p-6 cursor-pointer
hover:bg-neutral-50 transition-colors duration-150
```

---

## 19. Changelog

| Version | Change |
|---|---|
| 1.0 | Initial spec |
| 1.1 | Rewrote to full implementation-ready spec |
| 1.2 | Fixed LinkedIn href placeholder (`#`); clarified `"use client"` permitted only on `Navbar.tsx`; resolved `py-12` conflict (Section 5.1 defers to Section 13); specified `<Link>` wrapping for card click behavior; added `/app/favicon.ico` to file structure; normalized `/data/projects.ts` path with leading slash throughout |
| 1.3 | Added `z-10` to navbar to prevent content overlap; fixed Section 6 intro still citing `py-12` directly; added `className="block"` to `<Link>` card wrappers to ensure full card is clickable; fixed Build Order step 10 acceptance criteria count (13 → 15); normalized `/data/projects.ts` leading slash in AC #6 and #7; resolved hero name font size ambiguity (`text-sm`) |
| 1.4 | Added Section 20: Acid League design analysis. Updated color palette (black/neutral, no blue), typography (Playfair Display for headings), button style (pill outline), card hover (bg shift not border), section padding increase. |
