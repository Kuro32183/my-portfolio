module.exports = {
  siteUrl: process.env.SITE_URL || 'https://my-portfolio-kuro32183.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/footer' },
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/404'],
  sitemapSize: 7000,
  generateIndexSitemap: true,
  outDir: './public',
}
