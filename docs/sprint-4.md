# Sprint 4 — Case Studies Page

**Goal:** Build the complete case studies page (`/case-studies`). Renders all entries from `/data/projects.ts → caseStudies[]` as full-width case study blocks. Empty state renders correctly.

**Prerequisite:** Sprint 3 Definition of Done must be fully met.

**Spec reference:** Sections 8, 10, 12, 13

---

## Tasks

### 4.1 Page Structure

Create content in `/app/case-studies/page.tsx`.

**Page container:**
```tsx
<main className="max-w-[1100px] mx-auto px-6 py-10 md:py-12">
```

**Page heading:** `<h1 className="text-3xl font-bold text-gray-900">Case Studies</h1>`

**Page subheading:** `<p className="text-base text-gray-500 mt-2">Real-world product and systems work.</p>`

### 4.2 Case Study Block List

Below the heading, render each entry in `caseStudies[]` as a case study block.

Separate consecutive blocks with an `<hr className="border-gray-200" />`.

### 4.3 Case Study Block Structure

For each `CaseStudy` entry, render the following in order:

1. **Title**
   ```tsx
   <h2 className="text-2xl font-semibold text-gray-900">{cs.title}</h2>
   ```

2. **Context** — label + content
   ```tsx
   <p className="text-sm font-semibold text-gray-900 mt-6">Context</p>
   <p className="text-base text-gray-700 mt-1">{cs.context}</p>
   ```

3. **Problem** — label + content
   ```tsx
   <p className="text-sm font-semibold text-gray-900 mt-6">Problem</p>
   <p className="text-base text-gray-700 mt-1">{cs.problem}</p>
   ```

4. **What I did** — label + unordered list
   ```tsx
   <p className="text-sm font-semibold text-gray-900 mt-6">What I did</p>
   <ul className="list-disc list-inside mt-2 space-y-1">
     {cs.whatIDid.map((item, i) => (
       <li key={i} className="text-base text-gray-700">{item}</li>
     ))}
   </ul>
   ```

5. **Outcome** — label + content
   ```tsx
   <p className="text-sm font-semibold text-gray-900 mt-6">Outcome</p>
   <p className="text-base text-gray-700 mt-1">{cs.outcome}</p>
   ```

Each block gets `py-10` top and bottom padding.

### 4.4 Empty State

If `caseStudies.length === 0`, render instead of the block list:
```tsx
<p className="text-sm text-gray-400 mt-8">Content coming soon.</p>
```

No blank page. No missing section.

---

## Definition of Done

All of the following must be true before Sprint 5 begins:

- [ ] Case Studies page renders at `/case-studies` without runtime errors
- [ ] Page heading (`Case Studies`) and subheading are visible
- [ ] With empty `caseStudies[]`, page shows `"Content coming soon."` — not a blank section
- [ ] With populated `caseStudies[]`, all five fields render for each entry in the correct order
- [ ] `<hr>` separator appears between case study blocks (not before the first or after the last)
- [ ] On 375px viewport: no horizontal overflow
- [ ] `next build` still passes with zero TypeScript errors
- [ ] No images, no external links, no expand/collapse behavior
- [ ] No content hardcoded in the page component — all data from `/data/projects.ts`
