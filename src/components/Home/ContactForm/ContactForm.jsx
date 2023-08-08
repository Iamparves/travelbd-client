import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ContactForm.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="contact__form">
      <Row>
        <Col md="6">
          <div className="contact__group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" />
          </div>
          <div className="contact__group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="contact__group">
            <label htmlFor="phone">Phone</label>
            <input type="phone" id="phone" />
          </div>
        </Col>
        <Col md="6">
          <div className="contact__group">
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
          </div>
        </Col>
      </Row>
      <div className="contact__btn text-center">
        <button className="package__btn btn__primary" type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
