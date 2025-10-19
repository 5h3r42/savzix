export type Price = {
  amount: number;
  currency: string;
  precision?: number;
};

export type Variant = {
  id: string;
  name: string;
  sku?: string;
  price: Price;
  available: boolean;
  attributes?: Record<string, string>;
  imageUrl?: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string | null;
  imageUrl?: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  summary?: string;
  description: string;
  price: Price;
  category: Category;
  createdAt: string;
  variants?: Variant[];
  tags?: string[];
  media?: string[];
  isFeatured?: boolean;
  available: boolean;
};

export type CartItem = {
  id: string;
  productId: string;
  variantId?: string;
  quantity: number;
  unitPrice: Price;
  lineTotal: Price;
  addedAt: string;
};

export type Address = {
  firstName: string;
  lastName: string;
  company?: string;
  line1: string;
  line2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
  phone?: string;
  instructions?: string;
};
