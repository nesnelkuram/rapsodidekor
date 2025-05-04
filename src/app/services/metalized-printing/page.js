import Image from 'next/image';

// Define metadata for SEO
export const metadata = {
  title: 'Metalized Printing Services | Rapsodi Dekor',
  description: 'Achieve stunning mirror-like metallic effects on products with our high-capacity metalized printing lines. Ideal for cosmetics and home decoration.',
};

export default function MetalizedPrintingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/metalize.jpg" // Image from homepage showcase
          alt="Metalized Printing example"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="absolute z-0"
          priority
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */} {/* Dark overlay REMOVED */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
            Metalized Printing
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Stunning Metallic Mirror Effects</h2>
          <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
            <p>RAPSODI DEKOR applies in its painting lines Metalized printings that enable the product to shine and reflect like a mirror, which is also called the mirror effect.</p>
            <p>Our high capacity for metalized printing works, which are especially sought for in cosmetics and home decoration sectors today, provide a wide product diversity to our customer companies.</p>
          </div>
        </div>
      </section>
    </>
  );
}
