import React from "react";
import { Container } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <header className="header d-flex flex-column justify-content-center">
      <Container>
        <div className="hero text-center text-white">
          <h1 className="hero__title">Welcome to Travel BD</h1>
          <p className="hero__subtitle">
            The use of traveling is to regulate imagination with reality, and
            instead of thinking of how things may be, see them as they are.
          </p>
          <a href="#packages" className="hero__btn btn__primary">
            Explore Packages
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
