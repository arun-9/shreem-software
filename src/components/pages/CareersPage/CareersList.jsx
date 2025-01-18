import { motion } from "framer-motion";
import { useState } from "react";
import CareerApplicationModal from "./CareerApplicationModal";

const CareersList = ({ jobs }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);
  return (
    <motion.div
      className="careers-experts-wrapper pt-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold">
            Become a part of our big family to inspire and get inspired by{" "}
            <span className="text-blue-600">professional experts.</span>
          </h3>
        </div>

        {/* Job Listings */}
        <div className="space-y-8">
          {jobs.map((job, index) => (
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Job Info */}
                <div>
                  <h5 className="text-xl font-semibold">{job.title}</h5>
                  <span className="text-gray-600">{job.type}</span>
                </div>

                {/* Job Description */}
                <div>
                  <p className="text-gray-700">{job.description}</p>
                </div>

                {/* Action Button 
                <div className="text-center md:text-right">
                  <button
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                    onClick={() => alert(`Apply for ${job.title}`)}
                  >
                    Get Started
                  </button>
                </div>*/}

                <div className="text-center md:text-right">
                  {/* Button to open the modal */}
                  <button
                    onClick={openModal}
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                  >
                    Apply
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
