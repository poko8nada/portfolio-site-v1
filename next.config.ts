import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
// ↓↓静的ビルドする場合はコメントを外す
  // output: 'export',
  // trailingSlash: true,
// ↑↑静的ビルドする場合はコメントを外す
  images: {
    domains: ['picsum.photos'],
  },
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
