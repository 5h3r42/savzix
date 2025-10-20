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
    <footer className="mt-16 rounded-t-3xl border-t border-teal-500 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-600 text-white shadow-[0_-12px_40px_rgba(15,118,110,0.25)]">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div className="space-y-3">
            <span className="text-lg font-semibold tracking-[0.35em] uppercase">
            Savzix
          </span>
            <p className="max-w-xs text-sm text-white/80">
              Health &amp; Beauty for Everyone. Rituals inspired by science and crafted
              for daily indulgence.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm text-white/80">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Navigate
            </span>
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-teal-300 focus-visible:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
              Connect
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
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 transition hover:border-teal-300 hover:bg-white/20 hover:text-teal-300 focus-visible:border-teal-300 focus-visible:bg-white/20 focus-visible:text-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="border-teal-500/60 border-t bg-teal-700/60">
        <p className="mx-auto max-w-6xl px-6 py-6 text-center text-xs text-white/70 sm:px-10">
          © 2025 Savzix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
