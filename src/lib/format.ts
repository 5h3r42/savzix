import type { Price } from "./types";

export const formatCurrency = ({ amount, currency, precision }: Price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: precision ?? 2,
    maximumFractionDigits: precision ?? 2,
  }).format(amount);

export const formatDate = (
  date: string | number | Date,
  options?: Intl.DateTimeFormatOptions,
) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    ...options,
  }).format(new Date(date));

export const formatRelativeDate = (date: string | number | Date) => {
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const now = Date.now();
  const target = new Date(date).getTime();
  const diff = target - now;

  const units: Array<{ unit: Intl.RelativeTimeFormatUnit; ms: number }> = [
    { unit: "year", ms: 1000 * 60 * 60 * 24 * 365 },
    { unit: "month", ms: 1000 * 60 * 60 * 24 * 30 },
    { unit: "week", ms: 1000 * 60 * 60 * 24 * 7 },
    { unit: "day", ms: 1000 * 60 * 60 * 24 },
    { unit: "hour", ms: 1000 * 60 * 60 },
    { unit: "minute", ms: 1000 * 60 },
  ];

  for (const { unit, ms } of units) {
    const value = Math.round(diff / ms);
    if (Math.abs(value) >= 1) {
      return formatter.format(value, unit);
    }
  }

  return formatter.format(0, "minute");
};
