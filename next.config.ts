import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://upload.wikimedia.org/wikipedia/commons/7/7c/*'),
    ],
  },
};

export default nextConfig;
