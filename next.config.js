/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
    domains: ['http://localhost:3000/', 'http://localhost:5555/'],
  },
  env: {
    BACKEND: `https://backend.ecdevstudio.com/graphql`
  }
}

module.exports = nextConfig
