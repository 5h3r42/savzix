"use client";

import { formatCurrency } from "@/lib/format";
import type { Price } from "@/lib/types";

type PriceTagProps = {
  price: Price;
  className?: string;
  "aria-label"?: string;
};

export function PriceTag({ price, className, "aria-label": ariaLabel }: PriceTagProps) {
  const formattedPrice = formatCurrency(price);

  return (
    <span className={className} aria-label={ariaLabel ?? `Price ${formattedPrice}`}>
      {formattedPrice}
    </span>
  );
}
