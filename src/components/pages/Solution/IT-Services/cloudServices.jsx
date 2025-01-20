import React from "react";
import { motion } from "framer-motion";

const cloudServices = [
  {
    icon: "☁️",
    title: "Cloud Storage",
    description:
      "Store, access, and share your data securely in the cloud. Enjoy scalability, easy access, and robust backup solutions.",
  },
  {
    icon: "⚙️",
    title: "Cloud Computing",
    description:
      "Leverage cloud infrastructure to run applications, perform data processing, and scale your business with high availability.",
  },
  {
    icon: "🔒",
    title: "Cloud Security",
    description:
      "Ensure your data is protected with industry-leading security measures like encryption, firewalls, and real-time monitoring.",
  },
  {
    icon: "📊",
    title: "Cloud Analytics",
    description:
      "Analyze big data with powerful cloud-based analytics tools. Gain insights, make data-driven decisions, and boost efficiency.",
  },
];

const CloudServiceComponent = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Cloud Services</h2>
          <p className="text-lg">
            Elevate your business with our reliable, scalable, and secure cloud solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cloudServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-violet-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition duration-300"
            >
              {/* Icon with aria-label for accessibility */}
              <div className="text-5xl mb-4 text-blue-600" aria-label={service.title}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CloudServiceComponent;
