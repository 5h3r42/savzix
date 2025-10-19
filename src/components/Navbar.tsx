"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useCart } from "@/context/CartContext";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { totals } = useCart();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-foreground/10 bg-background/80 sticky top-0 z-40 border-b backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-sm font-semibold tracking-[0.3em] uppercase"
        >
          Savzix
        </Link>
        <button
          type="button"
          className="border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-foreground/[0.04] focus-visible:outline-foreground/40 inline-flex items-center justify-center rounded-full border p-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 lg:hidden"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={handleToggle}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d={isMenuOpen ? "M6 6l12 12M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"}
              className="motion-safe:transition-all motion-safe:duration-200"
            />
          </svg>
        </button>
        <div
          className="text-foreground/70 hidden items-center gap-5 text-sm lg:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-foreground focus-visible:outline-foreground/40 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
                  isActive ? "text-foreground font-medium" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <Link
          href="/cart"
          aria-label={
            totals.count > 0
              ? `Cart, ${totals.count} item${totals.count === 1 ? "" : "s"}`
              : "Cart, empty"
          }
          className="border-foreground/15 text-foreground hover:border-foreground/30 hover:bg-foreground/[0.04] focus-visible:outline-foreground/40 relative inline-flex items-center justify-center rounded-full border px-4 py-2 text-xs tracking-[0.25em] uppercase transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Cart
          {totals.count > 0 && (
            <span className="bg-foreground text-background ml-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full text-[11px] font-semibold">
              {totals.count}
            </span>
          )}
          <span className="sr-only" aria-live="polite">
            {totals.count > 0
              ? `${totals.count} item${totals.count === 1 ? "" : "s"} in cart`
              : "Cart empty"}
          </span>
        </Link>
      </div>
      <nav
        id="primary-navigation"
        aria-label="Main navigation"
        className={`border-foreground/10 bg-background/95 border-t px-6 py-4 shadow-sm motion-safe:transition-all motion-safe:duration-200 lg:hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <ul className="text-foreground/80 flex flex-col gap-3 text-sm">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`hover:border-foreground/15 hover:bg-foreground/[0.03] focus-visible:outline-foreground/40 flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
                    isActive ? "text-foreground font-medium" : ""
                  }`}
                >
                  <span>{link.label}</span>
                  <svg
                    className="text-foreground/40 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
