// src/components/navigation/NavItems.jsx
import React from "react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navigation";

const NavItems = ({ className = "", onClick, isMobile = false }) => {
  return (
    <ul className={className}>
      {NAV_ITEMS.map((item, index) => (
        <li key={item.name}>
          <Link
            to={item.to}
            onClick={onClick}
            className={`${
              isMobile
                ? "flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 group"
                : "text-gray-700 hover:text-transparent transition-all duration-300 relative group py-2 hover:bg-gradient-to-r hover:from-blue-main hover:to-green-main hover:bg-clip-text"
            }`}
            style={isMobile ? { animationDelay: `${index * 50}ms` } : undefined}
          >
            {isMobile ? (
              <>
                <span className="font-medium">{item.name}</span>
                <svg
                  className="w-4 h-4 ml-auto transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </>
            ) : (
              <>
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-main to-green-main group-hover:w-full transition-all duration-300"></span>
              </>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
