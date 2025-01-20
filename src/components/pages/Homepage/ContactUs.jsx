import React from "react";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <section className="py-16 " style={{ backgroundColor: "#F3E5F5" }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          {/* Content Section */}
          <motion.div
            className="w-full lg:w-1/2 md:w-3/5 text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
