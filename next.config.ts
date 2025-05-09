import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
