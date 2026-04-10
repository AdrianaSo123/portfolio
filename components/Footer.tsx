export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border mt-auto">
      <div className="max-w-[1400px] mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs uppercase tracking-widest text-ink font-bold">
          Adriana So — <span className="text-muted font-normal">Software Engineer bridging AI and UX.</span>
        </p>
        <p className="text-xs text-muted">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
