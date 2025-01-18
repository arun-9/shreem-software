import React from "react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: "💻",
    title: "Innovative Solutions",
    description:
      "We provide cutting-edge, tailor-made software solutions to meet your unique business needs.",
  },
  {
    icon: "⏱️",
    title: "Timely Delivery",
    description:
      "Our dedicated team ensures that projects are completed on time without compromising quality.",
  },
  {
    icon: "🤝",
    title: "Client-Centric Approach",
    description:
      "We work closely with our clients to ensure seamless collaboration and deliver beyond expectations.",
  },
  {
    icon: "🔒",
    title: "Secure & Scalable",
    description:
      "Our solutions are designed with security and scalability in mind, empowering long-term growth.",
  },
];

const WhyChooseUs = () => {
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
          <h2 className="text-4xl font-bold mb-4 text-violet-600">
            Why Choose Shree Software Pvt. Ltd.?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Discover why businesses trust us to deliver exceptional software solutions tailored to
            their needs.
          </p>
        </motion.div>

        {/* Reason Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-violet-500 hover:to-indigo-500 hover:text-white hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 hover:text-white">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
