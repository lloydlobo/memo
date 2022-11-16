/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placeimg.com", "flowbite.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
