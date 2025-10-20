"use client";

import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";
import { motion, useReducedMotion } from "framer-motion";

type ProductGridProps = {
  title?: string;
  description?: string;
  products: Product[];
  id?: string;
};

export function ProductGrid({ title, description, products, id }: ProductGridProps) {
  const prefersReducedMotion = useReducedMotion();

  if (!products.length) {
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
        : { delayChildren: 0.1, staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion ? undefined : { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id={id}
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      {(title || description) && (
        <header className="space-y-2">
          {title && (
            <h2 className="text-foreground text-2xl font-semibold tracking-tight">
              {title}
            </h2>
          )}
          {description && <p className="text-foreground/70 text-sm">{description}</p>}
        </header>
      )}
      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={gridVariants}
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
