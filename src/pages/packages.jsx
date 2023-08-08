import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import PackageCard from "../components/Home/PackageCard/PackageCard";
import Footer from "../components/Shared/Footer/Footer";
import HeaderNavbar from "../components/Shared/HeaderNavbar/HeaderNavbar";
import PageBanner from "../components/Shared/PageBanner/PageBanner";
import { getPackages } from "../utils/ApiRequest";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    getPackages().then((data) => setPackages(data));
  }, []);

  return (
    <>
      <HeaderNavbar />
      <section className="packagesPage">
        <PageBanner name="Packages" />
        <Container>
          <div className="package packagesPage__content">
            {packages?.map((tourPackage) => (
              <PackageCard tourPackage={tourPackage} key={tourPackage._id} />
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Packages;
