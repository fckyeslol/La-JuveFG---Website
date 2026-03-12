/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow loading local images from the public/images folder
    remotePatterns: [],
  },
  // You can add future configuration here
};

module.exports = nextConfig;