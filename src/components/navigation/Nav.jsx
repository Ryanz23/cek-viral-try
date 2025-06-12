// src/components/navigation/Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from './NavItems';
import AuthSection from './AuthSection';
import MobileMenu from './MobileMenu';
import { useAuth } from '../../hooks/useAuth'; 
import { useNavigation } from '../../hooks/navigation hooks/useNavigation';
import { useMobileMenu } from '../../hooks/navigation hooks/useMobileMenu';
import Image from '../../assets/LOGO.svg';

const Nav = () => {
  const { user, isAuthenticated, loading, getDisplayName, logout } = useAuth();
  const { isScrolled } = useNavigation();
  const { isMenuOpen, toggleMenu, closeMenu } = useMobileMenu();

  // Don't render anything while checking auth status
  if (loading) {
    return (
      <header className="bg-white/95 backdrop-blur-md p-4 lg:p-6 shadow-sm fixed top-0 w-full z-50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-shrink-0 z-50">
            <Link to="/">
              <img 
                src={Image} 
                alt="CekViral Logo" 
                className="w-24 sm:w-28 md:w-32 transition-all duration-300" 
              />
            </Link>
          </div>
          <div className="hidden md:flex gap-6 lg:gap-8">
            <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </nav>
        <div className="h-8 lg:h-6"></div>
      </header>
    );
  }

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
            <Link to="/">
              <img 
                src={Image} 
                alt="CekViral Logo" 
                className="w-24 sm:w-28 md:w-32 transition-all duration-300" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <NavItems className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium" />

          {/* Desktop Auth Section */}
          <div className="hidden md:flex">
            <AuthSection
              isAuthenticated={isAuthenticated}
              user={user}
              getDisplayName={getDisplayName}
              logout={logout}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-all duration-300 z-50"
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

      {/* Mobile Menu */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
        isAuthenticated={isAuthenticated}
        user={user}
        getDisplayName={getDisplayName}
        logout={logout}
      />

      {/* Spacer for fixed header */}
      <div className="h-8 lg:h-6"></div>
    </>
  );
};

export default Nav;