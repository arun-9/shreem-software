import { motion } from "framer-motion";

const CareerApplicationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 modal fade flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg w-full max-w-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="fixed inset-0 modal fade show z-50 flex items-center justify-center"
          role="dialog"
          aria-labelledby="centeredModalLabel"
          aria-modal="true"
        >
          <div className="bg-white rounded-lg w-11/12 md:w-1/2 lg:w-1/3 shadow-lg">
            <div className="flex justify-between items-center p-4 border-b">
              <h5 id="centeredModalLabel" className="text-xl font-semibold">
                Career Application Form
              </h5>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <div className="p-4">
              <form>
                <div className="space-y-4 text-left">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                      Select Position
                    </label>
                    <select
                      id="position"
                      name="position"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="" disabled selected>
                        Select a position
                      </option>
                      <option value="AI Technologist">AI Technologist</option>
                      <option value="PHP Developer">PHP Developer</option>
                      <option value=".NET Developer">.NET Developer</option>
                      <option value="Flutter Developer">Flutter Developer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                      Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="" disabled selected>
                        Select your experience level
                      </option>
                      <option value="0-1 years">0-1 years</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                      Upload Resume
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={onClose}
                    type="button"
                    className="px-4 py-2 mr-2 text-sm text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CareerApplicationModal;
