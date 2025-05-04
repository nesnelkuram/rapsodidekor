import Image from 'next/image';

// Define metadata for SEO
export const metadata = {
  title: 'Masking Services for Decoration | Rapsodi Dekor',
  description: 'Precision masking techniques for zonal decorations and complex multi-process applications on products.',
};

export default function MaskingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/mask.jpg" // Image from homepage showcase
          alt="Masking technique example"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="absolute z-0"
          priority
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */} {/* Dark overlay REMOVED */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
            Masking
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Precision Masking Techniques</h2>
          <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
            <p>RAPSODI DEKOR; depending on its customers’ demands, makes zonal decorations. This is a decorating technique applied by masking the zones that are requested to remain transparent with max affixation method.</p>
          </div>
        </div>
      </section>
    </>
  );
}
