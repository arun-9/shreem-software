import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import img from "./about-image.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-violet-100">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        {/* Image Section */}
        <motion.div
          className="about-image-wrapper flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={img}
            alt="About"
            className="about-image rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="about-details flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-3xl font-bold mb-4 text-gray-800">About Us</h2>

          <p className=" text-gray-600  leading-relaxed mb-6">
            At{" "}
            <span className="font-bold text-black dark:text-purple-400">
              Shreem Software Pvt. Ltd.
            </span>
            , our mission is to empower businesses with innovative software solutions that drive
            growth, efficiency, and success. Founded on a passion for technology and a commitment to
            excellence, we aim to create software products that solve real-world challenges and
            deliver value to our clients.
          </p>
          <p className="text-gray-600  leading-relaxed mb-6">
            Guided by our core values of integrity, innovation, and collaboration, we strive to be a
            trusted partner for organizations looking to leverage technology for a brighter future.
          </p>
          <div className="social-link-list flex justify-center gap-4">
            <a href="#" className="social-link text-gray-500 hover:text-gray-800 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="social-link text-gray-500 hover:text-gray-800 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="social-link text-gray-500 hover:text-gray-800 text-2xl">
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
