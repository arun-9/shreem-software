import React from "react";
import { motion } from "framer-motion"; // For animation effects
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.jpg";

const ProcessSection = () => {
  return (
    <section className="work-process-wrapper py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="section-title mb-8 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-purple-700">How We Work</h2>
        </div>

        {/* First Row */}
        <div className="flex flex-wrap justify-center">
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3 p-4 animate__animated animate__fadeIn animate__delay-1s"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="single-work-step flex flex-col items-center bg-white p-6 rounded-lg shadow-md glow-border">
              <div className="circle-img w-24 h-24 flex items-center justify-center rounded-full mb-4">
                <img src={img1} alt="Step 1" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="content text-center">
                <h4 className="text-xl font-semibold text-purple-700">Book a call</h4>
                <p className="text-gray-700">
                  Booking a call with us can be done in just a minute. Our team is known for their
                  friendliness and we strive to make every call useful and positive.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second Column */}
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3 p-4 animate__animated animate__fadeIn animate__delay-2s"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="single-work-step flex flex-col items-center bg-white p-6 rounded-lg shadow-md glow-border">
              <div className="circle-img w-24 h-24 flex items-center justify-center rounded-full mb-4">
                <img src={img2} alt="Step 2" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="content text-center">
                <h4 className="text-xl font-semibold text-purple-700">Design</h4>
                <p className="text-gray-700">
                  Our company uses an Agile approach to simplify development and help clients
                  visualize the end product.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Third Column */}
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3 p-4 animate__animated animate__fadeIn animate__delay-3s"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="single-work-step flex flex-col items-center bg-white p-6 rounded-lg shadow-md glow-border">
              <div className="circle-img w-24 h-24 flex items-center justify-center rounded-full mb-4">
                <img src={img3} alt="Step 3" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="content text-center">
                <h4 className="text-xl font-semibold text-purple-700">Plan</h4>
                <p className="text-gray-700">
                  At our company, we value a well-planned strategy. Once the designs are finalized
                  and agreed upon, we create a timeline and budget plan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap justify-center">
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3 p-4 animate__animated animate__fadeIn animate__delay-4s"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="single-work-step flex flex-col items-center bg-white p-6 rounded-lg shadow-md glow-border">
              <div className="circle-img w-24 h-24 flex items-center justify-center rounded-full mb-4">
                <img src={img4} alt="Step 4" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="content text-center">
                <h4 className="text-xl font-semibold text-purple-700">Build</h4>
                <p className="text-gray-700">
                  Our team utilizes a variety of coding languages to ensure optimal results for your
                  project. Choose us for excellent outcomes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Fifth Column */}
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3 p-4 animate__animated animate__fadeIn animate__delay-5s"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="single-work-step flex flex-col items-center bg-white p-6 rounded-lg shadow-md glow-border">
              <div className="circle-img w-24 h-24 flex items-center justify-center rounded-full mb-4">
                <img src={img5} alt="Step 5" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="content text-center">
                <h4 className="text-xl font-semibold text-purple-700">Test</h4>
                <p className="text-gray-700">
                  Our QA team stays up-to-date with the latest practices and technologies to ensure
                  efficient performance. We conduct a combination of manual and automated testing.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sixth Column */}
          <motion.div
            className="w-full sm:w-1/2 lg:w-1/3 p-4 animate__animated animate__fadeIn animate__delay-6s"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="single-work-step flex flex-col items-center bg-white p-6 rounded-lg shadow-md glow-border">
              <div className="circle-img w-24 h-24 flex items-center justify-center rounded-full mb-4">
                <img src={img6} alt="Step 6" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="content text-center">
                <h4 className="text-xl font-semibold text-purple-700">Launch</h4>
                <p className="text-gray-700">
                  We're here for you from start to finish to ensure that your launch is stress-free
                  and enjoyable, without any interruptions for snacks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
