import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-violet-800 to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to take your business to the next level?
        </h2>
        <p className="mb-6 text-lg">
          Discover how we can help you with cutting-edge technology solutions tailored to your
          needs.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 dark:border-gray-500 dark:hover:bg-gray-700 dark:hover:text-white px-6 py-3 rounded-md text-lg font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
