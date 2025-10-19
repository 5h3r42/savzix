import "@/app/globals.css";

export default function ShopPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-6 px-6 py-16 sm:px-10">
      <header className="space-y-4 text-center sm:text-left">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Shop
        </h1>
        <p className="text-base text-foreground/80">
          Browse curated Savzix hardware and accessories. Product listings are
          coming soon.
        </p>
      </header>
      <div className="rounded-3xl border border-foreground/15 bg-foreground/[0.03] p-8 text-foreground/70">
        Inventory is being finalized. Check back shortly to explore the new
        Savzix lineup.
      </div>
    </main>
  );
}
