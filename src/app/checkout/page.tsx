"use client";

import { useMemo, useState } from "react";

import { PriceTag } from "@/components/PriceTag";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/lib/products";

type CheckoutForm = {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

const initialForm: CheckoutForm = {
  email: "",
  phone: "",
  firstName: "",
  lastName: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};

export default function CheckoutPage() {
  const { items, totals, clear } = useCart();
  const [form, setForm] = useState<CheckoutForm>(initialForm);
  const [touched, setTouched] = useState<Record<keyof CheckoutForm, boolean>>(
    {} as Record<keyof CheckoutForm, boolean>,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const currency = items[0]?.unitPrice.currency ?? "USD";
  const subtotalPrice = { amount: totals.amount, currency };
  const shippingPrice = { amount: 0, currency };
  const totalPrice = {
    amount: subtotalPrice.amount + shippingPrice.amount,
    currency,
  };

  const cartWithProducts = useMemo(() => {
    return items
      .map((item) => {
        const product = getProductById(item.productId);
        if (!product) {
          return null;
        }
        return { product, item };
      })
      .filter(Boolean) as Array<{
      product: NonNullable<ReturnType<typeof getProductById>>;
      item: (typeof items)[number];
    }>;
  }, [items]);

  const errors = useMemo(() => {
    const requiredFields: Array<keyof CheckoutForm> = [
      "email",
      "firstName",
      "lastName",
      "line1",
      "city",
      "state",
      "postalCode",
      "country",
    ];
    const newErrors: Partial<Record<keyof CheckoutForm, string>> = {};

    requiredFields.forEach((field) => {
      if (!form[field]?.trim()) {
        newErrors[field] = "Required";
      }
    });

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    return newErrors;
  }, [form]);

  const handleChange = (field: keyof CheckoutForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const markTouched = (field: keyof CheckoutForm) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(
      Object.keys(form).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as Record<keyof CheckoutForm, boolean>,
      ),
    );

    if (Object.keys(errors).length > 0 || !items.length) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    clear();
    setForm(initialForm);
    setTouched({} as Record<keyof CheckoutForm, boolean>);
    setSuccessMessage("Order placed! A confirmation email is on its way.");
    setIsSubmitting(false);
    setTimeout(() => setSuccessMessage(null), 4000);
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10">
      <header className="space-y-4 text-center sm:text-left">
        <h1 className="text-foreground text-4xl font-semibold tracking-tight">
          Checkout
        </h1>
        <p className="text-foreground/80 text-base">
          Complete your Savzix order with secure contact and shipping details.
        </p>
        {successMessage && (
          <div className="border-foreground/15 bg-foreground/[0.05] text-foreground/80 mx-auto max-w-2xl rounded-full border px-5 py-3 text-sm">
            {successMessage}
          </div>
        )}
      </header>

      <form
        className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]"
        onSubmit={handleSubmit}
        noValidate
      >
        <section className="space-y-8">
          <div className="border-foreground/10 bg-background space-y-6 rounded-3xl border p-6 shadow-sm">
            <h2 className="text-foreground text-lg font-semibold">Contact</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-foreground/60 text-xs tracking-[0.3em] uppercase">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  onBlur={() => markTouched("email")}
                  className="border-foreground/15 bg-background text-foreground focus:border-foreground/40 focus:ring-foreground/20 rounded-full border px-4 py-3 text-sm transition outline-none focus:ring-2"
                  placeholder="you@savzix.com"
                  required
                />
                {touched.email && errors.email && (
                  <span className="text-xs text-red-500">{errors.email}</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-foreground/60 text-xs tracking-[0.3em] uppercase">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  className="border-foreground/15 bg-background text-foreground focus:border-foreground/40 focus:ring-foreground/20 rounded-full border px-4 py-3 text-sm transition outline-none focus:ring-2"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>

          <div className="border-foreground/10 bg-background space-y-6 rounded-3xl border p-6 shadow-sm">
            <h2 className="text-foreground text-lg font-semibold">Shipping address</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-foreground/60 text-xs tracking-[0.3em] uppercase">
                  First name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={(event) => handleChange("firstName", event.target.value)}
                  onBlur={() => markTouched("firstName")}
                  className="border-foreground/15 bg-background rounded-full border px-4 py-3 text-sm"
                  placeholder="Jordan"
                  required
                />
                {touched.firstName && errors.firstName && (
                  <span className="text-xs text-red-500">{errors.firstName}</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-foreground/60 text-xs tracking-[0.3em] uppercase">
                  Last name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={(event) => handleChange("lastName", event.target.value)}
                  onBlur={() => markTouched("lastName")}
                  className="border-foreground/15 bg-background rounded-full border px-4 py-3 text-sm"
                  placeholder="Lee"
                  required
                />
                {touched.lastName && errors.lastName && (
                  <span className="text-xs text-red-500">{errors.lastName}</span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-foreground/60 text-xs tracking-[0.3em] uppercase">
                Address line 1 *
              </label>
              <input
                type="text"
                name="line1"
                value={form.line1}
                onChange={(event) => handleChange("line1", event.target.value)}
                onBlur={() => markTouched("line1")}
                className="border-foreground/15 bg-background rounded-full border px-4 py-3 text-sm"
                placeholder="123 Savzix Street"
                required
              />
              {touched.line1 && errors.line1 && (
                <span className="text-xs text-red-500">{errors.line1}</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-foreground/60 text-xs tracking-[0.3em] uppercase">
                Address line 2
              </label>
              <input
                type="text"
                name="line2"
                value={form.line2}
                onChange={(event) => handleChange("line2", event.target.value)}
                className="border-foreground/15 bg-background rounded-full border px-4 py-3 text-sm"
                placeholder="Suite 400"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-foreground/60 text-xs tracking-[0.3em] uppercase">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={(event) => handleChange("city", event.target.value)}
                  onBlur={() => markTouched("city")}
                  className="border-foreground/15 bg-background rounded-full border px-4 py-3 text-sm"
                  placeholder="Los Angeles"
                  required
                />
                {touched.city && errors.city && (
                  <span className="text-xs text-red-500">{errors.city}</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-foreground/60 text-xs tracking-[0.3em] uppercase">
                  State / Province *
                </label>
                <input
                  type="text"
                  name="state"
                  value={form.state}
                  onChange={(event) => handleChange("state", event.target.value)}
                  onBlur={() => markTouched("state")}
                  className="border-foreground/15 bg-background rounded-full border px-4 py-3 text-sm"
                  placeholder="CA"
                  required
                />
                {touched.state && errors.state && (
                  <span className="text-xs text-red-500">{errors.state}</span>
                )}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-foreground/60 text-xs tracking-[0.3em] uppercase">
                  Postal code *
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={(event) => handleChange("postalCode", event.target.value)}
                  onBlur={() => markTouched("postalCode")}
                  className="border-foreground/15 bg-background rounded-full border px-4 py-3 text-sm"
                  placeholder="90001"
                  required
                />
                {touched.postalCode && errors.postalCode && (
                  <span className="text-xs text-red-500">{errors.postalCode}</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-foreground/60 text-xs tracking-[0.3em] uppercase">
                  Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={form.country}
                  onChange={(event) => handleChange("country", event.target.value)}
                  onBlur={() => markTouched("country")}
                  className="border-foreground/15 bg-background rounded-full border px-4 py-3 text-sm"
                  placeholder="United States"
                  required
                />
                {touched.country && errors.country && (
                  <span className="text-xs text-red-500">{errors.country}</span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="btn btn-primary px-10"
              disabled={isSubmitting || !items.length}
            >
              {isSubmitting ? "Processing..." : "Place order"}
            </button>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="border-foreground/10 bg-background space-y-4 rounded-3xl border p-6 shadow-sm">
            <h2 className="text-foreground text-lg font-semibold">Order summary</h2>
            {!cartWithProducts.length ? (
              <p className="text-foreground/60 text-sm">
                Your cart is empty. Add Savzix products before checking out.
              </p>
            ) : (
              <ul className="space-y-4">
                {cartWithProducts.map(({ product, item }) => (
                  <li key={item.id} className="flex items-start justify-between gap-4">
                    <div className="space-y-1 text-sm">
                      <p className="text-foreground font-medium">{product.name}</p>
                      <p className="text-foreground/60">Qty {item.quantity}</p>
                    </div>
                    <PriceTag
                      price={item.lineTotal}
                      className="text-foreground text-sm font-semibold"
                    />
                  </li>
                ))}
              </ul>
            )}
            <div className="text-foreground/70 space-y-3 pt-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <PriceTag price={subtotalPrice} />
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at next step</span>
              </div>
              <div className="text-foreground flex justify-between text-base font-semibold">
                <span>Total</span>
                <PriceTag price={totalPrice} />
              </div>
            </div>
          </div>
          <div className="border-foreground/10 bg-foreground/[0.03] text-foreground/60 rounded-3xl border p-6 text-xs tracking-[0.2em] uppercase">
            Savzix checkout is secured with end-to-end encryption. Payment processing
            integrates soon.
          </div>
        </aside>
      </form>
    </main>
  );
}
