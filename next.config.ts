import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : '',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  output: 'export',
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
