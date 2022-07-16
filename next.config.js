/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")
const nextConfig = withPWA({
  pwa: { dest: "public", disable: process.env.NODE_ENV === "development" },
  reactStrictMode: true,
})

module.exports = nextConfig
