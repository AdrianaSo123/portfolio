import Link from "next/link";

type CardProps = {
  title: string;
  summary: string;
  href: string;
};

export function Card({ title, summary, href }: CardProps) {
  return (
    <Link href={href} className="block group py-5 border-b border-border cursor-pointer">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm uppercase tracking-widest text-ink group-hover:opacity-60 transition-opacity duration-150">
          {title}
        </p>
        <span className="text-sm text-muted group-hover:translate-x-1 transition-transform duration-150 shrink-0">
          →
        </span>
      </div>
      <p className="text-sm text-body mt-1 leading-relaxed max-w-sm">{summary}</p>
    </Link>
  );
}
