import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  // Ensure we can handle large assets like background videos
  experimental: {
    // If you plan on using optimized images later
  },
};

export default nextConfig;