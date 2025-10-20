import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const blob = await put("cms/_diag.txt", "ok", {
      access: "public",
      addRandomSuffix: false,
    });
    return NextResponse.json({ wrote: true, url: blob.url });
  } catch (error) {
    console.error("Blob diagnostic failed:", error);
    return NextResponse.json(
      {
        wrote: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      },
    );
  }
}
