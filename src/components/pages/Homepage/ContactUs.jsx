import React from "react";
import { motion } from "framer-motion";
import img from "./about-image.jpg";
function ContactUs() {
  return (
    <section className="py-16 " style={{ backgroundColor: "#F3E5F5" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Content Section */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h6 className="text-lg text-violet-600 font-medium mb-3">OUR SOLUTION</h6>
              <h3 className="text-3xl sm:text-4xl font-bold text-black leading-snug">
                Revolutionize Your Business with Shree Software Solutions.
              </h3>
            </div>
            <p className="text-black mt-4">
              At Shree Software Pvt. Ltd., we provide advanced, scalable solutions to modernize your
              business operations, enhance efficiency, and drive growth. Let us help you harness the
              power of technology to stay ahead.
            </p>
            <div className="mt-10">
              <a
                href="/contact-us"
                className="bg-gray-100 text-blue-700 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
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
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
