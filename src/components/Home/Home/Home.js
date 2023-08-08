import React from "react";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Header from "../Header/Header";
import Packages from "../Packages/Packages";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <Header />
      <Services />
      <Packages />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Home;
