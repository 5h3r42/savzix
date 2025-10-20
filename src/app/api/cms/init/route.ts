import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
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

  const blob = await put(
    KEY,
    JSON.stringify({ products: [] }),
    {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
    },
  );

  return { url: blob.url };
}

async function handler(_request: NextRequest) {
  try {
    const payload = await ensureCmsBlob();
    return NextResponse.json(payload);
  } catch (error) {
    console.error("Failed to initialize CMS blob:", error);
    return NextResponse.json(
      { error: "Unable to initialize CMS storage." },
      { status: 500 },
    );
  }
}

export const GET = handler;
export const POST = handler;
