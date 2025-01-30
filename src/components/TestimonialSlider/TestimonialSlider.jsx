import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

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
  {
    text: "The team at Shree Software provided excellent support and development services. We saw remarkable growth in our operations.",
    name: "Robert Williams",
    role: "Operations Head",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&w=400&fit=max",
  },
  {
    text: "Exceptional experience working with them! Their tech expertise helped us scale our platform seamlessly.",
    name: "Sophia Lee",
    role: "Tech Lead",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=entropy&cs=tinysrgb&w=400&fit=max",
  },
  {
    text: "Shree Software's attention to detail and innovative mindset set them apart from the competition.",
    name: "Daniel Martin",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?crop=entropy&cs=tinysrgb&w=400&fit=max",
  },
];

const TestimonialSlider = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#F3E5F5" }}>
      <div className="container mx-auto px-4">
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

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
