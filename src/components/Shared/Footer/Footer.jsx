import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer__inner">
          <Col md="4">
            <div className="footer__section">
              <h2>About Us</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                incidunt ipsum pariatur.
              </p>
            </div>
          </Col>
          <Col md="4">
            <div className="footer__section">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <Link to="#">FAQ</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="4">
            <div className="footer__section social">
              <h2>Follow Us</h2>
              <ul>
                <li>
                  <a
                    href="https://facebook.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer__copyright p-3">
        <p className="mb-0 text-center">
          &copy;{new Date().getFullYear()} All Rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
