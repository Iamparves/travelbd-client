import React from 'react';
import './GalleryCard.css';

const GalleryCard = ({ image }) => {
    return (
        <div className="gallery__card">
            <img className="gallery__img" src={image} alt="Travel" />
        </div>
    );
};

export default GalleryCard;