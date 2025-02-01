import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { HiCloud, HiShoppingCart, HiDeviceMobile, HiGlobeAlt, HiLightBulb } from "react-icons/hi";
import { motion } from "framer-motion";

const Header = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      name: "AWS Solutions",
      path: "/aws-solutions",
      category: "Cloud & Hosting",
      icon: <HiCloud />,
    },
    {
      name: "E-commerce Solutions",
      path: "/e-commerce-solutions",
      category: "Cloud & Hosting",
      icon: <HiShoppingCart />,
    },
    {
      name: "Mobile Application",
      path: "/mobile-application",
      category: "Development Services",
      icon: <HiDeviceMobile />,
    },
    {
      name: "Web Application",
      path: "/web-applications",
      category: "Development Services",
      icon: <HiGlobeAlt />,
    },
    {
      name: "Software Consulting",
      path: "/software-consulting",
      category: "Development Services",
      icon: <HiLightBulb />,
    },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
                {isServicesDropdownOpen ? <HiChevronUp /> : <HiChevronDown />}
              </button>

              {isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 justify-items-end px-90 mt-2 w-auto bg-violet-400 shadow-lg rounded-lg p-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {["Cloud & Hosting", "Development Services"].map((category) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold border-b pb-2 mb-2">{category}</h3>
                        {services
                          .filter((service) => service.category === category)
                          .map((service) => (
                            <Link
                              key={service.name}
                              to={service.path}
                              onMouseEnter={() => setActiveService(service.name)}
                              onMouseLeave={() => setActiveService(null)}
                              className={`flex items-center space-x-2 px-4 py-2 rounded transition-all ${
                                activeService === service.name
                                  ? "bg-violet-600 text-white scale-105"
                                  : "hover:bg-violet-700"
                              }`}
                            >
                              <span>{service.icon}</span>
                              <span>{service.name}</span>
                            </Link>
                          ))}
                      </div>
                    ))}
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
                    {services.map((service) => (
                      <li key={service.name}>
                        <Link
                          to={service.path}
                          className="flex items-center space-x-2 hover:text-gray-300"
                          onClick={closeMobileMenu}
                        >
                          <span>{service.icon}</span>
                          <span>{service.name}</span>
                        </Link>
                      </li>
                    ))}
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
