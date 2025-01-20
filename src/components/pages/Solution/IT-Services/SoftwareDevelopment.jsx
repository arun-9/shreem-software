import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "💡",
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your unique business requirements and goals.",
  },
  {
    icon: "🚀",
    title: "Enterprise Applications",
    description:
      "Build scalable and efficient enterprise-grade applications for enhanced productivity.",
  },
  {
    icon: "⚙️",
    title: "Software Integration",
    description:
      "Seamlessly integrate new software with your existing systems for a smooth workflow.",
  },
  {
    icon: "🔍",
    title: "Software Testing & QA",
    description:
      "Ensure flawless performance with rigorous software testing and quality assurance processes.",
  },
];

const SoftwareDevelopment = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-violet-600 mb-4">Software Development</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Empower your business with top-notch software solutions crafted by our expert team.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-xl hover:bg-violet-100 dark:hover:bg-gray-700 transition duration-300"
            >
              <div className="text-5xl mb-4 text-violet-600">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-violet-600 mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareDevelopment;
