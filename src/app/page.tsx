import Link from "next/link";

import { featured, newArrivals } from "@/lib/products";
import { ProductGrid } from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-foreground/[0.02] to-transparent">
      <section className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 pb-20 pt-24 sm:px-10 md:pt-28">
        <header className="space-y-6 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">
            Savzix Store
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Elevated care for skin, hair, and home rituals.
          </h1>
          <p className="text-base text-foreground/70 sm:max-w-xl">
            Discover science-led formulations and sensory experiences curated by
            Savzix. Thoughtfully designed for everyday rituals that feel like a
            getaway.
          </p>
        </header>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Link href="/shop" className="btn btn-primary w-full sm:w-auto">
            Explore the collection
          </Link>
          <Link href="#new-arrivals" className="btn btn-outline w-full sm:w-auto">
            New arrivals
          </Link>
        </div>
      </section>

      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 pb-24 sm:px-10">
        <ProductGrid
          title="Featured edits"
          description="Limited releases, capsule collaborations, and Savzix signature picks."
          products={featured}
        />
        <ProductGrid
          id="new-arrivals"
          title="New arrivals"
          description="Fresh drops from our labs, delivered weekly."
          products={newArrivals}
        />
      </main>
    </div>
  );
}
