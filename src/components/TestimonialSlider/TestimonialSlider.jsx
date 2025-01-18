import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Shree Software Pvt. Ltd. delivered a seamless e-commerce platform for our business. It boosted our sales by 40%! Highly recommended.",
    name: "Maggie Strickland",
    role: "E-Commerce Manager",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?crop=entropy&cs=tinysrgb&w=400&fit=max",
  },
  {
    text: "Their custom ERP solution streamlined our manufacturing process and reduced downtime significantly.",
    name: "John Doe",
    role: "Manufacturing Lead",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&w=400&fit=max",
  },
  {
    text: "Working with Shree Software was a pleasure! Their innovative approach to our project exceeded our expectations.",
    name: "Alice Johnson",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?crop=entropy&cs=tinysrgb&w=400&fit=max",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-16 bg-violet-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-violet-600">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Hear from our happy clients who have trusted us to deliver exceptional solutions.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
