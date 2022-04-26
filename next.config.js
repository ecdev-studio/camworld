/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
    domains: ['http://localhost:3000/'],
  },
}

module.exports = nextConfig
