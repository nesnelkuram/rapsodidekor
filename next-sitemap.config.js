/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://rapsodidekor.com',
  generateRobotsTxt: false, // We're using app/robots.ts instead
  exclude: [
    '/server-sitemap.xml', // exclude dynamically generated server-side sitemap
    '/private/*',
    '/admin/*',
    '/api/*',
    '/out/*',
  ],
  alternateRefs: [
    {
      href: 'https://rapsodidekor.com',
      hreflang: 'tr',
    },
    {
      href: 'https://rapsodidekor.com/en',
      hreflang: 'en',
    },
    {
      href: 'https://rapsodidekor.com/de',
      hreflang: 'de',
    },
    {
      href: 'https://rapsodidekor.com/fr',
      hreflang: 'fr',
    },
    {
      href: 'https://rapsodidekor.com/es',
      hreflang: 'es',
    },
    {
      href: 'https://rapsodidekor.com/it',
      hreflang: 'it',
    },
    {
      href: 'https://rapsodidekor.com/ru',
      hreflang: 'ru',
    },
    {
      href: 'https://rapsodidekor.com/zh',
      hreflang: 'zh',
    },
  ],
  transform: async (config, path) => {
    // Custom priority based on path importance
    let priority = 0.7
    let changefreq = 'weekly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.includes('/services/')) {
      priority = 0.9
      changefreq = 'weekly'
    } else if (path.includes('/about')) {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path.includes('/contact')) {
      priority = 0.8
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
    ],
  },
}