import Image from "next/image";
import Link from "next/link";

import type { Price, Product } from "@/lib/types";

const formatPrice = ({ amount, currency }: Price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.01] transition hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg focus-within:-translate-y-1 focus-within:border-foreground/25 focus-within:shadow-lg">
      <Link href={`/shop/${product.slug}`} className="contents">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-foreground/[0.06]">
          {product.media?.[0] ? (
            <Image
              src={product.media[0]}
              alt={`${product.name} product image`}
              fill
              sizes="(min-width: 1024px) 300px, (min-width: 768px) 240px, 100vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-foreground/40">
              Image coming soon
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <header className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/55">
              {product.category.name}
            </p>
            <h2 className="text-lg font-semibold text-foreground">
              {product.name}
            </h2>
          </header>
          {product.summary && (
            <p className="text-sm text-foreground/70">{product.summary}</p>
          )}
          <footer className="mt-auto flex items-center justify-between pt-2 text-sm font-semibold text-foreground">
            <span>{formatPrice(product.price)}</span>
            {product.isFeatured ? (
              <span className="rounded-full bg-foreground text-background px-3 py-1 text-xs uppercase tracking-[0.18em]">
                Featured
              </span>
            ) : (
              <span className="text-foreground/50">View details</span>
            )}
          </footer>
        </div>
      </Link>
    </article>
  );
}
