import React from 'react';
import { Col } from 'react-bootstrap';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { title, description, icon } = service;

    return (
        <Col lg={6}>
            <div className="service__card">
                <div className="service__icon--box">
                    <div className="service__icon--circle">
                        <img src={icon} alt={title} className="service__icon" />
                    </div>
                </div>
                <div className="service__content">
                    <h2 className="service__title">{title}</h2>
                    <p className="service__text">{description}</p>
                </div>
            </div>
        </Col>
    );
};

export default ServiceCard;