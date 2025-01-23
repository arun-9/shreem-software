import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaServer, FaReact } from "react-icons/fa";
import img1 from "./web-application-development.png";
import img2 from "./web-solution.png";
import Breadcrumb from "./Breadcrumb";
const WebAppDevelopment = () => {
  return (
    <div className="site-wrapper-reveal">
      <Breadcrumb
        title="Contact"
        links={[
          { label: "Home", to: "/" },
          { label: "Web Application", to: null },
        ]}
      />
      {/* Feature Images Wrapper */}
      <div className="feature-images-wrapper py-24">
        <div className="container mx-auto">
          {/* Content 1 */}
          <div className="content-1 mb-20">
            <div className="flex flex-wrap items-center">
              {/* Left Section: Image */}
              <div className="w-full lg:w-1/2">
                <motion.img
                  src={img1}
                  alt="Web App Development"
                  className="img-fluid rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              {/* Right Section: Text */}
              <div className="w-full lg:w-5/12 lg:ml-auto mt-8 lg:mt-0">
                <motion.div
                  className="text-content"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-2xl font-bold mb-4">Web Application Development</h4>
                  <p className="text-gray-600 mb-6">
                    At <b>Shree Software Pvt. Ltd.</b>, we specialize in creating dynamic and
                    scalable web applications tailored to your business needs. Our expertise ensures
                    your web application is both user-friendly and high-performing across devices.
                  </p>
                  <p className="text-gray-600 mb-6">
                    From front-end design to back-end integration, we deliver end-to-end solutions
                    to keep you ahead of the competition.
                  </p>
                  <a
                    href="#contact"
                    className="ht-btn ht-btn-md bg-indigo-600 text-white py-2 px-4 rounded-md"
                  >
                    Get in Touch
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Content 2 */}
          <div className="content-2 bg-gray-100 py-16">
            <div className="text-center mb-10">
              <h6 className="text-sm font-semibold text-indigo-600 uppercase mb-2">
                Our Expertise
              </h6>
              <h3 className="text-3xl font-bold">Building Scalable & Efficient Web Solutions</h3>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Service Cards */}
              {[
                {
                  title: "Front-End Development",
                  description:
                    "We create visually appealing and responsive front-end solutions using the latest web technologies like React, Angular, and Vue.",
                  icon: <FaDesktop className="text-blue-500 text-4xl" />,
                },
                {
                  title: "Back-End Development",
                  description:
                    "Our back-end development team builds robust and secure APIs using Node.js, Express, and other cutting-edge frameworks.",
                  icon: <FaServer className="text-gray-800 text-4xl" />,
                },
                {
                  title: "Full-Stack Development",
                  description:
                    "We offer full-stack solutions that combine both front-end and back-end technologies to deliver end-to-end web applications.",
                  icon: <FaReact className="text-blue-500 text-4xl" />,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="w-full md:w-1/3 px-4 mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex justify-center py-6">{service.icon}</div>
                    <div className="p-6">
                      <h5 className="text-lg font-bold mb-4">{service.title}</h5>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content 3 */}
          <div className="content-1 mt-20">
            <div className="flex flex-wrap items-center">
              {/* Left Section: Text */}
              <div className="w-full lg:w-5/12">
                <motion.div
                  className="text-content"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-2xl font-bold mb-4">Why Choose Us?</h4>
                  <p className="text-gray-600 mb-6">
                    <b>Shree Software Pvt. Ltd.</b> delivers web solutions that are tailored to meet
                    your business needs, with a focus on high performance, scalability, and ease of
                    use. We ensure seamless user experiences and robust back-end support.
                  </p>
                  <p className="text-gray-600">
                    Our solutions are built for various industries including Retail, Healthcare,
                    Education, E-commerce, and more, ensuring a seamless digital presence for your
                    business.
                  </p>
                </motion.div>
              </div>
              {/* Right Section: Image */}
              <div className="w-full lg:w-1/2 lg:ml-auto mt-8 lg:mt-0">
                <motion.img
                  src={img2}
                  alt="Web Solutions"
                  className="img-fluid rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAppDevelopment;
