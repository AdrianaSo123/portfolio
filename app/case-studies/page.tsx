import { caseStudies } from "@/data/projects";

export const metadata = {
  title: "Case Studies — Adriana So",
  description: "Real-world product and UX case studies by Adriana So.",
};

export default function CaseStudiesPage() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 py-20 md:py-32">
      <p className="text-xs uppercase tracking-widest text-muted mb-6">Case Studies</p>
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight max-w-xl">
        Real-world product<br />and systems work.
      </h1>

      {caseStudies.length === 0 ? (
        <p className="text-sm text-muted mt-16">Content coming soon.</p>
      ) : (
        <div className="mt-16">
          {caseStudies.map((cs, index) => (
            <div key={cs.id}>
              {index > 0 && <hr className="border-border" />}
              <div className="py-10">
                <h2 className="font-serif text-2xl font-bold text-ink">{cs.title}</h2>

                <p className="text-xs uppercase tracking-widest text-muted mt-8">Context</p>
                <p className="text-base text-ink mt-2 leading-relaxed max-w-2xl">{cs.context}</p>

                <p className="text-xs uppercase tracking-widest text-muted mt-8">Problem</p>
                <p className="text-base text-ink mt-2 leading-relaxed max-w-2xl">{cs.problem}</p>

                <p className="text-xs uppercase tracking-widest text-muted mt-8">What I did</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {cs.whatIDid.map((item, i) => (
                    <li key={i} className="text-base text-ink">
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-xs uppercase tracking-widest text-muted mt-8">Outcome</p>
                <p className="text-base text-ink mt-2 leading-relaxed max-w-2xl">{cs.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
