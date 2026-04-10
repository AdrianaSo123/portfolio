import { SystemCard } from "@/components/SystemCard";
import { SectionLabel } from "@/components/SectionLabel";
import { getSystems } from "@/lib/api";
import { Suspense } from "react";

export const metadata = {
  title: "Systems — Adriana So",
  description: "AI systems and pipelines built by Adriana So.",
};

// Extracted async component to fetch data.
async function SystemsList() {
  const systems = await getSystems();

  if (systems.length === 0) {
    return <p className="text-sm text-muted mt-16">Content coming soon.</p>;
  }

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
      {systems.map((project) => (
        <SystemCard key={project.id} project={project} />
      ))}
    </div>
  );
}

// Fallback skeleton
function SystemsSkeleton() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
      {[1, 2].map((i) => (
        <div key={i} className="h-80 bg-canvas/30 border border-border/50 animate-pulse" />
      ))}
    </div>
  );
}

export default function SystemsPage() {
  return (
    <main className="max-w-[1400px] mx-auto px-6 py-20 md:py-32">
      <SectionLabel className="mb-6">Systems</SectionLabel>
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight max-w-xl">
        AI pipelines, agents,<br />and structured workflows.
      </h1>

      <Suspense fallback={<SystemsSkeleton />}>
        <SystemsList />
      </Suspense>
    </main>
  );
}
