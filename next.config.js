/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: prod ? '/next-portf/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
