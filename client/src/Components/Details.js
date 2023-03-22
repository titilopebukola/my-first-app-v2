import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";

// const [imageSlider, setImageSlider] = useState([img]);
// const handleClick = (index) => {
//   console.log(index);
//   const slider = images[index];
//   setImageSlider(slider);
// };

const Details = ({ name, description, img, img1, img2, img3, price, handleClick, props }) => {
  const { addItem } = useCart();
  const [mainImg, setMainImg] = useState("");
  // using useEffect, have the mainImage statevariable be set to your img1 prop

  useEffect(() => {
    setMainImg(img);
  }, []);

  function changeImage(image) {
    setMainImg(image);
  }
  // write a onclick function, so when you click another image, it sets the mainImage statevraible, to be the image you clicked

  return (
    <div className="product-detail-container">
      <img className="product-image-main" src={mainImg} />
      <div className="product-image-grid">
        <img className="product-image" src={img} onClick={() => changeImage(img)} />
        <img className="product-image" src={img1} onClick={() => changeImage(img1)} />
        <img className="product-image" src={img2} onClick={() => changeImage(img2)} />
        <img className="product-image" src={img3} onClick={() => changeImage(img3)} />
      </div>

      <h3 className="name">{name}</h3>
      <p className="description">
        {description} <br></br>
      </p>
      <span className="price">{price}</span>
      <div className="feature-content">
        {/* <a href="/basket" className="banner-btn">
          Add to basket
        </a> */}
        <form action="http://localhost:8080/checkout" method="POST">
          <button className="btn-checkout" type="submit">
            Checkout
          </button>
        </form>
        <button className="btn-success" onClick={() => addItem}>
          Add to Basket
        </button>{" "}
      </div>
    </div>
  );
};
export default Details;
