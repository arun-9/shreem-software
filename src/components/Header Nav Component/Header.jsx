import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-900 shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white nav-logo text-2xl font-bold flex items-center">
          <span role="img" aria-label="coffee" className="mr-2">
            🙏
          </span>{" "}
          Shreem
        </a>

        {/* Menu Toggle Buttons */}
        <button
          id="menu-open-button"
          className="text-white text-2xl lg:hidden"
          onClick={toggleMenu}
          aria-label="Open Menu"
        >
          <FaBars />
        </button>

        {/* Navigation Menu */}
        <motion.div
          className={`fixed top-0 left-0 w-64 h-full bg-gray-900 shadow-lg lg:static lg:shadow-none p-6 lg:p-0 transform transition-transform ease-in-out duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
          initial={{ x: "-100%" }}
          animate={{ x: menuOpen ? 0 : "-100%" }}
          transition={{ duration: 0.5 }}
        >
          <button
            id="menu-close-button"
            className="text-white text-2xl mb-4 lg:hidden"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>
          <ul className="nav-menu flex flex-col lg:flex-row gap-4 lg:gap-8">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-white  px-2 py-1 rounded transition duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link text-white  px-2 py-1 rounded transition duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#menu"
                className="nav-link text-white px-2 py-1 rounded transition duration-300 ease-in-out"
              >
                Service
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#testimonials"
                className="nav-link text-white px-2 py-1 rounded transition duration-300 ease-in-out"
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#team"
                className="nav-link text-white px-2 py-1 rounded transition duration-300 ease-in-out"
              >
                Team
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link text-white px-2 py-1 rounded transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
