// Testimonials.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import testimonials from "../../json-data/testimonialData/testimonialData";
import "./testimonial.css";
import { Typography } from "@mui/material";

const Testimonials = () => {
  return (
    <>
     <Typography variant="h3" textAlign="center" className="mt-3"> Client Review</Typography>
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={true}
      autoPlay={true}
      interval={4100}
    >
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <img src={testimonial.imgSrc} alt={testimonial.name} />
          <div className="myCarousel ">
            <Typography variant="h3" className="mt-3 mb-2" sx={{ color: 'text.primary' }}>{testimonial.name}</Typography>
            <Typography variant="h4">{testimonial.message}</Typography>
          </div>
        </div>
      ))}
    </Carousel>
    </>
  );
};

export default Testimonials;
