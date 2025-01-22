import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaCreditCard, FaTruck } from "react-icons/fa";
import img1 from "./e-commerce1.jpg";

const EcommerceSolutions = () => {
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
                  alt="E-commerce Solutions"
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
                  <h4 className="text-2xl font-bold mb-4">E-commerce Solutions</h4>
                  <p className="text-gray-600 mb-6">
                    At <b>Shree Software Pvt. Ltd.</b>, we specialize in providing customized
                    e-commerce solutions that are scalable, secure, and optimized for a seamless
                    online shopping experience.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Whether you're looking to launch a new store or optimize an existing platform,
                    we offer complete e-commerce solutions to help you grow your online business.
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
                Empowering Your E-commerce Business with Cutting-Edge Solutions
              </h3>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Service Cards */}
              {[
                {
                  title: "E-commerce Store Development",
                  description:
                    "We design and develop user-friendly, mobile-responsive, and feature-rich e-commerce websites using platforms like Shopify, WooCommerce, and Magento.",
                  icon: <FaShoppingCart className="text-green-500 text-4xl" />,
                },
                {
                  title: "Payment Integration",
                  description:
                    "We integrate secure and reliable payment gateways, ensuring smooth and safe transactions for your customers.",
                  icon: <FaCreditCard className="text-gray-800 text-4xl" />,
                },
                {
                  title: "Order Management & Shipping",
                  description:
                    "Our solutions include advanced order management systems, real-time tracking, and efficient shipping integrations to streamline operations.",
                  icon: <FaTruck className="text-blue-500 text-4xl" />,
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
                    <b>Shree Software Pvt. Ltd.</b> provides comprehensive e-commerce solutions that
                    help businesses manage everything from online stores to payment processing and
                    shipping logistics. We focus on delivering secure, high-performing, and scalable
                    platforms for your growing e-commerce business.
                  </p>
                  <p className="text-gray-600">
                    Our solutions are designed to serve industries such as Retail, Fashion,
                    Electronics, and more, ensuring that your e-commerce platform is customized to
                    your business needs.
                  </p>
                </motion.div>
              </div>
              {/* Right Section: Image */}
              <div className="w-full lg:w-1/2 lg:ml-auto mt-8 lg:mt-0">
                <motion.img
                  src="assets/images/banners/ecommerce-screen-2.png"
                  alt="E-commerce Solutions"
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

export default EcommerceSolutions;
