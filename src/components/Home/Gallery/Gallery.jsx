import React from "react";
import { Container } from "react-bootstrap";
import GalleryCard from "../GalleryCard/GalleryCard";
import "./Gallery.css";

const images = [
  {
    id: 0,
    img: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 1,
    img: "https://images.pexels.com/photos/3183613/pexels-photo-3183613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/3061217/pexels-photo-3061217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/3889855/pexels-photo-3889855.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/4436363/pexels-photo-4436363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/3885493/pexels-photo-3885493.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <Container>
        <div className="section__top text-center">
          <h3>Tour Photos</h3>
          <h2>Gallery</h2>
        </div>
        <div className="gallery__wrapper">
          {images.map((image) => (
            <GalleryCard image={image.img} key={image.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
