import "@/app/globals.css";

export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col gap-6 px-6 py-16 sm:px-10">
      <header className="space-y-4 text-center sm:text-left">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Contact
        </h1>
        <p className="text-base text-foreground/80">
          We&apos;d love to hear from you. Reach out to the Savzix team for
          support or partnerships.
        </p>
      </header>
      <div className="rounded-3xl border border-foreground/15 bg-foreground/[0.03] p-8 text-foreground/70">
        Dedicated support channels and response times will be announced soon.
        Email{" "}
        <a className="underline underline-offset-4" href="mailto:hello@savzix.com">
          hello@savzix.com
        </a>{" "}
        in the meantime.
      </div>
    </main>
  );
}
