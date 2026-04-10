"use client";

import Link from "next/link";

interface MobileMenuProps {
  links: { label: string; href: string }[];
  pathname: string;
  onClose: () => void;
}

export function MobileMenu({ links, pathname, onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden w-full bg-cream border-t border-border">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
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
  );
}
