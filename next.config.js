/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.coinranking.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
