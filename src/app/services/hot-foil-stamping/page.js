import Image from 'next/image';

// Define metadata for SEO
export const metadata = {
  title: 'Hot-Foil Stamping Services | Rapsodi Dekor',
  description: 'Premium hot foil stamping applications on glass surfaces for an eye-catching look. Multi-color and high-quantity capabilities.',
};

export default function HotFoilStampingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/hotfoil.jpg" // Image from homepage showcase
          alt="Hot-Foil Stamping example"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="absolute z-0"
          priority
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */} {/* Dark overlay REMOVED */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
            Hot-Foil Stamping
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Adding Shine with Hot Foil</h2>
          <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
            <p>RAPSODİ DEKOR applies hot foil gilding printing on glass surfaces. In addition, with its fully automatic hot foil machine lines, it can print on cam products of all sizes and shapes in high quantity, as well as foil and multi-color printing at the same time.</p>
          </div>
        </div>
      </section>
    </>
  );
}
