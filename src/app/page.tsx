import { allProducts, featured, newArrivals } from "@/lib/products";
import { ProductGrid } from "@/components/ProductGrid";
import { HeroSection } from "@/components/HeroSection";
import { CategoryGrid } from "@/components/CategoryGrid";

export default function Home() {
  const categoryMap = new Map<
    string,
    {
      id: string;
      name: string;
      slug: string;
      description?: string;
      imageUrl?: string;
    }
  >();

  for (const product of allProducts) {
    const category = product.category;
    if (!categoryMap.has(category.id)) {
      categoryMap.set(category.id, {
        id: category.id,
        name: category.name,
        slug: category.slug,
        description: category.description,
        imageUrl: category.imageUrl,
      });
    }
  }

  const categories = Array.from(categoryMap.values());

  return (
    <div className="from-foreground/[0.02] min-h-screen bg-gradient-to-b to-transparent">
      <HeroSection />
      <CategoryGrid title="Shop by category" categories={categories} />

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
