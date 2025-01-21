import React from "react";
import { motion } from "framer-motion";
import img from "./about-image.jpg";
function AboutCompany() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <div className="mb-12 text-left">
          <h6 className="text-lg text-blue-500 font-medium mb-4">ABOUT COMPANY</h6>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Empowering Businesses with <span className="text-blue-500">Innovative Solutions</span>{" "}
            <br />
            at <span className="text-blue-500">Shree Software Pvt. Ltd.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img className="w-full rounded-lg shadow-lg" src={img} alt="Shree Software Vision" />
            <p className="mt-6 text-gray-600 italic">
              At Shree Software Pvt. Ltd., we deliver cutting-edge technology solutions, enabling
              businesses to thrive in a digital-first world.
            </p>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-2xl font-semibold text-gray-800">
              Transforming Ideas into Reality
            </h4>
            <p className="text-gray-700 mt-4">
              Shree Software Pvt. Ltd. specializes in delivering innovative software solutions that
              help businesses streamline their operations, improve efficiency, and achieve
              sustainable growth. Our expertise spans across custom application development, cloud
              services, and advanced data analytics.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              >
                Contact Us Today
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
