/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: '/',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        },
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        }
      ]
    }
  ]
}

export default config
