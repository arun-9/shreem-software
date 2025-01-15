import React from "react";
import { motion } from "framer-motion"; // For adding animation effects
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
const Service = () => {
  return (
    <div className="App">
      <section className="py-8 bg-purple-100">
        {" "}
        {/* Light violet background */}
        <div className="container mx-auto text-center mb-8 px-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h2 className="text-4xl font-bold text-purple-700">Our Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Development"
              description="At Shreem Software Pvt. Ltd., we specialize in creating dynamic and responsive websites that not only look great but also deliver exceptional user experiences."
              imgUrl="https://static.wixstatic.com/media/3c9100_12bfbed658cb4388a417b5e7cd9faf58~mv2.png"
            />
            <ServiceCard
              title="App Development"
              description="We offer end-to-end mobile app development services for iOS and Android platforms, creating user-friendly apps that provide seamless experiences."
              imgUrl="https://static.wixstatic.com/media/3c9100_a54ed9569735492c909bdb7c4b8ea22d~mv2.png"
            />
            <ServiceCard
              title="Custom Software Development"
              description="We design and develop custom software solutions that are specifically tailored to address unique business challenges."
              imgUrl="https://static.wixstatic.com/media/3c9100_bf2fbb6b9dcc4356a9b91423dadce381~mv2.png"
            />
            <ServiceCard
              title="Cloud Solutions"
              description="We offer scalable and secure cloud computing services to help businesses store, manage, and process data, ensuring efficiency and growth in a cloud-based environment."
              imgUrl={img4}
            />
            <ServiceCard
              title="UI/UX Design"
              description="Our design team creates intuitive, user-friendly interfaces and seamless experiences, focusing on how users interact with your product and ensuring a satisfying journey."
              imgUrl={img5}
            />
            <ServiceCard
              title="DevOps"
              description="We provide comprehensive DevOps services to streamline development and operations, allowing for faster, more efficient delivery of software solutions."
              imgUrl={img6}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, description, imgUrl }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-purple-700 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default Service;
