import React, { useRef } from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };

  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram"></SubHeading>
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          voluptate molestias vero sequi debitis reiciendis ut asperiores.
          Excepturi eius libero quae. Soluta, consequuntur voluptates hic, et
          autem inventore obcaecati itaque optio quos veniam sequi.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery"></img>
              <BsInstagram className="gallery__image-icon"></BsInstagram>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          ></BsArrowLeftShort>
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          ></BsArrowRightShort>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
