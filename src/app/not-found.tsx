"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function NotFound() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
    },
    visible: {
      opacity: 1,
      transition: prefersReducedMotion ? undefined : { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center gap-8 px-6 py-24 text-center sm:px-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="space-y-6"
      >
        <p className="text-foreground/40 text-xs tracking-[0.5em] uppercase">
          Savzix Store
        </p>
        <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          Lost in the ritual.
        </h1>
        <p className="text-foreground/70 text-base sm:text-lg">
          The page you&apos;re looking for drifted off our shelves. Explore the full
          collection to rediscover your next favorite Savzix release.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/shop" className="btn btn-primary w-full sm:w-auto">
            Return to shop
          </Link>
          <Link href="/" className="btn btn-outline w-full sm:w-auto">
            Back to home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
