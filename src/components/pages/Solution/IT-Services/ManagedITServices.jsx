import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Network Management",
    description:
      "Ensure seamless connectivity and robust network infrastructure with our expert management services.",
    icon: "🌐",
  },
  {
    title: "Cloud Services",
    description: "Leverage scalable and secure cloud solutions tailored to your business needs.",
    icon: "☁️",
  },
  {
    title: "Cybersecurity",
    description:
      "Protect your business with advanced cybersecurity solutions and proactive monitoring.",
    icon: "🔒",
  },
  {
    title: "Helpdesk Support",
    description:
      "Get 24/7 support from our expert technicians to resolve technical issues quickly and efficiently.",
    icon: "🛠️",
  },
];

const ManagedITServices = () => {
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
          <h2 className="text-4xl font-bold text-violet-600 mb-4">Managed IT Services</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Empower your business with our comprehensive and reliable IT services.
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

export default ManagedITServices;
