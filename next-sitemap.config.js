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
    '/not-found',
    '/**/not-found',
    '/*/robots.txt', // Exclude language-specific robots.txt paths
    '/tr/*', // Exclude Turkish prefix paths since Turkish is default
  ],
  transform: async (config, path) => {
    // Skip invalid or problematic paths
    if (path.includes('/robots.txt') || path.includes('/not-found') || path.startsWith('/tr/')) {
      return null; // Skip this path
    }

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

    // Generate proper alternate refs for each page - no duplication  
    const alternateRefs = [
      {
        href: `https://rapsodidekor.com${path}`,
        hreflang: 'tr',
      },
      {
        href: `https://rapsodidekor.com/en${path}`,
        hreflang: 'en',
      },
      {
        href: `https://rapsodidekor.com/de${path}`,
        hreflang: 'de',
      },
      {
        href: `https://rapsodidekor.com/fr${path}`,
        hreflang: 'fr',
      },
      {
        href: `https://rapsodidekor.com/es${path}`,
        hreflang: 'es',
      },
      {
        href: `https://rapsodidekor.com/it${path}`,
        hreflang: 'it',
      },
      {
        href: `https://rapsodidekor.com/ru${path}`,
        hreflang: 'ru',
      },
      {
        href: `https://rapsodidekor.com/zh${path}`,
        hreflang: 'zh',
      },
    ];

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [],
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