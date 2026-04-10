import { Button } from "./Button";

export function Hero() {
  return (
    <section className="flex flex-col md:flex-row min-h-[88vh]">
      {/* Left panel — white, text bottom-left */}
      <div className="w-full md:w-1/2 bg-canvas flex flex-col justify-end px-10 md:px-16 pt-24 pb-16">
        <p className="text-xs font-medium uppercase tracking-widest text-muted mb-5">
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
  );
}
