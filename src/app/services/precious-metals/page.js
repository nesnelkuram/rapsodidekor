import Image from 'next/image';

// Define metadata for SEO
export const metadata = {
  title: 'Precious Metals Application | Rapsodi Dekor',
  description: 'Enhance your products with genuine gold, platinum, or copper details for ultimate luxury and a vivid look.',
};

export default function PreciousMetalsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/precious.jpg" // Image from homepage showcase
          alt="Precious Metals application example"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="absolute z-0"
          priority
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */} {/* Dark overlay REMOVED */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
            Precious Metals Application
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Ultimate Luxury with Precious Metals</h2>
          <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
             <p>RAPSODI DEKOR applies precious metal printing, which enables the products to look shinier, higher quality and vivid. By firing gold, platinum and copper (rose) varieties in 600-degree furnaces; it offers a wide range of Precious Product variety.</p>
          </div>
        </div>
      </section>
    </>
  );
}
