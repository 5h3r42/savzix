"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useCart } from "@/context/CartContext";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { totals } = useCart();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em]">
          Savzix
        </Link>
        <nav className="flex items-center gap-5 text-sm text-foreground/70">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition hover:text-foreground ${
                  isActive ? "text-foreground font-medium" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/cart"
          className="relative inline-flex items-center justify-center rounded-full border border-foreground/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-foreground transition hover:border-foreground/30 hover:bg-foreground/[0.04]"
        >
          Cart
          {totals.count > 0 && (
            <span className="ml-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-foreground text-background text-[11px] font-semibold">
              {totals.count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
