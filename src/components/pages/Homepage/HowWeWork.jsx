import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaClipboardList, FaCogs, FaCheckCircle, FaLifeRing } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Understand Requirements",
    description:
      "We collaborate with our clients to thoroughly understand their needs and project goals.",
    icon: <FaLightbulb className="text-blue-600 text-4xl mb-4" />,
  },
  {
    id: 2,
    title: "Plan and Strategize",
    description:
      "We create a detailed plan, including timelines and milestones, ensuring a clear path to success.",
    icon: <FaClipboardList className="text-blue-600 text-4xl mb-4" />,
  },
  {
    id: 3,
    title: "Design and Develop",
    description:
      "Our team designs and develops robust, user-friendly, and efficient solutions tailored to your requirements.",
    icon: <FaCogs className="text-blue-600 text-4xl mb-4" />,
  },
  {
    id: 4,
    title: "Test and Deploy",
    description: "We rigorously test the solutions and ensure a seamless deployment process.",
    icon: <FaCheckCircle className="text-blue-600 text-4xl mb-4" />,
  },
  {
    id: 5,
    title: "Support and Evolve",
    description:
      "Our relationship doesn't end at deployment; we provide ongoing support and evolve the solution as your needs grow.",
    icon: <FaLifeRing className="text-blue-600 text-4xl mb-4" />,
  },
];

const HowWeWork = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How We Work
        </motion.h2>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }} // 'amount' controls how much of the element needs to be in view to trigger animation
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex-shrink-0">{step.icon}</div>
              <div className="bg-white shadow-lg rounded-2xl p-6 text-center md:text-left md:max-w-md">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
