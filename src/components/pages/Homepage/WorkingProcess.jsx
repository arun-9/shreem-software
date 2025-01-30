import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaLaptopCode, FaCogs, FaRocket } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaLightbulb size={50} className="text-yellow-500" />,
    title: "Ideation",
    description: "Brainstorming innovative ideas to solve client challenges.",
  },
  {
    id: 2,
    icon: <FaLaptopCode size={50} className="text-blue-500" />,
    title: "Development",
    description: "Turning ideas into robust software solutions.",
  },
  {
    id: 3,
    icon: <FaCogs size={50} className="text-green-500" />,
    title: "Testing",
    description: "Ensuring quality through rigorous testing processes.",
  },
  {
    id: 4,
    icon: <FaRocket size={50} className="text-red-500" />,
    title: "Deployment",
    description: "Delivering the final product and ensuring a smooth launch.",
  },
];

const WorkingProcess = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Working Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="group bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2, // Creates the wave effect
              }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                {step.title}
              </h3>
              <motion.p
                className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
