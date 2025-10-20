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
    <header className="bg-gradient-to-r from-teal-700/95 via-teal-600/90 to-teal-700/95 sticky top-0 z-40 border-b border-teal-500/40 text-white backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-white"
        >
          Savzix
        </Link>
        <button
          type="button"
          className="border-white/20 text-white hover:border-teal-200/70 hover:bg-white/10 focus-visible:outline-teal-200 inline-flex items-center justify-center rounded-full border p-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 lg:hidden"
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
          className="hidden items-center gap-5 text-sm text-white/80 lg:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200 hover:text-teal-200 ${
                  isActive ? "text-white font-medium" : ""
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
          className="relative inline-flex items-center justify-center rounded-full border border-white/25 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white transition hover:border-teal-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200"
        >
          Cart
          {totals.count > 0 && (
            <span className="ml-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-white text-teal-700 text-[11px] font-semibold">
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
        className={`border-teal-500/40 bg-teal-700/95 px-6 py-4 shadow-lg motion-safe:transition-all motion-safe:duration-200 lg:hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 text-sm text-white/85">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition hover:border-white/20 hover:bg-white/10 hover:text-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200 ${
                    isActive ? "text-white font-medium" : ""
                  }`}
                >
                  <span>{link.label}</span>
                  <svg
                    className="h-4 w-4 text-white/50"
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
