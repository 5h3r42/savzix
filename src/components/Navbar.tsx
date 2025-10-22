"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const { totals } = useCart();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  const ModeIcon = isDark ? Sun : Moon;
  const modeLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-teal-500/40 bg-gradient-to-r from-teal-700/95 via-teal-600/90 to-teal-700/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-sm font-semibold tracking-[0.3em] text-white uppercase"
        >
          Savzix
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white transition hover:border-teal-200/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200 lg:hidden"
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
                className={`transition hover:text-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200 ${
                  isActive ? "font-medium text-white" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            aria-label={
              totals.count > 0
                ? `Cart, ${totals.count} item${totals.count === 1 ? "" : "s"}`
                : "Cart, empty"
            }
            className="relative inline-flex items-center justify-center rounded-full border border-white/25 px-4 py-2 text-xs tracking-[0.25em] text-white uppercase transition hover:border-teal-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200"
          >
            Cart
            {totals.count > 0 && (
              <span
                className={`ml-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full text-[11px] font-semibold ${isDark ? "bg-white/90 text-teal-900" : "bg-white text-teal-700"}`}
              >
                {totals.count}
              </span>
            )}
            <span className="sr-only" aria-live="polite">
              {totals.count > 0
                ? `${totals.count} item${totals.count === 1 ? "" : "s"} in cart`
                : "Cart empty"}
            </span>
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={isDark}
            aria-label={modeLabel}
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-teal-200/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200 lg:inline-flex"
          >
            <ModeIcon className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
      </div>
      <nav
        id="primary-navigation"
        aria-label="Main navigation"
        className={`border-teal-500/40 bg-teal-700/95 px-6 py-4 shadow-lg motion-safe:transition-all motion-safe:duration-200 lg:hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 text-sm text-white/85">
          <li>
            <button
              type="button"
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
              aria-pressed={isDark}
              aria-label={modeLabel}
              className="flex w-full items-center justify-between rounded-2xl border border-white/20 px-4 py-3 text-left font-medium transition hover:border-white/30 hover:bg-white/10 hover:text-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200"
            >
              <span>{isDark ? "Light mode" : "Dark mode"}</span>
              <ModeIcon className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </li>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition hover:border-white/20 hover:bg-white/10 hover:text-teal-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-200 ${
                    isActive ? "font-medium text-white" : ""
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
