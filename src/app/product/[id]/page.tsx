import Image from "next/image";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PriceTag } from "@/components/PriceTag";
import { allProducts, getProductById } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const breadcrumbTrail = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    {
      href: `/shop?category=${product.category.slug}`,
      label: product.category.name,
    },
    { href: `/product/${product.id}`, label: product.name, current: true },
  ];

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10 md:flex-row md:gap-14 md:py-16">
      <Breadcrumbs
        items={breadcrumbTrail}
        className="md:absolute md:left-10 md:top-10"
      />

      <section className="relative flex flex-1 flex-col gap-4">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.04]">
          {product.media?.[0] ? (
            <Image
              src={product.media[0]}
              alt={`${product.name} hero image`}
              fill
              sizes="(min-width: 1280px) 480px, (min-width: 768px) 55vw, 90vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-foreground/50">
              Image preview coming soon
            </div>
          )}
        </div>
      </section>

      <section className="flex flex-1 flex-col gap-6">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">
            {product.category.name}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {product.name}
          </h1>
          <PriceTag
            price={product.price}
            className="text-lg font-semibold text-foreground"
          />
        </header>

        <div className="space-y-4 text-sm text-foreground/75">
          <p>
            {product.description ||
              "Detailed product insights, ingredient breakdowns, and usage guidance will appear here soon."}
          </p>
          <div className="rounded-3xl border border-foreground/15 bg-foreground/[0.02] p-5 text-xs uppercase tracking-[0.2em] text-foreground/60">
            Savzix formulations are cruelty-free, dermatologist tested, and
            designed for modern rituals.
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button type="button" className="btn btn-primary w-full sm:w-auto">
            Add to cart
          </button>
          <button type="button" className="btn btn-outline w-full sm:w-auto">
            Buy now
          </button>
        </div>

        {product.tags?.length ? (
          <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-foreground/45">
            {product.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-foreground/15 px-3 py-1"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}
