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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-white transition hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-foreground/40">
      <Link
        href={`/product/${product.id}`}
        aria-label={`View ${product.name}`}
        className="flex h-full flex-col focus-visible:outline-none"
      >
        <div className="relative aspect-[4/5] w-full">
          {product.media?.[0] ? (
            <Image
              src={product.media[0]}
              alt={`${product.name} product image`}
              fill
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-foreground/5 text-foreground/40">
              Image coming soon
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-4">
          <header className="space-y-1">
            <p className="text-foreground/55 text-xs uppercase tracking-[0.2em]">
              {product.category.name}
            </p>
            <h2 className="line-clamp-2 text-base font-medium text-foreground">
              {product.name}
            </h2>
          </header>
          {product.summary && (
            <p className="mt-2 text-sm text-foreground/70">{product.summary}</p>
          )}
          <div className="mt-auto flex items-center justify-between pt-3">
            <span className="text-sm font-semibold text-foreground">
              <PriceTag price={product.price} />
            </span>
            {product.isFeatured ? (
              <span className="rounded-full bg-teal-600 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white">
                Featured
              </span>
            ) : (
              <span className="text-xs uppercase tracking-[0.18em] text-foreground/60">
                View details
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
