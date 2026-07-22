import type { NextConfig } from "next";
import { securityHeaders } from "./security-headers.mjs";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
