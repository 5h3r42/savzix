"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type CategoryCard = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
};

type CategoryGridProps = {
  title?: string;
  categories: CategoryCard[];
};

export function CategoryGrid({ title, categories }: CategoryGridProps) {
  const prefersReducedMotion = useReducedMotion();

  if (!categories.length) {
    return null;
  }

  const sectionVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion ? undefined : { duration: 0.6, ease: "easeOut" },
    },
  };

  const gridVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
    },
    visible: {
      opacity: 1,
      transition: prefersReducedMotion
        ? undefined
        : { delayChildren: 0.1, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion ? undefined : { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="mx-auto flex max-w-5xl flex-col gap-6 px-6 sm:px-10"
    >
      {title && (
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      )}
      <motion.div
        variants={gridVariants}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {categories.map((category) => (
          <motion.div key={category.id} variants={itemVariants}>
            <Link
              href={`/shop?category=${encodeURIComponent(category.id)}`}
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 transition hover:border-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300"
            >
              <div className="relative aspect-[16/9] w-full">
                {category.imageUrl ? (
                  <Image
                    src={category.imageUrl}
                    alt={`${category.name} category`}
                    fill
                    className="object-cover transition duration-500 motion-safe:group-hover:scale-105"
                    sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-foreground/10 text-sm text-foreground/40">
                    Imagery coming soon
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:via-black/30" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-lg font-semibold text-white drop-shadow-lg">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
