import { NextResponse } from "next/server";
import { head, put } from "@vercel/blob";

export const runtime = "nodejs";

const KEY = "cms/products.json";

async function ensureCmsBlob() {
  try {
    const existing = await head(KEY);
    if (existing?.url) {
      return { url: existing.url };
    }
  } catch (error) {
    if ((error as { status?: number })?.status !== 404) {
      throw error;
    }
  }

  const blob = await put(KEY, JSON.stringify({ products: [] }), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });

  return { url: blob.url };
}

async function handler() {
  try {
    const existing = await head(KEY).catch(() => null);
    if (existing?.url) {
      return NextResponse.json({ url: existing.url });
    }

    const blob = await put(KEY, JSON.stringify({ products: [] }), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
      allowOverwrite: true,
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("CMS init error:", error);
    return NextResponse.json({ error: "Unable to initialize CMS storage." }, { status: 500 });
  }
}

export const GET = handler;
export const POST = handler;
