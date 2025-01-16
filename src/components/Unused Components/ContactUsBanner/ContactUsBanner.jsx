import React from "react";
import contactUs from "./ContactUsBanner.jpg";
import { Link } from "react-router-dom";

const ContactUsBanner = () => {
  return (
    <div className="bg-violet-100 flex flex-col items-center justify-center py-8 px-6 md:px-12 lg:px-24">
      {/* Content Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-violet-900 mb-4">
          Contact Our Software Engineers
        </h1>
        <p className="text-lg text-violet-700 mb-6">
          Have a question or need assistance? Our team of expert software engineers is here to help.
          Reach out to us now!
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-8 w-full max-w-4xl">
        <Link to="/contact">
          <img
            src={contactUs} // Replace with your image path
            alt="Software Engineers"
            className="rounded-lg shadow-lg w-full cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default ContactUsBanner;
