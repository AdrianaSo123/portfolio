# Sprint 3 — Systems Page

**Goal:** Build the complete systems page (`/systems`). Renders all entries from `/data/projects.ts → systems[]` as full-width project blocks. Empty state renders correctly.

**Prerequisite:** Sprint 2 Definition of Done must be fully met.

**Spec reference:** Sections 7, 10, 12, 13

---

## Tasks

### 3.1 Page Structure

Create content in `/app/systems/page.tsx`.

**Page container:**
```tsx
<main className="max-w-[1100px] mx-auto px-6 py-10 md:py-12">
```

**Page heading:** `<h1 className="text-3xl font-bold text-gray-900">Systems</h1>`

**Page subheading:** `<p className="text-base text-gray-500 mt-2">AI pipelines, agents, and structured workflows.</p>`

### 3.2 Project Block List

Below the heading, render each entry in `systems[]` as a project block.

Separate consecutive blocks with an `<hr className="border-gray-200" />`.

**Do not** wrap each block in an extra `<section>` with padding that compounds — rely on spacing utilities within each block.

### 3.3 Project Block Structure

For each `SystemProject` entry, render the following in order:

1. **Title**
   ```tsx
   <h2 className="text-2xl font-semibold text-gray-900">{project.title}</h2>
   ```

2. **Description**
   ```tsx
   <p className="text-base text-gray-700 mt-3">{project.description}</p>
   ```

3. **Why I built this** — label + content
   ```tsx
   <p className="text-sm font-semibold text-gray-900 mt-6">Why I built this</p>
   <p className="text-base text-gray-600 mt-1">{project.whyBuilt}</p>
   ```

4. **How it works** — label + ordered list
   ```tsx
   <p className="text-sm font-semibold text-gray-900 mt-6">How it works</p>
   <ol className="list-decimal list-inside mt-2 space-y-1">
     {project.howItWorks.map((step, i) => (
       <li key={i} className="text-base text-gray-700">{step}</li>
     ))}
   </ol>
   ```

5. **Key decisions** — label + unordered list
   ```tsx
   <p className="text-sm font-semibold text-gray-900 mt-6">Key decisions</p>
   <ul className="list-disc list-inside mt-2 space-y-1">
     {project.keyDecisions.map((decision, i) => (
       <li key={i} className="text-base text-gray-700">{decision}</li>
     ))}
   </ul>
   ```

Each block gets `py-10` top and bottom padding.

### 3.4 Empty State

If `systems.length === 0`, render instead of the block list:
```tsx
<p className="text-sm text-gray-400 mt-8">Content coming soon.</p>
```

No blank page. No missing section.

---

## Definition of Done

All of the following must be true before Sprint 4 begins:

- [ ] Systems page renders at `/systems` without runtime errors
- [ ] Page heading (`Systems`) and subheading are visible
- [ ] With empty `systems[]`, page shows `"Content coming soon."` — not a blank section
- [ ] With populated `systems[]`, all five fields render for each entry in the correct order
- [ ] `<hr>` separator appears between project blocks (not before the first or after the last)
- [ ] On 375px viewport: no horizontal overflow
- [ ] `next build` still passes with zero TypeScript errors
- [ ] No images, no external links, no expand/collapse behavior
- [ ] No content hardcoded in the page component — all data from `/data/projects.ts`
