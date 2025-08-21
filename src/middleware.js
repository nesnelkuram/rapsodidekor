import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();
  
  // Define supported locales
  const locales = ['tr', 'en', 'de', 'fr', 'es', 'it', 'ru', 'zh'];
  const defaultLocale = 'tr';

  // Check if pathname starts with locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Skip middleware for specific paths
  const skipPaths = [
    '/api/',
    '/_next/',
    '/favicon.ico',
    '/sitemap.xml',
    '/sitemap-0.xml',
    '/robots.txt',
    '/public/',
    '/images/',
    '/videos/',
    '/fonts/'
  ];

  if (skipPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Handle root path - redirect to Turkish (default)
  if (pathname === '/') {
    return NextResponse.next();
  }

  // Handle locale-specific paths
  if (pathnameHasLocale) {
    const locale = pathname.split('/')[1];
    
    // Validate if it's a supported locale
    if (!locales.includes(locale)) {
      // Redirect invalid locale to 404
      url.pathname = '/not-found';
      return NextResponse.redirect(url);
    }
    
    // Continue to the localized page
    return NextResponse.next();
  }

  // Handle paths without locale prefix (Turkish default behavior)
  // For Turkish, we don't add prefix, so these paths are valid
  const validPaths = [
    '/about',
    '/contact-us',
    '/about/contact-us',
    '/services/hot-foil-stamping',
    '/services/masking',
    '/services/metalized-printing',
    '/services/silk-screen-printing',
    '/services/precious-metals',
    '/services/organic-painting'
  ];

  // Check if it's a valid Turkish path
  if (validPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // For other paths, check if they might be old URLs or typos
  // Redirect common mistakes
  const redirectMap = {
    '/tr': '/',
    '/tr/': '/',
    '/home': '/',
    '/index': '/',
    '/services': '/services/silk-screen-printing',
    '/service': '/services/silk-screen-printing',
    '/hizmetler': '/services/silk-screen-printing',
    '/hakkimizda': '/about',
    '/iletisim': '/contact-us',
    '/contact': '/contact-us'
  };

  if (redirectMap[pathname]) {
    url.pathname = redirectMap[pathname];
    return NextResponse.redirect(url, 301);
  }

  // If none of the above matches, it might be a 404
  // Let Next.js handle it naturally, which will show the not-found page
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images|videos|fonts|public).*)',
  ]
};