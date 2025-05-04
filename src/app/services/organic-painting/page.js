import Image from 'next/image';

// Define metadata for SEO
export const metadata = {
  title: 'Organic Painting Services | Rapsodi Dekor',
  description: 'Eco-friendly water-based organic painting for glass and plastic products with various effects like transparent, opaque, matt, metallic, and soft touch.',
};

export default function OrganicPaintingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/organicpaint.jpg" // Image from homepage showcase
          alt="Organic Painting example"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="absolute z-0"
          priority
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */} {/* Dark overlay REMOVED */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
            Organic Painting
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Vibrant and Eco-Friendly Painting</h2>
          <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
            <p>With automatic conveyor painting lines, RAPSODI DEKOR has a daily capacity of painting 150,000 pieces. Depending on PANTONE color demands, coloring can be made in all main and access colors with environment-friendly water-based paints and painting with different effects (transparent, opaque, matt, metallic, silvery, and soft touch). In addition to glass products; our company can also apply paint on plastic products (PP, PE, Pet).</p>
          </div>
        </div>
      </section>
    </>
  );
}
