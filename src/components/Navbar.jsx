import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isApplicationDevOpen, setIsApplicationDevOpen] = useState(false); // state for toggling the dropdown

  const closeDesktopMenu = () => {
    setOpenDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleApplicationDevDropdown = () => {
    setIsApplicationDevOpen(!isApplicationDevOpen); // toggles the dropdown
  };

  return (
    <header className="bg-violet-800 text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto p-2 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="" alt="Our Logo" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>

            <div className="relative group">
              <button className="hover:text-gray-300">Services</button>
              <div className="absolute right-0 mt-2 w-48 bg-violet-800 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Link to="/erp-solutions" className="block px-4 py-2 hover:bg-violet-700">
                  ERP Solutions
                </Link>
                {/* Application Development Dropdown */}
                <div className="relative">
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-violet-700 flex justify-between"
                    onClick={toggleApplicationDevDropdown}
                  >
                    Application Development
                    <span>{isApplicationDevOpen ? "▲" : "▼"}</span> {/* Arrow icon */}
                  </button>
                  {isApplicationDevOpen && ( // conditionally render dropdown
                    <div className="absolute left-full top-0 mt-2 w-48 bg-violet-800 shadow-lg rounded-lg">
                      <Link
                        to="/android-ios-cross-platform"
                        className="block px-4 py-2 hover:bg-violet-700"
                      >
                        Mobile Application
                      </Link>
                      <Link to="/web-applications" className="block px-4 py-2 hover:bg-violet-700">
                        Web Application
                      </Link>
                      <Link to="/web-development" className="block px-4 py-2 hover:bg-violet-700">
                        Web Development
                      </Link>
                      <Link
                        to="/e-commerce-solutions"
                        className="block px-4 py-2 hover:bg-violet-700"
                      >
                        E-commerce Solutions
                      </Link>
                    </div>
                  )}
                </div>
                <Link to="/software-consulting" className="block px-4 py-2 hover:bg-violet-700">
                  Software Consulting Service
                </Link>
              </div>
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
                        to="/erp-solutions"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        ERP Solutions
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
                        to="/web-development"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        Web Development
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
