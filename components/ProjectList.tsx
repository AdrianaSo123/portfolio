import { Card } from "./Card";

interface ProjectItem {
  id: string;
  title: string;
  summary: string;
}

interface ProjectListProps {
  label: string;
  projects: ProjectItem[];
  href: string;
}

export function ProjectList({ label, projects, href }: ProjectListProps) {
  return (
    <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-16 md:py-20">
      <p className="text-xs font-medium uppercase tracking-widest text-muted mb-2">
        {label}
      </p>
      <div className="mt-6">
        {projects.length === 0 ? (
          <p className="text-sm text-muted py-5 border-t border-border">
            Content coming soon.
          </p>
        ) : (
          projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              summary={project.summary}
              href={href}
            />
          ))
        )}
      </div>
    </div>
  );
}
