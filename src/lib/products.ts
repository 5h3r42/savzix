import { Product, Category } from "./types";

const categories: Record<string, Category> = {
  skincare: {
    id: "savzix-skincare",
    name: "Skincare",
    slug: "skincare",
    description:
      "Formulas developed to brighten, balance, and protect every complexion.",
    imageUrl: "https://images.savzix.com/categories/skincare.jpg",
  },
  haircare: {
    id: "savzix-haircare",
    name: "Haircare",
    slug: "haircare",
    description:
      "Lightweight routines engineered for strength, shine, and effortless styling.",
    imageUrl: "https://images.savzix.com/categories/haircare.jpg",
  },
  fragrance: {
    id: "savzix-fragrance",
    name: "Fragrance",
    slug: "fragrance",
    description:
      "Signature scents with layered accords inspired by modern architecture.",
    imageUrl: "https://images.savzix.com/categories/fragrance.jpg",
  },
  wellness: {
    id: "savzix-wellness",
    name: "Wellness",
    slug: "wellness",
    description:
      "Daily rituals blending botanicals and bioactive nutrients for balance.",
    imageUrl: "https://images.savzix.com/categories/wellness.jpg",
  },
};

export const allProducts: Product[] = [
  {
    id: "savzix-radiant-renewal-serum",
    name: "Radiant Renewal Serum",
    slug: "radiant-renewal-serum",
    summary: "Vitamin-C brightening concentrate with stabilized peptides.",
    description:
      "A concentrated treatment powered by encapsulated vitamin C and peptide complexes to visibly brighten, firm, and even tone without irritation. Infused with fermented botanicals for a weightless finish.",
    price: { amount: 84, currency: "USD", precision: 2 },
    category: categories.skincare,
    createdAt: "2025-02-12T08:00:00.000Z",
    tags: ["brightening", "daytime", "peptide"],
    media: ["https://images.savzix.com/products/radiant-renewal-serum.jpg"],
    isFeatured: true,
    available: true,
    variants: [
      {
        id: "savzix-radiant-renewal-30ml",
        name: "30 ml",
        price: { amount: 84, currency: "USD", precision: 2 },
        available: true,
      },
      {
        id: "savzix-radiant-renewal-50ml",
        name: "50 ml",
        price: { amount: 110, currency: "USD", precision: 2 },
        available: true,
      },
    ],
  },
  {
    id: "savzix-velvet-hydra-cream",
    name: "Velvet Hydra Cream",
    slug: "velvet-hydra-cream",
    summary: "Ceramide-rich moisture barrier reinforcer.",
    description:
      "A cushioning daily moisturizer that strengthens the skin barrier with a ceramide complex, hyaluronic acid spheres, and squalane. Leaves skin soft, calm, and hydrated for 24 hours.",
    price: { amount: 68, currency: "USD", precision: 2 },
    category: categories.skincare,
    createdAt: "2025-01-28T08:00:00.000Z",
    tags: ["hydrating", "barrier", "day-night"],
    media: ["https://images.savzix.com/products/velvet-hydra-cream.jpg"],
    isFeatured: false,
    available: true,
  },
  {
    id: "savzix-clarifying-foam-cleanser",
    name: "Clarifying Foam Cleanser",
    slug: "clarifying-foam-cleanser",
    summary: "pH-balanced cleanser with micro-foam technology.",
    description:
      "A gentle, sulphate-free cleanser that lifts impurities with plant-derived surfactants and micro-foam technology. Includes niacinamide and willow bark to refine pores and balance oil.",
    price: { amount: 32, currency: "USD", precision: 2 },
    category: categories.skincare,
    createdAt: "2024-12-15T08:00:00.000Z",
    tags: ["cleanser", "niacinamide"],
    media: ["https://images.savzix.com/products/clarifying-foam-cleanser.jpg"],
    isFeatured: false,
    available: true,
  },
  {
    id: "savzix-midnight-repair-oil",
    name: "Midnight Repair Oil",
    slug: "midnight-repair-oil",
    summary: "Overnight recovery oil with bakuchiol and blue tansy.",
    description:
      "A restorative night oil that layers cold-pressed botanicals with bakuchiol, blue tansy, and CoQ10 for smoother, supple skin by morning. Absorbs quickly without residue.",
    price: { amount: 92, currency: "USD", precision: 2 },
    category: categories.skincare,
    createdAt: "2025-03-06T08:00:00.000Z",
    tags: ["night", "bakuchiol", "retinol-alternative"],
    media: ["https://images.savzix.com/products/midnight-repair-oil.jpg"],
    isFeatured: true,
    available: true,
  },
  {
    id: "savzix-volume-shampoo",
    name: "Weightless Volume Shampoo",
    slug: "weightless-volume-shampoo",
    summary: "Feather-light cleansing with bio-fermented rice water.",
    description:
      "A silicone-free shampoo that builds root lift with bio-fermented rice water, sea buckthorn, and plant proteins while keeping strands soft and balanced.",
    price: { amount: 34, currency: "USD", precision: 2 },
    category: categories.haircare,
    createdAt: "2025-02-02T08:00:00.000Z",
    tags: ["volume", "silicone-free"],
    media: ["https://images.savzix.com/products/weightless-volume-shampoo.jpg"],
    isFeatured: false,
    available: true,
  },
  {
    id: "savzix-volume-conditioner",
    name: "Weightless Volume Conditioner",
    slug: "weightless-volume-conditioner",
    summary: "Root-lifting conditioner with featherlight hydration.",
    description:
      "Pairs with the Weightless Volume Shampoo to detangle and nourish without heaviness. Formulated with bamboo extract, amino acids, and chia seed oil.",
    price: { amount: 36, currency: "USD", precision: 2 },
    category: categories.haircare,
    createdAt: "2025-02-09T08:00:00.000Z",
    tags: ["volume", "detangling"],
    media: [
      "https://images.savzix.com/products/weightless-volume-conditioner.jpg",
    ],
    isFeatured: false,
    available: true,
  },
  {
    id: "savzix-styling-balm",
    name: "Sculpt & Shield Styling Balm",
    slug: "sculpt-shield-styling-balm",
    summary: "Flexible hold balm with heat protection up to 210°C.",
    description:
      "A lightweight balm that defines texture, boosts shine, and shields hair from heat styling up to 210°C. Enriched with hemisqualane and plant polymers for touchable hold.",
    price: { amount: 28, currency: "USD", precision: 2 },
    category: categories.haircare,
    createdAt: "2024-11-20T08:00:00.000Z",
    tags: ["styling", "heat-protectant"],
    media: ["https://images.savzix.com/products/sculpt-shield-styling-balm.jpg"],
    isFeatured: true,
    available: true,
  },
  {
    id: "savzix-aurora-parfum",
    name: "Aurora Eau de Parfum",
    slug: "aurora-eau-de-parfum",
    summary: "Crisp citrus opening with mineral musk finish.",
    description:
      "Aurora opens with luminous yuzu and pink pepper before settling into mineral musk and white cedar. Crafted for a clean, luminous signature that evolves throughout the day.",
    price: { amount: 118, currency: "USD", precision: 2 },
    category: categories.fragrance,
    createdAt: "2025-03-01T08:00:00.000Z",
    tags: ["citrus", "unisex"],
    media: ["https://images.savzix.com/products/aurora-eau-de-parfum.jpg"],
    isFeatured: true,
    available: true,
  },
  {
    id: "savzix-ember-noir",
    name: "Ember Noir Parfum",
    slug: "ember-noir-parfum",
    summary: "Smoked amber layers with black fig and saffron.",
    description:
      "A bold, atmospheric parfum built around smoked amber, black fig, saffron, and labdanum. Finishes with smoldering palo santo for a lingering warmth.",
    price: { amount: 134, currency: "USD", precision: 2 },
    category: categories.fragrance,
    createdAt: "2024-12-05T08:00:00.000Z",
    tags: ["amber", "evening"],
    media: ["https://images.savzix.com/products/ember-noir-parfum.jpg"],
    isFeatured: false,
    available: true,
  },
  {
    id: "savzix-lumen-mist",
    name: "Lumen Atmosphere Mist",
    slug: "lumen-atmosphere-mist",
    summary: "Signature home scent with bergamot and orris.",
    description:
      "Transform any space with a fine mist of bergamot, orris, and white sage. Safe for textiles and formulated without synthetic propellants.",
    price: { amount: 42, currency: "USD", precision: 2 },
    category: categories.fragrance,
    createdAt: "2025-01-06T08:00:00.000Z",
    tags: ["home", "mist"],
    media: ["https://images.savzix.com/products/lumen-atmosphere-mist.jpg"],
    isFeatured: false,
    available: true,
  },
  {
    id: "savzix-focus-tonic",
    name: "Focus Adaptogenic Tonic",
    slug: "focus-adaptogenic-tonic",
    summary: "Daily concentrate for clarity with lion’s mane and L-theanine.",
    description:
      "Crafted with lion’s mane, bacopa, and L-theanine to support mental clarity and balanced energy. Mix one dropper into still or sparkling water for a bright citrus sip.",
    price: { amount: 58, currency: "USD", precision: 2 },
    category: categories.wellness,
    createdAt: "2025-02-18T08:00:00.000Z",
    tags: ["nootropic", "daily"],
    media: ["https://images.savzix.com/products/focus-adaptogenic-tonic.jpg"],
    isFeatured: true,
    available: true,
  },
  {
    id: "savzix-calm-restore",
    name: "Calm Restore Supplements",
    slug: "calm-restore-supplements",
    summary: "Nightly capsules for deep rest with magnesium bisglycinate.",
    description:
      "A nightly ritual featuring magnesium bisglycinate, reishi extract, and tart cherry to promote restorative sleep and relaxed muscles without grogginess.",
    price: { amount: 64, currency: "USD", precision: 2 },
    category: categories.wellness,
    createdAt: "2024-11-10T08:00:00.000Z",
    tags: ["sleep", "rest"],
    media: ["https://images.savzix.com/products/calm-restore-supplements.jpg"],
    isFeatured: false,
    available: true,
  },
  {
    id: "savzix-balance-elixir",
    name: "Balance Hydration Elixir",
    slug: "balance-hydration-elixir",
    summary: "Electrolyte-rich concentrate with coconut and acerola.",
    description:
      "A refreshing hydration concentrate featuring coconut water powder, acerola vitamin C, and trace minerals to replenish and balance daily. Stir into cold water for a mineral lift.",
    price: { amount: 46, currency: "USD", precision: 2 },
    category: categories.wellness,
    createdAt: "2025-03-10T08:00:00.000Z",
    tags: ["hydration", "electrolyte"],
    media: ["https://images.savzix.com/products/balance-hydration-elixir.jpg"],
    isFeatured: false,
    available: true,
  },
];

export const featured = allProducts.filter((product) => product.isFeatured);

export const newArrivals = [...allProducts]
  .sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
  .slice(0, 6);

export const getProductById = (id: string) =>
  allProducts.find((product) => product.id === id);
