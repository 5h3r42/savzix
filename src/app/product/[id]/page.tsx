import Image from "next/image";
import { notFound } from "next/navigation";

import { readProducts } from "@/lib/cms-blob";

export const runtime = "nodejs";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const { products } = await readProducts();
  const product = products.find((item) => item.id === id || item.slug === id);

  if (!product) {
    notFound();
  }

  const priceLabel = `£${product.price.toFixed(2)}`;
  const tags = product.tags ?? [];

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-12 sm:px-10 lg:flex-row lg:gap-16 lg:py-16">
      <div className="flex-1">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-teal-100 bg-teal-50/40">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(min-width:1280px) 45vw, (min-width:768px) 55vw, 100vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-foreground/50">
              Image coming soon
            </div>
          )}
        </div>
      </div>

      <section className="flex flex-1 flex-col gap-6">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-600">Savzix Store</p>
          <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
            {product.name}
          </h1>
          <p className="text-lg font-semibold text-foreground">{priceLabel}</p>
        </header>

        <article className="space-y-4 text-sm text-foreground/75">
          <p>{product.description}</p>
          <div className="rounded-3xl border border-teal-100 bg-teal-50/70 p-5 text-xs uppercase tracking-[0.2em] text-teal-700">
            Crafted with care and science-backed ingredients for modern rituals.
          </div>
        </article>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" className="btn btn-primary w-full sm:w-auto">
            Add to cart
          </button>
        </div>

        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-teal-700">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
