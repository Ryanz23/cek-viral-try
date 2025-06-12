// src/components/navigation/MobileMenu.jsx
import React from "react";
import NavItems from "./NavItems";
import AuthSection from "./AuthSection";
import Image from "../../assets/LOGO.svg";
import { Link } from "react-router-dom";

const MobileMenu = ({
  isMenuOpen,
  closeMenu,
  isAuthenticated,
  user,
  getDisplayName,
  logout,
}) => {
  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-40 transform transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link to="/" onClick={closeMenu}>
              <img src={Image} alt="CekViral Logo" className="w-24" />
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* User Section (Mobile) - Show if authenticated */}
          {isAuthenticated && (
            <div className="px-6 py-4 border-b border-gray-100">
              <AuthSection
                isAuthenticated={isAuthenticated}
                user={user}
                getDisplayName={getDisplayName}
                logout={logout}
                isMobile={true}
                onClose={closeMenu}
              />
            </div>
          )}

          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto py-6">
            <NavItems
              className="space-y-2 px-6"
              onClick={closeMenu}
              isMobile={true}
            />
          </div>

          {/* Mobile Auth Section - Show if not authenticated */}
          {!isAuthenticated && (
            <div className="border-t border-gray-100 p-6">
              <AuthSection
                isAuthenticated={isAuthenticated}
                user={user}
                getDisplayName={getDisplayName}
                logout={logout}
                isMobile={true}
                onClose={closeMenu}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
