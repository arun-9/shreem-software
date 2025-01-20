import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Breadcrumb = ({ title, links }) => {
  return (
    <motion.div
      className="bg-gray-100 py-8"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
          {/* Breadcrumb list */}
          <ul className="mt-4 flex justify-center space-x-4 text-gray-600">
            {links.map((link, index) => (
              <li key={index} className="flex items-center">
                {link.to ? (
                  <Link to={link.to} className="text-blue-600 hover:underline">
                    {link.label}
                  </Link>
                ) : (
                  <span>{link.label}</span>
                )}
                {/* Separator */}
                {index < links.length - 1 && <span className="mx-2">/</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Breadcrumb;
