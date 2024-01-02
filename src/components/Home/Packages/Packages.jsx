import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getFirstSixPackage } from "../../../utils/ApiRequest";
import PackageCard from "../PackageCard/PackageCard";
import Spinner from "/img/spinner.svg";

const Packages = () => {
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setLoading(true);
    getFirstSixPackage().then((data) => {
      setPackages(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="packages" id="packages">
      <Container>
        <div className="section__top text-center">
          <h3>Our Packages</h3>
          <h2>Destination</h2>
        </div>
        <div className="package">
          {!loading &&
            packages?.map((tourPackage) => (
              <PackageCard tourPackage={tourPackage} key={tourPackage._id} />
            ))}
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
            <p>Loading Packages...</p>
          </div>
        )}
        <div className="text-center">
          <Link className="mt-5 btn__primary package__btn" to="/packages">
            View All Packages
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Packages;
