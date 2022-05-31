/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.twitchcdn.net', 'images-na.ssl-images-amazon.com'],
  }
}

module.exports = nextConfig
