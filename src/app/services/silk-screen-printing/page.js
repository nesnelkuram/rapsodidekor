import Image from 'next/image';

// Define metadata for SEO
export const metadata = {
  title: 'Silk Screen Printing Services | Rapsodi Dekor',
  description: 'High-quality silk screen printing directly onto glass and plastic surfaces. Advanced techniques for durability and visual appeal.',
};

export default function SilkScreenPrintingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/silksscreen.jpg" // Updated path if needed
          alt="Silk Screen Printing process"
          layout="fill"
          objectFit="cover"
          quality={85}
          className="absolute z-0"
          priority // Load image eagerly
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div> */} {/* Dark overlay REMOVED */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
            Silk Screen Printing
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">Mastering the Art of Silk Screen</h2>
          <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-4">
            <p><span className="font-semibold">Glass Product:</span> RAPSODI DEKOR, started to use the serigraph printing technique, which is the first and the most important line of production, in 1997. Applying organic, thermoplastic, and UV prints on all kinds of glass packaging; our company offers distinctness to its customers. Additionally, we are also able to transfer the shadow copy of a picture on a glass surface with CMYK printing technique.</p>
            <p><span className="font-semibold">Plastic Product:</span> Our company’s serigraph printing unit is sufficiently qualified to work in all order quantities by means of multi-color and single-color full- and semi-automatic machines as well as manual printing systems.</p>
            <p>Our printing machines are capable of making single-color and multi-color prints on products that has a height range of 2 cm and 40 cm. Depending on our customers’ PANTONE color demands; our company is able to give service in all main and accent print colors.</p>
          </div>
        </div>
      </section>
    </>
  );
}
