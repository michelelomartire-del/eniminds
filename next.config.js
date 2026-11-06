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
  output: 'export',
  // export statico: nessuna API route, pagina interamente statica
  trailingSlash: true,
}

module.exports = nextConfig
