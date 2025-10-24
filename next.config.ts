import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    domains: ["lh3.googleusercontent.com"], // ✅ allow Googleusercontent images
  },
};

export default nextConfig;
