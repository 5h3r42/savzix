import "@/app/globals.css";

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-6 px-6 py-16 sm:px-10">
      <header className="space-y-4 text-center sm:text-left">
        <h1 className="text-foreground text-4xl font-semibold tracking-tight">
          About Savzix
        </h1>
        <p className="text-foreground/80 text-base">
          Learn the story behind Savzix and the vision reshaping premium hardware retail.
        </p>
      </header>
      <div className="border-foreground/15 bg-foreground/[0.03] text-foreground/70 rounded-3xl border p-8">
        Savzix is building a modern retail experience focused on thoughtful design,
        transparent pricing, and concierge-quality support. Detailed company history and
        milestones will arrive soon.
      </div>
    </main>
  );
}
