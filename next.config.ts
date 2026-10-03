/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 1. Add this to fix the "Quality 80 not configured" error
    // This defines which quality steps Next.js is allowed to generate
    qualities: [25, 50, 75, 80, 90, 100],

    // 2. Your custom sizes for perfect performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // 3. Performance formats
    formats: ["image/avif", "image/webp"],

    // 4. Remote sources
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
