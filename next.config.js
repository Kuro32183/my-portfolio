/* eslint-disable no-dupe-keys */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: ['images.microcms-assets.io'],
    disableStaticImages: true,
  },
  // poweredByHeader: false,
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*?)',
  //       headers: [
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //         {
  //           key: 'X-XSS-Protection',
  //           value: '1; mode=block',
  //         },
  //       ],
  //     },
  //   ]
  // },
}
module.exports = nextConfig

// bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  // config
})

// chunks
module.exports = {
  // experimental: {
  //   granularChunks: true,
  //   //
  //   browsersListForSwc: true,
  //   legacyBrowsers: false,
  // },
  productionBrowserSourceMaps: true,
  images: {
    loader: 'custom',
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
}
