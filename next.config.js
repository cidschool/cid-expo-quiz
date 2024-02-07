/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.GITHUB_PAGES ? 'cid-expo-quiz': '',
  images: { unoptimized: true }
}

module.exports = nextConfig
