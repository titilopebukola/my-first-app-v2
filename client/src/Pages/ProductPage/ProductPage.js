import xpression from "../../assets/xpression.jpg";
import xpression1 from "../../assets/xpression1.jpg";
import EZbraid from "../../assets/EZbraid.jpg";
import EZbraid1 from "../../assets/EZbraid1.jpg";
// import "./Products.css";
// import React from "react";
// import Products from "../Products/Products";
// import Item from "../../Components/Item/Item";
import Details from "../../Components/Details";

import { Helmet } from "react-helmet-async";

// export default function Products({ handleHairType, hairType, products, deleteProduct }) {
export default function ProductPage() {
  return (
    <>
      <Helmet>
        <title>Ellabuk product Page</title>
        <meta
          name="description"
          content="This is the main About page for lady dresses, summer wear, winter wears, kids collection."
        />
        <link rel="canonical" href="/details" />
      </Helmet>
      <main>
        <section className="product-detail">
          {/* <Item
            name="Xpression braiding hair extensions | Xpression hair colour."
            description="Straight, Lightweight, and odorless"
            price={"£4.50"}
            img={xpression}
          /> */}
          <Details
            name="X-pression hair extension"
            description="

            Hair Material: Xpression Braiding Hair Made with 100% High-Quality High-Temperature Synthetic Fiber.

            Package Contents: 4 Packs Xpression braiding hair.
            
            Hair Features: Xpression braiding hair has Excellent Soft Touch, Odorless, straight, Light Weight, Tangle Free, Skin-Friendly, and Easy to Install. It will give you a natural and stylish look.
            Unique Features: 82 Inch length Xpression braiding hair straight texture will make you look elegant. Available in different colours.
            Maintenance Tips: For long-term usage and to achieve great value for money while you are with Xpression braiding hair, always wear a wig cap before going to bed.
            Note: To make a full head, 4-5 packs should be enough"
            price={"£4.50"}
            img={xpression}
            img1={xpression1}
            img2={EZbraid}
            img3={EZbraid1}
          />

          {/* <div className="container">
            <img className="product-image" src={waterwaves}></img>
            <h3>Zoesoul Waterwave hair extensions</h3>
            <span className="price">£7.50.00</span>
            <p>Color: #1 </p>
            <br></br>
            <p>length: 18inches </p>
            <br></br>
            <p>Description: Light-weight, fluffy, odourless and easy to fix </p>
            <br></br>

            <div className="feature-content">
              <a href="/basket" className="banner-btn">
                Checkout
              </a>
            </div>
          </div> */}
        </section>
      </main>
    </>
  );
}
