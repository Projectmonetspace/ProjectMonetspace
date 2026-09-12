import type { NextConfig } from "next";
import { securityHeaders } from "./security-headers.mjs";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(process.env.PM_STATIC_EXPORT === "1" ? {
    output: "export" as const,
    images: { loader: "custom" as const, loaderFile: "./static-image-loader.ts" },
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
