import { put } from "@vercel/blob";

export const runtime = "nodejs";

export type CmsProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  tags: string[];
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
};

type ProductsPayload = {
  products: CmsProduct[];
};

export async function readProducts(): Promise<ProductsPayload> {
  const url = process.env.PRODUCTS_JSON_URL;

  if (!url) {
    console.warn("PRODUCTS_JSON_URL is not defined; returning empty CMS payload.");
    return { products: [] };
  }

  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      console.error("Failed to fetch CMS products:", response.statusText);
      return { products: [] };
    }

    const payload = (await response.json()) as ProductsPayload | null;

    if (!payload || !Array.isArray(payload.products)) {
      return { products: [] };
    }

    return payload;
  } catch (error) {
    console.error("Error fetching CMS products:", error);
    return { products: [] };
  }
}

export async function writeProducts(data: ProductsPayload) {
  await put("cms/products.json", JSON.stringify(data), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
  });
}

export async function addProduct(
  product: Omit<CmsProduct, "id" | "slug" | "createdAt" | "updatedAt">,
) {
  const existing = await readProducts();
  const timestamp = new Date().toISOString();
  const id = Date.now().toString();
  const slug = product.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const newProduct: CmsProduct = {
    ...product,
    id,
    slug,
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  const nextPayload: ProductsPayload = {
    products: [...existing.products, newProduct],
  };

  await writeProducts(nextPayload);

  return newProduct;
}
