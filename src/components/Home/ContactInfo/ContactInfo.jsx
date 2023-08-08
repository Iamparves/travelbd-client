import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";
import "./ContactInfo.css";

const ContactInfo = ({ info }) => {
  const { icon, title, description } = info;

  return (
    <Col md="4">
      <div className="contact__info text-center">
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Col>
  );
};

export default ContactInfo;
