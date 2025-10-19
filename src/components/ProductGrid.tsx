import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  title?: string;
  description?: string;
  products: Product[];
  id?: string;
};

export function ProductGrid({
  title,
  description,
  products,
  id,
}: ProductGridProps) {
  if (!products.length) {
    return null;
  }

  return (
    <section className="space-y-6" id={id}>
      {(title || description) && (
        <header className="space-y-2">
          {title && (
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-foreground/70">{description}</p>
          )}
        </header>
      )}
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
