import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { getBookingsByEmail } from "../../../utils/ApiRequest";
import MyBookingCard from "../MyBookingCard/MyBookingCard";
import "./MyBookings.css";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    getBookingsByEmail(user.email).then((data) => {
      setBookings(data);
    });
  }, [user]);

  return (
    <div className="myBookings">
      {!bookings.length && (
        <div className="noBooking">
          <h2>You didn't booked any package yet</h2>
          <Link to="/packages" className="btn__primary package__btn">
            Book now
          </Link>
        </div>
      )}
      <div className="myBookings__content">
        {bookings.map((booking) => (
          <MyBookingCard booking={booking} key={booking._id} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
