import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-violet-800 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          ShreemTech
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden flex flex-col space-y-2 justify-center items-center text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-200">
              Services
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-gray-200">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-violet-700 p-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="block hover:text-gray-200">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="block hover:text-gray-200">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
