/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_TIKTOK_PIXEL_ID: 'CGXXXXXXXXXX', // Replace with actual pixel ID in production
    NEXT_PUBLIC_TIKTOK_CONTENT_ID: 'CGXXXXXXXXXX', // Replace with actual content ID in production
  },
}

module.exports = nextConfig
