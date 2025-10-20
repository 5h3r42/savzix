"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
];

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-foreground/10 text-foreground mt-16 border-t bg-white/95 font-sans shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <span className="text-foreground text-lg font-semibold tracking-[0.4em] uppercase">
            Savzix
          </span>
          <p className="text-foreground/70 max-w-xs text-sm">
            Modern rituals for skin, hair, fragrance, and wellness—crafted with precision
            and designed for everyday indulgence.
          </p>
        </div>

        <nav className="text-foreground/75 flex flex-col gap-3 text-sm sm:flex-row sm:gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground focus-visible:outline-foreground/35 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <span className="text-foreground/60 text-xs tracking-[0.25em] uppercase">
            Follow Savzix
          </span>
          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="border-foreground/15 text-foreground hover:border-foreground/30 focus-visible:outline-foreground/35 inline-flex h-10 w-10 items-center justify-center rounded-full border bg-[#f8f1ee] transition hover:bg-[#f2e5df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-foreground/10 border-t bg-[#fdf8f5]">
        <p className="text-foreground/60 mx-auto max-w-6xl px-6 py-6 text-center text-xs sm:px-10">
          © 2025 Savzix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
