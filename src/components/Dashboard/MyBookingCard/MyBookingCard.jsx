import React from "react";

const MyBookingCard = ({ booking: { status, tourPackage } }) => {
  const { name, image, summary } = tourPackage;

  return (
    <div className="myBooking__card">
      <div className="myBooking__header">
        <img src={image} alt={name} className="myBooking__img" />
        <h6 className={`myBooking__status ${status}`}>{status}</h6>
      </div>
      <div className="myBooking__details">
        <h2 className="myBooking__title">{name}</h2>
        <p className="myBooking__summary">{summary}</p>
      </div>
    </div>
  );
};

export default MyBookingCard;
