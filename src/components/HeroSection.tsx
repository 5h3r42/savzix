"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const sectionVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 32,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion ? undefined : { duration: 0.7, ease: "easeOut" },
    },
  };

  const ctaVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? undefined
        : { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 pt-20 pb-20 sm:px-10 md:pt-28"
    >
      <motion.header
        variants={sectionVariants}
        transition={
          prefersReducedMotion ? undefined : { duration: 0.65, ease: "easeOut" }
        }
        className="space-y-6 text-center sm:text-left"
      >
        <p className="text-foreground/55 text-[11px] tracking-[0.3em] uppercase sm:text-xs">
          Savzix Store
        </p>
        <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Elevated care for skin, hair, and home rituals.
        </h1>
        <p className="text-foreground/70 text-base sm:max-w-xl sm:text-lg">
          Discover science-led formulations and sensory experiences curated by Savzix.
          Thoughtfully designed for everyday rituals that feel like a getaway.
        </p>
      </motion.header>
      <motion.div
        variants={ctaVariants}
        className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
      >
        <Link href="/shop" className="btn btn-primary w-full sm:w-auto">
          Explore the collection
        </Link>
        <Link href="#new-arrivals" className="btn btn-outline w-full sm:w-auto">
          New arrivals
        </Link>
      </motion.div>
    </motion.section>
  );
}
