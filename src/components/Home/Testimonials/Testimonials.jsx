import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTestimonials } from "../../../utils/ApiRequest";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonials.css";
import Spinner from "/img/spinner.svg";

const swiperSettings = {
  modules: [Pagination],
  spaceBetween: 20,
  slidesPerView: 3,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
};

const Testimonials = () => {
  const [loading, setLoading] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setLoading(true);
    getTestimonials().then((data) => {
      setTestimonials(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="testimonials">
      <Container>
        <div className="section__top text-center">
          <h3>Our Clients Says</h3>
          <h2>Testimonials</h2>
        </div>
        <div className="testimonial__slider">
          {!loading && testimonials.length > 0 && (
            <Swiper {...swiperSettings}>
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial._id}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        {loading && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              width={50}
              style={{
                display: "block",
                marginBottom: 20,
              }}
              src={Spinner}
              alt="spinner"
            />
            <p>Loading Testimonials...</p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Testimonials;
