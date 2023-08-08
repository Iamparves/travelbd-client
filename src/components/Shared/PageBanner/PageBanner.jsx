import React from "react";
import { Container } from "react-bootstrap";
import "./PageBanner.css";

const PageBanner = ({ name }) => {
  return (
    <div className="banner">
      <Container>
        <h1>{name}</h1>
      </Container>
    </div>
  );
};

export default PageBanner;
