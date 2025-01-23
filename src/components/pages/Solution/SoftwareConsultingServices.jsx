import React from "react";
import { motion } from "framer-motion";
import { FaChartLine, FaCogs, FaLightbulb } from "react-icons/fa";
import img1 from "./consult.avif";
import Breadcrumb from "./Breadcrumb";
const SoftwareConsultingServices = () => {
  return (
    <div className="site-wrapper-reveal">
      <Breadcrumb
        title="Contact"
        links={[
          { label: "Home", to: "/" },
          { label: "Software Consultant", to: null },
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
                  alt="Software Consulting"
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
                  <h4 className="text-2xl font-bold mb-4">Software Consulting Services</h4>
                  <p className="text-gray-600 mb-6">
                    At <b>Shree Software Pvt. Ltd.</b>, we empower businesses by offering expert
                    software consulting services that align with your goals. Our team of experienced
                    consultants helps you plan, develop, and implement customized software solutions
                    to drive efficiency and innovation.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Whether you're looking to adopt new technologies, optimize processes, or build a
                    digital transformation strategy, we are here to guide you every step of the way.
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
              <h3 className="text-3xl font-bold">Tailored Software Solutions for Every Business</h3>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Service Cards */}
              {[
                {
                  title: "Technology Strategy",
                  description:
                    "We help you create a robust IT strategy, aligned with your business objectives, to ensure sustainable growth.",
                  icon: <FaChartLine className="text-blue-500 text-4xl" />,
                },
                {
                  title: "Custom Software Development",
                  description:
                    "Our consulting team helps you design and develop custom software solutions that address your unique challenges.",
                  icon: <FaCogs className="text-gray-800 text-4xl" />,
                },
                {
                  title: "Digital Transformation",
                  description:
                    "Accelerate your business growth with expert guidance on adopting cutting-edge technologies and processes.",
                  icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
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
                    At <b>Shree Software Pvt. Ltd.</b>, we combine industry knowledge, technical
                    expertise, and a client-first approach to deliver impactful consulting services.
                    Our team works closely with you to understand your business challenges and
                    provide solutions that fit your unique needs.
                  </p>
                  <p className="text-gray-600">
                    We have successfully partnered with businesses across industries like
                    Healthcare, Retail, E-commerce, Education, and more, ensuring their software
                    investments deliver measurable results.
                  </p>
                </motion.div>
              </div>
              {/* Right Section: Image */}
              <div className="w-full lg:w-1/2 lg:ml-auto mt-8 lg:mt-0">
                <motion.img
                  src=""
                  alt="Expert Software Consulting"
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

export default SoftwareConsultingServices;
