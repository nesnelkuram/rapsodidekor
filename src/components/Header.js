'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Simple Chevron Down Icon
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block ml-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

// Hamburguer Icon (SVG)
const HamburgerIcon = ({ isOpen }) => (
  <svg
    width="24"
    height="18"
    viewBox="0 0 24 18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className="transition-transform duration-300 ease-in-out"
  >
    {/* Top line */}
    <line
      x1="2"
      y1="3"
      x2="22"
      y2="3"
      className={isOpen ? 'translate-y-[6px] rotate-45 origin-center' : ''}
    />
    {/* Middle line */}
    <line
      x1="2"
      y1="9"
      x2="22"
      y2="9"
      className={isOpen ? 'opacity-0' : ''}
    />
    {/* Bottom line */}
    <line
      x1="2"
      y1="15"
      x2="22"
      y2="15"
      className={isOpen ? '-translate-y-[6px] -rotate-45 origin-center' : ''}
    />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
        document.querySelector('header').classList.add('scrolled-header');
      } else {
        setIsScrolled(false);
        document.querySelector('header').classList.remove('scrolled-header');
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
    <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999999,
        background: 'transparent',
        color: 'white',
        padding: '0',
        transition: 'all 0.3s ease',
        display: 'block',
        width: '100%',
        margin: 0
      }}
      className="w-full header-main"
    >
      <nav className="w-full flex justify-between items-center" style={{position: 'relative', zIndex: 999999, background: (isScrolled || isMenuOpen) ? 'rgba(0, 0, 0, 0.95)' : 'transparent', borderRadius: '0px', padding: '20px 0px', margin: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div className="logo z-50 ml-4 md:ml-[5%]">
          <Link href="/" className="flex items-center" aria-label="Rapsodi Dekor Homepage">
            <Image
              src="/rapsodi_logobeyaz.svg"
              alt="Rapsodi Dekor Logo"
              width={200}
              height={50}
              priority
              className="h-10 w-auto"
            />
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <div className="block md:hidden z-50 mr-0 pr-6 md:pr-12" style={{paddingRight: '24px', marginRight: 0}}>

          <button 
            onClick={toggleMenu} 
            className="w-10 h-10 flex items-center justify-center focus:outline-none text-white"
            aria-label="Toggle menu"
          >
            {/* SVG tabanlı ikon */}
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="nav-right hidden lg:flex items-center gap-8 mr-0 pr-6 xl:pr-12" style={{visibility: 'visible', opacity: 1}}>

          <ul className="flex list-none p-0 items-center gap-8 xl:gap-10" style={{gap: '2rem', display: 'flex', visibility: 'visible'}}>

            <li style={{display: 'block'}}><Link href="/" className="no-underline hover:text-gray-300 transition-colors py-2 border-b-2 border-transparent hover:border-white" style={{color: 'white', textDecoration: 'none'}}>Homepage</Link></li>
            <li style={{display: 'block'}}><Link href="/about" className="no-underline hover:text-gray-300 transition-colors py-2 border-b-2 border-transparent hover:border-white" style={{color: 'white', textDecoration: 'none'}}>About</Link></li>
            {/* Services Dropdown */}
            <li className="relative group" style={{display: 'block'}}>
              <Link href="/services" className="no-underline hover:text-gray-300 transition-colors py-2 border-b-2 border-transparent hover:border-white flex items-center" style={{color: 'white', textDecoration: 'none', display: 'flex'}}>
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
            <li style={{display: 'block'}}><Link href="/contact-us" className="no-underline hover:text-gray-300 transition-colors py-2 border-b-2 border-transparent hover:border-white" style={{color: 'white', textDecoration: 'none'}}>Contact Us</Link></li>
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
                  href="/contact-us" 
                  className="text-2xl font-bold hover:text-[#E9C883] transition-colors"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-sm text-gray-400"> 2023 RapsodiDekor. All rights reserved.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
