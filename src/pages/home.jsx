import React from "react";
import Contact from "../components/Home/Contact/Contact";
import Gallery from "../components/Home/Gallery/Gallery";
import Header from "../components/Home/Header/Header";
import Packages from "../components/Home/Packages/Packages";
import Services from "../components/Home/Services/Services";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import Footer from "../components/Shared/Footer/Footer";
import HeaderNavbar from "../components/Shared/HeaderNavbar/HeaderNavbar";

const Home = () => {
  return (
    <>
      <HeaderNavbar />
      <main>
        <Header />
        <Services />
        <Packages />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
