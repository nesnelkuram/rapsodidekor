/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Statik HTML/CSS/JS olarak export etmek için
  // reactStrictMode: true, // İsteğe bağlı: Strict Mode'u etkinleştirebilirsiniz
  images: {
    unoptimized: true, // Görüntü optimizasyonunu devre dışı bırakma (static export için gerekli)
  },
};

module.exports = nextConfig;
