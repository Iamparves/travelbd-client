import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  const { name, image, description } = testimonial;

  return (
    <div className="testimonial__card">
      <div className="testimonial__avatar--box">
        <img className="testimonial__avatar img-fluid" src={image} alt={name} />
      </div>
      <div className="testimonial__content">
        <div className="testimonial__quote">
          <p>{description}</p>
          <span className="quote__icon">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </span>
        </div>
        <h5 className="testimonial__name">{name}</h5>
      </div>
    </div>
  );
};

export default TestimonialCard;
