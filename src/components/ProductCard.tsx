"use client";

import Image from "next/image";
import Link from "next/link";

import { PriceTag } from "./PriceTag";
import type { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group border-foreground/10 bg-foreground/[0.01] hover:border-foreground/20 focus-within:border-foreground/25 focus-within:outline-foreground/40 flex flex-col overflow-hidden rounded-3xl border transition focus-within:-translate-y-1 focus-within:shadow-lg focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 hover:-translate-y-1 hover:shadow-lg">
      <Link
        href={`/product/${product.id}`}
        aria-label={`View ${product.name}`}
        className="flex h-full flex-col focus-visible:outline-none"
      >
        <div className="bg-foreground/[0.06] relative aspect-[4/5] w-full overflow-hidden">
          {product.media?.[0] ? (
            <Image
              src={product.media[0]}
              alt={`${product.name} product image`}
              fill
              sizes="(min-width: 1024px) 300px, (min-width: 768px) 240px, 100vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="text-foreground/40 flex h-full items-center justify-center">
              Image coming soon
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <header className="space-y-1">
            <p className="text-foreground/55 text-xs tracking-[0.2em] uppercase">
              {product.category.name}
            </p>
            <h2 className="text-foreground text-lg font-semibold">{product.name}</h2>
          </header>
          {product.summary && (
            <p className="text-foreground/70 text-sm">{product.summary}</p>
          )}
          <footer className="text-foreground mt-auto flex items-center justify-between pt-2 text-sm font-semibold">
            <PriceTag price={product.price} />
            {product.isFeatured ? (
              <span className="bg-foreground text-background rounded-full px-3 py-1 text-xs tracking-[0.18em] uppercase">
                Featured
              </span>
            ) : (
              <span className="text-foreground/65">View details</span>
            )}
          </footer>
        </div>
      </Link>
    </article>
  );
}
