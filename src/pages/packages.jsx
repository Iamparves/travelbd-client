import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import PackageCard from "../components/Home/PackageCard/PackageCard";
import Footer from "../components/Shared/Footer/Footer";
import HeaderNavbar from "../components/Shared/HeaderNavbar/HeaderNavbar";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import { getPackages } from "../utils/ApiRequest";
import Spinner from "/img/spinner.svg";

const Packages = () => {
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setLoading(true);
    getPackages().then((data) => {
      setPackages(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <HeaderNavbar />
      <section className="packagesPage">
        <PageBanner name="Packages" />
        <Container>
          <div className="package packagesPage__content">
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
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Packages;
