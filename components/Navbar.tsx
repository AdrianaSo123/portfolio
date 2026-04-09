"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Systems", href: "/systems" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 w-full bg-canvas border-b border-border">
      <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between relative">
        {/* Desktop nav — left */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm text-body hover:text-ink transition-colors duration-150 ${
                pathname === link.href ? "text-ink underline underline-offset-4" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Brand — centered */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-xl font-bold tracking-wide text-ink"
        >
          Adriana So
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="block w-5 h-px bg-ink" />
          <span className="block w-5 h-px bg-ink" />
          <span className="block w-5 h-px bg-ink" />
        </button>

        {/* Right spacer on desktop to balance the nav */}
        <div className="hidden md:flex w-[180px]" />
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden w-full bg-cream border-t border-border">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block w-full px-6 py-4 text-sm hover:bg-mist transition-colors duration-150 ${
                pathname === link.href
                  ? "text-ink underline underline-offset-4"
                  : "text-body"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
