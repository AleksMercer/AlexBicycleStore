/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/AlexBicycleStore',
  assetPrefix: '/AlexBicycleStore/',
  images: { unoptimized: true },
};

module.exports = nextConfig;
