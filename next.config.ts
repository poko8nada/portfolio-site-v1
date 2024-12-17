import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ↓↓静的ビルドする場合はコメントを外す
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // ↑↑静的ビルドする場合はコメントを外す

  // async redirects() {
  //     return [
  //       {
  //         source: '/',
  //         destination: '/posts',
  //         permanent: false,
  //       },
  //     ]
  //   },
};

module.exports = nextConfig
