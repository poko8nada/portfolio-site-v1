import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/posts',
        permanent: false,
      },
    ]
  },
}
module.exports = {
  images: {
    domains: ['picsum.photos'],
  },
};

export default nextConfig;
