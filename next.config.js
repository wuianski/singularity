/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  env: {
    UNZIP_URL: process.env.UNZIP_URL,
  },
  images: {
    domains: [`${process.env.IMG_URL}`],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.IMG_DOMAIN}`,
        port: '',
        pathname: '/work-photo/**',
      },
    ],
  },
};

module.exports = nextConfig