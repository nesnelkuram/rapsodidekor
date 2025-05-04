import Link from 'next/link';

// Simple Chevron Down Icon
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export default function Header() {
  // Enhanced Tailwind classes for better aesthetics and usability
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent text-white p-4 transition-all duration-300">
      {/* Added subtle gradient background */}
      <nav className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link href="/" className="text-xl font-bold no-underline hover:text-gray-300 transition-colors">
            RapsodiDekor
          </Link>
        </div>
        <div className="nav-right flex items-center gap-8">
          <ul className="flex gap-8 list-none p-0 items-center">
            <li><Link href="/about" className="no-underline hover:text-gray-300 transition-colors py-2 border-b-2 border-transparent hover:border-white">About</Link></li>
            {/* Services Dropdown */}
            <li className="relative group">
              <Link href="/services" className="no-underline hover:text-gray-300 transition-colors py-2 border-b-2 border-transparent hover:border-white flex items-center">
                Services <ChevronDownIcon />
              </Link>
              {/* Improved Dropdown Styling */}
              <ul className="absolute left-0 mt-2 w-56 bg-gray-900 bg-opacity-90 rounded-md shadow-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-1">
                <li><Link href="/services/silk-screen-printing" className="block px-4 py-2 text-sm hover:bg-gray-700 rounded transition-colors">Silk Screen Printing</Link></li>
                <li><Link href="/services/hot-foil-stamping" className="block px-4 py-2 text-sm hover:bg-gray-700 rounded transition-colors">Hot-Foil Stamping</Link></li>
                <li><Link href="/services/precious-metals" className="block px-4 py-2 text-sm hover:bg-gray-700 rounded transition-colors">Precious Metals</Link></li>
                <li><Link href="/services/organic-painting" className="block px-4 py-2 text-sm hover:bg-gray-700 rounded transition-colors">Organic Painting</Link></li>
                <li><Link href="/services/metalized-printing" className="block px-4 py-2 text-sm hover:bg-gray-700 rounded transition-colors">Metalized Printing</Link></li>
                <li><Link href="/services/masking" className="block px-4 py-2 text-sm hover:bg-gray-700 rounded transition-colors">Masking</Link></li>
                {/* Coating & Spraying link removed */}
                {/* Decal Application link removed */}
              </ul>
            </li>
            <li><Link href="/about/contact-us" className="no-underline hover:text-gray-300 transition-colors py-2 border-b-2 border-transparent hover:border-white">Contact Us</Link></li>
          </ul>
          {/* Language selector can be added back here if needed */}
        </div>
      </nav>
    </header>
  );
}
