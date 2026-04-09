# Sprint 5 — Contact, SEO, Responsiveness & Build

**Goal:** Complete the contact page, add SEO metadata to all four pages, run a full responsiveness pass, and produce a clean `next build` output deployable to Vercel.

**Prerequisite:** Sprint 4 Definition of Done must be fully met.

**Spec reference:** Sections 9, 13, 14, 16, 17

---

## Tasks

### 5.1 Contact Page

Create content in `/app/contact/page.tsx`.

**Page container:**
```tsx
<main className="max-w-[1100px] mx-auto px-6 py-10 md:py-12">
```

**Page heading:** `<h1 className="text-3xl font-bold text-gray-900">Contact</h1>`

**Links section:** `<div className="flex flex-col gap-4 mt-8 items-center text-center">`

Render three links in order:

1. **Email**
   ```tsx
   <a
     href="mailto:hello@adrianaso.com"
     className="text-blue-600 underline-offset-2 hover:underline text-base"
   >
     hello@adrianaso.com
   </a>
   ```

2. **LinkedIn**
   ```tsx
   <a
     href="#"
     target="_blank"
     rel="noopener noreferrer"
     className="text-blue-600 underline-offset-2 hover:underline text-base"
   >
     LinkedIn
   </a>
   ```
   > ⚠️ Owner must replace `href="#"` with actual LinkedIn URL before deploy.

3. **Resume**
   ```tsx
   <a
     href="/resume.pdf"
     download
     className="text-blue-600 underline-offset-2 hover:underline text-base"
   >
     Download Resume
   </a>
   ```
   > ⚠️ Requires `/public/resume.pdf` to exist. Owner to add file before deploy.

No form. No server action. No email-sending logic.

### 5.2 SEO — Metadata Export

Add a static `metadata` export to each of the four page files. Do not use `generateMetadata` (no dynamic values needed).

**`/app/page.tsx`**
```ts
export const metadata = {
  title: 'Adriana So — AI Systems + Product Thinker',
  description: 'Portfolio of Adriana So: AI pipelines, agents, and product case studies.',
};
```

**`/app/systems/page.tsx`**
```ts
export const metadata = {
  title: 'Systems — Adriana So',
  description: 'AI systems and pipelines built by Adriana So.',
};
```

**`/app/case-studies/page.tsx`**
```ts
export const metadata = {
  title: 'Case Studies — Adriana So',
  description: 'Real-world product and UX case studies by Adriana So.',
};
```

**`/app/contact/page.tsx`**
```ts
export const metadata = {
  title: 'Contact — Adriana So',
  description: 'Get in touch with Adriana So.',
};
```

### 5.3 Responsiveness Pass

Verify all of the following at a **375px viewport width** (Chrome DevTools or equivalent):

- [ ] No content overflows horizontally on any of the four pages
- [ ] Hamburger menu opens and closes; all three nav links are reachable
- [ ] Hero buttons on `/` are full-width and stacked vertically
- [ ] Card grids render as single column
- [ ] Project blocks on `/systems` and `/case-studies` are readable with no clipped text
- [ ] Contact page links are readable and not overflowing

Fix any overflow or clipping issues before proceeding to build verification.

### 5.4 Build Verification

Run `next build` and resolve **all** errors and warnings before marking this sprint done.

Checklist:
- [ ] Zero TypeScript errors
- [ ] Zero ESLint errors (if ESLint is configured)
- [ ] No missing `key` prop warnings
- [ ] No `console.log` statements present
- [ ] No `any` types present
- [ ] No inline styles present
- [ ] No default exports in component files
- [ ] Build output shows no warnings about missing environment variables

---

## Definition of Done — Full Site Complete

All 15 acceptance criteria from the spec (Section 16) must pass:

| # | Criterion |
|---|---|
| 1 | All four routes render without a runtime error |
| 2 | `next build` completes with zero errors and zero TypeScript errors |
| 3 | Navbar appears on all four pages with correct active-link state |
| 4 | Clicking "Adriana So" in the navbar navigates to `/` |
| 5 | Home page renders hero, systems preview, and case studies preview in order |
| 6 | Systems page renders all entries from `/data/projects.ts → systems[]` |
| 7 | Case Studies page renders all entries from `/data/projects.ts → caseStudies[]` |
| 8 | Contact page renders email, LinkedIn, and resume download links |
| 9 | Empty arrays produce a visible "Content coming soon." state, not blank sections |
| 10 | On 375px viewport: no horizontal overflow |
| 11 | On 375px viewport: hamburger menu opens and all nav links are reachable |
| 12 | On 375px viewport: hero buttons are full-width and stacked vertically |
| 13 | Card hover state applies `border-blue-600` |
| 14 | All four pages have correct `<title>` tags |
| 15 | `next build` produces deployable output with no missing environment variable warnings |

---

## Owner Actions Before Deploy

The following items are blocked on Adriana So supplying content — they are not agent tasks:

| # | Action | Where |
|---|---|---|
| 1 | Add systems project entries | `/data/projects.ts → systems[]` |
| 2 | Add case study entries | `/data/projects.ts → caseStudies[]` |
| 3 | Replace `href="#"` with LinkedIn URL | `/app/contact/page.tsx` |
| 4 | Add resume file | `/public/resume.pdf` |
| 5 | Add real favicon | `/app/favicon.ico` |
