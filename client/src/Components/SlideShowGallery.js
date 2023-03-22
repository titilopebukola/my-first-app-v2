import React, { useState } from "react";

function SlideshowGallery({ img, img1, img2, img3 }) {
  const [activeImg, setActiveImg] = useState(img);

  const handleImgClick = (img) => {
    setActiveImg(img);
  };

  return (
    <div className="container">
      <img className="product-image" src={activeImg} onClick={() => handleImgClick(img)}></img>
      <div className="product-image-grid">
        <img
          className={`product-image ${activeImg === img1 && "active"}`}
          src={img1}
          onClick={() => handleImgClick(img1)}
        ></img>
        <img
          className={`product-image ${activeImg === img2 && "active"}`}
          src={img2}
          onClick={() => handleImgClick(img2)}
        ></img>
        <img
          className={`product-image ${activeImg === img3 && "active"}`}
          src={img3}
          onClick={() => handleImgClick(img3)}
        ></img>
      </div>
    </div>
  );
}

export default SlideshowGallery;
