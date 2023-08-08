import React, { useEffect, useState } from "react";
import { getBookings } from "../../../utils/ApiRequest";
import Loader from "../../Shared/Loader/Loader";
import BookingsListCard from "../BookingsListCard/BookingsListCard";
import "./BookingsList.css";

const BookingsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    loadAllBookings();
  }, []);

  const loadAllBookings = () => {
    getBookings().then((data) => {
      setBookings(data);
      setIsLoading(false);
    });
  };

  return (
    <div className="bookingsList">
      <div className="bookingsList__content scrollbar">
        <div className="bookingsList__inner">
          <table className="dashboard__table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Package</th>
                <th>Email</th>
                <th>Payment Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, ind) => (
                <BookingsListCard
                  booking={booking}
                  ind={ind}
                  loadAllBookings={loadAllBookings}
                  key={booking._id}
                />
              ))}
            </tbody>
          </table>
          {isLoading && <Loader />}
        </div>
      </div>
    </div>
  );
};

export default BookingsList;
