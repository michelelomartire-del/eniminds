/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eniminds.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  output: 'standalone',
}

module.exports = nextConfig
