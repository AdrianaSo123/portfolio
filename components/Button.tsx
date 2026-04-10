import Link from "next/link";

type ButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export function Button({ label, href, variant = "primary" }: ButtonProps) {
  // Both variants map to the same unified DTC style for now
  const styles = "inline-block px-8 py-3 rounded-full border border-ink text-sm font-medium text-ink hover:bg-ink hover:text-canvas transition-colors duration-200 text-center";
  
  return (
    <Link href={href} className={styles} data-testid={`button-${variant}`}>
      {label}
    </Link>
  );
}
