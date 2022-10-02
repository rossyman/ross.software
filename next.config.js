/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false
  }
}

export default nextConfig
