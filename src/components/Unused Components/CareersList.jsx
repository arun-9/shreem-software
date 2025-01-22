import { motion } from "framer-motion";
import { useState } from "react";
import CareerApplicationModal from "../pages/CareersPage/CareerApplicationModal";

const CareersList = ({ jobs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.div
      className="careers-experts-wrapper pt-24 bg-gray-50 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-800 leading-tight">
            Join our team and make a difference with
            <span className="text-blue-600"> professional experts.</span>
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            Explore exciting opportunities and grow with us.
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col justify-between h-full">
                {/* Job Info */}
                <div className="mb-6">
                  <h5 className="text-2xl font-semibold text-gray-800">{job.title}</h5>
                  <span className="text-sm text-blue-600 font-medium">{job.type}</span>
                  <p className="mt-4 text-gray-600 text-sm">{job.description}</p>
                </div>

                {/* Action Button */}
                <div className="mt-auto text-center">
                  <button
                    onClick={openModal}
                    className="px-6 py-3 w-full bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </button>

                  {/* CareerApplicationModal with state handling */}
                  <CareerApplicationModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CareersList;
