import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaLock, FaDatabase } from "react-icons/fa";
import img1 from "./AWS-Couv.png";
import Breadcrumb from "./Breadcrumb";
import img2 from "./aws3.svg";
const AWSCloudServices = () => {
  return (
    <div className="site-wrapper-reveal">
      <Breadcrumb
        title="Contact"
        links={[
          { label: "Home", to: "/" },
          { label: "AWS Cloud", to: null },
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
                  alt="AWS Cloud Services"
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
                  <h4 className="text-2xl font-bold mb-4">AWS Cloud Services</h4>
                  <p className="text-gray-600 mb-6">
                    At <b>Shree Software Pvt. Ltd.</b>, we leverage Amazon Web Services (AWS) to
                    deliver secure, scalable, and cost-efficient cloud solutions for businesses of
                    all sizes. Our AWS expertise ensures you can focus on innovation while we handle
                    the complexities of cloud management.
                  </p>
                  <p className="text-gray-600 mb-6">
                    From cloud migration to custom solutions, we provide end-to-end AWS services
                    tailored to your business needs.
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
                Powering Your Business with AWS Cloud Solutions
              </h3>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Service Cards */}
              {[
                {
                  title: "Cloud Migration",
                  description:
                    "Seamlessly migrate your applications and infrastructure to AWS with minimal downtime and maximum efficiency.",
                  icon: <FaCloud className="text-blue-500 text-4xl" />,
                },
                {
                  title: "Security & Compliance",
                  description:
                    "Ensure your data and applications are secure with AWS's advanced security features and compliance certifications.",
                  icon: <FaLock className="text-green-500 text-4xl" />,
                },
                {
                  title: "Data Storage & Management",
                  description:
                    "Store and manage your data securely with AWS's scalable storage options like S3, RDS, and DynamoDB.",
                  icon: <FaDatabase className="text-purple-500 text-4xl" />,
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
                  <h4 className="text-2xl font-bold mb-4">Why Choose AWS with Us?</h4>
                  <p className="text-gray-600 mb-6">
                    <b>Shree Software Pvt. Ltd.</b> has a dedicated team of AWS-certified experts
                    ready to help you unlock the full potential of cloud computing. Whether you're
                    looking to optimize costs, improve scalability, or enhance security, we deliver
                    tailor-made AWS solutions to suit your needs.
                  </p>
                  <p className="text-gray-600">
                    Our solutions cater to industries like Finance, Healthcare, E-commerce, and
                    more, ensuring that your business is cloud-ready for the future.
                  </p>
                </motion.div>
              </div>
              {/* Right Section: Image */}
              <div className="w-full lg:w-1/2 lg:ml-auto mt-8 lg:mt-0">
                <motion.img
                  src={img2}
                  alt="AWS Expertise"
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

export default AWSCloudServices;
