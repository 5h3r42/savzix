import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const preferredRegion = ["sfo1", "pdx1", "iad1"];

const KEY = "cms/products.json";

export async function GET() {
  try {
    const blob = await put(KEY, JSON.stringify({ products: [] }), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
      allowOverwrite: true,
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("CMS init error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to initialize CMS storage." },
      { status: 500 },
    );
  }
}
