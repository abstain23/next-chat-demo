/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CHAT_API_KEY: process.env.CHAT_API_KEY,
    API_BASE_URL: process.env.API_BASE_URL
  }
}

module.exports = nextConfig
