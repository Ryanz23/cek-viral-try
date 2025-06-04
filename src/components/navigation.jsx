import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/LOGO.svg";
const navigation = () => {
  return (
    <header className="bg-white p-6 shadow-sm fixed top-0 h-18 w-full z-50">
      <nav className="flex items-center justify-between w-7xl mx-auto ">
        <div>
          <img src={image} alt="logo" className="w-32" />
        </div>
        <ul className="flex gap-3 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-500 transition-all"
            >
              BERANDA
            </Link>
          </li>
          <li>
            <Link
              to="/how-it-works"
              className="text-gray-600 hover:text-blue-500 transition-all"
            >
              CARA KERJA
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-600 hover:text-blue-500 transition-all"
            >
              TENTANG
            </Link>
          </li>
        </ul>
        <ul className="flex gap-3">
          <li>
            <Link to="/login" className="bg-gradient-to-r from-blue-main to-green-main bg-clip-text text-transparent text-sm hover:text-blue-500 transition-all">MASUK</Link>
          </li>
          <li>
            <Link to="/regist" className="bg-gradient-to-r from-blue-main to-green-main bg-clip-text text-transparent text-sm hover:text-blue-500 transition-all">DAFTAR</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navigation;
