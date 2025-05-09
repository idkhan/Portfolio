import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
