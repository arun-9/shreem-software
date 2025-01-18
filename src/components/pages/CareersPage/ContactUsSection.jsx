import React from "react";
import { motion } from "framer-motion";

const ContactUsSection = () => {
  return (
    <motion.div
      className="contact-us-section-wrapper bg-gray-100 py-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold">
              Obtaining further information by <span className="text-blue-600">making contact</span>{" "}
              with our experienced IT staff.
            </h3>
            <p className="text-gray-700">
              We’re available for 8 hours a day! <br />
              Contact us to require a detailed analysis and assessment of your plan.
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="text-center bg-white shadow-lg rounded-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 text-white rounded-full p-4">
                <span className="fas fa-envelope text-2xl"></span>
              </div>
            </div>
            <h6 className="text-lg font-medium">Reach out now!</h6>
            <h2 className="text-2xl font-bold mt-2">
              <a href="mailto:hr@techaiinc.com" className="text-blue-600 hover:underline">
                hr@shreem.com
              </a>
            </h2>
            <div className="mt-6">
              <a
                href="mailto:hr@techaiinc.com"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Mail us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUsSection;
