import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
          <nav className="hidden xl:flex space-x-8">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <details className="relative group">
              <summary className="hover:text-gray-300 cursor-pointer">Company</summary>
              <ul className="absolute left-0 bg-white text-gray-800 mt-2 p-4 rounded shadow-md space-y-2">
                <li>
                  <Link to="/about-us" className="block hover:text-violet-800">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/why-choose-us" className="block hover:text-violet-800">
                    Why choose us
                  </Link>
                </li>
                <li>
                  <Link to="/our-history" className="block hover:text-violet-800">
                    Our history
                  </Link>
                </li>
              </ul>
            </details>
            <details className="relative group">
              <summary className="hover:text-gray-300 cursor-pointer">IT Solutions</summary>
              <ul className="absolute left-0 bg-white text-gray-800 mt-2 p-4 rounded shadow-md space-y-2">
                <li>
                  <Link to="/it-services" className="block hover:text-violet-800">
                    IT Services
                  </Link>
                </li>
                <li>
                  <Link to="/managed-it-service" className="block hover:text-violet-800">
                    Managed IT Services
                  </Link>
                </li>
                <li>
                  <Link to="/mobileapp-development" className="block hover:text-violet-800">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/software-development" className="block hover:text-violet-800">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link to="/web-design" className="block hover:text-violet-800">
                    Website Designing & Development
                  </Link>
                </li>
                <li>
                  <Link to="/web3" className="block hover:text-violet-800">
                    Web3 Solutions
                  </Link>
                </li>
              </ul>
            </details>
            <Link to="/careers" className="hover:text-gray-300">
              Careers
            </Link>
            <Link to="/contact-us" className="hover:text-gray-300">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="xl:hidden text-white text-2xl" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="bg-violet-700 p-4 mt-2 rounded shadow-md xl:hidden">
            <ul className="space-y-4">
              <li>
                <Link to="/" className="block hover:text-gray-300" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <details>
                  <summary className="cursor-pointer hover:text-gray-300">Company</summary>
                  <ul className="space-y-2 pl-4">
                    <li>
                      <Link
                        to="/about-us"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/why-choose-us"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        Why choose us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/our-history"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        Our history
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="cursor-pointer hover:text-gray-300">IT Solutions</summary>
                  <ul className="space-y-2 pl-4">
                    <li>
                      <Link
                        to="/it-services"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        IT Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/managed-it-service"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        Managed IT Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/mobileapp-development"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/software-development"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        Software Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/web-design"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        Website Designing & Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/web3"
                        className="block hover:text-gray-300"
                        onClick={closeMobileMenu}
                      >
                        Web3 Solutions
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
