import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useMemo } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { addBooking } from "../../../utils/ApiRequest";
import "./CheckoutForm.css";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#101d2c",
          letterSpacing: "0.025em",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const CheckoutForm = ({ tourPackage }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const { user } = useUser();
  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
      billing_details: {
        name: e.target.name.value,
        email: e.target.email.value,
        address: {
          city: e.target.address.value,
        },
      },
    });

    const { card, billing_details } = payload.paymentMethod;
    const bookingInfo = {
      tourPackage: tourPackage,
      email: user.email,
      paymentMethod: "Credit Card",
      card,
      billing_details,
      status: "pending",
    };

    addBooking(bookingInfo).then((data) => {
      if (data) {
        toast.success("Checkout Successful!");
        navigate("/dashboard/myBookings");
      }
    });
  };

  return (
    <form onSubmit={handlePayment} className="checkout__form">
      <div className="package__group">
        <label htmlFor="name">Your Name</label>
        <input
          name="name"
          id="name"
          type="text"
          defaultValue={user.name}
          placeholder="Your name"
          required
        />
      </div>
      <div className="package__group">
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          id="email"
          type="email"
          defaultValue={user.email}
          required
        />
      </div>
      <div className="package__group">
        <label htmlFor="address">Address (City)</label>
        <input name="address" id="address" type="text" required />
      </div>
      <div className="creditCard">
        <label>
          <span>Card number</span> <CardNumberElement options={options} />
        </label>
        <label>
          <span>Expiration date</span> <CardExpiryElement options={options} />
        </label>
        <label>
          <span>CVC</span> <CardCvcElement options={options} />
        </label>
      </div>
      <div className="text-center">
        <button
          className="btn__primary package__btn"
          type="submit"
          disabled={!stripe}
        >
          {" "}
          Checkout{" "}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
