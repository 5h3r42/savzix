import { revalidatePath } from "next/cache";
import type { Metadata } from "next";

import { readProducts, addProduct } from "@/lib/cms-blob";

export const runtime = "nodejs";

export const metadata: Metadata = {
  title: "Products | Savzix Admin",
};

async function createProductAction(formData: FormData) {
  "use server";

  const name = (formData.get("name") as string)?.trim();
  const description = (formData.get("description") as string)?.trim();
  const priceValue = Number(formData.get("price"));
  const tagsInput = (formData.get("tags") as string) ?? "";
  const imageUrlRaw = (formData.get("imageUrl") as string) ?? "";
  const imageUrl = imageUrlRaw.trim() || undefined;

  if (!name || !description || Number.isNaN(priceValue) || priceValue < 0) {
    throw new Error("Name, description, and a non-negative price are required.");
  }

  const tags = tagsInput
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  await addProduct({
    name,
    description,
    price: priceValue,
    tags,
    imageUrl,
  });

  revalidatePath("/admin/products");
}

export default async function AdminProductsPage() {
  const { products } = await readProducts();
  const sortedProducts = [...products].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <main className="mx-auto max-w-3xl space-y-10 px-4 py-12 sm:px-6 lg:px-0">
      <header className="space-y-2 text-center sm:text-left">
        <p className="text-sm uppercase tracking-[0.3em] text-teal-600">Dashboard</p>
        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Savzix Admin – Products
        </h1>
        <p className="text-sm text-foreground/70">
          Manage storefront products stored in the Savzix CMS Blob.
        </p>
      </header>

      <section className="rounded-3xl border border-teal-100 bg-white/80 p-6 shadow-sm backdrop-blur">
        <form action={createProductAction} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70"
            >
              Name *
            </label>
            <input
              id="name"
              name="name"
              required
              className="input"
              placeholder="Oceanic Renewal Serum"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              className="input textarea"
              placeholder="Describe the product benefits, usage, and hero ingredients."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="price"
                className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70"
              >
                Price *
              </label>
              <input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                required
                className="input"
                placeholder="89.00"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="tags"
                className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70"
              >
                Tags
              </label>
              <input
                id="tags"
                name="tags"
                className="input"
                placeholder="hydrating, marine, restorative"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="imageUrl"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70"
            >
              Image URL
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              className="input"
              placeholder="https://public.blob.vercel-storage.com/products/example.jpg"
            />
          </div>

          <div className="pt-2">
            <button type="submit" className="btn btn-primary">
              Create product
            </button>
          </div>
        </form>
      </section>

      <section className="space-y-4">
        <header className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Existing products</h2>
            <p className="text-sm text-foreground/65">
              {sortedProducts.length} product{sortedProducts.length === 1 ? "" : "s"} stored
              in CMS.
            </p>
          </div>
        </header>

        {sortedProducts.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-teal-200 bg-teal-50/60 px-5 py-6 text-center text-sm text-teal-700">
            No products yet—use the form above to add your first item.
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-4">
            {sortedProducts.map((product) => (
              <li
                key={product.id}
                className="rounded-2xl border border-teal-100 bg-white/80 p-5 shadow-sm transition hover:border-teal-300"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/65">{product.description}</p>
                  </div>
                  <div className="text-right text-sm text-foreground">
                    <span className="font-semibold">
                      £{product.price.toFixed(2)}
                    </span>
                    <p className="text-xs text-foreground/60">
                      Added {new Date(product.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
                {product.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-teal-700">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
