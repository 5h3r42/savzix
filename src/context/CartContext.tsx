"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { CartItem, Product } from "@/lib/types";

type Totals = {
  count: number;
  amount: number;
};

type CartContextValue = {
  items: CartItem[];
  totals: Totals;
  add: (product: Product, qty?: number) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "savzix:cart";

const calculateLineTotal = (unitPrice: CartItem["unitPrice"], quantity: number) => {
  const precision = unitPrice.precision ?? 2;
  const amount = Number((unitPrice.amount * quantity).toFixed(precision));
  return {
    ...unitPrice,
    amount,
  };
};

const readStoredCart = (): CartItem[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return [];
  }

  try {
    const parsed = JSON.parse(stored) as CartItem[];
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch {
    // ignore malformed storage
  }
  return [];
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => readStoredCart());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const add = useCallback((product: Product, qty: number = 1) => {
    const quantity = Math.max(1, qty);
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === product.id && !item.variantId,
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        const existing = updated[existingIndex];
        const nextQuantity = existing.quantity + quantity;
        updated[existingIndex] = {
          ...existing,
          quantity: nextQuantity,
          lineTotal: calculateLineTotal(existing.unitPrice, nextQuantity),
        };
        return updated;
      }

      const unitPrice = { ...product.price };
      const newItem: CartItem = {
        id: product.id,
        productId: product.id,
        quantity,
        unitPrice,
        lineTotal: calculateLineTotal(unitPrice, quantity),
        addedAt: new Date().toISOString(),
      };
      return [...prev, newItem];
    });
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    setItems((prev) => {
      if (qty <= 0) {
        return prev.filter((item) => item.id !== id);
      }
      return prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: qty,
              lineTotal: calculateLineTotal(item.unitPrice, qty),
            }
          : item,
      );
    });
  }, []);

  const clear = useCallback(() => {
    setItems([]);
  }, []);

  const totals = useMemo<Totals>(() => {
    return items.reduce(
      (acc, item) => {
        acc.count += item.quantity;
        acc.amount += item.lineTotal.amount;
        return acc;
      },
      { count: 0, amount: 0 },
    );
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      totals,
      add,
      remove,
      updateQty,
      clear,
    }),
    [items, totals, add, remove, updateQty, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
