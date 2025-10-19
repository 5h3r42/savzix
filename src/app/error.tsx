"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorPageProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      scale: prefersReducedMotion ? 1 : 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: prefersReducedMotion ? undefined : { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center sm:px-10">
      <motion.div
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <p className="text-foreground/40 text-xs tracking-[0.5em] uppercase">
          Savzix Store
        </p>
        <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          Something went off-script.
        </h1>
        <p className="text-foreground/70 text-base sm:text-lg">
          We hit an unexpected snag while preparing your experience. Try again, or head
          back to the collection to continue browsing.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="btn btn-primary w-full sm:w-auto"
          >
            Retry
          </button>
          <Link href="/shop" className="btn btn-outline w-full sm:w-auto">
            Return to shop
          </Link>
        </div>
        {error.digest && (
          <p className="text-foreground/40 text-xs">
            Reference: <span className="font-mono">{error.digest}</span>
          </p>
        )}
      </motion.div>
    </main>
  );
}
