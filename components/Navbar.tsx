"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Systems", href: "/systems" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-10 w-full bg-canvas border-b border-border">
      <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* Brand — Left */}
        <Link
          href="/"
          className="font-serif text-xl font-bold tracking-wide text-ink"
        >
          Adriana So
        </Link>

        {/* Desktop Nav — Right */}
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

        {/* Mobile Hamburger — Right */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-3 -m-3"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="block w-5 h-px bg-ink" />
          <span className="block w-5 h-px bg-ink" />
          <span className="block w-5 h-px bg-ink" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <MobileMenu links={navLinks} pathname={pathname} onClose={closeMenu} />
      )}
    </header>
  );
}
