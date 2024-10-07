/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.DJANGO_BASE_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;