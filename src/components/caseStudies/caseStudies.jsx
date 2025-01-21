import React from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "E-Commerce Platform Development",
    description:
      "Developed a scalable e-commerce platform that increased client sales by 40% in six months. Integrated seamless payment gateways and user-friendly design.",
    image:
      "https://images.ctfassets.net/wowgx05xsdrr/FuyuOgIBjnHyehF0IR8zY/8109414c34065431d14886a5aad2f60a/Article-Header_Ecommerce_Website.jpg",
  },
  {
    title: "Inventory Management System",
    description:
      "Created an efficient inventory management solution for a retail chain, reducing operational costs by 25%.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMqysJMIKt3vKZZ1rjnB-sqzImnXjBOPPJA&s",
  },
  {
    title: "Custom ERP Solution",
    description:
      "Delivered a robust ERP system for a manufacturing company, improving workflow efficiency and reducing downtime.",
    image:
      "https://www.shutterstock.com/image-photo/erp-enterprise-resource-planning-business-260nw-1464691790.jpg",
  },
];

const CaseStudies = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#F3E5F5" }}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-violet-600 mb-4">Our Projects Make Us Proud</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Our portfolio showcases our ability to create impactful and transformative solutions.
            Here are a few examples of how we have made a difference for our clients.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Each project reflects our commitment to innovation, quality, and client satisfaction.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover hover:opacity-90"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-violet-600 mb-2">{study.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
