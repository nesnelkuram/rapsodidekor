import Image from 'next/image';

// Define metadata for SEO
export const metadata = {
  title: 'About Us | Rapsodi Dekor',
  description: 'Learn about Rapsodi Dekor, writing the history of glass decoration since the 1950s. Discover our expertise, capacity, and commitment to quality.',
};

export default function AboutUsPage() {
  return (
    <>
      {/* Simple Header Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800" style={{ fontFamily: 'HaboroContrastNormRegular, sans-serif' }}>
            About Rapsodi Dekor
          </h1>
          <p className="mt-2 text-lg text-gray-600">Our Journey in Glass Decoration Since 1950s</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Optional: Add an image here if desired */}
          {/* <div className="mb-12 relative w-full h-64 rounded-lg overflow-hidden"> */}
          {/*   <Image src="/images/about-us-banner.jpg" alt="Rapsodi Dekor Facility" layout="fill" objectFit="cover" /> */}
          {/* </div> */}
          
          <div className="prose lg:prose-lg max-w-none text-gray-700 space-y-6">
            <p>RAPSODİ DEKOR has been writing the history of glass decoration since the 1950s. Today, as a family company, it is managed together by the 2nd and 3rd generations in Istanbul.</p>
            <p>RAPSODI DEKOR is engaged in serigraph printing and organic painting decoration on glass and plastic bottles, jars, cups and all kinds of similar packaging materials.</p>
            <p>Currently, our company is continuing its activities in 10.000 m2 area with a team of 450+ field specialists.</p>
            <p>Our production is carried out means of high-end full-automatic printing machines as well as automatic wet painting lines.</p>
            <p>Our company has always intended to serve its customers as their solution partner in the packaging field and aimed to take a step further in regard to the quality of its services by investing in and introducing the latest innovations. RAPSODI DEKOR is currently giving service in packaging print and paint on glass and plastic products to valuable companies from cosmetics, food & beverage and glassware-kitchenware sectors.</p>
          </div>
        </div>
      </section>
    </>
  );
}
