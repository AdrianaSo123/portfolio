import { systems } from "@/data/projects";

export const metadata = {
  title: "Systems — Adriana So",
  description: "AI systems and pipelines built by Adriana So.",
};

export default function SystemsPage() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 py-20 md:py-32">
      <p className="text-xs uppercase tracking-widest text-muted mb-6">Systems</p>
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight max-w-xl">
        AI pipelines, agents,<br />and structured workflows.
      </h1>

      {systems.length === 0 ? (
        <p className="text-sm text-muted mt-16">Content coming soon.</p>
      ) : (
        <div className="mt-16">
          {systems.map((project, index) => (
            <div key={project.id}>
              {index > 0 && <hr className="border-border" />}
              <div className="py-10">
                <h2 className="font-serif text-2xl font-bold text-ink">{project.title}</h2>
                <p className="text-base text-body mt-4 leading-relaxed max-w-2xl">{project.description}</p>

                <p className="text-xs uppercase tracking-widest text-muted mt-8">Why I built this</p>
                <p className="text-base text-ink mt-2 leading-relaxed max-w-2xl">{project.whyBuilt}</p>

                <p className="text-xs uppercase tracking-widest text-muted mt-8">How it works</p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  {project.howItWorks.map((step, i) => (
                    <li key={i} className="text-base text-body">
                      {step}
                    </li>
                  ))}
                </ol>

                <p className="text-xs uppercase tracking-widest text-muted mt-8">Key decisions</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {project.keyDecisions.map((decision, i) => (
                    <li key={i} className="text-base text-body">
                      {decision}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
