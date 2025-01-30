import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Header = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-violet-800 text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="" alt="Our Logo" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>

            {/* Mega Dropdown for Services */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className="flex items-center space-x-2 hover:text-gray-300 focus:outline-none">
                <span>Services</span>
                <span>{isServicesDropdownOpen ? "▲" : "▼"}</span>
              </button>

              {isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-1 px-90 mt-2 w-[800px] bg-violet-800 shadow-lg rounded-lg p-4"
                >
                  <div className="grid grid-cols-2 gap-4 ">
                    <div>
                      <h3 className="text-lg font-semibold border-b pb-2 mb-2">Cloud & Hosting</h3>
                      <Link
                        to="/aws-solutions"
                        className="block px-4 py-2 hover:bg-violet-700 rounded"
                      >
                        AWS Solutions
                      </Link>
                      <Link
                        to="/e-commerce-solutions"
                        className="block px-4 py-2 hover:bg-violet-700 rounded"
                      >
                        E-commerce Solutions
                      </Link>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold border-b pb-2 mb-2">
                        Development Services
                      </h3>
                      <Link
                        to="/android-ios-cross-platform"
                        className="block px-4 py-2 hover:bg-violet-700 rounded"
                      >
                        Mobile Application
                      </Link>
                      <Link
                        to="/web-applications"
                        className="block px-4 py-2 hover:bg-violet-700 rounded"
                      >
                        Web Application
                      </Link>
                      <Link
                        to="/software-consulting"
                        className="block px-4 py-2 hover:bg-violet-700 rounded"
                      >
                        Software Consulting Service
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <Link to="/careers" className="hover:text-gray-300">
              Careers
            </Link>
            <Link to="/contact-us" className="hover:text-gray-300">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white text-2xl" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="bg-violet-700 p-4 mt-2 rounded shadow-md lg:hidden">
            <ul className="space-y-4">
              <li>
                <Link to="/" className="block hover:text-gray-300" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <details>
                  <summary className="cursor-pointer hover:text-gray-300">Services</summary>
                  <ul className="space-y-2 pl-4">
                    <li>
                      <Link
                        to="/aws-solutions"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        AWS Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/android-ios-cross-platform"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        Mobile Application
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/web-applications"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        Web Application
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/e-commerce-solutions"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        E-commerce Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/software-consulting"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        Software Consulting Service
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/careers" className="block hover:text-gray-300" onClick={closeMobileMenu}>
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="block hover:text-gray-300"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
