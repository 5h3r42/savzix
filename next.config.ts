import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.savzix.com",
      },
    ],
  },
};

export default nextConfig;
