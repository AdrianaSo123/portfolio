# Sprint 2 — Home Page

**Goal:** Build the complete home page (`/`) with all three sections: Hero, Systems Preview, and Case Studies Preview. All content sources from `/data/projects.ts`. Empty states render correctly when arrays are empty.

**Prerequisite:** Sprint 1 Definition of Done must be fully met.

**Spec reference:** Sections 6, 10, 12, 13

---

## Tasks

### 2.1 Hero Section

Build the hero section in `/app/page.tsx`.

**Layout:** Full-width section, `py-10 md:py-12`

**Elements in order:**

1. **Name** — `<p>` — `text-sm text-gray-500` — content: `Adriana So`
2. **Headline** — `<h1>` — `text-3xl md:text-4xl font-bold text-gray-900` — two lines:
   - Line 1: `AI Systems + Product Thinker`
   - Line 2: `Building structured, real-world workflows with AI`
   - Use `<br />` or two `<span className="block">` elements to force each on its own line
3. **Subtext** — `<p>` — `text-base text-gray-500 mt-4` — content: `NJIT Senior · Wakefern UX Intern · AI pipelines, agents, structured systems`
4. **Buttons** — `<div>` wrapper — `flex flex-col w-full gap-3 mt-6 md:flex-row md:w-auto`:
   - `<Button label="View Systems" href="/systems" variant="primary" />`
   - `<Button label="View Case Studies" href="/case-studies" variant="secondary" />`

### 2.2 Systems Preview Section

Build the systems preview section in `/app/page.tsx`, below the hero.

**Heading:** `<h2>` — `text-2xl font-semibold text-gray-900` — content: `Systems`

**Grid:** `<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">`

**Content:** Map over `systems` array imported from `/data/projects.ts`.

For each entry render:
```tsx
<Card key={project.id} title={project.title} summary={project.summary} href="/systems" />
```

**Empty state:** If `systems.length === 0`, render instead:
```tsx
<p className="text-sm text-gray-400">Content coming soon.</p>
```

### 2.3 Case Studies Preview Section

Build the case studies preview section in `/app/page.tsx`, below the systems preview.

**Heading:** `<h2>` — `text-2xl font-semibold text-gray-900` — content: `Case Studies`

**Grid:** `<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">`

**Content:** Map over `caseStudies` array imported from `/data/projects.ts`.

For each entry render:
```tsx
<Card key={cs.id} title={cs.title} summary={cs.summary} href="/case-studies" />
```

**Empty state:** If `caseStudies.length === 0`, render instead:
```tsx
<p className="text-sm text-gray-400">Content coming soon.</p>
```

### 2.4 Page Container

Wrap all three sections in a single `<main>` with the global container classes:
```tsx
<main className="max-w-[1100px] mx-auto px-6">
```

Sections are separated by a consistent `py-10 md:py-12` on each section wrapper.

---

## Definition of Done

All of the following must be true before Sprint 3 begins:

- [ ] Home page renders at `/` without runtime errors
- [ ] Hero section is visible: name, headline (both lines), subtext, and both buttons
- [ ] "View Systems" button navigates to `/systems`
- [ ] "View Case Studies" button navigates to `/case-studies`
- [ ] With empty `systems[]`, systems preview shows `"Content coming soon."` — not a blank section
- [ ] With empty `caseStudies[]`, case studies preview shows `"Content coming soon."` — not a blank section
- [ ] With populated arrays, cards render correctly with title and summary
- [ ] On 375px viewport: buttons are full-width and stacked vertically
- [ ] On 375px viewport: no horizontal overflow
- [ ] `next build` still passes with zero TypeScript errors
- [ ] No hardcoded content in the page component — all dynamic content comes from `/data/projects.ts`
