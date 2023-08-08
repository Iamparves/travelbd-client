import {
  faCalendar,
  faFlag,
  faMapMarkerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./PackageCard.css";

const PackageCard = ({ tourPackage }) => {
  const {
    _id,
    name,
    image,
    price,
    location,
    duration,
    maxGroupSize,
    startDate,
    summary,
    stops,
    difficulty,
  } = tourPackage;

  return (
    <div className="package__card">
      <div className="package__header">
        <div className="package__img--box">
          <img src={image} alt={name} className="img-fluid package__img" />
        </div>
        <h3 className="package__name">{name}</h3>
      </div>
      <div className="package__details">
        <h4 className="package__subtitle">
          {difficulty} {duration}-day tour
        </h4>
        <p className="package__text">{summary}</p>
        <div className="package__info">
          <div className="package__data">
            <span className="icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            <span className="text">{location}</span>
          </div>
          <div className="package__data">
            <span className="icon">
              <FontAwesomeIcon icon={faCalendar} />
            </span>
            <span className="text">{startDate}</span>
          </div>
          <div className="package__data">
            <span className="icon">
              <FontAwesomeIcon icon={faFlag} />
            </span>
            <span className="text">{stops} stops</span>
          </div>
          <div className="package__data">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="text">{maxGroupSize} people</span>
          </div>
        </div>
      </div>
      <div className="package__footer">
        <p className="package__price">
          <span className="value">${price}</span>{" "}
          <span className="text">per person</span>
        </p>
        <Link className="package__btn btn__primary" to={`/checkout/${_id}`}>
          Book now
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
