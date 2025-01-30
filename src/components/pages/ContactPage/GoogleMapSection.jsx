import React from "react";
import { motion } from "framer-motion";
import { FaLandmark } from "react-icons/fa"; // Landmark icon
import { FaMapMarkerAlt } from "react-icons/fa"; // Current Location icon

const GoogleMapSection = () => {
  return (
    <motion.section
      id="map-section"
      className="bg-gray-100 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <FaLandmark className="text-blue-500 w-6 h-6" /> {/* Landmark Icon */}
          Our Location
        </h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <motion.div
            className="w-full h-96 relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Current Location Icon 
            <FaMapMarkerAlt className="absolute top-12rem right-6 text-red-500 w-8 h-8" />*/}

            <iframe
              title="Google Maps"
              aria-label="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7774.419104048112!2d77.57575914911406!3d13.022323507962525!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737872181246!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              allowFullScreen=""
              className="border-0"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default GoogleMapSection;
