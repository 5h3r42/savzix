import { readProducts } from "@/lib/cms-blob";
import { ProductGrid } from "@/components/ProductGrid";
import type { Product } from "@/lib/types";

export const runtime = "nodejs";

function normalizeProducts(cmsProducts: Awaited<ReturnType<typeof readProducts>>["products"]): Product[] {
  return cmsProducts.map((product) => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    summary: product.description.slice(0, 120),
    description: product.description,
    price: {
      amount: product.price,
      currency: "GBP",
    },
    category: {
      id: "cms",
      name: "Savzix CMS",
      slug: "savzix-cms",
    },
    createdAt: product.createdAt,
    tags: product.tags,
    media: product.imageUrl ? [product.imageUrl] : [],
    available: true,
  }));
}

export default async function ShopPage() {
  const { products } = await readProducts();
  const normalizedProducts = normalizeProducts(products);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10">
      <header className="space-y-4 text-center sm:text-left">
        <h1 className="text-foreground text-4xl font-semibold tracking-tight">
          Shop Savzix
        </h1>
        <p className="text-foreground/80 text-base">
          Explore the living catalog curated through the Savzix CMS.
        </p>
      </header>
      {normalizedProducts.length > 0 ? (
        <ProductGrid
          title="Products"
          description={`${normalizedProducts.length} product${
            normalizedProducts.length === 1 ? "" : "s"
          }`}
          products={normalizedProducts}
        />
      ) : (
        <div className="border-foreground/10 bg-foreground/[0.02] flex items-center justify-center rounded-3xl border px-6 py-20 text-center text-sm text-foreground/60">
          No products yet. Add items from the admin dashboard to populate the shop.
        </div>
      )}
    </main>
  );
}
