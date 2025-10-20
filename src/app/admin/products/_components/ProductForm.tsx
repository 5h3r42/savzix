"use client";

import { useState, type ChangeEvent } from "react";
import Image from "next/image";

type ProductFormProps = {
  action: (formData: FormData) => void | Promise<void>;
};

export function ProductForm({ action }: ProductFormProps) {
  const [imageUrl, setImageUrl] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setUploading(true);
    setUploadError(null);

    try {
      const data = new FormData();
      data.set("file", file);

      const response = await fetch("/api/uploads", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(body?.error ?? "Upload failed.");
      }

      const body = (await response.json()) as { url?: string };

      if (!body?.url) {
        throw new Error("Upload response missing URL.");
      }

      setImageUrl(body.url);
      setPreviewUrl(body.url);
    } catch (error) {
      console.error("Upload error", error);
      setImageUrl("");
      setPreviewUrl(null);
      setUploadError(error instanceof Error ? error.message : "Unable to upload image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form action={action} className="grid gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-foreground/60 text-xs tracking-[0.3em] uppercase"
        >
          Name *
        </label>
        <input
          id="name"
          name="name"
          required
          className="input"
          placeholder="Radiant Renewal Serum"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="slug"
          className="text-foreground/60 text-xs tracking-[0.3em] uppercase"
        >
          Slug *
        </label>
        <input
          id="slug"
          name="slug"
          required
          className="input"
          placeholder="radiant-renewal-serum"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="category"
          className="text-foreground/60 text-xs tracking-[0.3em] uppercase"
        >
          Category *
        </label>
        <input
          id="category"
          name="category"
          required
          className="input"
          placeholder="Skincare"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="price"
          className="text-foreground/60 text-xs tracking-[0.3em] uppercase"
        >
          Price (£) *
        </label>
        <input
          id="price"
          name="price"
          type="number"
          min="0"
          step="0.01"
          required
          className="input"
          placeholder="84"
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label
          htmlFor="upload"
          className="text-foreground/60 text-xs tracking-[0.3em] uppercase"
        >
          Product image *
        </label>
        <input
          id="upload"
          name="upload"
          type="file"
          accept="image/*"
          className="input"
          onChange={handleFileChange}
          disabled={uploading}
        />
        {uploading && <p className="text-foreground/60 text-xs">Uploading image…</p>}
        {uploadError && <p className="text-destructive text-xs">{uploadError}</p>}
        {imageUrl ? (
          <>
            <input type="hidden" name="imageUrl" value={imageUrl} />
            <div className="flex items-center gap-4">
              <div className="border-foreground/10 relative h-24 w-24 overflow-hidden rounded-lg border">
                {previewUrl ? (
                  <Image
                    src={previewUrl}
                    alt="Uploaded preview"
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <span className="text-foreground/70 text-xs break-all">{imageUrl}</span>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-2">
            <label
              htmlFor="imageUrl"
              className="text-foreground/40 text-xs tracking-[0.3em] uppercase"
            >
              Image URL (manual fallback)
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              required
              className="input"
              placeholder="https://images.savzix.com/products/example.jpg"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label
          htmlFor="description"
          className="text-foreground/60 text-xs tracking-[0.3em] uppercase"
        >
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          required
          className="input textarea"
          placeholder="Detailed description of the product."
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label
          htmlFor="tags"
          className="text-foreground/60 text-xs tracking-[0.3em] uppercase"
        >
          Tags (comma separated)
        </label>
        <input
          id="tags"
          name="tags"
          className="input"
          placeholder="brightening, peptide, daytime"
        />
      </div>
      <div className="flex justify-end sm:col-span-2">
        <button type="submit" className="btn btn-primary px-8">
          Create product
        </button>
      </div>
    </form>
  );
}
