import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🎨",
    title: "Web Design",
    description:
      "Creative and responsive designs tailored to your brand's needs. We ensure visually stunning and user-friendly experiences.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Robust and scalable websites built with the latest technologies to drive your business forward.",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Enhance site speed and performance for seamless user interactions and improved search rankings.",
  },
  {
    icon: "🌐",
    title: "SEO-Friendly Solutions",
    description:
      "Boost your online visibility with websites designed to rank higher on search engines.",
  },
];

const WebDesigningDevelopment = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-violet-600 mb-4">Web Designing & Development</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Transform your digital presence with cutting-edge web design and development services.
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
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-xl hover:bg-violet-50 dark:hover:bg-gray-700 transition duration-300"
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

export default WebDesigningDevelopment;
