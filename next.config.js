/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CHAT_API_KEY: process.env.CHAT_API_KEY
  }
}

module.exports = nextConfig
