import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isServicesDropdownOpen) setIsServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <nav className="bg-violet-800 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
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
          <ul className="flex items-center gap-10">
            <li className="group relative cursor-pointer">
              <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Home{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block  ">
                <ul className="space-y-3">
                  <li className="p-2 hover:bg-violet-200">
                    <a href="/about">About us</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="cursor pointer group">
              <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                Services{" "}
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block  ">
                <div className="grid grid-cols-3 gap-5 ">
                  <div className="d-200 overflow-hidden">
                    <img
                      className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      src="https://picsum.photos/200"
                      alt="pics"
                    />
                  </div>
                  <div className="col-span-2">
                    <h1 className="pb-3 text-xl font-semibold">Best Selling</h1>
                    <p className="text-sm text-slate-600">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                      exercitationem delectus iusto animi aperiam deleniti reprehenderit doloribus,
                      numquam corporis quae.
                    </p>
                    <div className="grid grid-cols-3 ">
                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">Development</h1>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Web development
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          IOS App Development
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          App Development
                        </li>
                      </ul>
                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">Other Services</h1>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Cloud Services
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          Mobile App
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-primary">
                          App Development
                        </li>
                      </ul>
                      <div>
                        <img src="https://picsum.photos/180" alt="no image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="cursor pointer">
              <a href="/contact">Contact</a>
            </li>
            {/* Phone number section */}
            <div className="flex items-center gap-4">
              <li>
                <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-primary p-2 text-2xl text-white hover:bg-primary/90" />
              </li>
              <li>
                <div>
                  <p className="text-sm">Call us on</p>
                  <p className="text-lg">
                    {" "}
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
        <div className="md:hidden bg-violet-700 p-4">
          <ul className="space-y-4">
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
            <li>
              <button
                className="block w-full text-left hover:text-gray-200"
                onClick={toggleServicesDropdown}
              >
                Services
              </button>
              {isServicesDropdownOpen && (
                <ul className="space-y-2 pl-4 text-sm">
                  <li className="hover:text-primary cursor-pointer">Web Development</li>
                  <li className="hover:text-primary cursor-pointer">iOS Development</li>
                  <li className="hover:text-primary cursor-pointer">Cloud Services</li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/contact" className="block hover:text-gray-200" onClick={toggleMobileMenu}>
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
