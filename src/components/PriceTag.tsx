import type { Price } from "@/lib/types";

const formatCurrency = (price: Price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: price.precision ?? 2,
  }).format(price.amount);

type PriceTagProps = {
  price: Price;
  className?: string;
  "aria-label"?: string;
};

export function PriceTag({
  price,
  className,
  "aria-label": ariaLabel,
}: PriceTagProps) {
  const formattedPrice = formatCurrency(price);

  return (
    <span className={className} aria-label={ariaLabel ?? `Price ${formattedPrice}`}>
      {formattedPrice}
    </span>
  );
}
