import React from "react";
import { motion } from "framer-motion";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";

const clientImages = [
  {
    src: img1,
    alt: "netzwerk",
  },
  {
    src: img2,
    alt: "Untitled-design-1",
  },
  {
    src: img3,
    alt: "bhutan-believe",
  },
  {
    src: img4,
    alt: "iaps",
  },
  {
    src: img5,
    alt: "2 (2)",
  },
  {
    src: img6,
    alt: "Instagram-42-1-1024x367-1",
  },
  {
    src: img7,
    alt: "malabar",
  },
  {
    src: img8,
    alt: "mayalogo",
  },
  {
    src: img9,
    alt: "Untitled",
  },
];

const RecentClients = () => {
  return (
    <section className="p-12 bg-violet-50">
      <div className="container mx-auto text-center">
        {/* Animated Heading */}
        <motion.h3
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-900 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Recent Clients
        </motion.h3>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          {/* Mobile Grid Layout (two images per row) */}
          <div className="block sm:hidden grid grid-cols-2 gap-8">
            {clientImages.map((client, index) => (
              <div key={index} className="flex justify-center">
                <img src={client.src} alt={client.alt} className="h-16 w-auto object-contain" />
              </div>
            ))}
          </div>

          {/* Swiper for larger screens */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false, // Ensures autoplay resumes after interaction
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
            className="hidden sm:block w-full"
          >
            {clientImages.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <img src={client.src} alt={client.alt} className="h-20 w-auto object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentClients;
