import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/">
            <img
              className="h-8 w-auto"
              src="../src/assets/cekviral.png"
              alt="Workflow"
            />
          </a>
          <div className="flex items-center">
            <ul className="flex gap-6 ml-10 items-center">
              <li>
                <a href="/" className="nav">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="nav">
                  History
                </a>
              </li>
              <li>
                <a href="/contact" className="nav">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
