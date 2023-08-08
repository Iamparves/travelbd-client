import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <Container>
        <div className="notFound__wrapper">
          <div className="notFound">
            <h2 className="notFound__title">404</h2>
            <h3 className="notFound__subtitle">Page not found</h3>
            <Link to="/" className="button btn__primary">
              Back to homepage
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default NotFound;
