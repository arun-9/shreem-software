import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    image: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user1.png",
    name: "Sarah Johnson",
    feedback:
      "Shreem Software transformed our business operations with their custom software solutions. Their team’s expertise and dedication ensured we had a seamless experience from start to finish. Highly recommend them!",
  },
  {
    id: 2,
    image: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user2.png",
    name: "James Wilson",
    feedback:
      "The level of professionalism and innovation at Shreem Software is unmatched. Their enterprise software streamlined our processes and boosted our efficiency significantly. Truly a game-changer!",
  },
  {
    id: 3,
    image: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user2.png",
    name: "Michael Brown",
    feedback:
      "Working with Shreem Software was a pleasure. Their team not only understood our unique needs but also delivered a robust and scalable product ahead of schedule. Exceptional service!",
  },
  {
    id: 4,
    image: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user2.png",
    name: "Emily Harris",
    feedback:
      "Shreem Software transformed our business operations with their custom software solutions. Their team’s expertise and dedication ensured we had a seamless experience from start to finish. Highly recommend them!",
  },
  {
    id: 5,
    image: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial22_user2.png",
    name: "Anthony Thompson",
    feedback:
      "The level of professionalism and innovation at Shreem Software is unmatched. Their enterprise software streamlined our processes and boosted our efficiency significantly. Truly a game-changer!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section py-16 bg-gray-50" id="testimonials">
      <motion.h2
        className="section-title text-3xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Testimonials
      </motion.h2>

      <div className="section-content container mx-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="slider-container"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="testimonial p-6 bg-white shadow-md rounded-lg"
            >
              <motion.div
                className="content text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={testimonial.image}
                  alt={`User ${testimonial.name}`}
                  className="user-image w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="name text-lg font-semibold text-gray-700">{testimonial.name}</h3>
                <i className="feedback text-gray-600 mt-2 block">{testimonial.feedback}</i>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
