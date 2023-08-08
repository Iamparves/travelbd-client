import React from "react";
import { Container, Row } from "react-bootstrap";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";
import CustomerCare from "/img/icon/customercare.svg";
import Insurance from "/img/icon/insurance.svg";
import Meals from "/img/icon/mealsincluded.svg";
import MedicalCare from "/img/icon/medicalcare.svg";

const services = [
  {
    id: 0,
    title: "Insurance",
    description:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.",
    icon: Insurance,
  },
  {
    id: 1,
    title: "Medical Care",
    description:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.",
    icon: MedicalCare,
  },
  {
    id: 2,
    title: "Meals Included",
    description:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.",
    icon: Meals,
  },
  {
    id: 3,
    title: "Customer Care",
    description:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.",
    icon: CustomerCare,
  },
];

const Services = () => {
  return (
    <section className="services">
      <Container>
        <div className="section__top text-center">
          <h3>Our Services</h3>
          <h2>Benefits</h2>
        </div>
        <Row>
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
