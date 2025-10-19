"use client";

import { useMemo, useState } from "react";

import { ProductGrid } from "@/components/ProductGrid";
import { allProducts } from "@/lib/products";

const CATEGORY_FILTER_LABEL = "Filter by category";
const SORT_OPTIONS = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price ↑" },
  { value: "price-desc", label: "Price ↓" },
];

const getUniqueCategories = () => {
  const map = new Map<string, string>();
  allProducts.forEach(({ category }) => {
    map.set(category.id, category.name);
  });
  return Array.from(map.entries()).map(([id, name]) => ({ id, name }));
};

const categories = getUniqueCategories();

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState<string>("");
  const [priceMax, setPriceMax] = useState<string>("");
  const [sort, setSort] = useState<string>("newest");

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId],
    );
  };

  const filteredProducts = useMemo(() => {
    const min = priceMin ? Number(priceMin) : undefined;
    const max = priceMax ? Number(priceMax) : undefined;
    const term = search.trim().toLowerCase();

    let result = allProducts.filter((product) => {
      if (selectedCategories.length > 0) {
        if (!selectedCategories.includes(product.category.id)) {
          return false;
        }
      }

      if (typeof min === "number" && !Number.isNaN(min)) {
        if (product.price.amount < min) {
          return false;
        }
      }

      if (typeof max === "number" && !Number.isNaN(max)) {
        if (product.price.amount > max) {
          return false;
        }
      }

      if (term) {
        const haystack = `${product.name} ${product.summary ?? ""} ${
          product.description ?? ""
        }`.toLowerCase();
        if (!haystack.includes(term)) {
          return false;
        }
      }

      return true;
    });

    switch (sort) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price.amount - b.price.amount);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price.amount - a.price.amount);
        break;
      default:
        result = [...result].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
    }

    return result;
  }, [search, selectedCategories, priceMin, priceMax, sort]);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10">
      <header className="space-y-4 text-center sm:text-left">
        <h1 className="text-foreground text-4xl font-semibold tracking-tight">
          Shop Savzix
        </h1>
        <p className="text-foreground/80 text-base">
          Refine your ritual with science-led skincare, haircare, fragrance, and wellness
          essentials.
        </p>
      </header>

      <section className="border-foreground/10 bg-foreground/[0.02] grid gap-6 rounded-3xl border p-6 shadow-sm sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[2fr_3fr]">
        <div className="space-y-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="shop-search"
              className="text-foreground/60 text-xs tracking-[0.3em] uppercase"
            >
              Search
            </label>
            <input
              id="shop-search"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Find products..."
              className="border-foreground/15 bg-background text-foreground focus:border-foreground/40 focus:ring-foreground/20 rounded-full border px-4 py-3 text-sm transition outline-none focus:ring-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-foreground/60 text-xs tracking-[0.3em] uppercase">
              {CATEGORY_FILTER_LABEL}
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const active = selectedCategories.includes(category.id);
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => toggleCategory(category.id)}
                    className={`focus-visible:outline-foreground/40 rounded-full border px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 ${
                      active
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/20 text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                    }`}
                    aria-pressed={active}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex min-w-[140px] flex-1 flex-col gap-2">
              <label
                htmlFor="price-min"
                className="text-foreground/60 text-xs tracking-[0.3em] uppercase"
              >
                Price min
              </label>
              <input
                id="price-min"
                type="number"
                inputMode="decimal"
                value={priceMin}
                onChange={(event) => setPriceMin(event.target.value)}
                placeholder="0"
                className="border-foreground/15 bg-background text-foreground focus:border-foreground/40 focus:ring-foreground/20 rounded-full border px-4 py-3 text-sm transition outline-none focus:ring-2"
              />
            </div>
            <div className="flex min-w-[140px] flex-1 flex-col gap-2">
              <label
                htmlFor="price-max"
                className="text-foreground/60 text-xs tracking-[0.3em] uppercase"
              >
                Price max
              </label>
              <input
                id="price-max"
                type="number"
                inputMode="decimal"
                value={priceMax}
                onChange={(event) => setPriceMax(event.target.value)}
                placeholder="250"
                className="border-foreground/15 bg-background text-foreground focus:border-foreground/40 focus:ring-foreground/20 rounded-full border px-4 py-3 text-sm transition outline-none focus:ring-2"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="sort-order"
              className="text-foreground/60 text-xs tracking-[0.3em] uppercase"
            >
              Sort
            </label>
            <select
              id="sort-order"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="border-foreground/15 bg-background text-foreground focus:border-foreground/40 focus:ring-foreground/20 rounded-full border px-4 py-3 text-sm transition outline-none focus:ring-2"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="border-foreground/10 bg-background text-foreground/70 rounded-3xl border p-6 text-sm">
            <p>
              Filters update instantly using locally stored product data. As the Savzix
              catalog grows, these controls will sync with live inventory and personalized
              recommendations.
            </p>
          </div>
        </div>
      </section>

      <ProductGrid
        title="Results"
        description={`${filteredProducts.length} product${filteredProducts.length === 1 ? "" : "s"} found`}
        products={filteredProducts}
      />
    </main>
  );
}
