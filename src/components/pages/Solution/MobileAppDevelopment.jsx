import React from "react";
import { motion } from "framer-motion";
import { FaAndroid, FaApple, FaReact } from "react-icons/fa";
import img1 from "./mobile-application-development.jpeg";
import img2 from "./mobile-solution.jpg";
const MobileAppDevelopment = () => {
  return (
    <div className="site-wrapper-reveal">
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
                  alt="Mobile App Development"
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
                  <h4 className="text-2xl font-bold mb-4">Mobile App Development</h4>
                  <p className="text-gray-600 mb-6">
                    At <b>Shree Software Pvt. Ltd.</b>, we specialize in creating high-quality,
                    feature-rich mobile applications tailored to your business needs. From design to
                    deployment, we deliver solutions that help you stay ahead in the digital age.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Whether it's Android, iOS, or cross-platform solutions, our expert team ensures
                    a seamless and engaging user experience.
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
              <h3 className="text-3xl font-bold">
                Crafting Scalable & Innovative Mobile Solutions
              </h3>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Service Cards */}
              {[
                {
                  title: "Android App Development",
                  description:
                    "Leverage the power of Android with our robust and secure mobile apps, designed to captivate your audience.",
                  icon: <FaAndroid className="text-green-500 text-4xl" />,
                },
                {
                  title: "iOS App Development",
                  description:
                    "Create cutting-edge iOS applications that combine elegance and performance for Apple devices.",
                  icon: <FaApple className="text-gray-800 text-4xl" />,
                },
                {
                  title: "Cross-Platform Development",
                  description:
                    "Save time and resources with cross-platform apps built using React Native and Flutter.",
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
                    <b>Shree Software Pvt. Ltd.</b> is dedicated to delivering mobile solutions that
                    align with your business goals. We combine creativity, technology, and industry
                    expertise to ensure your app makes a lasting impact.
                  </p>
                  <p className="text-gray-600">
                    Our team is equipped to handle diverse industries, providing solutions tailored
                    for Retail, Healthcare, Education, E-commerce, and more.
                  </p>
                </motion.div>
              </div>
              {/* Right Section: Image */}
              <div className="w-full lg:w-1/2 lg:ml-auto mt-8 lg:mt-0">
                <motion.img
                  src={img2}
                  alt="Mobile Solutions"
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

export default MobileAppDevelopment;
