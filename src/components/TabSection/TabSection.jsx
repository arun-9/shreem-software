import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "./front-end.png";
import img2 from "./management.png";
import img3 from "./testing.png";
import img4 from "./cloud.png";
import img5 from "./back-end.png";
import img6 from "./database.png";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Front-end Development", image: img1 },
    { id: 2, label: "Project Management and Collaboration", image: img2 },
    { id: 3, label: "Testing and Quality Assurance", image: img3 },
    { id: 4, label: "Cloud and Infrastructure", image: img4 },
    { id: 5, label: "Back-end Development", image: img5 },
    { id: 6, label: "Database Management", image: img6 },
  ];

  return (
    <section className="py-8" id="tab" style={{ backgroundColor: "#F3E5F5" }}>
      <div className="container mx-auto p-6 border rounded-lg shadow-md">
        {/* Section Header */}
        <div className="section-head text-left mb-6">
          <h2 className="section-title text-3xl font-bold mb-2">
            <span className="text-blue-500">Our Technology Expertise</span>
          </h2>
          <p className="text-gray-600">
            Building Your Software Product with Robust Tech Stack
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="tabs-container">
          <ul className="tabs flex gap-4 overflow-x-auto border-b border-gray-300 pb-2">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`tab-slider-trigger tab px-4 py-2 cursor-pointer font-medium transition-all duration-200 ease-in-out border rounded-md ${
                  activeTab === tab.id
                    ? "text-blue-500 border-blue-500 bg-blue-100"
                    : "text-gray-600 hover:text-blue-400 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </li>
            ))}
          </ul>

          {/* Tabs Content */}
          <div className="tab-slider-body mt-6">
            {tabs.map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: activeTab === tab.id ? 1 : 0, x: activeTab === tab.id ? 0 : -50 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className={`tab-content ${activeTab === tab.id ? "block" : "hidden"}`}
              >
                <div
                  className="flex justify-center border p-4 rounded-lg transition-all duration-300 ease-in-out"
                  style={{
                    boxShadow: activeTab === tab.id
                      ? "0 10px 20px rgba(63, 81, 181, 0.3)"
                      : "0 5px 10px rgba(0, 0, 0, 0.1)",
                    borderColor: activeTab === tab.id ? "#3F51B5" : "#E0E0E0",
                  }}
                >
                  <img
                    src={tab.image}
                    alt={tab.label}
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabSection;
