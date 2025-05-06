'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Simple Chevron Down Icon
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Close services submenu when main menu closes
      setServicesOpen(false);
    }
  };

  // Toggle services submenu
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  // Close mobile menu if window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    // Handle scroll for header background
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleResize();
    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-black' : 'bg-gradient-to-b from-black/70 to-transparent'} text-white p-4`}>
      <nav className="container mx-auto flex justify-between items-center">
        <div className="logo z-50">
          <Link href="/" className="text-xl font-bold no-underline hover:text-gray-300 transition-colors">
            RapsodiDekor
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <div className="md:hidden z-50">
          <button 
            onClick={toggleMenu} 
            className="w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-7 h-6">
              <span 
                className={`absolute h-0.5 w-7 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'rotate-0 top-0'}`}
              />
              <span 
                className={`absolute h-0.5 w-7 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'} top-3`}
              />
              <span 
                className={`absolute h-0.5 w-7 bg-white transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'rotate-0 top-6'}`}
              />
            </div>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-right hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none p-0 items-center">
            <li><Link href="/" className="no-underline hover:text-gray-300 transition-colors py-2 border-b-2 border-transparent hover:border-white">Homepage</Link></li>
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
              </ul>
            </li>
            <li><Link href="/about/contact-us" className="no-underline hover:text-gray-300 transition-colors py-2 border-b-2 border-transparent hover:border-white">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex items-center justify-center md:hidden">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-2 text-[#E9C883]">Menu</h2>
              <div className="w-12 h-1 bg-white mx-auto"></div>
            </div>
            
            <ul className="space-y-6 mb-12">
              <li>
                <Link 
                  href="/" 
                  className="text-2xl font-bold hover:text-[#E9C883] transition-colors"
                  onClick={toggleMenu}
                >
                  Homepage
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-2xl font-bold hover:text-[#E9C883] transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              
              <li className="relative">
                <button 
                  className="text-2xl font-bold hover:text-[#E9C883] transition-colors flex items-center justify-center mx-auto"
                  onClick={toggleServices}
                >
                  Services
                  <span className={`ml-2 transform transition-transform duration-300 ${servicesOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDownIcon />
                  </span>
                </button>
                
                {servicesOpen && (
                  <ul className="mt-4 space-y-3">
                    <li>
                      <Link href="/services/silk-screen-printing" className="text-xl text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
                        Silk Screen Printing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/hot-foil-stamping" className="text-xl text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
                        Hot-Foil Stamping
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/precious-metals" className="text-xl text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
                        Precious Metals
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/organic-painting" className="text-xl text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
                        Organic Painting
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/metalized-printing" className="text-xl text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
                        Metalized Printing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/masking" className="text-xl text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
                        Masking
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              
              <li>
                <Link 
                  href="/about/contact-us" 
                  className="text-2xl font-bold hover:text-[#E9C883] transition-colors"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-sm text-gray-400">© 2023 RapsodiDekor. All rights reserved.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
