/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"], // Forces Next.js to serve fast formats
  },
};

export default nextConfig;
