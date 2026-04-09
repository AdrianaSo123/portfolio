export const metadata = {
  title: "Contact — Adriana So",
  description: "Get in touch with Adriana So.",
};

export default function ContactPage() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 py-20 md:py-32">
      <p className="text-xs uppercase tracking-widest text-muted mb-6">Contact</p>
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
        Get in touch.
      </h1>

      <div className="flex flex-col gap-4 mt-12 items-start">
        <a
          href="mailto:hello@adrianaso.com"
          className="text-sm uppercase tracking-widest text-ink hover:text-muted transition-colors duration-150"
        >
          hello@adrianaso.com
        </a>

        {/* ⚠️ OWNER: replace href="#" with actual LinkedIn URL before deploy */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm uppercase tracking-widest text-accent hover:text-ink transition-colors duration-150"
        >
          LinkedIn
        </a>

        {/* ⚠️ OWNER: add /public/resume.pdf before deploy */}
        <a
          href="/resume.pdf"
          download
          className="text-sm uppercase tracking-widest text-ink hover:text-muted transition-colors duration-150"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
}
