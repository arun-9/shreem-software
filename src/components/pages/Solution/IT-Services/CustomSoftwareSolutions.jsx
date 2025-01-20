import React from "react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Enterprise Applications",
    description:
      "Streamline your business operations with scalable and secure enterprise applications built to fit your needs.",
    icon: "🌐",
  },
  {
    title: "E-Commerce Platforms",
    description:
      "Empower your business with modern e-commerce platforms that offer seamless shopping experiences.",
    icon: "🛒",
  },
  {
    title: "Mobile Apps",
    description:
      "Reach your customers anywhere with intuitive and user-friendly mobile applications.",
    icon: "📱",
  },
  {
    title: "Custom ERP Solutions",
    description: "Optimize your business processes with robust and tailor-made ERP systems.",
    icon: "⚙️",
  },
];

const CustomSoftwareSolutions = () => {
  return (
    <section className="py-16 bg-violet-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-violet-600 mb-4">
            Custom Software Solutions That Best Fit Your Business
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We provide cutting-edge software solutions designed to meet your business requirements
            and drive growth.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4 text-violet-600">{solution.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-violet-600">{solution.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomSoftwareSolutions;
