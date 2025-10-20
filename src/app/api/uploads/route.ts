import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    const { type, name } = file as File;

    if (!type?.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image uploads are supported." },
        { status: 400 },
      );
    }

    const token = process.env.BLOB_READ_WRITE_TOKEN;

    if (!token) {
      console.error("BLOB_READ_WRITE_TOKEN is not configured.");
      return NextResponse.json(
        { error: "Upload configuration is missing." },
        { status: 500 },
      );
    }

    const { url } = await put(`products/${Date.now()}-${name}`, file, {
      access: "public",
      token,
    });

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Blob upload failed:", error);
    return NextResponse.json({ error: "Unable to upload image." }, { status: 400 });
  }
}
