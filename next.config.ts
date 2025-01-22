import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "images.unsplash.com",
      'assets.aceternity.com'
    ],
  },
};

export default nextConfig;
