import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      className="bg-gray-900 text-white py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-500 text-center mb-8">
          Experience the new wave of <br /> DIGITAL ENGAGEMENT
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p className="mt-4">
              Phone (India): <strong>+91 81057 35575</strong>
            </p>
            <p>
              Phone (International): <strong>+1 (760) 766 2387</strong>
            </p>
            <hr className="my-4 border-t border-purple-500" />
            <p>
              Email:{" "}
              <a href="mailto:contact@shreemsoftware.com" className="text-purple-400 underline">
                contact@shreemsoftware.com
              </a>
            </p>
          </div>
          <motion.form
            className="bg-gray-800 p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Let us get in touch with you!</h3>
            <div className="mb-4">
              <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your First Name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Last Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-purple-500 hover:bg-purple-600 rounded text-white font-semibold"
            >
              Submit
            </button>
          </motion.form>
        </div>
        <p className="text-center mt-8 text-sm text-gray-400">
          Our experts will look into your socials and get in touch with you ASAP.
        </p>
      </div>
    </motion.section>
  );
};

export default ContactSection;
