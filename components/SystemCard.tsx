import { SystemProject } from "@/data/projects";

type SystemCardProps = {
  project: SystemProject;
};

export function SystemCard({ project }: SystemCardProps) {
  return (
    <div className="group flex flex-col h-full p-8 md:p-12 border border-border bg-canvas/50 hover:border-accent hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 ease-out">
      <div className="flex-1">
        <h2 className="font-serif text-3xl font-bold text-ink">{project.title}</h2>
        <p className="text-base text-body mt-6 leading-relaxed max-w-lg">
          {project.description}
        </p>
      </div>

      {project.links && project.links.length > 0 && (
        <div className="flex gap-6 mt-16 pt-8 border-t border-border/50">
          {project.links.map((link) => (
            <a 
              key={link.url} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest text-ink hover:text-muted transition-colors font-semibold border-b border-ink/20 pb-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
