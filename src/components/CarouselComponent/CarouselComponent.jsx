import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
/* slick-carousel styles */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../CarouselComponent/Carousel1.jpg";
import img2 from "../CarouselComponent/Carousel2.jpg";
import img3 from "../CarouselComponent/Carousel3.jpg";
const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" py-16 ">
      <Box sx={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        <Slider {...settings}>
          <div>
            <img src={img1} alt="Slide 1" style={{ width: "100%", height: "auto" }} />
          </div>
          <div>
            <img src={img2} alt="Slide 2" style={{ width: "100%", height: "auto" }} />
          </div>
          <div>
            <img src={img3} alt="Slide 3" style={{ width: "100%", height: "auto" }} />
          </div>
        </Slider>
      </Box>
    </div>
  );
};

export default CarouselComponent;
