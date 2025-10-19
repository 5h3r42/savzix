import "@/app/globals.css";

export default function CartPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-6 px-6 py-16 sm:px-10">
      <header className="space-y-4 text-center sm:text-left">
        <h1 className="text-foreground text-4xl font-semibold tracking-tight">Cart</h1>
        <p className="text-foreground/80 text-base">
          Your Savzix selections will appear here. Review items before heading to
          checkout.
        </p>
      </header>
      <div className="border-foreground/15 bg-foreground/[0.03] text-foreground/70 rounded-3xl border p-8">
        Cart functionality is in progress. Add products from the shop once the catalog
        launches.
      </div>
    </main>
  );
}
