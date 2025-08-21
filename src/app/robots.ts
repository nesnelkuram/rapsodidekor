import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://rapsodidekor.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/*.pdf$',
          '/out/',
          '/node_modules/',
          '/_next/',
          '/not-found',
          '/**/not-found',
          '/tr/', // Turkish prefix not needed since it's default
          '/tr/*',
          '/*.bak$',
          '/*.backup$',
          '/*.tmp$',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/not-found',
          '/**/not-found',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/not-found',
          '/**/not-found',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}