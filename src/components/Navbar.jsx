import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import Service from "./ServiceCard/ServiceCard";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-violet-800 text-white p-2 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Shreem
        </Link>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <HiMenuAlt1 size={24} /> : <HiMenuAlt3 size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li className="cursor-pointer">
              <Link to="/" className="pb-2">
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/about" className="pb-2">
                About
              </Link>
            </li>

            {/*<li className="cursor-pointer">
              <Link to="/contact" className="pb-2">
                Contact
              </Link>
            </li>*/}
            {/* Phone number section */}
            <div className="flex items-center gap-4">
              <li>
                <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
              </li>
              <li>
                <div>
                  <p className="text-sm">Call us on</p>
                  <p className="text-lg">
                    <a href="tel:+91123456789">+91 123456789</a>
                  </p>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-violet-700 p-3">
          <ul className="space-y-3">
            <li>
              <Link to="/" className="block hover:text-gray-200" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-gray-200" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>

            {/*<li>
              <Link to="/contact" className="block hover:text-gray-200" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>*/}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
