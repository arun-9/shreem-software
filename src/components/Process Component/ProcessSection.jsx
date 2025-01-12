import React from "react";
import { motion } from "framer-motion";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

const ProcessSection = () => {
  return (
    <section id="process-section" className="bg-violet-50 py-8 px-4">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-violet-900">Efficient & Transparent Process</h2>
          <p className="mt-4 text-lg text-violet-700">
            Artificial Intelligence (AI) CRM solutions are transforming businesses to manage and
            nurture customer relationships.
          </p>
        </motion.div>

        {/* Step 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={img1} alt="Process 1" className="w-24 h-24 mb-4" />
            <h6 className="text-lg font-semibold text-violet-900">Free Consultation Session</h6>
            <p className="text-violet-700">Analyse and gain insights into your Investments</p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={img2} alt="Process 2" className="w-24 h-24 mb-4" />
            <h6 className="text-lg font-semibold text-violet-900">Finalise the Requirements</h6>
            <p className="text-violet-700">Analyse and gain insights into your Investments</p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={img3} alt="Process 3" className="w-24 h-24 mb-4" />
            <h6 className="text-lg font-semibold text-violet-900">Kick Start Work</h6>
            <p className="text-violet-700">Analyse and gain insights into your Investments</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
