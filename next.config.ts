import type { NextConfig } from "next";
import { securityHeaders } from "./security-headers.mjs";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Prevent 272px mobile cards from jumping from 384px straight to 640px.
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
    ...(process.env.PM_STATIC_EXPORT === "1"
      ? { loader: "custom" as const, loaderFile: "./static-image-loader.ts" }
      : {}),
  },
  ...(process.env.PM_STATIC_EXPORT === "1" ? {
    output: "export" as const,
  } : {}),
  async headers() {
    if (process.env.PM_STATIC_EXPORT === "1") return [];
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/:asset(hero-video\\.mp4|hero-poster\\.webp)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
