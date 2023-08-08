import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CheckoutForm from "../components/Checkout/CheckoutForm/CheckoutForm";
import Footer from "../components/Shared/Footer/Footer";
import HeaderNavbar from "../components/Shared/HeaderNavbar/HeaderNavbar";
import { getPackageById } from "../utils/ApiRequest";

const Checkout = () => {
  const { id } = useParams();
  const [tourPackage, setTourPackage] = useState({});
  const stripePromise = loadStripe(
    "pk_test_51IeGhAAGbr5Hd35pxBRLnJbyBUalhCooRWQkGVcuDi6FlMogEFdLbl1HvH1pqYtqbgoMlYqEQsXLHL0LxinPiYvb00fCbKK9Ht"
  );

  useEffect(() => {
    getPackageById(id).then((data) => setTourPackage(data));
  }, [id]);

  return (
    <>
      <HeaderNavbar />
      <section className="checkout">
        <Container>
          <div className="checkout__package">
            <h2>Checkout</h2>
            <table className="checkout__table">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{tourPackage.name}</td>
                  <td>${tourPackage.price}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="checkout__content">
            <Elements stripe={stripePromise}>
              <CheckoutForm tourPackage={tourPackage} />
            </Elements>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
