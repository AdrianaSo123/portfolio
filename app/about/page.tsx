import { SectionLabel } from "@/components/SectionLabel";

export const metadata = {
  title: "About — Adriana So",
  description: "Learn more about Adriana So.",
};

export default function AboutPage() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 py-20 md:py-32">
      <SectionLabel className="mb-6">About</SectionLabel>
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight max-w-xl">
        Connecting systems<br />with human intent.
      </h1>

      <div className="mt-16 space-y-8">
        <p className="text-base text-ink mt-2 leading-relaxed max-w-2xl">
          I am Adriana So, a software engineer and UX designer focused on bridging the gap between deep technical systems—like AI automation pipelines—and seamless user experiences.
        </p>

        <p className="text-base text-ink mt-2 leading-relaxed max-w-2xl">
          I believe that technology is only as powerful as it is intuitive. Whether I am architecting headless eCommerce environments optimized for performance, or constructing generative AI engines that deploy full applications, my priority is shipping intentional, high-end digital products.
        </p>

        <p className="text-base text-ink mt-2 leading-relaxed max-w-2xl">
          With a background spanning complex enterprise UX problem-solving and rigorous technical execution, I build infrastructure designed to scale with human intent.
        </p>
      </div>

      <div className="mt-16 pt-10 border-t border-border flex gap-6">
        <a 
          href="/systems"
          className="text-sm uppercase tracking-widest text-ink hover:text-muted transition-colors font-medium border-b border-ink/20 pb-1"
        >
          View My Systems ↗
        </a>
        <a 
          href="/contact"
          className="text-sm uppercase tracking-widest text-accent hover:text-ink transition-colors font-medium border-b border-accent/20 pb-1"
        >
          Let&apos;s Connect ↗
        </a>
      </div>
    </main>
  );
}
