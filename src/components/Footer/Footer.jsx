import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        {/* Copyright Text */}
        <p className="copyright-text mb-4">© 2025 Shree Software Pvt. Ltd.</p>

        {/* Social Links */}
        <div className="social-link-list flex justify-center gap-6 mb-4">
          <a
            href="#"
            className="social-link text-gray-400 hover:text-white text-2xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="social-link text-gray-400 hover:text-white text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="social-link text-gray-400 hover:text-white text-2xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Policy Links 
        <p className="policy-text">
          <a href="#" className="policy-link text-gray-400 hover:text-white">
            Privacy policy
          </a>
          <span className="separator mx-2">•</span>
          <a href="#" className="policy-link text-gray-400 hover:text-white">
            Refund policy
          </a>
        </p>*/}
      </div>
    </footer>
  );
};

export default Footer;
