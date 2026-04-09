# Sprint 1 — Foundation

**Goal:** Scaffold the project, define the data contract, build all shared components, and wire the root layout. At the end of this sprint, every page renders with a working navbar and footer. No page content yet.

**Spec reference:** Sections 2, 3, 4, 5, 10, 12, 18

---

## Tasks

### 1.1 Scaffold

- Initialize Next.js 14+ with TypeScript and Tailwind CSS v3 using `create-next-app`
- Confirm `next dev` runs without errors on `localhost:3000`
- Delete all boilerplate content from `/app/page.tsx` (leave file in place, render an empty `<main>`)
- Verify no TypeScript errors (`next build` must pass at baseline)

### 1.2 Data File

Create `/data/projects.ts` with:

- `SystemProject` type (fields: `id`, `title`, `summary`, `description`, `whyBuilt`, `howItWorks`, `keyDecisions`)
- `CaseStudy` type (fields: `id`, `title`, `summary`, `context`, `problem`, `whatIDid`, `outcome`)
- `systems` exported as `SystemProject[]` — empty array, with `// ⚠️ OWNER TO FILL IN` comment
- `caseStudies` exported as `CaseStudy[]` — empty array, with `// ⚠️ OWNER TO FILL IN` comment

No content. No default exports. No `any`.

### 1.3 Button Component

Create `/components/Button.tsx` with a named export `Button`.

Accepts props:
- `label: string`
- `href: string`
- `variant: "primary" | "secondary"`

Renders a Next.js `<Link>` styled as a button. Do not use `<button>` or `onClick`.

**Primary variant classes:**
```
px-5 py-2.5 rounded-md text-sm font-medium
bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150
```

**Secondary variant classes:**
```
px-5 py-2.5 rounded-md text-sm font-medium
border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-150
```

### 1.4 Card Component

Create `/components/Card.tsx` with a named export `Card`.

Accepts props:
- `title: string`
- `summary: string`
- `href: string`

Renders a Next.js `<Link href={href} className="block">` wrapping a styled card `<div>`.

**Card classes:**
```
border border-gray-200 rounded-lg p-6 cursor-pointer
hover:border-blue-600 transition-colors duration-150
```

Inside the card:
- Title: `text-lg font-semibold text-gray-900`
- Summary: `text-sm text-gray-500 mt-1`

No shadow on default state. No scale transform. No other animation.

### 1.5 Navbar Component

Create `/components/Navbar.tsx` with a named export `Navbar`.

Add `"use client"` at the top — this is the **only** component permitted to use it. Requires `useState` for the hamburger toggle.

**Structure:**
- Full-width, sticky, white background, `z-10`, `h-16` (64px), `border-b border-gray-200`
- Inner container: `max-w-[1100px] mx-auto px-6 flex items-center justify-between h-full`
- Left: `<Link href="/">` with text "Adriana So" — `font-semibold text-gray-900`
- Right (desktop, `md:flex hidden`): three `<Link>` elements — Systems, Case Studies, Contact
- Active link detection: use `usePathname()` from `next/navigation` — active link gets `underline`
- Right (mobile, `md:hidden`): hamburger button (three horizontal lines icon, no library) that toggles a full-width dropdown below the navbar with the three links stacked vertically

**Nav link routes:**
- Systems → `/systems`
- Case Studies → `/case-studies`
- Contact → `/contact`

### 1.6 Root Layout

Update `/app/layout.tsx`:

- Import `Inter` from `next/font/google`, apply to `<body>`
- Render `<Navbar />` above `{children}`
- Render a `<footer>` below `{children}` with: `© 2026 Adriana So`, `text-sm text-gray-400 text-center py-6`
- Set `<body>` background to white (`bg-white`)
- Set `<html lang="en">`

### 1.7 Favicon

Place a `favicon.ico` file at `/app/favicon.ico`. Use any generic placeholder. Owner to replace before deploy.

---

## Definition of Done

All of the following must be true before Sprint 2 begins:

- [ ] `next dev` runs without errors
- [ ] `next build` completes with zero TypeScript errors
- [ ] Navigating to `/`, `/systems`, `/case-studies`, `/contact` each renders a page (even if empty) with the navbar and footer
- [ ] Navbar "Adriana So" link navigates to `/`
- [ ] Navbar active-link underline matches the current route
- [ ] Hamburger menu opens and closes on mobile (`≤ 767px`), showing all three nav links
- [ ] `/data/projects.ts` exports `systems` and `caseStudies` with correct TypeScript types
- [ ] `Button`, `Card`, and `Navbar` components each have a single named export, no default exports
- [ ] No `any` used anywhere
- [ ] No inline styles anywhere
