import React, { useState, useEffect } from 'react';
import Image from '../assets/LOGO.svg';

// Untuk demo, gunakan anchor tag biasa
const Link = ({ to, children, className, onClick }) => (
  <a href={to} className={className} onClick={onClick}>{children}</a>
);

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'BERANDA', to: '/' },
    { name: 'CARA KERJA', to: '/how-it-works' },
    { name: 'TENTANG', to: '/about' }
  ];


  return (
    <>
      <header 
        className={`bg-white/95 backdrop-blur-md p-4 lg:p-6 shadow-sm fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg bg-white/98' : 'shadow-sm'
        }`}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <img 
              src={Image} alt="logo" className="w-24 sm:w-28 md:w-32 transition-all duration-300" />
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="text-gray-700 hover:text-transparent transition-all duration-300 relative group py-2 hover:bg-gradient-to-r hover:from-blue-main hover:to-green-main hover:bg-clip-text before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-main before:to-green-main before:bg-clip-text before:text-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-main to-green-main group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Auth Links */}
          <ul className="hidden lg:flex gap-8 text-sm font-medium">
            <li>
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-transparent transition-all duration-300 relative group py-2 hover:bg-gradient-to-r hover:from-blue-main hover:to-green-main hover:bg-clip-text before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-main before:to-green-main before:bg-clip-text before:text-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                MASUK
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-main to-green-main group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/regist" 
                className="px-6 py-2 bg-gradient-to-r from-blue-main to-green-main text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm font-medium"
              >
                DAFTAR
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-all duration-300 z-50"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 my-1 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0 scale-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-40 transform transition-all duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <img 
              src="/api/placeholder/128/40" 
              alt="logo" 
              className="w-24" 
            />
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-2 px-6">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 group"
                    onClick={closeMenu}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="font-medium">{item.name}</span>
                    <svg className="w-4 h-4 ml-auto transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mobile Auth Section */}
          <div className="border-t border-gray-100 p-6 space-y-3">
            <Link 
              to="/login" 
              className="block w-full text-center px-6 py-3 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium"
              onClick={closeMenu}
            >
              MASUK
            </Link>
            <Link 
              to="/regist" 
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-main to-green-main text-white rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-medium"
              onClick={closeMenu}
            >
              DAFTAR
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-8 lg:h-6"></div>
    </>
  );
};

export default Nav;