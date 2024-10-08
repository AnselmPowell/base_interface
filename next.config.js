
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.DJANGO_BASE_URL || 'https://web-production-040d2.up.railway.app'}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;