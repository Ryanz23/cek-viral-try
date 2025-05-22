import React from 'react';

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg w-full">
            <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">
                    <div className="flex items-center">
                        <a href="/">
                            <img
                                className="h-8 w-auto"
                                src="../src/assets/cekviral.png"
                                alt="Workflow"
                            />
                        </a>
                        <ul className="flex gap-6 ml-10 items-center">
                            <li>
                                <a href="/" className="text-white hover:text-gray-300">Home</a>
                            </li>
                            <li>
                                <a href="/about" className="text-white hover:text-gray-300">History</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;