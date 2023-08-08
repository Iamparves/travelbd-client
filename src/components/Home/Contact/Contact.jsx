import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Container, Row } from "react-bootstrap";
import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";
import "./Contact.css";

const contactInfos = [
  {
    id: 0,
    title: "Location",
    description: "Mirpur, Dhaka",
    icon: faMapMarkerAlt,
  },
  {
    id: 1,
    title: "Phone",
    description: "+8801234567890",
    icon: faPhoneAlt,
  },
  {
    id: 2,
    title: "Email",
    description: "hello@travelbd.com",
    icon: faEnvelope,
  },
];

const Contact = () => {
  return (
    <section className="contact">
      <Container>
        <div className="section__top text-center">
          <h3>Get in Touch</h3>
          <h2>Contacts</h2>
        </div>
        <Row>
          {contactInfos.map((info) => (
            <ContactInfo info={info} key={info.id} />
          ))}
        </Row>
        <div className="contact__form--box">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
