import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "📱",
    title: "Native App Development",
    description: "Build high-performance apps for iOS and Android with native technologies.",
  },
  {
    icon: "🌐",
    title: "Cross-Platform Solutions",
    description:
      "Develop apps that work seamlessly across multiple platforms with a single codebase.",
  },
  {
    icon: "🔒",
    title: "Secure & Scalable",
    description: "Ensure data security and scalability to handle millions of users with ease.",
  },
  {
    icon: "🎨",
    title: "Custom UI/UX Design",
    description: "Deliver exceptional user experiences with intuitive and attractive designs.",
  },
];

const MobileAppDevelopment = () => {
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
          <h2 className="text-4xl font-bold text-violet-600 mb-4">Mobile App Development</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Turn your ideas into powerful and user-friendly mobile applications.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center hover:shadow-xl hover:bg-violet-100 dark:hover:bg-gray-700 transition duration-300"
            >
              <div className="text-5xl mb-4 text-violet-600">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-violet-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppDevelopment;
