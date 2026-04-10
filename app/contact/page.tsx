import { ContactForm } from "@/components/ContactForm";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata = {
  title: "Contact — Adriana So",
  description: "Get in touch with Adriana So.",
};

export default function ContactPage() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 py-20 md:py-32">
      <SectionLabel className="mb-6">Contact</SectionLabel>
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
        Get in touch.
      </h1>

      <ContactForm />

      <div className="flex gap-8 mt-24 pt-8 border-t border-border">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm uppercase tracking-widest text-ink hover:text-accent transition-colors duration-150 font-medium"
        >
          LinkedIn ↗
        </a>

        <a
          href="/resume.pdf"
          download
          className="text-sm uppercase tracking-widest text-ink hover:text-accent transition-colors duration-150 font-medium"
        >
          Download Resume ↓
        </a>
      </div>
    </main>
  );
}
