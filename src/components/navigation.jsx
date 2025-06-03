import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/react.svg";
const navigation = () => {
  return (
    <header className="bg-white p-3 shadow-sm fixed top-0 w-full z-50">
      <nav className="flex items-center justify-between w-7xl m-auto ">
        <div>
          <img src={image} alt="logo" />
        </div>
        <ul className="flex gap-3 ">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-red-600 transition-all"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-600 hover:text-amber-300 transition-all"
            >
              ABOUT
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/regist" className="text-gray-600 hover:text-amber-300 transition-all">REGIST</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navigation;
