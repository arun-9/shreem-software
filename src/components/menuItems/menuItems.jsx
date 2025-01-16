import React from "react";
import { motion } from "framer-motion";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
const menuItems = [
  {
    image: "https://static.wixstatic.com/media/3c9100_12bfbed658cb4388a417b5e7cd9faf58~mv2.png",
    alt: "Web Development",
    name: "Web Development",
    description:
      "At Shreem Software Pvt. Ltd., we specialize in creating dynamic and responsive websites that not only look great but also deliver exceptional user experiences.",
  },
  {
    image: "https://static.wixstatic.com/media/3c9100_a54ed9569735492c909bdb7c4b8ea22d~mv2.png",
    alt: "App Development",
    name: "App Development",
    description:
      "We offer end-to-end mobile app development services for iOS and Android platforms, creating user-friendly apps that provide seamless experiences.",
  },
  {
    image: "https://static.wixstatic.com/media/3c9100_bf2fbb6b9dcc4356a9b91423dadce381~mv2.png",
    alt: "Custom Software Development",
    name: "Custom Software Development",
    description:
      "We design and develop custom software solutions that are specifically tailored to address unique business challenges.",
  },
  {
    image: img4,
    alt: "Cloud Solutions",
    name: "Cloud Solutions",
    description:
      "We offer scalable and secure cloud computing services to help businesses store, manage, and process data, ensuring efficiency and growth in a cloud-based environment.",
  },
  {
    image: img5,
    alt: "UI/UX Design",
    name: "UI/UX Design",
    description:
      "Our design team creates intuitive, user-friendly interfaces and seamless experiences, focusing on how users interact with your product and ensuring a satisfying journey.",
  },
  {
    image: img6,
    alt: "DevOps",
    name: "DevOps",
    description:
      "We provide comprehensive DevOps services to streamline development and operations, allowing for faster, more efficient delivery of software solutions.",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="menu-section py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-center mb-8 text-gray-800">
          Our Services
        </h2>
        <motion.ul
          className="menu-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              className="menu-item bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="menu-image w-full h-48 object-cover"
              />
              <div className="menu-details p-4 text-center">
                <h3 className="name text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text text-gray-600">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default MenuSection;
