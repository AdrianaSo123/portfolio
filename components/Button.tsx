import Link from "next/link";

type ButtonProps = {
  label: string;
  href: string;
  variant: "primary" | "secondary";
};

export function Button({ label, href, variant }: ButtonProps) {
  const base = "px-6 py-2.5 rounded-full text-sm tracking-wide transition-colors duration-150 text-center";
  const styles =
    variant === "secondary"
      ? `${base} border border-accent text-accent hover:bg-accent hover:text-cream`
      : `${base} border border-ink text-ink hover:bg-ink hover:text-cream`;
  return (
    <Link href={href} className={styles}>
      {label}
    </Link>
  );
}
