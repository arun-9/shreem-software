import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "150+",
    label: "Projects Completed",
  },
  {
    value: "50+",
    label: "Happy Clients",
  },
  {
    value: "10+",
    label: "Years of Experience",
  },
  {
    value: "25+",
    label: "Team Members",
  },
];

const Stats = () => {
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
          <h2 className="text-4xl font-bold mb-4 text-violet-600">Why Businesses Trust Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Numbers that reflect our journey and success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl font-extrabold text-violet-600 mb-2">{stat.value}</div>
              <p className="text-gray-600 dark:text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
