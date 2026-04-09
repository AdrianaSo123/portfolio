import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { systems, caseStudies } from "@/data/projects";

export const metadata = {
  title: "Adriana So — AI Systems + Product Thinker",
  description: "Portfolio of Adriana So: AI pipelines, agents, and product case studies.",
};

export default function Home() {
  return (
    <>
      {/* Hero — full-width 50/50 split, no container constraint */}
      <section className="flex flex-col md:flex-row min-h-[88vh]">
        {/* Left panel — white, text bottom-left */}
        <div className="w-full md:w-1/2 bg-canvas flex flex-col justify-end px-10 md:px-16 pt-24 pb-16">
          <p className="text-xs uppercase tracking-widest text-muted mb-5">
            AI Systems · Product Thinking
          </p>
          <h1 className="font-serif text-5xl md:text-[5.5rem] font-bold text-ink leading-[1.05]">
            Building<br />the systems<br />that matter.
          </h1>
          <p className="text-base text-body mt-7 max-w-sm leading-relaxed">
            NJIT Senior · Wakefern UX Intern · AI pipelines, agents, and structured real-world workflows.
          </p>
          <div className="flex flex-col gap-3 mt-9 items-start md:flex-row">
            <Button label="View Systems" href="/systems" variant="primary" />
            <Button label="View Case Studies" href="/case-studies" variant="secondary" />
          </div>
        </div>

        {/* Right panel — Acid League dusty blue-gray */}
        <div className="hidden md:flex w-1/2 bg-panel items-center justify-center relative overflow-hidden">
          <p
            className="font-serif text-[12rem] font-bold text-panel/70 leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            AS
          </p>
        </div>
      </section>

      {/* Systems Preview — soap-brand warm cream bg */}
      <section className="bg-cream border-t border-border">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <p className="text-xs uppercase tracking-widest text-muted mb-2">Systems</p>
          <div className="mt-6">
            {systems.length === 0 ? (
              <p className="text-sm text-muted py-5 border-t border-border">Content coming soon.</p>
            ) : (
              systems.map((project) => (
                <Card key={project.id} title={project.title} summary={project.summary} href="/systems" />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Preview — Diafano mist blue bg */}
      <section className="bg-mist border-t border-border">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <p className="text-xs uppercase tracking-widest text-muted mb-2">Case Studies</p>
          <div className="mt-6">
            {caseStudies.length === 0 ? (
              <p className="text-sm text-muted py-5 border-t border-border">Content coming soon.</p>
            ) : (
              caseStudies.map((cs) => (
                <Card key={cs.id} title={cs.title} summary={cs.summary} href="/case-studies" />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
