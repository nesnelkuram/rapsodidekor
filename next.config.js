/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export' satırını kaldırdık - API route'larının çalışabilmesi için
  reactStrictMode: true, // Geliştirme sırasında hataları erken yakalamaya yardımcı olur
  images: {
    // Vercel'de görüntü optimizasyonunu etkinleştiriyoruz
    domains: [], // Harici görüntülere ihtiyacınız varsa buraya domain ekleyebilirsiniz
    formats: ['image/webp'], // WebP formatını destekle
  },
  // Font dosyalarının doğru şekilde sunulması için headers
  async headers() {
    return [
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
