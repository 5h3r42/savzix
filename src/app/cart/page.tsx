import "@/app/globals.css";

export default function CartPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-6 px-6 py-16 sm:px-10">
      <header className="space-y-4 text-center sm:text-left">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Cart
        </h1>
        <p className="text-base text-foreground/80">
          Your Savzix selections will appear here. Review items before heading
          to checkout.
        </p>
      </header>
      <div className="rounded-3xl border border-foreground/15 bg-foreground/[0.03] p-8 text-foreground/70">
        Cart functionality is in progress. Add products from the shop once the
        catalog launches.
      </div>
    </main>
  );
}
