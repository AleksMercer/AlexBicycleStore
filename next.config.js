/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/AlexBicycleStore' : '',
  assetPrefix: isProd ? '/AlexBicycleStore/' : '',
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/AlexBicycleStore' : '',
  },
};

module.exports = nextConfig;